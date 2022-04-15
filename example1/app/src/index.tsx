
import * as React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { SolanaWalletProvider } from 'contexts/solana-wallet-context';
import { AutoConnectProvider } from 'contexts/auto-connect-context';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <AutoConnectProvider>
      <SolanaWalletProvider>
        <App />
      </SolanaWalletProvider>
    </AutoConnectProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
