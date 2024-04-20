const url = 'http://localhost:3000/';
const productContainer = document.querySelector('.products')
const navmenu = document.getElementById('navmenu')


/* __________________________________________istifadecinin olub olmadi]ini yoxlayiriq__________________________*/ 
let user ="";
const checkUser = () => {
  if (user) {
  navmenu.innerHTML = `<a class="new" href="newItem.html">Add your Item</a>
                       <a class="fav" href="">Favorites</a>
                       <a class="logout" href="./index.html">Log out</a>`;
}else {
  navmenu.innerHTML = `<a class="register" href="./register.html">Sign Up</a>
                       <a id="login" href="#">Log in</a>`
}
};
checkUser()

/* __________________________________________Melumatin getirilmesi___________________________________________*/ 

const writeData = (data) => {
    data.forEach(({id,brand,price,status,image}) => {
        productContainer.innerHTML += `<div class="guitars">
        <img src="${image}" alt="">
        <h4>${brand}</h4> 
        <p>${price}</p>
        <p>${status}</p>
        <button class="btn btn-success">Add to Favorites</button>
        <button class="btn btn-danger" onclick=deleteGood('${id}')>Sold /button>
        <button class="btn btn-warning" onclick=editGood('${id}')> dit</button>
    </div>`;
    });
};

const getAwaitAxios = async() => {
  const {data} = await axios (url + 'products')
  writeData(data);
};
getAwaitAxios()

/* _____________________________________ Login Sweetalert, v' istifadecinin olun olmamas; haqda _________________*/ 

const loginBtn = document.getElementById('login')
const registerBtn = document.querySelector('.register')
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
    // console.log(formValues);
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

// /*--------------------------------deleteItem----------------------------------*/ 

const deleteGood = (id) => {
    Swal.fire({
        title: "This Babe has been SOLD",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      }).then((result) => {
        axios.delete(`${url}/${id}`)
      }).finally(() => { 
          location.reload();
      })     
        } 
      
// /*--------------------------------------Edit---------------------------------*/ 

const editGood = async(id) => {
  const {data:{brand,price,image}}  = await axios(`${url}/${id}`);
  const _brand = prompt('Type the tytle of the brand',brand)
  const _price = prompt('Type the cost', price)
  const _image = prompt('change the image',image)

  const object = {
    brand:_brand,
    price:_price,
    image:_image
  }
  
  axios.put(`${url}/${id}`,object).then((response) => {
    if (response.statusText === 'OK') {
      location.reload();
    }
  })
};




