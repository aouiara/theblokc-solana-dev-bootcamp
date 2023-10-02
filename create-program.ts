import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const url = Web3.clusterApiUrl("devnet");
const connection = new Web3.Connection(url);

const publickey = new Web3.PublicKey("92UqzKy29rQaUG27ZoQt7cU8XNkpscnRkj9cn7b6FzgQ")
const decoded = base58.decode(process.env.PRIVATE_KEY as any)
const keyPair = Web3.Keypair.fromSecretKey(decoded)

const tokenMint = new Web3.PublicKey("BnBABgcHtxonhnJYHoKqXn73dR2u3Vzm2u8JC17E5NNo")

async function main(){
    const tokenAccount = await token.createAccount(
        connection,
        keyPair,
        tokenMint,
        publickey
    )
    console.log(tokenAccount.toBase58())
}

main()