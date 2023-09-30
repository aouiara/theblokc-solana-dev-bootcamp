import * as Web3 from '@solana/web3.js'
import base58 from 'bs58'
const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
const PRIVATE_KEY = '2qgDnxyit1dsnLMdc7Cpn6okvstNryEbib4YMmVz2mBf2mFyh7b38yJ2ahixBaWWwg4KTyXAVsp33CfS3sU9nGfJ'
async function main() {
    const signer = Web3.Keypair.fromSecretKey(base58.decode(PRIVATE_KEY))
    const transaction = new Web3.Transaction()
    const sendSolTransaction = Web3.SystemProgram.transfer({
        fromPubkey: new Web3.PublicKey('92UqzKy29rQaUG27ZoQt7cU8XNkpscnRkj9cn7b6FzgQ'),
        toPubkey: new Web3.PublicKey('CiiQbH743h7hks5g12aWoxWxrFrfawKwiBmu51RhYG8S'),
        lamports: 0.1 * Web3.LAMPORTS_PER_SOL,
    });
    transaction.add(sendSolTransaction)
    const txHash = await Web3.sendAndConfirmTransaction(
        connection,
        transaction,
        [signer]
    )
    console.log('txHash', txHash)
}
main()