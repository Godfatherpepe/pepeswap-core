const PepeswapFactory = artifacts.require("PepeswapFactory");

module.exports = function (deployer, network, accounts) {
  let currentAccount = accounts[0]
  console.log('Current Account: ', currentAccount);
  if(network == 'testnet') {
    console.warn('WARNING: Using account[1] for testnet')
    currentAccount = accounts[1]
  }
  deployer.deploy(PepeswapFactory, currentAccount, {from: currentAccount});
};
