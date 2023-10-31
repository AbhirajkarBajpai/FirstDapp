// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CoffeeShop {
    struct CoffeeOrder {
        string customerName;
        uint256 timestamp;
        address customerAddress;
        uint256 pricePaid;
        string note;
    }

    CoffeeOrder[] public coffeeOrders;
    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }


    function buyCoffee(string memory name, string memory message) public payable {
        require(msg.value > 0, "Please pay greater than 0 ether");
        // uint256 coffeePrice = 1 ether; 
        // require(msg.value >= coffeePrice, "Insufficient payment for a coffee");
        owner.transfer(msg.value);

        CoffeeOrder memory order = CoffeeOrder(name, block.timestamp, msg.sender, msg.value, message);
        coffeeOrders.push(order);
    }

    function getOrdersCount() public view returns (uint256) {
        return coffeeOrders.length;
    }

    function getOrder(uint256 index) public view returns (string memory, uint256, address, uint256, string memory) {
        require(index < coffeeOrders.length, "Order index out of range");
        CoffeeOrder storage order = coffeeOrders[index];
        return (order.customerName, order.timestamp, order.customerAddress, order.pricePaid, order.note);
    }
    function getOrders() public view returns (CoffeeOrder[] memory) {
        return coffeeOrders;
    }

    // function withdrawBalance() public onlyOwner{
    //     uint256 balance = address(this).balance;
    //     owner.transfer(balance);
    // }
}
