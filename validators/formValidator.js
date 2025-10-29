const { body } = require("express-validator");

const usernameLengthErr = "must be between 2–50 characters.";
const messageLengthErr = "must be between 1–500 characters.";

const validateForm = [
    body("newUser")
        .trim()
        .isLength({ min: 2, max: 50 })
        .withMessage(`Username ${usernameLengthErr}`),

    body("newMsg")
        .trim()
        .isLength({ min: 1, max: 500 })
        .withMessage(`Message ${messageLengthErr}`),
];

module.exports = { validateForm };
