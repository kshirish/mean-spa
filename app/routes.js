const City = require('./models/city');

module.exports = (app) => {

	app.get('/cities', (req, res) => {

		City.find()
			.then((cities) => res.json({
				success: true,
				cities
			}))
			.catch((err) => res.json({
				success: false,
				err
			}));
	});
}