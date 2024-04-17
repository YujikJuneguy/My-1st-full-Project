const registerForm = document.getElementById('registerForm')
const usernameValue = document.getElementById('usernameValue')
const passwordValue = document.getElementById('passwordValue')
const url = 'http://localhost:3000/users/'

registerForm.addEventListener('submit',async(e) => {
    e.preventDefault();
    const {data} = await axios(url)
    const newUser = {
        username:usernameValue.value,
        password:passwordValue.value,
        myitems:[]
    }
    const currentUser = data.find((user) => {
        if (user.username.toLowerCase() === newUser.username.toLowerCase()) {
            return user
        }
    });

    if (usernameValue.value.trim() && passwordValue.value.trim()) {
        if (!currentUser) {
            axios.post(url,newUser).then(({statusText}) => {
                if(statusText === 'Created'){
                    alert('Ugurla elave edildi')
                }  
            })
        }else {
            alert('already signed up')
        }
    }else{
        alert('bos yazmaq olmaz')
    }
 
    usernameValue.value = ""
    passwordValue.value = ""
})
