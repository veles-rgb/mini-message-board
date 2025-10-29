require("dotenv").config();
const pool = require("./pool");

async function main() {
    try {
        console.log("Creating table...");

        await pool.query(`
      CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        username VARCHAR(50) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );
    `);

        console.log("Table created ✅");

        console.log("Inserting sample messages...");

        await pool.query(
            `INSERT INTO messages (username, message)
       VALUES 
       ('Dylan', 'Hello! This is a test message.'),
       ('Alice', 'Welcome to the mini message board!');`
        );

        console.log("Sample data inserted ✅");
    } catch (err) {
        console.error("Error populating DB ❌", err);
    } finally {
        pool.end();
        console.log("Done ✅");
    }
}

main();
