pragma solidity =0.5.16;

import '../PepeswapBEP20.sol';

contract BEP20 is PepeswapBEP20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
