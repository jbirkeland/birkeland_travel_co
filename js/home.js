var winter = document.getElementById ("winter");

var spring = document.getElementById ("spring");

var summer = document.getElementById ("summer");

var fall = document.getElementById ("fall");

var seasonalChoice = window.prompt("What season are you thinking of traveling? Look for the highlighted recommendation!!");

function showChoice(seasonalChoice) {
    if (seasonalChoice === "winter"){
        winter.classList.add("winter");
    } else if (seasonalChoice === "spring"){
        spring.classList.add("spring");
    } else if (seasonalChoice === "summer"){
        summer.classList.add("summer");
    } else if (seasonalChoice === "fall"){
        fall.classList.add("fall");
    }
}

showChoice(seasonalChoice);