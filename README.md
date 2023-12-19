# ERC-20 Discord Price Bot

Displays the price of an Ethereum ERC-20 token in USD in the username of a Discord bot, and proves a `/price` command for members to query the current price.

![The bot online in a server](https://i.imgur.com/GTjVSKt.png)
![The bot's price command response](https://i.imgur.com/mxWhPYM.png)

# Usage

Create your bot application in the [Discord Developer Portal](https://discord.com/developers/applications).

Add the bot to your discord server using the URL generator in the [Discord Developer Portal](https://discord.com/developers/applications).

Copy the .env.example file.
`cp .env.example .env`

Fill in all the variables in your new `.env`.
All data needed can be found in the [Discord Developer Portal](https://discord.com/developers/applications), [Moralis account settings](https://admin.moralis.io/settings), and your own brain.

Install dependencies
`npm install`

Deploy the command
`npm run deploy-command`

Build the project
`npm run build`

Start it up
`npm run start`

Your bot is now running!

# Contributing

Feel free to make a pull-request to add a feature or improve the current code.
