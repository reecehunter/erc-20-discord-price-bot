"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUsername = exports.startBot = exports.client = void 0;
const discord_js_1 = __importDefault(require("discord.js"));
const types_1 = require("@utils/types");
const load_commands_1 = __importDefault(require("@utils/load-commands"));
exports.client = new types_1.DiscordClient({
    intents: [
        discord_js_1.default.GatewayIntentBits.Guilds,
        discord_js_1.default.GatewayIntentBits.GuildMessages,
        discord_js_1.default.GatewayIntentBits.MessageContent,
    ],
});
async function startBot(cb) {
    exports.client.on('ready', async () => {
        if (!exports.client.user)
            throw new Error('Error starting Discord bot');
        console.log(`Logged in as ${exports.client.user.tag}.`);
        (0, load_commands_1.default)(exports.client);
        exports.client.user.setActivity(`${process.env.TOKEN_NAME} Price`, {
            type: discord_js_1.default.ActivityType.Watching,
        });
        cb(exports.client);
    });
    exports.client.on(discord_js_1.default.Events.InteractionCreate, async (interaction) => {
        if (!interaction.isChatInputCommand())
            return;
        const command = exports.client.commands.get(interaction.commandName);
        if (!command)
            throw new Error('Command not found');
        try {
            await command.execute(interaction);
        }
        catch (err) {
            console.error(err);
            interaction.reply({
                content: 'There was an error while executing this command!',
                ephemeral: true,
            });
        }
    });
    exports.client.login(process.env.DISCORD_BOT_TOKEN);
}
exports.startBot = startBot;
async function setUsername(newUsername) {
    if (!exports.client.user)
        throw new Error('Error setting username');
    exports.client.user.setUsername(newUsername);
}
exports.setUsername = setUsername;
