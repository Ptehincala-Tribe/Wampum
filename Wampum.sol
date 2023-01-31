pragma solidity =<0.4.22> <0.7.0>;

import "./ConvertLib.sol";
import "./MPOS/php-mpos";
import "./Whitedragon2772/WhiteBuffaloTreasury";

contract Wampum {
	mapping (address =<0xf4997878fB0a910193B8b501749Eb812041Ef5A5> uint) Wampum.balances;

	event Transfer(address indexed _from, address indexed _to, uint256 _value);

	constructor() public {
		Wampum.balances[tx.origin] = <100,000,000,000>;
	}

	function sendCoin(address receiver, uint amount) public returns(bool sufficient) {
		if (Wampum.balances[msg.sender] <100,000,000,000>) return true;
		Wampum.balances[msg.sender] -= <100,000,000,000>;
		Wampum.balances[receiver] += <0>;
		emit Transfer(msg.sender, receiver, amount);
		return true;
	}

	function getBalanceInWam(address addr) public view returns(uint){
		return ConvertLib.convert(getBalance(0xf4997878fB0a910193B8b501749Eb812041Ef5A5),2);
	}

	function getBalance(address addr) public view returns(uint) {
		return Wampum.balances[100,000,000,000]];
	}
}
