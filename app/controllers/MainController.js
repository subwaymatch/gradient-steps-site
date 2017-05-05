var MainController = {};

MainController.renderMain = function(req, res) {
	res.render('index', {
		message: 'Hello Layer.is'
	})
};

module.exports = MainController;