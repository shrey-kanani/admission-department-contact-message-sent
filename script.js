$(document).ready(function () {
  // Retrieve existing records from localStorage
  var sentMessages = JSON.parse(localStorage.getItem("sentMessages")) || [];

  // Get today's date
  var today = new Date().toISOString().slice(0, 10);

  // Filter sent messages for today
  var todaysMessages = sentMessages.filter(function (message) {
    return message.timestamp.slice(0, 10) === today;
  });

  // Display count of today's messages
  $("#todaysMessageCount").text(
    "Today's messages sent: " + todaysMessages.length
  );

  $("#apiForm").submit(function (event) {
    event.preventDefault();
    var apiKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZU51bWJlciI6Iis5MTcwOTY5Nzk5MDAiLCJwaG9uZU51bWJlcklkIjoiMjMxMTgxOTYzNDE0MjQ2IiwiaWF0IjoxNzA4MDYwMDg3fQ.vkXWdDOEW1mCRPdiaNdNshOFkIn0tPM-E_SmuDnMtiw";
    var number = $("#number").val();

    // Array to store selected categories
    var selectedCategories = [];

    // Iterate through each checkbox
    $('input[type="checkbox"]:checked').each(function () {
      selectedCategories.push($(this).val()); // Add the value of checked checkbox to the array
    });

    $(selectedCategories).each(function (i, category) {
      console.log(category);

      if (category === "Counceling Center Address Rajkot") {
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
              name: "counseling_center_rajkot_address_3",
              language: {
                code: "en",
              },
              components: [],
            },
          }),
          success: function (response) {
            if (!getCookie("APICalled")) {
              setCookie("APICalled", 1, 30);
            } else {
              updateCookieData();
            }
            saveSentMessageRecord(
              number,
              "Counceling Center Address Rajkot",
              new Date().toISOString()
            );
            var messageCount = getCookie("APICalled");
            $("#messageCount").text("Total messages sent: " + messageCount);
            $("#result").html(
              `<div class="alert alert-success"><strong>Success!</strong> Message Sent Successfully.</div>`
            );
            document.getElementById("apiForm").reset();
            setFocusToFirstField();
          },
          error: function (xhr, status, error) {
            $("#result").html(
              `<div class="alert alert-danger"><strong>Failed!</strong> Some error occured</div>`
            );

            // Handle error here
          },
        });
      } else {
        // Fetch JSON data
        $.getJSON("data.json", function (data) {
          var items = data[category];

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
                  name: "admission_officer_contact_details_single_send",
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
                if (!getCookie("APICalled")) {
                  setCookie("APICalled", 1, 30);
                } else {
                  updateCookieData();
                }
                saveSentMessageRecord(number, course, new Date().toISOString());
                var messageCount = getCookie("APICalled");
                $("#messageCount").text("Total messages sent: " + messageCount);
                $("#result").html(
                  `<div class="alert alert-success"><strong>Success!</strong> Message Sent Successfully.</div>`
                );
                document.getElementById("apiForm").reset();
                setFocusToFirstField();
              },
              error: function (xhr, status, error) {
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
                  name: "admission_officer_contact_details_send_multiple_2",
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
                if (!getCookie("APICalled")) {
                  setCookie("APICalled", 1, 30);
                } else {
                  updateCookieData();
                }
                saveSentMessageRecord(number, course, new Date().toISOString());
                var messageCount = getCookie("APICalled");
                $("#messageCount").text("Total messages sent: " + messageCount);
                $("#result").html(
                  `<div class="alert alert-success"><strong>Success!</strong> Message Sent Successfully.</div>`
                );
                document.getElementById("apiForm").reset();
                setFocusToFirstField();
              },
              error: function (xhr, status, error) {
                $("#result").html(
                  `<div class="alert alert-danger"><strong>Failed!</strong> Some error occured</div>`
                );
              },
            });
          } else {
            $("#result").html("<p>No items found for selected category.</p>");
          }
        }).fail(function () {
          $("#result").html("<p>Error: Failed to load JSON data.</p>");
        });
      }
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
    if (c.split("=")[0].trim() == name) {
      return c.split("=")[1];
    }
  }
  return null;
}

var delete_cookie = function (name) {
  document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};

// Function to set focus to the first field
function setFocusToFirstField() {
  var myForm = document.getElementById("apiForm");
  var firstField = myForm.querySelector("input, select, textarea");
  if (firstField) {
    firstField.focus();
    setTimeout(() => {
      $("#result").html(``);
    }, 2500);
  }
}

function saveSentMessageRecord(number, category, timestamp) {
  // Retrieve existing records from localStorage
  var sentMessages = JSON.parse(localStorage.getItem("sentMessages")) || [];

  // Add new record
  sentMessages.push({
    number: number,
    category: category,
    timestamp: timestamp,
  });

  // Save updated records to localStorage
  localStorage.setItem("sentMessages", JSON.stringify(sentMessages));

  // Get today's date
  var today = new Date().toISOString().slice(0, 10);

  // Filter sent messages for today
  var todaysMessages = sentMessages.filter(function (message) {
    return message.timestamp.slice(0, 10) === today;
  });

  // Display count of today's messages
  $("#todaysMessageCount").text(
    "Today's messages sent: " + todaysMessages.length
  );
}
