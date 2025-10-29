const db = require("../db/queries");

async function getAllMessages(req, res) {
    const messages = await db.getAllMessages();
    res.render("index", {
        title: "All Messages - MMB",
        messages: messages
    });
}

async function getMessageFromId(req, res) {
    const id = req.params.id;
    const result = await db.getMessageFromId(id);
    res.render("message", {
        title: "Message View - MMB",
        result: result
    });
}

function renderForm(req, res) {
    res.render("form", {
        title: "New Message - MMB",
        errors: [],
        oldInput: {}
    });
}

async function postNewMessage(req, res) {
    const { validationResult } = require("express-validator");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).render("form", {
            title: "New Message - MMB",
            errors: errors.array(),
            oldInput: req.body,
        });
    }

    const msg = req.body.newMsg;
    const user = req.body.newUser;
    await db.postNewMessage(msg, user);

    res.redirect("/");
}

module.exports = {
    getAllMessages,
    getMessageFromId,
    renderForm,
    postNewMessage
};