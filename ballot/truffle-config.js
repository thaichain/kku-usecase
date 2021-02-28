// require('babel-register');
// require('babel-polyfill');
require('dotenv').config();

// const PrivateKeyProvider = require("truffle-privatekey-provider");
const pkey = process.env.PKEY;


const HDWalletProvider = require('@truffle/hdwallet-provider'); 
const provider = new HDWalletProvider({
  privateKeys: [pkey],
  providerOrUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
});



module.exports = 
{
    networks: 
    {
	    development: 
		{
	   		host: "localhost",
	   		port: 8545,
	   		network_id: "*" // Match any network id
		},
		bscTestnet: {
			// provider: () => new PrivateKeyProvider(pkey, 'https://rpc-bsc-testnet.8api.sh', 0, 10),
			provider: () => provider,
			network_id: 97,
			confirmations: 2,
			timeoutBlocks: 200,
			skipDryRun: true,
		  },
	},
	compilers: {
		solc: {
       version: "0.4.24",    // Fetch exact version from solc-bin (default: truffle's version)
		  // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
		  // settings: {          // See the solidity docs for advice about optimization and evmVersion
		  //  optimizer: {
		  //    enabled: false,
		  //    runs: 200
		  //  },
		  //  evmVersion: "byzantium"
		  // }
		}
	  },
	  api_keys: {
		bscscan: '8QHPDDNYV9M73YJV6EMHAPA3VX7QNPSUDV'
	  },
	  plugins: [
		'truffle-plugin-verify'
	  ]	  
};