var redRoses = new app.singleFlower({
	name: 'Red Roses',
	price: 39.94,
	color: "Red",
	img: "images/redRoses.jpg",
	link: "redRose"
});

var rainbowRoses = new app.singleFlower({
	name: 'Rainbow Roses',
	price: 39.94,
	color: "orange",
	link: "rainbowRose"
});

var heirloomRoses = new app.singleFlower({
	name: 'Heirloom Roses',
	price: 39.94,
	img: "images/heirloomPinkRoses.jpg",
	link: "heirloomRose"
});

 var flowerGroup = new app.FlowerCollection([redRoses, rainbowRoses, heirloomRoses]);

 var flowerGroupView = new app.allFlowersView({collection: flowerGroup});

 $('#allFlowers').html(flowerGroupView.render().el);

 var flowerRouter = new app.Router();

 Backbone.history.start();