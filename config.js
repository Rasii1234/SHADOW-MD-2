const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "yWwxQT4S#_b2DjvvFHCoMywrijCc6a7FOc8YObj1Y1TX1rx8C8RE",
SUDO_NB: process.env.SUDO_NB || "94767910958",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_BIO: process.env.AUTO_BIO || "true",
ALWAYS_ONLINE : process.env.ALWAYS_ONLINE || "unavailable",
AUTO_READ_CMD: process.env.AUTO_READ_CMD || "false",
AUTO_TYPING:"true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true",
};
