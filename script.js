var buttons = document.querySelectorAll(".drum");

var sounds = ["tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3", "snare.mp3", "crash.mp3", "kick-bass.mp3"];

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (function(index) {
        return function() {
            var audio = new Audio("sounds/" + sounds[index]);
            audio.play();
            buttonAnimation(this.innerHTML);
        };
    })(i));
}


document.addEventListener("keydown", function(event) {
    var key = event.key.toLowerCase(); // Convert to lowercase for consistency
    
    switch(key) {
        case "w":
            playSound("tom-1.mp3");
            break;
        case "a":
            playSound("tom-2.mp3");
            break;
        case "s":
            playSound("tom-3.mp3");
            break;
        case "d":
            playSound("tom-4.mp3");
            break;
        case "j":
            playSound("snare.mp3");
            break;
        case "k":
            playSound("crash.mp3");
            break;
        case "l":
            playSound("kick-bass.mp3");
            break;
        default:
            console.log("Invalid key pressed: " + key);
    }

    buttonAnimation(event.key);
});

function playSound(soundFile) {
    var audio = new Audio("sounds/" + soundFile);
    audio.play();
}


function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
}