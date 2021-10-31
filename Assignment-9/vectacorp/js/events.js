$(function () {

    $("button").click( function(){
        alert("Button is clicked by DOM method!");
    });

    $("button").bind('click', function() {
        alert("Button is clicked by BIND method!");
    });

    $("button").on('click', function() {
        alert("Button is clicked by ON method!");
    });

    $("body").on('click','button', function() {
        alert("Button is clicked by ON method!");
    });

    $("div")
    .css("width", "400px")
    .css("height", "400px")
    .css("background", "yellow");

    $("body")
        .on("click mouseenter mouseleave", "div", function() {
        alert("The div was either clicked, entered, or left!");
    });

    $("span")
    .css("display", "block")
    .css("width", "200px")
    .css("height", "200px")
    .css("background", "#add8e6");

    $("body").on({
        click: function() {
            alert("The span was clicked!");
        },
        mouseenter: function() {
            alert("The span was entered!");
        },
        mouseleave: function() {
            alert("You left the span tag!");
        }
    }, "span");


    $("body")
    .on("click", "a", function(event) {
    event.preventDefault();

    $("a")
    .css("color", "red");
    alert(event.target.nodeName);
});

$(window)
.resize(function() {
$("div")
    .text($(window).width());
});

// 9

$("input")
.on({
    focus: function() {
        $(this).css("background", "#EDEDED");
    },
    blur: function() {
        $(this).css("background", "#FFFFFF");
    }
});


// 10

$("body").on({
submit: function(event) {
    event.preventDefault();
    if ($("#name").val().length > 0) {
        $("#name").css("border", "1px solid green");
    } else {
        $("#name").css("border", "1px solid red");
    }
    if ($("#email").val().length > 0) {
        $("#email").css("border", "1px solid green");
    } else {
        $("#email").css("border", "1px solid red");
    }
}
}, "form");


});