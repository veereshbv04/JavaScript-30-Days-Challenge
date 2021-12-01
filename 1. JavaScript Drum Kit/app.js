console.log("Hello World");

function playSound(e){
 const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
 const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

 if(!audio) return;

 key.classList.add("playing");

 console.log(key);
 audio.currentTime = 0;
 audio.play();
 
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove("playing");
    console.log("hgg")
}

const keys = Array.from(document.querySelectorAll(".key"));

keys.forEach(key => key.addEventListener("transitioned", removeTransition));


window.addEventListener("keydown", playSound);