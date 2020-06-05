function fetchdata(){

    fetch('http://localhost:3000/items')
        .then((res) => res.json())
        .then((pc) => {

            let result = `<h2 class="sec">PRODUCTS</h2>`
            pc.forEach(user => {
                result +=  
                `<div class="content section">
                <div class="shop item">
                <div class="image">
                <img src ="${user.image}" alt="${user.image}">
                <h3>${user.name}</h3>
                <h3>rs${user.price}</h3>
                <button class="addtocart" href="#" onclick="addtocart('${user.userid}','${user.name}','${user.image}','${user.price}')">ADD TO CART</button>  
                </div>
                </div>
                </div>`
             });
             document.getElementById("product").innerHTML= result;
        })
        .catch((error) => {
            console.log(error)
        })
}
fetchdata();

function addtocart(userid,name,image,price) {
    fetch('http://localhost:3000/carts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "userid": Number(userid),
            "name": name,
            "image": image,
            "price": Number(price)
        })

    })
};
