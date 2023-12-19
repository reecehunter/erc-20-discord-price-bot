# ERC-20 Discord Price Bot

Displays the price of an Ethereum ERC-20 token in USD in the username of a Discord bot, and proves a `/price` command for members to query the current price.

![The bot online in a server](https://i.imgur.com/GTjVSKt.png)
![The bot's price command response](https://i.imgur.com/mxWhPYM.png)

# Usage

1. Create your bot application in the [Discord Developer Portal](https://discord.com/developers/applications).

2. Add the bot to your discord server using the URL generator in the [Discord Developer Portal](https://discord.com/developers/applications). It only needs the `bot` scope and the `Send Messages` permission.

3. Copy the .env.example file.

```bash
cp .env.example .env
```

4. Fill in all the variables in your new `.env`.
   All data needed can be found in the [Discord Developer Portal](https://discord.com/developers/applications), [Moralis account settings](https://admin.moralis.io/settings), and your own brain.

5. Install dependencies

```bash
npm install
```

6. Deploy the command

```bash
npm run deploy-command
```

7. Build the project

```bash
npm run build
```

8. Start it up

```bash
npm run start
```

Your bot is now running!

# Contributing

Feel free to make a pull-request to add a feature or improve the current code.
