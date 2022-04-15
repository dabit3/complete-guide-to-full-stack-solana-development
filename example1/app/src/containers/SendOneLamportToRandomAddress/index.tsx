
import * as React from 'react';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import {
  useConnection,
  useWallet
} from '@solana/wallet-adapter-react';
import {
  Keypair,
  SystemProgram,
  Transaction
} from '@solana/web3.js';

// TODO: not used for now
const SendOneLamportToRandomAddress = () => {
  const { connection } = useConnection();
  const {
    publicKey,
    sendTransaction
  } = useWallet();

  const handleClick = React.useCallback(async () => {
    try {
      if (!publicKey) throw new WalletNotConnectedError();

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: Keypair.generate().publicKey,
          lamports: 1
        })
      );

      const signature = await sendTransaction(transaction, connection);

      await connection.confirmTransaction(signature, 'processed');
    } catch (error: unknown) {
      console.log('[SendOneLamportToRandomAddress handleClick] error => ', error);
    }
  }, [
    publicKey,
    sendTransaction,
    connection
  ]);

  return (
    <button
      onClick={handleClick}
      disabled={!publicKey}>
      Send 1 lamport to a random address!
    </button>
  );
};

export default SendOneLamportToRandomAddress;
