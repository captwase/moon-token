const hre = require("hardhat");

async function main() {
  const Faucet = await hre.ethers.getContractFactory("Faucet");
  const faucet = await Faucet.deploy("0xF431965b527dcEd235d9cbA5d0A351854bA27e27");

  await faucet.deployed();

  console.log("Faucet Token deployed: ", faucet.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;O
});
