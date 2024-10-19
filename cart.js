const cartWrapper = document.querySelector(".cartWrapper");
function renderCart() {
    // Reset cart
    let html = "";
    if (localStorage.getItem("cart")) {
        if (JSON.parse(localStorage.getItem("cart")).length > 0) {
            let cartLocal = JSON.parse(localStorage.getItem("cart"));
            let quantity = cartLocal.length;
            html += `
                <div class="d-flex justify-content-between align-items-center mb-5" id="quantity">
                                        <h1 class="fw-bold mb-0 text-black">Shopping Cart</h1>
                                        <h6 class="mb-0 text-muted">${quantity} items</h6>
                                    </div>`;
            for (let i = 0; i < cartLocal.length; i++) {
                let image = cartLocal[i].image;
                let name = cartLocal[i].name;
                let category = cartLocal[i].category;
                let price = cartLocal[i].price;
                let id = cartLocal[i].id;
                html += `<hr class="my-4">
                <div class="col-md-2 col-lg-2 col-xl-2">
                                                    <img src=${image}
                                                    class="img-fluid rounded-3" alt="${name}">
                                            </div>
                                            <div class="col-md-3 col-lg-3 col-xl-3">
                                                <h6 class="text-muted">${name}</h6>
                                                <h6 class="text-black mb-0">${category}</h6>
                                            </div>
                                            <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                <!-- <button data-mdb-button-init data-mdb-ripple-init
                                                    class="btn btn-link px-2"
                                                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                    <i class="fas fa-minus"></i>
                                                </button> -->

                                                <input class="quantity" value="1" />

                                                <!-- <button data-mdb-button-init data-mdb-ripple-init
                                                    class="btn btn-link px-2"
                                                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                    <i class="fas fa-plus"></i>
                                                </button> -->
                                            </div>
                                            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                <h6 class="mb-0">$${price}</h6>
                                            </div>
                                            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                                <a href="#!" class="text-muted" onclick="deleteCart(${id})"><i class="fas fa-times"></i></a>
                                            </div>`;
            }

            html += `<div class="p-5">
                        <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                        <hr class=my-4">

                                        <div class="d-flex justify-content-between mb-4">
                                            <h5 class="text-uppercase">${quantity} items</h5>
                                            <h5>$${updateTotalPrice()}</h5>
                                        </div>

                                        <h5 class="text-uppercase mb-3">Shipping</h5>

                                        <div class="mb-4 pb-2">
                                            <select data-mdb-select-init>
                                                <option value="1">Standard-Delivery- €5.00</option>
                                            </select>
                                        </div>

                                        <h5 class="text-uppercase mb-3">Give code</h5>

                                        <div class="mb-5">
                                            <div data-mdb-input-init class="form-outline">
                                                <input type="text" id="form3Examplea2"
                                                    class="form-control form-control-lg" />
                                                <label class="form-label" for="form3Examplea2">Enter your code</label>
                                            </div>
                                        </div>

                                        <hr class="my-4">

                                        <div class="d-flex justify-content-between mb-5">
                                            <h5 class="text-uppercase">Total price</h5>
                                            <h5>$${updateTotalPrice() + 5} </h5>
                                        </div>

                                        <button type="button" data-mdb-button-init data-mdb-ripple-init
                                            class="btn btn-dark btn-block btn-lg"
                                            data-mdb-ripple-color="dark" onclick=" checkout()">Register</button>

                                    </div>
          `;
            cartWrapper.innerHTML = html;
        } else {
            cartWrapper.innerHTML = `
          <div style="display:flex;justify-content:center;align-items:center">
          <img src="image/empty-cart-1.png"/ style="width:900px;height:500px">
          </div>`;
        }
    } else {
        cartWrapper.innerHTML = `
        <div style="display:flex;justify-content:center;align-items:center">
        <img src="image/empty-cart-1.png"/ style="width:900px;height:500px">
        </div>`;
    }
}
renderCart();
function deleteCart(id) {
    let oldCart = JSON.parse(localStorage.getItem("cart"));
    let newCart = [];
    for (let i = 0; i < oldCart.length; i++) {
        if (oldCart[i].id != id) {
            newCart.push(oldCart[i]);
        }
    }
    localStorage.setItem("cart", JSON.stringify(newCart));
    renderCart();
}

function updateTotalPrice() {
    if (localStorage.getItem("cart")) {
        let cartLocal = JSON.parse(localStorage.getItem("cart"));
        let sum = 0;
        for (let i = 0; i < cartLocal.length; i++) {
            let price = cartLocal[i].price;
            sum += price;
        }
        return sum;
    }
}

function checkout() {
    if (localStorage.getItem("user")) {
        alert("Thanh toán thành công");
        localStorage.removeItem("cart");
        location.href = "main_page.html";
    } else {
        alert("Mời bạn đăng nhập trước khi thanh toán");
        location.href = "dangnhap.html";
    }
}
