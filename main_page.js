import { auth } from "./authentication_s.js"
const newDataELements = document.querySelector(".newData");

let html = "";
for (let i = 0; i < 3; i++) {
  let image = newData[i].image;
  let name = newData[i].name;
  let id = newData[i].id;
  let price = newData[i].price;
  let category = newData[i].category;
  html += `
 <div class="list">
                <img src="${image}" alt="${name}" class="shoes" onclick="moveToDetail(${id})">
                <p class="name">${name}</p>
                <p class="category">${category}</p>
                <p class="price">${price}$</p>
 </div>      
  `;
}
newDataELements.innerHTML = html;
function moveToDetail(id) {
  localStorage.setItem("idProduct", id);
  location.href = "product.html"
}
const jordan1Elements = document.querySelector(".jordan1");

let htmlj1 = "";
for (let i = 3; i < 6; i++) {
  let imagej1 = newData[i].image;
  let namej1 = newData[i].name;
  let idj1 = newData[i].id;
  let pricej1 = newData[i].price;
  let categoryj1 = newData[i].category;
  htmlj1 += `
 <div class="list">
                <img src="${imagej1}" alt="${namej1}" class="shoes" onclick="moveToDetail(${idj1})">
                <p class="name">${namej1}</p>
                <p class="category">${categoryj1}</p>
                <p class="price">${pricej1}$</p>
 </div>
  `;
}
jordan1Elements.innerHTML = htmlj1;

const basketballElements = document.querySelector(".basketball");

let htmlbb = "";
for (let i = 6; i < newData.length; i++) {
  let imagebb = newData[i].image;
  let namebb = newData[i].name;
  let idbb = newData[i].id;
  let pricebb = newData[i].price;
  let categorybb = newData[i].category;
  htmlbb += `
 <div class="list">
                <img src="${imagebb}" alt="${namebb}" class="shoes" onclick="moveToDetail(${idbb})">
                <p class="name">${namebb}</p>
                <p class="category">${categorybb}</p>
                <p class="price">${pricebb}$</p>
 </div>
  `;
}
basketballElements.innerHTML = htmlbb;

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
checkLogin();

function checkLogin() {
  if (auth.currentUser) {
    document.querySelector(".account").innerHTML = `
        <div class="wrapperAccount">
                    <i class="fa-solid fa-user" id="user_logo"></i>
                    ${auth.currentUser.email}
                    <ul id="log_out">
                        <li id="dangxuat" onclick="logout()">Log out</li>
                    </ul>
                </div>
    `;
  } else {
    document.querySelector(".account").innerHTML = `
        <a href="dangnhap.html"><button id="sign">Sign in</button></a>
    `;
  }
}
function logout() {
  localStorage.removeItem("user");
  alert("Good Bye!!!");
  checkLogin();
}
window.moveToDetail = moveToDetail