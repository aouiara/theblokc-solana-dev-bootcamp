import * as Web3 from '@solana/web3.js'
import base58 from 'bs58'

const publickey = '92UqzKy29rQaUG27ZoQt7cU8XNkpscnRkj9cn7b6FzgQ'
const url = Web3.clusterApiUrl("devnet");
const connection = new Web3.Connection(url);
const progId = '7LjoMZR3LDK6hFo4fvb6gisEj7kmGekV2e56wFE1WA64'
const privKey = '2qgDnxyit1dsnLMdc7Cpn6okvstNryEbib4YMmVz2mBf2mFyh7b38yJ2ahixBaWWwg4KTyXAVsp33CfS3sU9nGfJ'


async function main()
{
    const signer = Web3.Keypair.fromSecretKey(base58.decode(privKey))
    const transaction = new Web3.Transaction()
    const instruction = new Web3.TransactionInstruction({
        keys: [
            {
                pubkey: new Web3.PublicKey(publickey),
                isSigner: true,
                isWritable: false,
            }
        ],
        data: Buffer.alloc(20),
        programId: new Web3.PublicKey(progId)
    });

    transaction.add(instruction)
    const signature = await Web3.sendAndConfirmTransaction
    (
        connection,
        transaction,
        [signer]
    )
    console.log('SIGNATURE', signature)
}

main()
.then(() => process.exit(0))
.catch(err => 
    {
        console.error(err)
    });