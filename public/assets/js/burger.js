$(function () {

    $(".burgerAvailable").on("click", function (event) {
        event.preventDefault();
        let id = $(this).data("id");

        let devouredState = {
            devoured: 1,
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function () {
            console.log("Changed to devoured!")
            location.reload();
        })
    });

    $(".addBurgerButton").on("click", function (event) {
        event.preventDefault();
        let newBurger = {
            burger_name: $("#name").val(),
            devoured: 0
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: JSON.stringify(newBurger),
            dataType: "json",
            contentType: "application/json"
        }).then(function () {
            console.log("added burger");
            // location.reload();
        })
    })
});