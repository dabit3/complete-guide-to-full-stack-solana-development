
import * as React from 'react';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import { sign } from 'tweetnacl';

// TODO: not used for now
const SignMessage = () => {
  const {
    publicKey,
    signMessage
  } = useWallet();

  const onClick = React.useCallback(async () => {
    try {
      // `publicKey` will be null if the wallet isn't connected
      if (!publicKey) throw new WalletNotConnectedError();
      // `signMessage` will be undefined if the wallet doesn't support it
      if (!signMessage) throw new Error('Wallet does not support message signing!'); // TODO: double-check `WalletSignMessageError`

      // Encode anything as bytes
      const message = new TextEncoder().encode('Hello, world!');
      // Sign the bytes using the wallet
      const signature = await signMessage(message);
      // Verify that the bytes were signed using the private key that matches the known public key
      if (!sign.detached.verify(message, signature, publicKey.toBytes())) throw new Error('Invalid signature!');

      console.log(`success - Message signature: ${bs58.encode(signature)}`);
    } catch (error: any) {
      console.log(`error - Signing failed: ${error?.message}`);
    }
  }, [
    publicKey,
    signMessage
  ]);

  return (
    <>
      {signMessage ? (
        <button
          onClick={onClick}
          disabled={!publicKey}>
          Sign Message
        </button>
      ) : null}
    </>
  )
};

export default SignMessage;
