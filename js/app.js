
document.addEventListener("DOMContentLoaded", function() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'ktnbFFBKOpE',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    //YT.PlayerState.ENDED
    //YT.PlayerState.PLAYING
    //YT.PlayerState.PAUSED
    //YT.PlayerState.BUFFERING
    //YT.PlayerState.CUED
    if(event.data == YT.PlayerState.ENDED){
        //event.target.playVideo();
        var button = document.getElementById('button');
        button.disabled=false;
        button.innerHTML = "クリックできるよ"
    }
}

console.log("app.js loaded")
