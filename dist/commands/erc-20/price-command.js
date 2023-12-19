"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const moralis_1 = require("@src/moralis");
const priceCommand = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('price')
        .setDescription('Checks the price of the configured ERC-20 token.'),
    async execute(interaction) {
        let price = await (0, moralis_1.getPrice)();
        interaction.reply({
            embeds: [
                {
                    color: parseInt(process.env.EMBED_COLOR || '15158332'),
                    title: `Current ${process.env.TOKEN_NAME} Price`,
                    description: '$' + price,
                },
            ],
        });
    },
};
exports.default = priceCommand;
