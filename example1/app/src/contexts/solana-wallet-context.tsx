
import * as React from 'react';
import {
  ConnectionProvider,
  WalletProvider
} from '@solana/wallet-adapter-react';
import {
  WalletAdapterNetwork,
  WalletError
} from '@solana/wallet-adapter-base';
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter
} from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import { useAutoConnect } from 'contexts/auto-connect-context';

// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');

type SolanaWalletProviderProps = { children: React.ReactNode; };

const SolanaWalletProvider = ({ children }: SolanaWalletProviderProps) => {
  const { autoConnect } = useAutoConnect();

  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = React.useMemo(
    () => clusterApiUrl(network),
    [network]
  );

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded.
  const wallets = React.useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),
      new SolletWalletAdapter({ network }),
      new SolletExtensionWalletAdapter({ network })
    ],
    [network]
  );

  const handleError = React.useCallback(
    (error: WalletError) => {
      // TODO: should add error handling UX like a toast or modal
      console.error(error);
    },
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider
        wallets={wallets}
        onError={handleError}
        autoConnect={autoConnect}>
        <WalletModalProvider>
          { /* Your app's components go here, nested within the context providers. */ }
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export {
  SolanaWalletProvider
};
