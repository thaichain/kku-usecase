require('dotenv').config();
const path = require("path");


const pkey1 = process.env.PKEY1;
const pkey2 = process.env.PKEY2;
const pkey3 = process.env.PKEY3;
const pkey4 = process.env.PKEY4;


const HDWalletProvider = require('@truffle/hdwallet-provider'); 
const provider = new HDWalletProvider({
  privateKeys: [pkey1, pkey2, pkey3, pkey4],
  providerOrUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
});


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: 
  {
    development: {
       host: "localhost",
       port: 8545,
       network_id: "*" // Match any network id
    },

  bscTestnet: {
    provider: () => provider,
    network_id: 97,
    confirmations: 2,
    timeoutBlocks: 200,
    skipDryRun: true,
    },


},
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  compilers: {
    solc: {
      version: '0.6.3'
    }
  }
};