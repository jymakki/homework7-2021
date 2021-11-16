var video =  document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// Play Video
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

// Pause Video

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slower 

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Old video speed is " + video.playbackRate);
	video.playbackRate *=.95
	console.log("New video speed is " + video.playbackRate);
});


// Faster

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /= 0.95;
	console.log("New video speed is " + video.playbackRate);
});

// Skip Ahead

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Current location is " + video.currentTime);
	if (video.currentTime + 15 > video.duration){
		video.currentTime = 0;
		console.log("Loop to beginning");
		console.log("Updated location: ", video.currentTime);
		video.play();}
	else{
		video.currentTime +=15
		console.log("Updated location: ", video.currentTime);
		video.play();
	}

});


// Mute Video

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video" + video.muted);
	if (video.muted === false) {
		console.log("Mute Video");
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";}
	else {
		console.log("Unmute Video");
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";}
});

// Volume Slider 


var slider = document.querySelector("#slider")

slider.addEventListener("click", function(){
	console.log("Before:" + video.volume);
	video.volume = slider.value/100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	console.log("After:" + video.volume);

});


// Styled - old school
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Change to old school version");
	video.classList.add("oldSchool");
});

// Original
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Change to original version");
	video.classList.remove("oldSchool");
});