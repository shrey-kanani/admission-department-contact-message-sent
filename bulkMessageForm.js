$(document).ready(function () {
  if (
    getCookie("user") == "Shrey Kanani" ||
    getCookie("user") == "Hitesh Dhamsaniya"
  ) {
    $("#apiForm").submit(function (event) {
      event.preventDefault();

      // STEP - 1 VARIABLES
      var apiKey =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZU51bWJlciI6Iis5MTcwOTY5Nzk5MDAiLCJwaG9uZU51bWJlcklkIjoiMjMxMTgxOTYzNDE0MjQ2IiwiaWF0IjoxNzA4MDYwMDg3fQ.vkXWdDOEW1mCRPdiaNdNshOFkIn0tPM-E_SmuDnMtiw";
      var customMessage = $("#customMessage").val();
      if (customMessage == "") {
        customMessage = "Please find attached file.";
      }
      var numbersCSV = $("#numbersCSV").val();
      var fileInput = $("#customFile")[0].files;

      const numberArray = numbersCSV.split(",");

      // STEP - 2 SEND FOR FILE ATTACHED
      if (fileInput.length > 0) {
        var file = fileInput[0]; // Get the selected file
        var allowedTypes = [
          "image/jpeg",
          "image/png",
          "application/pdf",
          "application/xlsx",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "application/vnd.ms-excel",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        ];

        // Check if the file is an image or a PDF
        if (!allowedTypes.includes(file.type)) {
          alert("Only image files (JPG, PNG, XLSX, WORD or PDF are allowed!");
          return;
        }

        var fileInput = document.getElementById("customFile");

        var formData = new FormData();
        formData.append("file", fileInput.files[0]);

        console.log(file.type);

        $.ajax({
          url: "https://wb-api.chatomate.in/whatsapp-cloud/media",
          method: "POST",
          headers: {
            Authorization: apiKey, // Use your actual API key
          },
          data: formData,
          processData: false, // Important: Prevent jQuery from processing data
          contentType: false, // Important: Prevent jQuery from setting content type
          success: function (response) {
            console.log(String(response.id));
            console.log(customMessage);

            if (file.type == "application/pdf") {
              // STEP - 2.2 SEND MESSAGE WITH MEDIA ID
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
                      name: "admin_general_meesage_template_with_files",
                      language: {
                        code: "en",
                      },
                      components: [
                        {
                          type: "header",
                          parameters: [
                            {
                              type: "document",
                              document: {
                                id: String(response.id),
                                filename: "my_file",
                              },
                            },
                          ],
                        },
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
                    setTimeout(() => {
                      location.reload();
                    }, 5000);
                  },
                  error: function (xhr, status, error) {
                    $("#result").html(
                      `<div class="alert alert-danger"><strong>Failed!</strong> Some error occured</div>`
                    );
                  },
                });
              });
            } else {
              // STEP - 2.2 SEND MESSAGE WITH MEDIA ID
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
                      name: "admin_general_meesage_template_with_img",
                      language: {
                        code: "en",
                      },
                      components: [
                        {
                          type: "header",
                          parameters: [
                            {
                              type: "image",
                              image: {
                                id: String(response.id),
                              },
                            },
                          ],
                        },
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
                    setTimeout(() => {
                      location.reload();
                    }, 5000);
                  },
                  error: function (xhr, status, error) {
                    $("#result").html(
                      `<div class="alert alert-danger"><strong>Failed!</strong> Some error occured</div>`
                    );
                  },
                });
              });
            }
          },
          error: function (xhr, status, error) {
            console.error("Error: ", error);
          },
        });
      } else {
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
                name: "admin_general_meesage_template",
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
              setTimeout(() => {
                location.reload();
              }, 5000);
            },
            error: function (xhr, status, error) {
              $("#result").html(
                `<div class="alert alert-danger"><strong>Failed!</strong> Some error occured</div>`
              );
            },
          });
        });
      }

      document.getElementById("apiForm").reset();
      setFocusToFirstField();
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
