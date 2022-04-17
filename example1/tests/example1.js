
const assert = require("assert");
const anchor = require("@project-serum/anchor");

const { SystemProgram } = anchor.web3;

// RE: https://dev.to/biiishal/comment/1mnmf & https://github.com/project-serum/anchor/issues/168#issuecomment-902290960
describe("example1", () => {
  /* Create and set a Provider */
  const provider = anchor.Provider.env();
  anchor.setProvider(provider);
  const baseAccount = anchor.web3.Keypair.generate();

  const program = anchor.workspace.Example1;
  console.log('program: ', program);

  it("Creates and initializes an account in a single atomic transaction (simplified)", async () => {
    /* Call the create function via RPC */
    await program.rpc.create({
      accounts: {
        baseAccount: baseAccount.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      },
      signers: [baseAccount],
    });

    /* Fetch the account and check the value of count */
    const account = await program.account.baseAccount.fetch(baseAccount.publicKey);
    console.log('Count 0: ', account.count.toString());
    assert.ok(account.count.toString() === '0');
  });

  it("Updates a previously created account", async () => {
    await program.rpc.increment({
      accounts: {
        baseAccount: baseAccount.publicKey,
      },
    });
  
    const account = await program.account.baseAccount.fetch(baseAccount.publicKey);
    console.log('Count 1: ', account.count.toString());
    assert.ok(account.count.toString() === '1');
  });
});
