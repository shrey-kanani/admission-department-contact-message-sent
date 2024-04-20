$(document).ready(function () {
  $("#apiForm").submit(function (event) {
    event.preventDefault();
    var apiKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZU51bWJlciI6Iis5MTcwOTY5Nzk5MDAiLCJwaG9uZU51bWJlcklkIjoiMjMxMTgxOTYzNDE0MjQ2IiwiaWF0IjoxNzA4MDYwMDg3fQ.vkXWdDOEW1mCRPdiaNdNshOFkIn0tPM-E_SmuDnMtiw";
    var number = $("#number").val();
    // var category = $("#category").val();

    // Array to store selected categories
    var selectedCategories = [];

    // Iterate through each checkbox
    $('input[type="checkbox"]:checked').each(function () {
      selectedCategories.push($(this).val()); // Add the value of checked checkbox to the array
    });
    console.log(selectedCategories);

    console.log(apiKey);
    console.log(number);
    // console.log(category);

    $(selectedCategories).each(function (i, category) {
      console.log(category);
      // Fetch JSON data
      $.getJSON("data.json", function (data) {
        var items = data[category];
        console.log(items);
        // parsedData = JSON.parse(data);
        // console.log(items.length);
        if (items.length == 1) {
          let contactNumber = items[0].number;
          let contactPerson = items[0].name;
          let course = category;

          // Make API call using fetched data
          $.ajax({
            url: "https://wb-api.chatomate.in/whatsapp-cloud/messages", // Replace apiEndpoint with your actual API endpoint
            method: "POST", // Adjust the method as needed (POST, GET, etc.)
            headers: {
              "Content-Type": "application/json",
              Authorization: apiKey,
            },
            data: JSON.stringify({
              to: "91" + number,
              type: "template",
              source: "external",
              template: {
                name: "admission_officer_contact_details_send",
                language: {
                  code: "en",
                },
                components: [
                  {
                    type: "body",
                    parameters: [
                      {
                        type: "text",
                        text: course,
                      },
                      {
                        type: "text",
                        text: contactPerson,
                      },
                      {
                        type: "text",
                        text: contactNumber,
                      },
                    ],
                  },
                ],
              },
            }),
            success: function (response) {
              console.log("API call successful:", response);
              if (!getCookie("APICalled")) {
                console.log("APICalled Cookie");
                setCookie("APICalled", 1, 30);
              } else {
                updateCookieData();
              }
              $("#result").html(
                `<div class="alert alert-success"><strong>Success!</strong> Message Sent Successfully.</div>`
              );
              $("#apiForm")[0].reset();
              // Handle successful API response here
            },
            error: function (xhr, status, error) {
              console.error("Error making API call:", error);
              $("#result").html(
                `<div class="alert alert-danger"><strong>Failed!</strong> Some error occured</div>`
              );

              // Handle error here
            },
          });
        } else if (items.length == 2) {
          let contactNumber = items[0].number;
          let contactPerson = items[0].name;
          let contactNumber2 = items[1].number;
          let contactPerson2 = items[1].name;
          let course = category;

          // Make API call using fetched data
          $.ajax({
            url: "https://wb-api.chatomate.in/whatsapp-cloud/messages", // Replace apiEndpoint with your actual API endpoint
            method: "POST", // Adjust the method as needed (POST, GET, etc.)
            headers: {
              "Content-Type": "application/json",
              Authorization: apiKey,
            },
            data: JSON.stringify({
              to: "91" + number,
              type: "template",
              source: "external",
              template: {
                name: "admission_officer_contact_details_send_multiple",
                language: {
                  code: "en",
                },
                components: [
                  {
                    type: "body",
                    parameters: [
                      {
                        type: "text",
                        text: contactPerson,
                      },
                      {
                        type: "text",
                        text: contactNumber,
                      },
                      {
                        type: "text",
                        text: contactPerson2,
                      },
                      {
                        type: "text",
                        text: contactNumber2,
                      },
                    ],
                  },
                ],
              },
            }),
            success: function (response) {
              console.log("API call successful:", response);
              if (!getCookie("APICalled")) {
                console.log("APICalled Cookie");
                setCookie("APICalled", 1, 30);
              } else {
                updateCookieData();
              }
              $("#result").html(
                `<div class="alert alert-success"><strong>Success!</strong> Message Sent Successfully.</div>`
              );
              // $("#apiForm")[0].reset();
              // Handle successful API response here
            },
            error: function (xhr, status, error) {
              console.error("Error making API call:", error);
              $("#result").html(
                `<div class="alert alert-danger"><strong>Failed!</strong> Some error occured</div>`
              );

              // Handle error here
            },
          });
        } else {
          $("#result").html("<p>No items found for selected category.</p>");
        }
      }).fail(function () {
        $("#result").html("<p>Error: Failed to load JSON data.</p>");
      });
    });
  });
});

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function updateCookieData() {
  var existingData = getCookie("APICalled");
  if (existingData) {
    // Modify existing data
    var newData = Number(existingData) + 1;
    // Update the cookie with the new data
    setCookie("APICalled", newData, 300);
  }
}

function getCookie(name) {
  var ca = document.cookie.split(";");

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    if (c.split("=")[0] == " " + name) {
      return c.split("=")[1];
    }
  }
  return null;
}

var delete_cookie = function (name) {
  document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};
