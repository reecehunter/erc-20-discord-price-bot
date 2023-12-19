"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import required modules
const dotenv_1 = __importDefault(require("dotenv"));
const bot_1 = require("@src/bot");
const moralis_1 = require("@src/moralis");
// Initialize dotenv
dotenv_1.default.config();
// Start the discord bot, Moralis server, perform
// initial price check, and start price check task.
(0, bot_1.startBot)(async () => {
    if (!process.env.UPDATE_FREQUENCY)
        throw new Error('No update frequency provided');
    await (0, moralis_1.startMoralis)();
    // setUsername('$' + (await getPrice()))
    setInterval(async () => {
        (0, bot_1.setUsername)('$' + (await (0, moralis_1.getPrice)()));
    }, parseInt(process.env.UPDATE_FREQUENCY));
});
