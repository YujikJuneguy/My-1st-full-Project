// const url = 'http://localhost:3000/';
// const productContainer = document.querySelector('.products')
// const register = document.querySelector('.register')
// const login = document.getElementById('login')
// const navmenu =document.getElementById('navmenu')

// const user ="";
// const checkUser = () => {
//   if (user) {
//   navmenu.innerHTML = `<a class="new" href="newItem.html">Add your Item</a>
//                        <a class="fav" href="">Favorites</a>
//                        <a class="logout" href="./index.html">Log out</a>`;
// }else {
//   navmenu.innerHTML = `<a class="register" href="./register.html">Sign Up</a>
//                        <a id="login" href="#">Log in</a>`
// }
// }


// const writeData = (data) => {
//     data.forEach(({id,brand,price,status,image}) => {
//         productContainer.innerHTML += `<div class="guitars">
//         <img src="${image}" alt="">
//         <h4>${brand}</h4> 
//         <p>${price}</p>
//         <p>${status}</p>
//         <button class="btn btn-success">Add to Favorites</button>
//         <button class="btn btn-danger" onclick=deleteGood('${id}')>Sold /button>
//         <button class="btn btn-warning" onclick=editGood('${id}')> dit</button>
//     </div>`;
//     });
// };

// const getAwaitAxios = async() => {
//   const {data} = await axios (url + 'products')
//   writeData(data);
// };
// getAwaitAxios()

// /* Login Sweetalert*/ 

// login.addEventListener("click", async() => {
//   const {value:formValues} = await Swal.fire({
//     title: "Type your credentials", 
//     html: `
//       <input id="swal-input1" class="swal2-input">
//       <input id="swal-input2" class="swal2-input">
//     `,
//     focusConfirm: false,
//     preConfirm: async () => {
//       const _username = document.getElementById("swal-input1").value
//       const _password = document.getElementById("swal-input1").value;
//       const {data} = await axios (url + 'users')
//       const currentUser = data.find((user) => {
//         if(user.username === _username && user.password === password){
//           return user
//         }
//       });
//       if(!currentUser) {
//         user === true;
//         checkUser();
//       }else {
//         alert('bele bir istifadeci yoxdur')
//       }
//     }
//   });
// })

// /*--------------------------------deleteItem----------------------------------*/ 

// const deleteGood = (id) => {
//     Swal.fire({
//         title: "This Babe has been SOLD",
//         showClass: {
//           popup: `
//             animate__animated
//             animate__fadeInUp
//             animate__faster
//           `
//         },
//         hideClass: {
//           popup: `
//             animate__animated
//             animate__fadeOutDown
//             animate__faster
//           `
//         }
//       }).then((result) => {
//         axios.delete(`${url}/${id}`)
//       }).finally(() => { 
//           location.reload();
//       })     
//         } 
      
// /*--------------------------------------Edit---------------------------------*/ 

// const editGood = async(id) => {
//   const {data:{brand,price,image}}  = await axios(`${url}/${id}`);
//   const _brand = prompt('Type the tytle of the brand',brand)
//   const _price = prompt('Type the cost', price)
//   const _image = prompt('change the image',image)

//   const object = {
//     brand:_brand,
//     price:_price,
//     image:_image
//   }
  
//   axios.put(`${url}/${id}`,object).then((response) => {
//     if (response.statusText === 'OK') {
//       location.reload();
//     }
//   })
// };




let users = ['Kamran', 'Ramin', 'Ayxan', 'Firuddin', 'Elsever', 'Ali'];
for (let index =  0; index < users.length; index++) {
  const element = users[index];
  console.log(element);
}
