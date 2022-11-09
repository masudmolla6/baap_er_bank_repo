// step-1
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2
    const inputFieldElement = document.getElementById('withdraw-field');
    const inputFieldElementString = inputFieldElement.value;
    const newWithDraw = parseFloat(inputFieldElementString);
    // step-3
    const withdrawFieldElement = document.getElementById('withdraw-total');
    const withdrawFieldElementString = withdrawFieldElement.innerText;
    const previousWithDraw = parseFloat(withdrawFieldElementString);

    // step-4
    const currentTotalWithdraw = newWithDraw + previousWithDraw;
    withdrawFieldElement.innerText = currentTotalWithdraw;


    inputFieldElement.value = '';


    // step-5
    const balanceFieldElement = document.getElementById('balance-total');
    const balanceFieldElementString = balanceFieldElement.innerText;
    const previousBalance = parseFloat(balanceFieldElementString);

    // step-6
    const currentTotalBalance = previousBalance - newWithDraw;
    balanceFieldElement.innerText = currentTotalBalance;









})