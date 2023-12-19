import Discord from 'discord.js'
import { DiscordClient } from '@utils/types'
import loadCommands from '@utils/load-commands'

export const client = new DiscordClient({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
  ],
})

export async function startBot(
  cb: (client: DiscordClient) => void
): Promise<void> {
  client.on('ready', async () => {
    if (!client.user) throw new Error('Error starting Discord bot')
    console.log(`Logged in as ${client.user.tag}.`)
    loadCommands(client)
    client.user.setActivity(`${process.env.TOKEN_NAME} Price`, {
      type: Discord.ActivityType.Watching,
    })
    cb(client)
  })

  client.on(Discord.Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return
    const command = client.commands.get(interaction.commandName)
    if (!command) throw new Error('Command not found')
    try {
      await command.execute(interaction)
    } catch (err) {
      console.error(err)
      interaction.reply({
        content: 'There was an error while executing this command!',
        ephemeral: true,
      })
    }
  })

  client.login(process.env.DISCORD_BOT_TOKEN)
}

export async function setUsername(newUsername: string) {
  if (!client.user) throw new Error('Error setting username')
  client.user.setUsername(newUsername)
}
