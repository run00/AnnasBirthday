// set the date we're counting down to
var target_date = new Date('Nov, 24, 2014 23:20 cst').getTime();

// variables for time units
var days, hours, minutes, seconds;

// get tag element
var countdown = document.getElementById('countdown');

// update the tag with id "countdown" every 1 second
setInterval(function () {

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;

	// do some time calculations
	days = parseInt(seconds_left / 86400);
	seconds_left = seconds_left % 86400;

	hours = parseInt(seconds_left / 3600);
	seconds_left = seconds_left % 3600;

	minutes = parseInt(seconds_left / 60);
	seconds = parseInt(seconds_left % 60);

	if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
		return;
	}

	if (days > 0) {
		countdown.innerHTML = '<span class="remaining">' + days + ' Days to Go</span> ';
		return;
	}

	countdown.innerHTML =
	'<span class="remaining">' + hours + ' Hours ' + minutes + ' Minutes ' + seconds + ' Seconds to Go</span>';

}, 1000);

(function (d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

!function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https'; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = p + '://platform.twitter.com/widgets.js'; fjs.parentNode.insertBefore(js, fjs); } }(document, 'script', 'twitter-wjs');
