'use strict';

function wertHolen() {
    const totalAmountBill = Number(document.getElementById('totalBill').value);
    const inputPercantage = Number(document.getElementById('inputPercentage').value);
    const peopleSplit = Number(document.getElementById('inputPeopleSplit').value);

    const tipTotal = totalAmountBill /100 * inputPercantage;
    const totalAmountWithTax = totalAmountBill + tipTotal;
    const payPerPerson = totalAmountWithTax / peopleSplit


    document.getElementById('textAusgeben').innerHTML = `You total bill is ${totalAmountWithTax}, each person has to pay ${payPerPerson}`
}

