function makesound(events){
    var event=events
    switch(event){
        case "w":
            let beat= new Audio("./sounds/crash.mp3");
            beat.play();
            break;
        case "a":
            let kick= new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            let snare= new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            let tom1= new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            let tom2= new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            let tom3= new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            let tom4= new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
    }
}

function clicked(){
    var event= this.innerHTML;
    makesound(event);
    animation(event);
    
}

function animation(key){
    var keys=document.querySelector("."+key);
    keys.classList.toggle("pressed");
    setTimeout(()=>{keys.classList.toggle("pressed");},200);
}



var buttons=document.getElementsByClassName("drum");
for (var i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click",clicked);
}

document.addEventListener("keypress", (event)=> {
    makesound(event.key);
    animation(event.key);
})

