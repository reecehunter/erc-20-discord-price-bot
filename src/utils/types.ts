import Discord from 'discord.js'

export type Command = {
  data: any
  execute: any
}

export class DiscordClient extends Discord.Client {
  commands: Discord.Collection<string, Command>
  constructor(options: Discord.ClientOptions) {
    super(options)
    this.commands = new Discord.Collection()
  }
}
