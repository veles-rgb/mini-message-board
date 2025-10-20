const messages = [
    {
        id: 1,
        text: "Hi there!",
        user: "Amando",
        added: new Date().toISOString().slice(0, 16).replace('T', ' ')
    },
    {
        id: 2,
        text: "Hello World!",
        user: "Charles",
        added: new Date().toISOString().slice(0, 16).replace('T', ' ')
    },
    {
        id: 3,
        text: "EJS is very interesting, but I prefer react. Lol.",
        user: "veles",
        added: new Date().toISOString().slice(0, 16).replace('T', ' ')
    }
];

module.exports = messages;