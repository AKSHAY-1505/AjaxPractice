// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.querySelector("form");
//   form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const formData = new FormData(form);

//     console.log(`Form Data: ${formData}`);
//     console.log(`Form Action: ${form.action}`);

//     fetch(form.action, {
//       method: "POST",
//       body: formData,
//       headers: {
//         Accept: "text/javascript",
//       },
//       credentials: "same-origin",
//     })
//       .then((response) => response.text())
//       .then((data) => {
//         document.querySelector("#phones").innerHTML += data;
//       })
//       .catch((error) => console.error("Error:", error));
//   });
// });

$(document).ready(function () {
  $("form").on("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    let form = $(this);
    let formData = new FormData(form[0]); // Create FormData object

    $.ajax({
      url: form.attr("action"), // The URL to send the request to
      type: "POST", // The type of HTTP request to make
      data: formData, // The data to send in the request
      processData: false, // Prevent jQuery from converting the FormData into a string
      contentType: false, // Set content type to false as jQuery will tell the server its a query string request
      success: function (data) {
        console.log(data);
        $("#phones").append(data); // Append the new div to the div with ID 'phones'
      },
      error: function (textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
      },
    });
  });
});
