
function cartdata() {
    var final = 0;
    //var quantity = 0;
    fetch ('http://localhost:3000/carts')
    .then ((res) => res.json())
    .then(pc => {
         
        let fresult =`<h2>Welcome to cart!!</h2>`;
        let result = `<h2 class="sec">PRODUCTS</h2>`;
        pc.forEach(user => {
           var cost=user.price;
           final= parseInt(final)+parseInt(cost);
           
           //var num=user.id;
           //quantity= parseInt(quantity)+parseInt(num);

            fresult += `
            
            <div class="content section">
            <div class="shop item">
            <div class="image">
            <img src ="${user.image}" alt="${user.image}">
            <h3>${user.name}</h3>
            <h3>rs${user.price}</h3>
            <button class="addtocart" href="#" onclick="remove('${user.id}')">REMOVE</button> 
            </div>
            </div>
            </div>
            `
           
        });

        fresult += `<h2 class ="sec">TOTAL : ${final}</h2>`;
        
    document.getElementById("cart").innerHTML= fresult;
    document.getElementById("product").innerHTML= result;
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
