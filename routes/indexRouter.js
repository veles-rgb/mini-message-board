const { Router } = require("express");
const indexRouter = Router();

const indexController = require("../controllers/indexController");
const { validateForm } = require("../validators/formValidator");

// GET
indexRouter.get("/", indexController.getAllMessages);

indexRouter.get("/messages/:id", indexController.getMessageFromId);

indexRouter.get("/new", indexController.renderForm);

// POST
indexRouter.post("/new", validateForm, indexController.postNewMessage);

module.exports = indexRouter;