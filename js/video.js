var video =  document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// Play
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

// Pause 

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slower 

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Old video speed is " + video.playbackRate);
	video.playbackRate *=.95;
	console.log("New video speed is " + video.playbackRate);
});


// Faster

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate/=0.95;
	console.log("New video speed is " + video.playbackRate);
});

// Skip Ahead

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Current location is " + video.currentTime);
	if (video.currentTime < video.duration - 15){
		video.currentTime += 15
	}
});


// Mute

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video" + video.muted);
	if (video.muted === false) {
		video.muted = true;
	}
	else {
		video.muted = false;
	}
	});

// Volume Slider 

document.querySelector("#slider").addEventListener("mousemove", function(){
	console.log("Before:" + player.volume);
	play.volume = val / 100;
	console.log("After:" + player.volume);
});

// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//   output.innerHTML = this.value;
// }

// old school
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Change to the old version");
	video.classList.add("oldSchool");
});

// original
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Change to the original version");
	video.classList.remove("oldSchool");
});