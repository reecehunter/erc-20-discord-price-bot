"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const node_path_1 = __importDefault(require("node:path"));
const node_fs_1 = __importDefault(require("node:fs"));
function loadCommands(client) {
    client.commands = new discord_js_1.default.Collection();
    const foldersPath = node_path_1.default.join(__dirname, '../', 'commands');
    const commandFolders = node_fs_1.default.readdirSync(foldersPath);
    for (const folder of commandFolders) {
        const commandsPath = node_path_1.default.join(foldersPath, folder);
        const commandFiles = node_fs_1.default
            .readdirSync(commandsPath)
            .filter((file) => file.endsWith('.ts'));
        for (const file of commandFiles) {
            const filePath = node_path_1.default.join(commandsPath, file);
            const command = require(filePath).default;
            // Set a new item in the Collection with the key as the command name and the value as the exported module
            if ('data' in command && 'execute' in command) {
                client.commands.set(command.data.name, command);
            }
            else {
                console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
            }
        }
    }
}
exports.default = loadCommands;
