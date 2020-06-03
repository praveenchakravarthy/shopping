
function fetchdata() {
    fetch ('http://localhost:3000/products')
    .then ((res) => res.json())
    .then(pc => {
       
        pc.forEach(user => {
            return `
            <div id="product">
            <div class="image">
           <img src ="${user.image}" alt="${user.image}">
            <h3>name:${user.name}</h3>
            <h3>price:${user.price}</h3>
            
            </div>
            </div>`
                    
         
        });
        document.getElementById("product").innerHTML= pc;
        })
        .catch(error => {
            console.log(error)
         })

        };

        fetchdata();