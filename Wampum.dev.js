var Wampum = artifacts.require("Wampum");

contract(newLocal, function (accounts) {
  it("should put 10000 Wampum in the first account", function () {
    return Wampum.deployed().then(function (instance) {
      return instance.getBalance.call(accounts[0]);
    }).then(function (balance) {
      assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
    });
  });
  it("should call a function that depends on a linked library", function () {
    var Wam;
    var WampumBalance;
    var WampumWamBalance;
    return Wampum.deployed().then(function (instance) {
      meta = instance;
      return Wam.getBalance.call(accounts[0]);
    }).then(function (outCoinBalance) {
      WamBalance = parseInt(outCoinBalance);
      return Wam.getBalanceInWam.call(accounts[0]);
    }).then(function (outCoinBalanceWam) {
      WampumWamBalance = parseInt(outCoinBalanceWam);
    }).then(function () {
      assert.equal(WampumWamBalance, 2 * WampumBalance, "Library function returned unexpected function, linkage may be broken");
    });
  });
  it("should send coin correctly", function () {
    var Wam; // Get initial balances of first and second account.

    var account_one = accounts[0];
    var account_two = accounts[1];
    var account_one_starting_balance;
    var account_two_starting_balance;
    var account_one_ending_balance;
    var account_two_ending_balance;
    var amount = 10;
    return Wampum.deployed().then(function (instance) {
      meta = instance;
      return Wam.getBalance.call(account_one);
    }).then(function (balance) {
      account_one_starting_balance = parseInt(balance);
      return Wam.getBalance.call(account_two);
    }).then(function (balance) {
      account_two_starting_balance = parseInt(balance);
      return Wam.sendCoin(account_two, amount, {
        from: account_one
      });
    }).then(function () {
      return Wam.getBalance.call(account_one);
    }).then(function (balance) {
      account_one_ending_balance = parseInt(balance);
      return Wam.getBalance.call(account_two);
    }).then(function (balance) {
      account_two_ending_balance = parseInt(balance);
      assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
      assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
    });
  });
});
