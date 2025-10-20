const { Router } = require("express");
const newMessageRouter = Router();

const messages = require("../routes/messages");

newMessageRouter.get("/", (req, res) => {
    res.render("form");
});

newMessageRouter.post("/", (req, res) => {
    const messageText = req.body.newMsg;
    const messageUser = req.body.newUser;
    const id = messages.length + 1;

    messages.push({ id: id, text: messageText, user: messageUser, added: new Date().toISOString().slice(0, 16).replace('T', ' ') });
    res.redirect("/");
});

module.exports = newMessageRouter;