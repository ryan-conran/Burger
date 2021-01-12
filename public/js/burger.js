$(function () {
    $("#add-burger").on("submit", function (event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burger_name").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
      }).then(function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      });
    });
  
    $(".devour").on("click", function (event) {
      let id = $(this).data("id");
      event.preventDefault();
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
      }).then(function () {
        console.log("updated burger", id);
        location.reload();
      });
    });
  });