
/**
 * @name AttackAPI.dom.getPlugins
 * @desc retrieve available browser plugins
 */
AttackAPI.dom.getPlugins = function () {
	var plugins = new Array();
	
	for (var i = 0; i < navigator.plugins.length; i++) {
		plugins.push(navigator.plugins[i].name);
	}
	
	return plugins;
};