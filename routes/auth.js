const express = require("express")
const User = require("../models/user");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");

authRouter.post("/signup", (req, res, next) => {
	User.findOne({ username: req.body.username }, (err, existingUser) => {
		if (err) {
			res.status(500);
			return next(err);
		}
		if (existingUser !== null) {
			res.status(400);
			return next(new Error("That username already exists!"));
		}

		const newUser = new User(req.body);
		newUser.save((err, user) => {
			if (err) {
				res.status(500);
				return next(err);
			}

			const token = jwt.sign(user.toObject(), process.env.SECRET);
			return res.status(201).send({ success: true, user: user.toObject(), token });
		});
	})
})

authRouter.post("/login", (req, res, next) => {
	User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
		if (err) {
			return next(err);
		};

		if (!user || user.password !== req.body.password) {
			res.status(403);
			return next(new Error("Email or password are incorrect"));
		}

		const token = jwt.sign(user.toObject(), process.env.SECRET);

		return res.send({ token: token, user: user.toObject(), success: true });
	});
});

module.exports = authRouter;