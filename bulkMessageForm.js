$(document).ready(function () {
  if (
    getCookie("user") == "Shrey Kanani" ||
    getCookie("user") == "Hitesh Dhamsaniya"
  ) {
    $("#apiForm").submit(function (event) {
      event.preventDefault();
      var apiKey =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZU51bWJlciI6Iis5MTcwOTY5Nzk5MDAiLCJwaG9uZU51bWJlcklkIjoiMjMxMTgxOTYzNDE0MjQ2IiwiaWF0IjoxNzA4MDYwMDg3fQ.vkXWdDOEW1mCRPdiaNdNshOFkIn0tPM-E_SmuDnMtiw";
      var customMessage = $("#customMessage").val();
      var numbersCSV = $("#numbersCSV").val();

      const numberArray = numbersCSV.split(",");

      numberArray.forEach((number) => {
        const trimmedNumber = number.trim();
        $.ajax({
          url: "https://wb-api.chatomate.in/whatsapp-cloud/messages", // Replace apiEndpoint with your actual API endpoint
          method: "POST", // Adjust the method as needed (POST, GET, etc.)
          headers: {
            "Content-Type": "application/json",
            Authorization: apiKey,
          },
          data: JSON.stringify({
            to: "91" + trimmedNumber,
            type: "template",
            source: "external",
            template: {
              name: "testing",
              language: {
                code: "en",
              },
              components: [
                {
                  type: "body",
                  parameters: [
                    {
                      type: "text",
                      text: customMessage,
                    },
                  ],
                },
              ],
            },
          }),
          success: function (response) {
            $("#result").html(
              `<div class="alert alert-success"><strong>Success!</strong> Message Sent Successfully.</div>`
            );
          },
          error: function (xhr, status, error) {
            $("#result").html(
              `<div class="alert alert-danger"><strong>Failed!</strong> Some error occured</div>`
            );
          },
        });
      });

      document.getElementById("apiForm").reset();
      setFocusToFirstField();

      setTimeout(() => {
        location.reload();
      }, 2000);
    });
  } else {
    window.location.href = "index.html";
  }
});

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
