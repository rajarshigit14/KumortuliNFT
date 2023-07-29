/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const PRIVATE_KEY="c8e446e011f69d89d14ff2ed3b2ad3508a41bdba158c62a8492ebe999c24df94";
//const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/ovS5_jVpJWAhT-mOGH9aaBKZJgitR2i7",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};