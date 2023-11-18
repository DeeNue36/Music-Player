let songProgress = document.getElementById("progress-bar");
let song = document.getElementById("song");
let controlIcon =  document.getElementById("controlIcon");

song.onloadedmetadata = function () {
    songProgress.max = song.duration;
    songProgress.value = song.currentTime;
}

function playPause(){
    if(controlIcon.classList.contains("fa-pause")){
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        controlIcon.classList.add("fa-pause");
        controlIcon.classList.remove("fa-play");
    }
}

if(song.play()){
    setInterval(()=>{
        songProgress.value = song.currentTime;
    }, 500)
}

songProgress.onchange = function(){
    song.play();
    song.currentTime = songProgress.value;
    controlIcon.classList.add("fa-pause");
    controlIcon.classList.remove("fa-play");
}
