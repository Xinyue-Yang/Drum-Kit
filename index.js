var drums = document.querySelectorAll(".drum");

// add 7 sounds
var tom1 = new Audio('sounds/tom-1.mp3');
var tom2 = new Audio('sounds/tom-2.mp3');
var tom3 = new Audio('sounds/tom-3.mp3');
var tom4 = new Audio('sounds/tom-4.mp3');
var kick = new Audio('sounds/kick-bass.mp3');
var snare = new Audio('sounds/snare.mp3');
var crash = new Audio('sounds/crash.mp3');

//play the corresponding sound when a button/key is pressed
function playSound(key) {
    switch (key) {
        case "w":
            tom1.play();
            break;

        case "a":
            tom2.play();
            break;

        case "s":
            tom3.play();
            break;

        case "d":
            tom4.play();
            break;

        case "j":
            snare.play();
            break;

        case "k":
            crash.play();
            break;

        case "l":
            kick.play();
            break;

        default:
            console.log(key);
    }
}

//botton animation
function buttonAnimation(key) {
    var activeButton = document.querySelector("."+key);

    activeButton.classList.add("pressed");

    //unpress after 1 sec
    setTimeout(function (){
        activeButton.classList.remove("pressed");
    }, 100);
}

// play sound when a button is clicked
for (var i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// play sound when a key is pressed
document.addEventListener("keydown", function(event) {
    playSound(event.key);
    buttonAnimation(event.key);
});
