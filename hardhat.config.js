require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

// const SEPOLI_URL = process.env.SEPOLI_URL;
// const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: "________________________________________________________"
      accounts: ["%%%667775554443$$$$$$$$$$$$$$$$"],
    },
  },
};

// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.19",
//   networks: {
//     hardhat: {
//       chainId:1337,
//     },
//   },
// };
