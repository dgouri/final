require("@nomicfoundation/hardhat-toolbox");

// const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://rpc-mumbai.maticvigil.com/";
const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://polygon-mumbai.g.alchemy.com/v2/U1oX7c2_k5q8ZtboaOvVqewYKcTarpqK";
const NEXT_PUBLIC_PRIVATE_KEY = "2ac591765a3ea86897b8ade2c37c8444b8ffc8f70c578fa55e82427a7e60a4f9";
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  // solidity: "0.8.17",
  
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {
      chainId: 80001,
    },
    polygon_mumbai: {
      url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
  solidity: {
    version: "0.8.17",
    settings:{
      optimizer:{
        enabled:true,
        runs: 200,
      }
    }
  },

  //   // fuji: {
  //   //   url: `Your URL`,
  //   //   accounts: [
  //   //     `0x${"Your Account"}`,
  //   //   ],
  //   // },
  // },
};
