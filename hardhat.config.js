require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

// const SEPOLI_URL = process.env.SEPOLI_URL;
// const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/PZX16g98DeGyqNTDq2FXjuF838jjnS7l",
      accounts: ["c12e2eb5fdbe5a06b88893976f6a29df8e19906adaed09e3a6774a4c0b539e59"],
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
