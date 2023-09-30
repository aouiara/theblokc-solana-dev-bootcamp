import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"


const url = Web3.clusterApiUrl("devnet");
const connection = new Web3.Connection(url);

const publickey = new Web3.PublicKey("92UqzKy29rQaUG27ZoQt7cU8XNkpscnRkj9cn7b6FzgQ")
const decoded = base58.decode(process.env.PRIVATE_KEY as any)
const keyPair = Web3.Keypair.fromSecretKey(decoded)

async function main() {
    const tokenMint = await token.createMint(
        connection,
        keyPair,
        publickey,
        publickey,
        9
    )
    console.log(tokenMint.toBase58());
}

main();