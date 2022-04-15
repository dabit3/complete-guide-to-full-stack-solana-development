
import * as React from 'react';
import { useLocalStorage } from '@solana/wallet-adapter-react';

type AutoConnectProviderProps = { children: React.ReactNode; };

interface AutoConnectStateContextInterface {
  autoConnect: boolean;
  setAutoConnect(autoConnect: boolean): void;
}

const AutoConnectStateContext = React.createContext<AutoConnectStateContextInterface | undefined>(undefined);

function useAutoConnect(): AutoConnectStateContextInterface {
  const context = React.useContext(AutoConnectStateContext);
  if (context === undefined) {
    throw new Error('useAutoConnect must be used within a AutoConnectProvider!');
  }
  return context;
}

const AutoConnectProvider = ({ children }: AutoConnectProviderProps) => {
  const [autoConnect, setAutoConnect] = useLocalStorage('autoConnect', false);

  return (
    <AutoConnectStateContext.Provider
      value={{
        autoConnect,
        setAutoConnect
      }}>
      {children}
    </AutoConnectStateContext.Provider>
  );
};

export {
  useAutoConnect,
  AutoConnectProvider
};
