const { Router } = require("express");
const newMessageRouter = Router();

const messages = require("../routes/messages");

newMessageRouter.get("/", (req, res) => {
    res.render("form");
});

newMessageRouter.post("/", (req, res) => {
    const messageText = req.body.newMsg;
    const messageUser = req.body.newUser;

    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect("/");
});

module.exports = newMessageRouter;