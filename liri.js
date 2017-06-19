
console.log("liri.js loaded");


var Twit = require('twit');
var config = require('./key');

var T = new Twit(config);
//console.log('working');


function myTweets(){
var params = { 
	q: 'The New York Times‏', 
	count: 20 };

	T.get('search/tweets', params ,gotData);
 	function gotData(err, data, response) {
 		var tweets = data.statuses;
 		for (var i=0; i<tweets.length; i++){
 		console.log((i+1)+": "+tweets[i].text);
 		}
	};
};

 myTweets();
//---------------------

 var spot = require('spotify');

function spotifyThisSong(name){
 spot.search({
	type: 'track', 
	query: name  //'dancing in the moonlight' 
 }, function(err, result){
 	if(err){
 		console.log(err);
 	}
 	console.log(JSON.stringify(result, null, 2));
 });
};
spotifyThisSong();
console.log('end');
 