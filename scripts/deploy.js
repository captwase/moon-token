const hre = require("hardhat");

async function main() {
  const MoonToken = await hre.ethers.getContractFactory("MoonToken");
  const moonToken = await MoonToken.deploy(100000000, 50);

  await moonToken.deployed();

  console.log("Moon Token deployed: ", moonToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;O
});
