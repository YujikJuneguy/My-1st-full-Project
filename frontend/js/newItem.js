const url = 'http://localhost:3000/products';

const productContainer =document.querySelector('.products');
const NewItemForm =document.getElementById('NewItemForm');
const brandInput =document.getElementById('brand')
const priceInput =document.getElementById('price')
const imageInput =document.getElementById('image')

NewItemForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const brand =brandInput.value
    const price =priceInput.value
    const image =imageInput.value
    const newItem = {
        brand,
        price,
        image,
        status: 'In Stock'
    };


    if (brand && price && image) {
        axios.post(url,newItem).then((res) => {
            if (res.statusText === 'Created') {
               
                   Swal.fire({
                     icon: "success",
                     title: "You Just added a new Item",
                     showConfirmButton: false,
                     timer: 1500
                   });
                location.reload();
            } 
        })
    } else {
       alert('please fill all the information')
    };
})