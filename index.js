


// detecting button press

for(var l=0;l<document.querySelectorAll(".drum").length;l++){
	document.querySelectorAll(".drum")[l].addEventListener("click",function (){
	var butt=this.innerHTML;
	makesound(butt);
	buttonAnimation(butt);
			
});
}

// detecting keyboard press

document.addEventListener("keydown",function(){
	makesound(event.key);
	buttonAnimation(event.key);
});


function makesound(key) {
	// body...
	switch(key){
		case "w":
			var audio=new Audio("sounds/tom-1.mp3");
			audio.play();
		break;
		case "a":
			var audio=new Audio("sounds/tom-2.mp3");
			audio.play();
		break;
		case "s":
			var audio=new Audio("sounds/tom-3.mp3");
			audio.play();
		break;
		case "d":
			var audio=new Audio("sounds/tom-4.mp3");
			audio.play();
		break;
		case "j":
			var audio=new Audio("sounds/snare.mp3");
			audio.play();
		break;
		case "k":
			var audio=new Audio("sounds/crash.mp3");
			audio.play();
		break;
		case "l":
			var audio=new Audio("sounds/kick-bass.mp3");
			audio.play();
		break;

		default: console.log(butt);

	}
}


function buttonAnimation(currentkey) {
	var active=document.querySelector("."+currentkey);
	active.classList.add("pressed");
	setTimeout(function(){
		active.classList.remove("pressed");
	},100);
}