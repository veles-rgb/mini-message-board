const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query(
        "SELECT * FROM messages ORDER BY created_at DESC"
    );
    return rows;
}

async function getMessageFromId(id) {
    const msgId = Number(id);
    if (!Number.isInteger(msgId)) throw new Error("Invalid ID");

    const result = await pool.query(
        "SELECT * FROM messages WHERE id = ($1)",
        [msgId]
    );

    return result.rows[0] || null;
}

async function postNewMessage(msg, user) {
    try {
        await pool.query(
            "INSERT INTO messages (username, message) VALUES ($1, $2)",
            [user, msg]
        );
        console.log("Message added!");
    } catch (err) {
        console.error("Error inserting message...");
    }
}

module.exports = {
    getAllMessages,
    getMessageFromId,
    postNewMessage
};