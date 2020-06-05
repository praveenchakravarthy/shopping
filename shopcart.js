
function cartdata() {
    fetch ('http://localhost:3000/carts')
    .then ((res) => res.json())
    .then(pc => {
         
        let result =`<h2>Welcome to cart!!</h2>`;

        pc.forEach(user => {
            result += `
           
            <div class="content section">
            <div class="shop item">
            <div class="image">
            <img src ="${user.image}" alt="${user.image}">
            <h3>${user.name}</h3>
            <h3>rs${user.price}</h3>
            <button class="addtocart" href="#" onclick="remove('${user.id}')">REMOVE</button> 
            </div>
            </div>
            </div>`
        });
    document.getElementById("cart").innerHTML= result;
        })
        .catch(error => {
            console.log(error)
         })
        }
cartdata();




function remove(id) {
fetch('http://localhost:3000/carts/' + id, {
  method: 'DELETE'
})

}
