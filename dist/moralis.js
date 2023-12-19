"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrice = exports.startMoralis = void 0;
const moralis_1 = __importDefault(require("moralis"));
// Function to start the Moralis server
const startMoralis = async () => {
    try {
        const moralis = await moralis_1.default.start({
            apiKey: process.env.MORALIS_API_KEY,
        });
        return moralis;
    }
    catch (err) {
        console.error('Failed to start Moralis:', err);
        return null;
    }
};
exports.startMoralis = startMoralis;
// Function to get token price using Moralis
async function getPrice() {
    if (!moralis_1.default) {
        const started = await (0, exports.startMoralis)();
        if (!started)
            throw new Error('Failed to start Moralis server');
    }
    if (!process.env.TOKEN_ADDRESS)
        throw new Error('No token address provided');
    if (!process.env.TOKEN_CHAIN)
        throw new Error('No token chain provided');
    try {
        const res = await moralis_1.default.EvmApi.token.getTokenPrice({
            chain: process.env.TOKEN_CHAIN,
            address: process.env.TOKEN_ADDRESS,
        });
        return res.raw.usdPrice.toFixed(4);
    }
    catch (err) {
        console.error('Failed to get price:', err);
        return 'Error';
    }
}
exports.getPrice = getPrice;
