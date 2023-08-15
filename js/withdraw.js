document.getElementById('withdraw-btn').addEventListener('click',function(){
    let withdrawInput = document.getElementById('withdraw-input')
    let withdrawAmountString = withdrawInput.value
    let withdrawAmount = parseFloat(withdrawAmountString)
    let balanceTotal = document.getElementById('balance-displayValue')
    let newtotalBalanceString = balanceTotal.innerText
    let newTotalBalanceAmount = parseFloat(newtotalBalanceString)

  if(withdrawAmount > newTotalBalanceAmount ){
    alert("You don't have suffucient balence")
  }
    else if (withdrawAmountString === '') {
       alert('Please enter an amount')
     }
  else{
    let withdrawDisplayValue = document.getElementById('withdraw-displayValue')
    let withdrawHistoryString = withdrawDisplayValue.innerText
    let withdrawHistory = parseFloat(withdrawHistoryString)
    
    let totalWithdrawAmount = withdrawHistory + withdrawAmount
    withdrawDisplayValue.innerText = totalWithdrawAmount
    withdrawInput.value = ''

    // Total Balence

    let finalBalance = newTotalBalanceAmount - withdrawAmount
    balanceTotal.innerText = finalBalance
    
}
alert('Withdraw Succesfull!')
})