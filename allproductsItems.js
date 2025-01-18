const projectsArray = [
    {
      "id": 0,
      "img": "img/product/product1.jpg",
      "img_hover": "img/product/product-1.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 185,
      "old_price": 225
    },
    {
      "id": 1,
      "img": "img/product/product2.jpg",
      "img_hover": "img/product/product-2.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 100,
      "old_price": 120
    },
    {
      "id": 2,
      "img": "img/product/product3.jpg",
      "img_hover": "img/product/product-3.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 140,
      "old_price": 200
    },
    {
      "id": 3,
      "img": "img/product/product4.jpg",
      "img_hover": "img/product/product-4.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 90,
      "old_price": 110
    },
    {
      "id": 4,
      "img": "img/product/product5.jpg",
      "img_hover": "img/product/product-5.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 350,
      "old_price": 420

    },
    {
      "id": 5,
      "img": "img/product/product6.jpg",
      "img_hover": "img/product/product-6.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 115,
      "old_price": 235
    },
    {
      "id": 6,
      "img": "img/product/product7.jpg",
      "img_hover": "img/product/product-7.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 225,
      "old_price": 280
    },
    {
      "id": 7,
      "img": "img/product/product8.jpg",
      "img_hover": "img/product/product-8.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 150,
      "old_price": 200
    },
    {
      "id": 8,
      "img": "img/product/product-1.jpg",
      "img_hover": "img/product/product1.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 180
    },
    {
      "id": 9,
      "img": "img/product/product-2.jpg",
      "img_hover": "img/product/product2.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 300
    },
    {
      "id": 10,
      "img": "img/product/product-3.jpg",
      "img_hover": "img/product/product3.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 250
    },
    {
      "id": 11,
      "img": "img/product/product-4.jpg",
      "img_hover": "img/product/product4.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 120
    },
    {
      "id": 12,
      "img": "img/product/product-5.jpg",
      "img_hover": "img/product/product5.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 90
    },
    {
      "id": 13,
      "img": "img/product/product-6.jpg",
      "img_hover": "img/product/product6.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 129
    },
    {
      "id": 14,
      "img": "img/product/product-7.jpg",
      "img_hover": "img/product/product7.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 180
    },
    {
      "id": 15,
      "img": "img/product/product-8.jpg",
      "img_hover": "img/product/product8.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 60
    } 

  ]
  
 

const products_dev = document.getElementById("products_dev");
const panner = document.getElementById("panner");
const count_item = document.getElementById("count-item");
const items_in_cart = document.querySelector(".items-in-cart");
const price_cart_head = document.querySelector(".price_cart_head");
const count_item_cart = document.querySelector(".count-item-cart");
const price_cart_total = document.querySelector(".price-cart-total");

// جلب product_cart من LocalStorage أو إنشاء مصفوفة فارغة إذا لم تكن موجودة
let product_cart = JSON.parse(localStorage.getItem('product_cart')) || [];

// عرض المنتجات
function displayProducts() {
    projectsArray.forEach((pro) => {
        const old_price = pro.old_price ? `<p class="old-price"><span>${pro.old_price}</span></p>` : "";
        const discounShow = pro.old_price ? `<span class="sale-percent">%${Math.floor(((pro.old_price - pro.price) / pro.old_price) * 100)}</span>` : "";

        const productHTML = `
            <div class="product item" key="${pro.id}">
                <div class="icons">
                    <i class="fa-solid fa-cart-plus" data-id="${pro.id}" onclick="addToCart(${pro.id}, this)"></i>
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-share"></i>
                </div>
                ${discounShow}
                <div class="img-product">
                    <img src="${pro.img}" alt=""/>
                    <img class="img-hover" src='${pro.img_hover}' alt=""/>
                </div>
                <h3 class="name-product"><a href="#">${pro.name}</a></h3>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <div class="price">
                    <p><span>${pro.price}</span></p>
                    ${old_price}
                </div>
            </div>
        `;

        products_dev.innerHTML += productHTML;
        // panner.innerHTML += productHTML;
    });
}

// إضافة منتج إلى السلة
function addToCart(id, btn) {
    const product = projectsArray.find(pro => pro.id === id);
    if (product && !product_cart.some(pro => pro.id === id)) {
        product_cart.push(product);
        btn.classList.add("active");
        count_item.innerHTML = product_cart.length;

        // تحديث واجهة المستخدم
        getCartItems();

        // حفظ product_cart في LocalStorage
        localStorage.setItem('product_cart', JSON.stringify(product_cart));
    }
}

// عرض العناصر في السلة
function getCartItems() {
    let total_price = 0;
    let items_C = '';
    product_cart.forEach((pro, index) => {
        items_C += `
            <div class="item-cart">
                <img src="${pro.img}" alt="..">
                <div class="content">
                    <h4>${pro.name}</h4>
                    <p class="price-cart">$${pro.price}</p>
                </div>
                <button class="delete-item" onclick="deleteItem(${index})"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `;
        total_price += pro.price;
    });
    items_in_cart.innerHTML = items_C;
    price_cart_head.innerHTML = "$" + total_price;
    count_item_cart.innerHTML = `(${product_cart.length} item in cart)`;
    price_cart_total.innerHTML = "$" + total_price;
    count_item.innerHTML = product_cart.length;
}

// حذف منتج من السلة
function deleteItem(id) {
    const deletedProduct = product_cart.splice(id, 1)[0];
    getCartItems();

    const addToCartBtn = document.querySelectorAll(".fa-cart-plus");
    addToCartBtn.forEach(btn => {
        if (btn.dataset.id == deletedProduct.id) {
            btn.classList.remove("active");
        }
    });

    // تحديث LocalStorage بعد الحذف
    localStorage.setItem('product_cart', JSON.stringify(product_cart));
}

// عند تحميل الصفحة، جلب product_cart من LocalStorage وتحديث واجهة المستخدم
window.addEventListener('load', () => {
    // جلب البيانات من LocalStorage
    product_cart = JSON.parse(localStorage.getItem('product_cart')) || [];

    // عرض المنتجات
    displayProducts();

    // تحديث واجهة المستخدم
    getCartItems();

    // تحديث أزرار "Add to Cart" بناءً على المنتجات الموجودة في السلة
    const addToCartBtns = document.querySelectorAll(".fa-cart-plus");
    addToCartBtns.forEach(btn => {
        const productId = parseInt(btn.dataset.id);
        if (product_cart.some(pro => pro.id === productId)) {
            btn.classList.add("active");
        }
    });
});