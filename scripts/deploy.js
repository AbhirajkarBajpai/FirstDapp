// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function getBalances(address) {
  const balanceBigInt = await hre.ethers.provider.getBalance(address);
  return hre.ethers.formatEther(balanceBigInt);
}

async function consoleBalances(addresses) {
  let counter = 0;
  for (const address of addresses) {
    console.log(`Address ${counter} balance:`, await getBalances(address));
    counter++;
  }
}
async function consoleOrders(orders) {
  for (const order of orders) {
    const timestamp = order.timestamp;
    const name = order.customerName;
    const from = order.customerAddress;
    const message = order.note;
    console.log(
      `At ${timestamp},name ${name},address ${from},message ${message}`
    );
  }
}
async function main() {
  const [owner, from1, from2, from3] = await hre.ethers.getSigners();
  // const coffee = await hre.ethers.getContractFactory("CoffeeShop");
  // const contract = await coffee.deploy(); //instance of contract
  const contract = await hre.ethers.deployContract("CoffeeShop");

  await contract.waitForDeployment();
  console.log("Address of contract:", contract.target);

  const addresses = [
    owner.address,
    from1.address,
    from2.address,
    from3.address,
  ];
  console.log("Before buying coffee");
  await consoleBalances(addresses);

  const amount = { value: hre.ethers.parseEther("1") };
  await contract.connect(from1).buyCoffee("from1", "Very nice coffee", amount);
  await contract.connect(from2).buyCoffee("from2", "ENJOY", amount);
  await contract
    .connect(from3)
    .buyCoffee("from3", "ENJOY MAN", amount);

  console.log("After buying coffee");
  await consoleBalances(addresses);

  const orders = await contract.getOrders();
  consoleOrders(orders);
}


// async function main() {
  
// }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
