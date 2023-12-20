# ERC-20 Discord Price Bot

Displays the price of an Ethereum ERC-20 token in USD in the username of a Discord bot, and provides a `/price` command for members to query the current price.

![The bot online in a server](https://i.imgur.com/GTjVSKt.png)
![The bot's price command response](https://i.imgur.com/mxWhPYM.png)

You can test out the bot for yourself here: [discord.gg/rJQTV6gqcU](https://discord.gg/rJQTV6gqcU)

# Usage

1. Clone the repository

```bash
git clone https://github.com/reecehunter/erc-20-discord-price-bot
```

2. Create your bot application in the [Discord Developer Portal](https://discord.com/developers/applications).

3. Add the bot to your discord server using the URL generator in the [Discord Developer Portal](https://discord.com/developers/applications). It only needs the `bot` scope and the `Send Messages` permission.

4. Copy the .env.example file.

```bash
cp .env.example .env
```

5. Fill in all the variables in your new `.env`.
   All data needed can be found in the [Discord Developer Portal](https://discord.com/developers/applications), [Moralis account settings](https://admin.moralis.io/settings), and your own brain.

```bash
# The secret token for your Discord bot
DISCORD_BOT_TOKEN=
# The client ID of your Discord bot
DISCORD_CLIENT_ID=
# The ID of the server you put the bot in
DISCORD_GUILD_ID=

# The color you want the price command embed to have
EMBED_COLOR=15158332

# Moralis API key
# (Free API, just sign up for Moralis)
MORALIS_API_KEY=

# Name of the token to be displayed on the bot
TOKEN_NAME=$APE
# The smart contract address of the token
TOKEN_ADDRESS=0x4d224452801aced8b2f0aebe155379bb5d594381
# The chain the token is on
TOKEN_CHAIN=0x1

# How often the bot checks the price of the token in milliseconds
# (Discord has a rate limit)
UPDATE_FREQUENCY=3600000
```

6. Install dependencies

```bash
npm install
```

7. Deploy the price command

```bash
npm run deploy-commands
```

8. Build the project

```bash
npm run build
```

9. Start it up

```bash
npm run start
```

Your bot is now running!

# Contributing

Feel free to make a pull-request to add a feature or improve the current code.
