import Moralis from 'moralis'

// Function to start the Moralis server
export const startMoralis = async () => {
  try {
    const moralis = await Moralis.start({
      apiKey: process.env.MORALIS_API_KEY,
    })
    return moralis
  } catch (err) {
    console.error('Failed to start Moralis:', err)
    return null
  }
}

// Function to get token price using Moralis
export async function getPrice(): Promise<string> {
  if (!Moralis) {
    const started = await startMoralis()
    if (!started) throw new Error('Failed to start Moralis server')
  }

  if (!process.env.TOKEN_ADDRESS) throw new Error('No token address provided')
  if (!process.env.TOKEN_CHAIN) throw new Error('No token chain provided')

  try {
    const res = await Moralis.EvmApi.token.getTokenPrice({
      chain: process.env.TOKEN_CHAIN,
      address: process.env.TOKEN_ADDRESS,
    })
    return res.raw.usdPrice.toFixed(4)
  } catch (err) {
    console.error('Failed to get price:', err)
    return 'Error'
  }
}
