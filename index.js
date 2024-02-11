const ethers = require("ethers")
require("dotenv").config()

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL)
const mnemonic = process.env.SEED_PHRASE
const inscription = process.env.TEXT

//Iterate the number "1" to get different wallet addresses.
const derivationPath = "m/44'/60'/0'/0/" + 1
const wallet = ethers.Wallet.fromPhrase(mnemonic, derivationPath).connect(provider)

async function sendTransaction(toAddress, data) {
    const transactionResponse = await wallet.sendTransaction({
        to: toAddress,
        value: 0,
        data: ethers.encodeBytes32String(data)
      })
  
    console.log("Transaction sent:", transactionResponse.hash)
}

sendTransaction(wallet.address, inscription)
