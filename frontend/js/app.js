const url = 'http://localhost:3000/products/';
const productContainer = document.querySelector('.products')
const register = document.querySelector('register')
const login = document.querySelector('login')
const navmenu =document.getElementById('navmenu')

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
  const {data} = await axios (url)
  writeData(data);
};
getAwaitAxios()

/*--------------------------------deleteItem----------------------------------*/ 

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
      
/*--------------------------------------Edit---------------------------------*/ 

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
