// hardhat.config.js
const { infuraProjectId, mnemonic, etherscanApiKey } = require('./secrets.json');

require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");

const DEFAULT_COMPILER_SETTINGS = {
  version: '0.8.10',
  settings: {
    optimizer: {
      enabled: true,
      runs: 155,
    },
  },
}

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${infuraProjectId}`,
      accounts: {mnemonic: mnemonic}
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${infuraProjectId}`,
      accounts: {mnemonic: mnemonic}
    }
  },

  etherscan: {
    apiKey: etherscanApiKey
  },
  solidity: {
    compilers: [DEFAULT_COMPILER_SETTINGS],
  }
};
