
document.getElementById('deposit-btn').addEventListener('click',function(){
// Deposit 
    let depoAmount = document.getElementById('deposit-input')
    let newDepositAmountString =  depoAmount.value
    let newDepositAmount = parseFloat(newDepositAmountString)

    if (newDepositAmountString === '') {
        alert('Please enter an amount')
      }

    else{
    let depositDisplayValue = document.getElementById('deposit-display-Value')
    let priviousValueDepositString = depositDisplayValue.innerText
    let priviousValueDeposit = parseFloat(priviousValueDepositString)

    let totalDeposit = priviousValueDeposit + newDepositAmount
    depositDisplayValue.innerText = totalDeposit
    depoAmount.value = ''
   

// Total Balance
   let balanceValue = document.getElementById('balance-displayValue')
   let balance = balanceValue.innerText

   let totalBalance = parseFloat(newDepositAmount) + parseFloat(balance)
   balanceValue.innerText = totalBalance
    }
    alert('Deposit Succesfull!')
})





