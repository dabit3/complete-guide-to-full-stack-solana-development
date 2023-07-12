## The Complete Guide to Full Stack Solana Development with React, Anchor, Rust, and Phantom

Code examples to go with the blog post available [here](https://dev.to/dabit3/the-complete-guide-to-full-stack-solana-development-with-react-anchor-rust-and-phantom-3291)

![Header image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nl0h25rp5h9ytg5wnrj7.png)

### Prerequisites

1. Node.js - I recommend installing Node using either [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm)

2. Solana Tool Suite - You can see the installation instructions [here](https://docs.solana.com/cli/install-solana-cli-tools). _note - I had a very hard time getting everything working on an M1 Mac, mainly `solana-test-validator` and `cargo-build-bpf`. I finally figured it out, and posted my solution [here](https://github.com/project-serum/anchor/issues/95#issuecomment-913090162). I'm sure at some point this will be fixed and work out of the box._

3. Anchor - Anchor installation was pretty straight-forward for me. You can find the installation instructions [here](https://project-serum.github.io/anchor/getting-started/installation.html).

4. Solana browser wallet - I recommend [Phantom](https://phantom.app/), which is what I have tested this app with.

### To build

1. Clone the repo

```sh
git clone git@github.com:dabit3/complete-guide-to-full-stack-solana.git
```

2. Change into the project directory you'd like to run

3. Install the dependencies

```sh
npm install
```

4. Start a local Solana node

```sh
solana-test-validator
```

5. Build the anchor project

```sh
anchor build
```

6. Fetch the project ID for the build:

```sh
solana address -k target/deploy/<programname>-keypair.json
```

6. Update the project ID in the Rust program located at **projectname/programs/src/programname.rs** with the output from above.

7. Run the tests

```sh
anchor test
```

8. Change into the **app** directory and install the dependencies:

```sh
cd app && npm install
```

9. Run the client-side app

```sh
npm start
```

### Basic Steps for Full Stack Web Developer

1. Learn Basic of:
   - HTML
   - CSS
   - JavaScript
2. Develop Simple Project using these technologies to understand how does the website actually work.
3. Choose any 1 Front-End Technology:
   - React JS
   - Vue JS
   - Angular
4. Along with Front-End we need to study Back-End also:
   - Java
   - Python
   - C#
   - Ruby
   - Php
   - Node JS
5. We need databases to store the data:

- SQL
  - MYSQL
  - SQL Server
  - Oracle
  - Postegre SQL
- NOSQL
  - MongoDB
  - Casssandra
  - CouchDB

6. Then we have different versions of the developed software with some changes, so we use:
   - Git
   - GitHub/GitLab/BitBucket
7. Finally we need one of the Cloud Services to host the website:
   - Google Cloud Platform
   - Microsoft Azure
   - Amazon Web Service
   - Heroku
8. Some containers used in Cloud Services:
   - Docker
   - Kubernetes

## Once we prepare all these aspect for a particular project we can get a hang of Full Stack Web Development.
