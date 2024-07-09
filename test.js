const loginBtn = document.getElementById('login')
// const registerBtn = document.querySelector('.register')
loginBtn.addEventListener("click", async() => {
  const {value:formValues} = await Swal.fire({
    title: "Type your credentials", 
    html: `
      <input id="username" class="swal2-input" placeholder = "username">
      <input id="password" class="swal2-input" placeholder = "password" type ="password">
    `,
    focusConfirm: false,
    preConfirm: () => {
    return [
        document.getElementById("username").value,
        document.getElementById("password").value,
      ];
    },
  });
  if (formValues) {
    const _username = formValues[0];
    const _password = formValues[1]
    
    const {data} = await axios (url + 'users')
    const currentUser = data.find((user) => {
       if(user.username === _username && user.password === _password){
          return user
        }
      }); 
      if(currentUser) {
        user = true;
        checkUser();
      }else {
        Swal.fire('bele bir istifadeci yoxdur')
      }

  }
});