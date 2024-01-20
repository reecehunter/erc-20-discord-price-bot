import { SlashCommandBuilder, CommandInteraction } from 'discord.js'
import { getPrice } from '@src/moralis'
import { Command } from '@utils/types'

const priceCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('price')
    .setDescription('Checks the price of the configured ERC-20 token.'),
  async execute(interaction: CommandInteraction) {
    let price = await getPrice()
    interaction.reply({
      embeds: [
        {
          color: parseInt(process.env.EMBED_COLOR || '15158332'),
          title: `Current ${process.env.TOKEN_NAME} Price`,
          description: '$' + price,
        },
      ],
    })
  },
}

export default priceCommand
