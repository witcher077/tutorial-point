
var ApiData = null;
const product_container = document.getElementById('product-container');
const store_search_box = document.getElementById('store_search_box');

fetch("https://fakestoreapi.com/products")
    .catch(err => console.log(err))
    .then(d => d.json())
    .then(data => {
        ApiData = data;
        console.log(ApiData);
        let card;
        store_search_box.addEventListener("change",(e)=>{
            ApiData=data.filter(ele=>ele.title.toLowerCase().includes(e.target.value.toLowerCase()) )
            console.log(ApiData);
        })
        if (ApiData == null) {
            card = '<h1 class="loading">Loading.....</h1>';
            product_container.insertAdjacentHTML('beforeend', card)
        }
        else {
            ApiData.forEach(element => {
                card = ` <div class="card" style="background-color:rgb(241 245 249)">
            <img style="border-radius: 10px;" width="220px" height="200px" src=${element.image} />
            <div class="details">
                <h5 class="tittle">${element.title}</h5>
                <div class="price-and-rating"><h6>₹ ${element.price} /-</h6><h6>${element.rating.rate} ⭐</h6></div>
    
                <p class="discription">${element.description}</p>
                <button>Add to Cart</button>
        
            </div>
        </div>`;
        product_container.insertAdjacentHTML('beforeend', card)
            })
        }
        
    })


