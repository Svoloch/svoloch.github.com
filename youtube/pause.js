// ==UserScript==
// @name         youtube pause
// @namespace    https://github.com/Svoloch
// @version      0.1
// @description  yuotube pause
// @author       Svoloch
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

function pause(){
	var videos = document.getElementsByTagName("video");
	for(var videoIndex = 0, videoLength = videos.length; videoIndex < videoLength; videoIndex++){
		videos[videoIndex].pause();
	}
}
var url = location.toString();
setInterval(function(){
	var newUrl = location.toString();
	if(url !== newUrl){
		pause();
	}
}, 100);
pause();
