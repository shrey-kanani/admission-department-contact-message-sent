$(document).ready(function () {
  $("#apiForm").submit(function (event) {
    event.preventDefault();
    var apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZU51bWJlciI6Iis5MTcwOTY5Nzk5MDAiLCJwaG9uZU51bWJlcklkIjoiMjMxMTgxOTYzNDE0MjQ2IiwiaWF0IjoxNzA4MDYwMDg3fQ.vkXWdDOEW1mCRPdiaNdNshOFkIn0tPM-E_SmuDnMtiw";
    var number = $("#number").val();
    var category = $("#category").val();

    // Fetch JSON data
    $.getJSON("data.json", function (data) {
      var items = data[category];
      
      if (items) {
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
      } else {
        $("#result").html("<p>No items found for selected category.</p>");
      }
    }).fail(function () {
      $("#result").html("<p>Error: Failed to load JSON data.</p>");
    });
  });
});
