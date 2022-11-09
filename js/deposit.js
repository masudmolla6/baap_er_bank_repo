// step-1
document.getElementById('btn-deposit').addEventListener('click', function () {
    const inputFieldElement = document.getElementById('deposit-field');
    const inputFieldElementString = inputFieldElement.value;
    const newDeposit = parseFloat(inputFieldElementString);

    // step-2
    const depositFieldElement = document.getElementById('deposite-totall');
    const depositFieldElementString = depositFieldElement.innerText;
    const previousDeposite = parseFloat(depositFieldElementString);
    // step-3
    const currentTotalDeposite = newDeposit + previousDeposite;
    depositFieldElement.innerText = currentTotalDeposite;

    // step-4
    const balanceFieldElement = document.getElementById('balance-total');
    const balanceFieldElementString = balanceFieldElement.innerText;
    const previousBalance = parseFloat(balanceFieldElementString);
    
    // step-5
    const currentTotalBalance = previousBalance + newDeposit;
    balanceFieldElement.innerText = currentTotalBalance;

    // step-6
    inputFieldElement.value = '';

})
