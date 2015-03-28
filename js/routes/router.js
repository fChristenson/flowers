var app = app || {};

app.Router = Backbone.Router.extend({

	routes: {
		'':'noCopy',
		'heirloomRose': 'heirloomRoseMessage',
		'redRose': 'redRoseMessage',
		'rainbowRose': 'rainbowRoseMessage'
	},
	noCopy: function () {
		$('#copy').html('');
	},
	heirloomRoseMessage: function () {
		$('#copy').html('heirloomRose');	
	},
	redRoseMessage: function () {
		$('#copy').html('redRose');	
	},
	rainbowRoseMessage: function () {
		$('#copy').html('rainbowRose');	
	},

});