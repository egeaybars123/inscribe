const ethers = require("ethers")
require("dotenv").config()

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL)
const privateKey = process.env.PRIVATE_KEY
const inscription = process.env.TEXT

const wallet = new ethers.Wallet(privateKey, provider)

async function sendTransaction(toAddress, data) {
    const transactionResponse = await wallet.sendTransaction({
        to: toAddress,
        value: 0,
        data: ethers.hexlify(ethers.toUtf8Bytes(data))
      })
  
    console.log("Transaction sent:", transactionResponse.hash)
}

sendTransaction(wallet.address, inscription)
