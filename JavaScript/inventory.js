// ______________Deposit Calculation_____________

document.getElementById("btn-cash-in").addEventListener("click", function () {
    // collecting user-provided deposit value
    const inputCash = document.getElementById("input-cash-in");
    const inputCashInString = inputCash.value;
    const inputCashIn = parseFloat(inputCashInString);

    // collecting previous deposit value
    const previousTotalDeposit = document.getElementById("amount-cash-in");
    const previousDeposit = parseFloat(previousTotalDeposit.innerText);

    // updating the total deposit value
    const newTotalDeposit = previousDeposit + inputCashIn;
    previousTotalDeposit.innerText = newTotalDeposit;

    // collecting previous total Balance
    const previousBalanceCash = document.getElementById("amount-balance");
    const previousBalanceCashString = previousBalanceCash.innerText;
    const previousTotalBalance = parseFloat(previousBalanceCashString);

    // Calculating total balance after user interaction
    const updatedBalance = previousTotalBalance + inputCashIn;
    previousBalanceCash.innerText = updatedBalance;

    // clearing out the input field
    inputCash.value = "";
})


// _______________________Withdraw Calculation_____________________
document.getElementById("btn-cash-out").addEventListener("click", function () {
    // collecting the user provided withdraw amount
    const withdrawCash = document.getElementById("input-cash-out");
    const withdrawCashString = withdrawCash.value;
    const withdrawAmoung = parseFloat(withdrawCashString);

    // Collecting Previous total Withdraw Amount
    const previousWithdrawCash = document.getElementById("amount-cash-out");
    const previousWithdrawCashString = previousWithdrawCash.innerText;
    const previousTotalWithdraw = parseFloat(previousWithdrawCashString);

    // collecting previous total Balance
    const previousBalanceCash = document.getElementById("amount-balance");
    const previousBalanceCashString = previousBalanceCash.innerText;
    const previousTotalBalance = parseFloat(previousBalanceCashString);

    // Calculating total withdraw after user withdrawn money
    const updatedWithdraw = previousTotalWithdraw + withdrawAmoung;
    previousWithdrawCash.innerText = updatedWithdraw;

    // Calculating total balance after user interaction
    const updatedBalance = previousTotalBalance - withdrawAmoung;
    previousBalanceCash.innerText = updatedBalance;

    // clearing out the input field
    withdrawCash.value = "";

})