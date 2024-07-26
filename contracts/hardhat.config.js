require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "21e98feb2b64f1c04e06ed5f514b5b7f7dd998af760e60d7b1036407c548ff65";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};
