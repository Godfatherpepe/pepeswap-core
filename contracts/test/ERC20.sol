pragma solidity =0.5.16;

import '../PepeswapERC20.sol';

contract ERC20 is PepeswapERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
