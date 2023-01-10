const URL = require("../models/url");


const getURLs = async (req, res) => {
    try {
        const urls = await URL.find({});

        res.render("index", { urls: urls});
    } catch (err) {
        console.log(err);
    }
}

const addURL = async (req, res) => {
    try {
        await URL.create({ fullURL: req.body.fullURL});

        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
}

const getShortURL = async (req, res) => {
    const shortURL = await URL.findOne({ smallURL: req.params.shortURL});
    if(shortURL == null) return res.sendStatus(404);

    shortURL.count++;
    shortURL.save();

    res.redirect(shortURL.fullURL);
}

module.exports = {getURLs, addURL, getShortURL};
