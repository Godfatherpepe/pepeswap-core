const PepeswapFactory = artifacts.require("PepeswapFactory");

module.exports = async function (deployer, _network, addresses) {
  await deployer.deploy(PepeswapFactory, addresses[0]);
  const pepeSwapFactory = await PepeswapFactory.deployed();
};
