//html element with id "progress-bar", contains the progress bar of the song which shows how long a song has been playing
let songProgress = document.getElementById("progress-bar");

//html element with id "song", contains the audio file to be played/paused
let song = document.getElementById("song");

//html element with id "controlIcon", contains the icons which controls the playing/pausing of the song
let controlIcon =  document.getElementById("controlIcon");

//function which once all the metadata of the song has been loaded sets "songProgress" to the max equal to the duration of the song & sets the value equal to the current time of the song 
song.onloadedmetadata = function () {
    songProgress.max = song.duration;
    songProgress.value = song.currentTime;
}

//function to trigger the play or pause action
function playPause(){
    //conditional statement to trigger the play or pause action based on some conditions
    //1st condition: if the html class "controlIcon" contains the pause icon, the action carried out is pausing the song and the pause icon is then replaced by the play icon
    if(controlIcon.classList.contains("fa-pause")){
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    }
    //2nd condition: if the html class "controlIcon" contains the play icon, the action carried out is playing the song and the play icon is then replaced by the pause icon
    else{
        song.play();
        controlIcon.classList.add("fa-pause");
        controlIcon.classList.remove("fa-play");
    }
}

//function which sets the html element "songProgress" equal to the current time of the song at an interval of 500 milliseconds
if(song.play()){
    setInterval(()=>{
        songProgress.value = song.currentTime;
    }, 500)
}

//function for adjusting and playing the song based on the user selected time on the "songProgress" bar 
songProgress.onchange = function(){
    song.play();
    song.currentTime = songProgress.value;
    controlIcon.classList.add("fa-pause");
    controlIcon.classList.remove("fa-play");
}
