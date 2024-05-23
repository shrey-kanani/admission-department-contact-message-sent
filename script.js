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

  // prettier-ignore
  let data = [
    {
      "id": "0",
      "text": "DIET",
      "children": [
        {
          "id": "B.Tech. Computer Science & Engineering",
          "text": "B.Tech. Computer Science & Engineering"
        },
        {
          "id": "B.Tech. Civil Engineering",
          "text": "B.Tech. Civil Engineering"
        },
        {
          "id": "B.Tech. Mechanical Engineering",
          "text": "B.Tech. Mechanical Engineering"
        },
        {
          "id": "M.Tech. Computer Engineering",
          "text": "M.Tech. Computer Engineering"
        },
        {
          "id": "M.Tech. Civil Engineering",
          "text": "M.Tech. Civil Engineering"
        },
        {
          "id": "M.Tech. Mechanical Engineering",
          "text": "M.Tech. Mechanical Engineering"
        }
      ]
    },
    {
      "id": "1",
      "text": "DIETDS",
      "children": [
        {
          "id": "Diploma Computer",
          "text": "Diploma Computer"
        },
        {
          "id": "Diploma Civil",
          "text": "Diploma Civil"
        },
        {
          "id": "Diploma Mechanical",
          "text": "Diploma Mechanical"
        },
        {
          "id": "Diploma Electrical",
          "text": "Diploma Electrical"
        }
      ]
    }
  ];

  let data2 = [
    {
      id: "2",
      text: "DICA",
      children: [
        {
          id: "BCA",
          text: "BCA",
        },
        {
          id: "B.Sc. (IT)",
          text: "B.Sc. (IT)",
        },
        {
          id: "B.Sc. (Honors) Computer Science",
          text: "B.Sc. (Honors) Computer Science",
        },
        {
          id: "MCA",
          text: "MCA",
        },
      ],
    },
    {
      id: "3",
      text: "DIM",
      children: [
        {
          id: "BBA",
          text: "BBA",
        },
        {
          id: "BBA (Honors) Digital Marketing",
          text: "BBA (Honors) Digital Marketing",
        },
        {
          id: "B. Com.",
          text: "B. Com.",
        },
        {
          id: "B. Com. (Honors)",
          text: "B. Com. (Honors)",
        },
        {
          id: "MBA",
          text: "MBA",
        },
      ],
    },
  ];

  let data3 = [
    {
      id: "4",
      text: "DIS",
      children: [
        {
          id: "B. Sc. Microbiology",
          text: "B. Sc. Microbiology",
        },
      ],
    },
    {
      id: "5",
      text: "DIR",
      children: [
        {
          id: "PhD",
          text: "PhD",
        },
      ],
    },
    {
      id: "6",
      text: "DIH",
      children: [
        {
          id: "M. A. Yoga",
          text: "M. A. Yoga",
        },
      ],
    },
    {
      id: "Admission Cell",
      text: "Admission Cell",
    },
    {
      id: "7",
      text: "Other",
      children: [
        {
          id: "Admission Transfer",
          text: "Admission Transfer",
        },
        {
          id: "Hostel",
          text: "Hostel",
        },
        {
          id: "Transport",
          text: "Transport",
        },
        {
          id: "Rajkot Office Address",
          text: "Rajkot Office Address",
        },
        {
          id: "University Campus Address",
          text: "University Campus Address",
        },
      ],
    },
  ];

  let data4 = [
    {
      id: "8",
      text: "Certificate",
      children: [
        {
          id: "Attempt Certificate",
          text: "Attempt Certificate",
        },
        {
          id: "Migration Certificate",
          text: "Migration Certificate",
        },
        {
          id: "No Objection Certificate",
          text: "No Objection Certificate",
        },
        {
          id: "Letter of Recommendation Certificate",
          text: "Letter of Recommendation Certificate",
        },
        {
          id: "Transcript Certificate",
          text: "Transcript Certificate",
        },
        {
          id: "Percentage Conversion Certificate",
          text: "Percentage Conversion Certificate",
        },
        {
          id: "English Proficiency Certificate",
          text: "English Proficiency Certificate",
        },
        {
          id: "Letter of University Recognition Certificate",
          text: "Letter of University Recognition Certificate",
        },
        {
          id: "Duplicate Degree Certificate",
          text: "Duplicate Degree Certificate",
        },
        {
          id: "Duplicate Gradesheet Certificate",
          text: "Duplicate Gradesheet Certificate",
        },
        {
          id: "No Backlog Certificate",
          text: "No Backlog Certificate",
        },
      ],
    },
  ];

  let tree = new Tree(".container1", {
    data: data,
    closeDepth: 3,
    loaded: function () {
      this.values = ["0-0-0", "0-1-1"];
      // console.log(this.selectedNodes);
      // console.log(this.values);
      this.disables = ["0-0-0", "0-0-1", "0-0-2"];
    },
    onChange: function () {
      // console.log(this.values);
    },
  });
  let tree2 = new Tree(".container2", {
    data: data2,
    closeDepth: 3,
    loaded: function () {
      this.values = ["0-0-0", "0-1-1"];
      // console.log(this.selectedNodes);
      // console.log(this.values);
      this.disables = ["0-0-0", "0-0-1", "0-0-2"];
    },
    onChange: function () {
      // console.log(this.values);
    },
  });
  let tree3 = new Tree(".container3", {
    data: data3,
    closeDepth: 3,
    loaded: function () {
      this.values = ["0-0-0", "0-1-1"];
      // console.log(this.selectedNodes);
      // console.log(this.values);
      this.disables = ["0-0-0", "0-0-1", "0-0-2"];
    },
    onChange: function () {
      // console.log(this.values);
    },
  });

  if (getCookie("user") == "Hardik Lakhani") {
    let tree4 = new Tree(".container4", {
      data: data4,
      closeDepth: 3,
      loaded: function () {
        this.values = ["0-0-0", "0-1-1"];
        // console.log(this.selectedNodes);
        // console.log(this.values);
        this.disables = ["0-0-0", "0-0-1", "0-0-2"];
      },
      onChange: function () {
        // console.log(this.values);
      },
    });
  }

  $("#apiForm").submit(function (event) {
    event.preventDefault();
    var apiKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZU51bWJlciI6Iis5MTcwOTY5Nzk5MDAiLCJwaG9uZU51bWJlcklkIjoiMjMxMTgxOTYzNDE0MjQ2IiwiaWF0IjoxNzA4MDYwMDg3fQ.vkXWdDOEW1mCRPdiaNdNshOFkIn0tPM-E_SmuDnMtiw";
    var number = $("#number").val();

    // Array to store selected categories
    var selectedCategories = [];
    let certificates = [
      "Attempt Certificate",
      "Migration Certificate",
      "No Objection Certificate",
      "Letter of Recommendation Certificate",
      "Transcript Certificate",
      "Percentage Conversion Certificate",
      "English Proficiency Certificate",
      "Letter of University Recognition Certificate",
      "Duplicate Degree Certificate",
      "Duplicate Gradesheet Certificate",
      "No Backlog Certificate",
    ];

    tree.selectedNodes.forEach((el) => {
      if (isNaN(el.id)) selectedCategories.push(el);
    });
    tree2.selectedNodes.forEach((el) => {
      if (isNaN(el.id)) selectedCategories.push(el);
    });
    tree3.selectedNodes.forEach((el) => {
      if (isNaN(el.id)) selectedCategories.push(el);
    });
    tree4.selectedNodes.forEach((el) => {
      if (isNaN(el.id)) selectedCategories.push(el);
    });

    console.log(selectedCategories);

    $(selectedCategories).each(function (i, category) {
      category = category.text;
      if (category === "Rajkot Office Address") {
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

            setTimeout(() => {
              location.reload();
            }, 2000);
          },
          error: function (xhr, status, error) {
            $("#result").html(
              `<div class="alert alert-danger"><strong>Failed!</strong> Some error occured</div>`
            );
          },
        });
      } else if (category === "University Campus Address") {
        $.ajax({
          url: "https://wb-api.chatomate.in/whatsapp-cloud/messages",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: apiKey,
          },
          data: JSON.stringify({
            to: "91" + number,
            type: "template",
            source: "external",
            template: {
              name: "campus_address",
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

            setTimeout(() => {
              location.reload();
            }, 2000);
          },
          error: function (xhr, status, error) {
            $("#result").html(
              `<div class="alert alert-danger"><strong>Failed!</strong> Some error occured</div>`
            );
            // Handle error here
          },
        });
      } else if (certificates.includes(category)) {
        $.ajax({
          url: "https://wb-api.chatomate.in/whatsapp-cloud/messages",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: apiKey,
          },
          data: JSON.stringify({
            to: "91" + number,
            type: "template",
            source: "external",
            template: {
              name: "certificate_collection",
              language: {
                code: "en",
              },
              components: [
                {
                  type: "body",
                  parameters: [
                    {
                      type: "text",
                      text: category,
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

            setTimeout(() => {
              location.reload();
            }, 2000);
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
              url: "https://wb-api.chatomate.in/whatsapp-cloud/messages",
              method: "POST",
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

                setTimeout(() => {
                  location.reload();
                }, 2000);
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

                setTimeout(() => {
                  location.reload();
                }, 2000);
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
