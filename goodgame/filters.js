// ==UserScript==
// @name        filters
// @namespace   http://svoloch.github.com/goodgame/filters.html
// @description фильтры для чата
// @version     1
// @grant       none
// @include     http://goodgame.ru/chat/*
// ==/UserScript==

var processes = {
	moder: function(){
		$("user>a:not(.streamer)").parent().parent().parent().filter("div.message-block").hide();
	},
	private: function(){
		$(".message-block").toArray().filter(function(div){
			return !$(div).children('span.private-message').length;
		}).forEach(function(msg){
			$(msg).hide();
		});
	},
	noprivate: function(){
		$(".message-block").toArray().filter(function(div){
			return $(div).children('span.private-message').length;
		}).forEach(function(msg){
			$(msg).hide();
		});
	},
	nodeleted: function(){
		$(".deleted").hide();
	},
	deleted: function(){
		$(".message-block:not(.deleted)").hide();
		$(".deleted").show();
	},
	address: function(){
		$(".message-block:not(.private)").hide();
	},
	noaddress: function(){
		$(".message-block.private").hide();
	}
}

var filters = {};
for(mode in processes){
	filters[mode] = {
		stop: function(){},
		start: function(){
			var interval = setInterval(this.run.bind(this), 100);
			this.stop = function() {
				clearInterval(interval);
				this.stop = function(){};
			};
		},
		run: processes[mode]
	}
};

window.filters = filters;

if(!location.hash.indexOf("#filter-")){
	var params = location.hash.split("-");
	console.log(params);
	for(mode in processes){
		if(~params.indexOf(mode)){
			window.filters[mode].start();
		}
	}
}
