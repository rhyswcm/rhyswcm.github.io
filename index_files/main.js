var i = 0;
var colors = ["#2ecc71", "#f1c40f", "#3498db", "#9b59b6", "#1abc9c", "#e74c3c"];

function changeColor() {
    // infinite loop
    if (++i >= colors.length) i = 0;

    // change chameleon's color
    $(".chameleon")
        .animate({backgroundColor: colors[i]}, {
            duration: 3000,
            complete: changeColor,
        });
}

// let the party begin!
$(document).ready(changeColor);
