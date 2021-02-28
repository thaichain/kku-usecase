// require('babel-register');
// require('babel-polyfill');

const PrivateKeyProvider = require("truffle-privatekey-provider");
const pkey = process.env.PKEY;
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
			provider: () => new PrivateKeyProvider(pkey, 'https://rpc-bsc-testnet.8api.sh', 0, 10),
			network_id: 97,
			confirmations: 2,
			timeoutBlocks: 200,
			skipDryRun: true,
		  },
	},
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',  
	compilers: {
		solc: {
      // version: "0.4.2",    // Fetch exact version from solc-bin (default: truffle's version)
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
