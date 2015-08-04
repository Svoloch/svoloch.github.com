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
		(function(videoIndex){
			var interval = setInterval(function(){
				if(!videos[videoIndex].paused){
					videos[videoIndex].pause();
					clearInterval(interval);
				}
			}, 100);
			setTimeout(function(){
			   clearInterval(interval); 
			}, 1000);
		})(videoIndex);
	}
}
var url;
setInterval(function(){
	var newUrl = location.toString();
	if(url !== newUrl){
		url = newUrl;
		pause();
	}
}, 100);
