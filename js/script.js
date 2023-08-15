document.getElementById('login-btn').addEventListener('click',function(){
   const userEmail = document.getElementById('user-email')
   const userPassword = document.getElementById('user-password')
   let email = userEmail.value
   let password = userPassword.value
   if(email == '' && password ==''){
      alert('Please enter your Email and Password first')
   }
   else if (email == '') {
       alert('Please enter your Email first')
   }
   else if(password ==''){
       alert('Please enter your Password first')
   }
  
   if (password == 'password') {
      window.location.href = './bank.html'
     
   } 
   else if(password != 'password') {
     alert('Plese enter the correct password')
   }
})