const productElements = document.querySelector('#body123');
if (localStorage.getItem("idProduct")) {
    let product = findProductById(localStorage.getItem("idProduct"));
    productElements.innerHTML = `  
        <div id="body_left">
            <img id="product" src="${product.imageHCN}" alt="${product.name}">
        </div>
        <div id="body_right">
            <h2>${product.name}</h2>
            <p id="category">${product.category}</p>
            <p id="price">${product.price}$</p>
            <div id="size_board">
                <div id="size_board_top">
                    <p id="select">Select Size</p>
                    <p id="guide">Size Guide</p>
                </div>
                <div id="size_board_bottom">
                    <div class="size">EU 40</div>
                    <div class="size">EU 41</div>
                    <div class="size">EU 42</div>
                    <div class="size">EU 42.5</div>
                    <div class="size">EU 43</div>
                    <div class="size">EU 43.5</div>
                    <div class="size">EU 44</div>
                    <div class="size">EU 44.5</div>
                    <div class="size">EU 45</div>
                    <div class="size">EU 45.5</div>
                    <div class="size">EU 46</div>
                    <div class="size">EU 47</div>
                </div>
            </div>
            <button onclick=addCart(${newData[localStorage.getItem('idProduct') - 1].id})>Add to Bag</button>
            <div id="favourite">
                Favourite
            </div>
            <div id="free_delivery">
                Free Delivery and Returns
            </div>
        </div>
        `;
} else {
    alert("Please select the product you want to buy");
    location.href = "main_page.html";
}
function findProductById(id) {
    for (let i = 0; i < newData.length; i++) {
        if (id == newData[i].id)
            return newData[i];
    }
}
function addCart(id) {
    const product = findProductById(id);
    if (localStorage.getItem("cart")) {
        let cartLocal = JSON.parse(localStorage.getItem("cart"));
        for (let i = 0; i < cartLocal.length; i++) {
            if (cartLocal[i].id == id) {
                alert("San Pham Da Duoc Dat");
                return;
            }
        }
        cartLocal.push(product);
        localStorage.setItem("cart", JSON.stringify(cartLocal));
    } else {
        let cartLocal = [];
        cartLocal.push(product);
        localStorage.setItem("cart", JSON.stringify(cartLocal));

    }
    updateQuantityCart();
}

function updateQuantityCart() {
    if (localStorage.getItem("cart")) {
        let cartLocal = JSON.parse(localStorage.getItem("cart"));
        let quantity = cartLocal.length;
        document.querySelector("#wrapper_cart").innerText = quantity;
    } else {
        document.querySelector("#wrapper_cart").innerText = 0;
    }
}
updateQuantityCart();