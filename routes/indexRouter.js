const { Router } = require("express");
const indexRouter = Router();

const messages = require("../routes/messages");

indexRouter.get("/", (req, res) => {
    res.render("index", { messages: messages });
});

indexRouter.get("/messages/:id", (req, res) => {
    const id = req.params.id;
    res.render("message", { id: Number(id), messages: messages });
});

module.exports = indexRouter;