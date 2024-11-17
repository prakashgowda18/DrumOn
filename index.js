var buttonsLength = document.querySelectorAll(".drum").length;
alert("Welcome to the Drum Kit! In order to play your favourite music, use the keyboard or click on the instruments.");

for (var i = 0; i < buttonsLength; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonText = this.innerHTML;
        makeSound(buttonText);
        buttonAnimation(buttonText);
    });
}

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey + ".drum");
    if (activeButton !== null) {
        activeButton.classList.add("pressed");
        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 200);
    }
}
