const moneyUnits = {
    "PENNY": 1, "NICKEL": 5, "DIME": 10, "QUARTER": 25, "ONE": 100, "FIVE": 500, "TEN": 1000, "TWENTY": 2000, "ONE HUNDRED": 10000
}// set constant money units as multpying them with 100

function checkCashRegister(price, cash, cid) {
    let changeTotal = cash * 100 - price * 100; //put them on the same level
    let change = [];
    let status = "";
    let sum = 0;
    let newCid = cid.filter((money) => money[1] !== 0).reverse(); //reversed it so i can start reading from HUNDRED
    newCid.forEach((money) => {
        let currency = money[0];
        let currencySum = money[1] * 100;
        sum += currencySum;
        let howMany = 0;
        while (sum >= moneyUnits[currency] && currencySum > 0) {
            howMany += moneyUnits[currency];
            currencySum -= moneyUnits[currency];
            changeTotal += moneyUnits[currency];
        }
        if (howMany !== 0) {
            change.push([currency, howMany / 100]);
        }
    });
    if (sum > 0) {
        status = "INSUFFICIENT_FUNDS";
        change = [];
    } else if (change === 0) {
        status = "CLOSED";
        change = cid;
    } else {
        status = "OPEN";
    }
    return { "status": status, "change": change }

}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);