// Import required modules
import dotenv from 'dotenv'
import { setUsername, startBot } from '@src/bot'
import { getPrice, startMoralis } from '@src/moralis'

// Initialize dotenv
dotenv.config()

// Start the discord bot, Moralis server, perform
// initial price check, and start price check task.
startBot(async () => {
  if (!process.env.UPDATE_FREQUENCY)
    throw new Error('No update frequency provided')

  await startMoralis()
  setUsername('$' + (await getPrice()))

  setInterval(async () => {
    setUsername('$' + (await getPrice()))
  }, parseInt(process.env.UPDATE_FREQUENCY))
})
