
## Tech stacks

- create-react-app (v5.0.0)
- TypeScript (v^4.6.3)
- [@solana/wallet-adapter](https://github.com/solana-labs/wallet-adapter)

## References

- [@solana/wallet-adapter](https://github.com/solana-labs/wallet-adapter)
- [@solana/wallet-adapter-example](https://github.com/solana-labs/wallet-adapter/tree/master/packages/starter/example)
- [The Complete Guide to Full Stack Solana Development with React, Anchor, Rust, and Phantom](https://dev.to/edge-and-node/the-complete-guide-to-full-stack-solana-development-with-react-anchor-rust-and-phantom-3291)

## Getting the project up and running

```bash
yarn install
# development
yarn start
# production
yarn build
```

## TODOs

- Currently some type related errors are suppressed by `@ts-expect-error`. This comment should be removed by typing them correctly.
  * Keep an eye out for [Solana web3 Program constructor is expecting a json as one of params](https://stackoverflow.com/questions/70655700/solana-web3-program-constructor-is-expecting-a-json-as-one-of-params).
- Consider [You'll notice that when you refresh, you lose the state of the program. This is because we are dynamically generating the base account when the program loads. If you wanted to read and interact with the program data across various clients, you would need to create and store the Keypair somewhere in your project. I've put together a gist of a naive approach of how this might look](https://gist.github.com/dabit3/7cbd18b8bc4b495c4831f8674902eb42).
- Handle the console warning `Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot`.