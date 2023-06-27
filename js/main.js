$(document).ready(function(){



    $(".owl-carousel").owlCarousel({
        loop:true ,
        margin:10,
        responsiveClass:true,
        dots : true,
        autoplay :true,
        autoplayTimeout : 3000, 
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
            }
        }
    });
  });

 let products = [
    {id:0 , img:`1.jpg` , title : `Hazen Zimalan  Raglan T-Shirts` , price:550.00 , 
      LIsts:{
        img1:`1.jpg` , img2:`1-1.jpg` ,img3:`1-2.jpg`
    }},
    {id:1 , img:`2.jpg` , title : `Praesent at justo congue leo adipiscing` , price:640.00 ,
      LIsts:{
        img1:`2.jpg` , img2:`2-1.jpg` ,img3:`2-2.jpg`
    }},
    {id:2 , img:`3.jpg` , title : `Landjaeger shankle pork tempus turpis` , price:400.00 ,
       LIsts:{
        img1:`3.jpg` , img2:`3-1.jpg` ,img3:`3-2.jpg`
    }},
    {id:3 , img:`4.jpg` , title : `Donec et libero nunc quis facilisis odio` , price:700.00 , 
    LIsts:{
        img1:`4.jpg` , img2:`4-1.jpg` ,img3:`4-2.jpg`
    }},
    {id:4 , img:`5.jpg` , title : `Nami alan shankle  tempus turpis` , price:350.00 ,
     LIsts:{
        img1:`5.jpg` , img2:`5-1.jpg` ,img3:`5-2.jpg`
    }},
    {id:5 , img:`6.jpg` , title : `Patheon commodo  tempus turpis` , price:800.00 , 
      LIsts:{
        img1:`6.jpg` , img2:`6-1.jpg` ,img3:`6-2.jpg`
    }},
];
let text = "" ;
products.forEach(element => {
    text+=`<div class="items col-md-6 col-lg-4 col-xl-4 text-center">
       <div class="products_img">
       <img src="images/product/${element.img}" />
       </div>
      <p>${element.title}</p>
      <ul class="list-unstyled nav">
        <li><i class="fa-solid fa-star"></i></li>      
        <li><i class="fa-solid fa-star"></i></li>      
        <li><i class="fa-solid fa-star"></i></li>      
        <li><i class="fa-solid fa-star"></i></li>      
        <li><i class="fa-solid fa-star"></i></li>      
      </ul>
     <h4>${"$"}${element.price}.00</h4>
     <button class="btn btn-primary">add to cart</button>

  </div>`;
});
document.getElementById("create").innerHTML=text ;
let indexImg = Array.from(document.querySelectorAll(".products_img img")) ;
let productViewmain = document.getElementById("productView-main");
let currentIndex ;
indexImg.filter(element => element.onclick = function(e) {
    productViewmain.style.display = "flex" ;
    currentIndex = indexImg.indexOf(e.target)
    displayProduct();
});
function displayProduct() {
    let productView = `` ;
    productView+=` <div class="col-md-6">
    <div class="productView-image" >
        <img src="Images/product/${products[currentIndex].img}" class="mainImg w-100 img-fluid" alt="">
        <div class="imagesList">
        <img src="Images/product/${products[currentIndex].LIsts.img1} "onclick="changeMainImage(this)" class="mainImage w-25" alt="">
        <img src="Images/product/${products[currentIndex].LIsts.img2} "onclick="changeMainImage(this)" class="mainImage w-25" alt="">
        <img src="Images/product/${products[currentIndex].LIsts.img3}" onclick="changeMainImage(this)" class="mainImage w-25" alt="">
        </div>
    </div>
    
</div>
<div class="col-md-6">
 <div class="productView-details">
    <div class="productView-title">
        <span> Common Good</span>
        <h3>${products[currentIndex].title}</h3>
    </div>
    <div class="productView-rating">
        <ul class="list-unstyled nav">
            <li><i class="fa-solid fa-star"></i></li>      
            <li><i class="fa-solid fa-star"></i></li>      
            <li><i class="fa-solid fa-star"></i></li>      
            <li><i class="fa-solid fa-star"></i></li>      
            <li><i class="fa-solid fa-star"></i></li>      
        </ul>
        <span class="productView-reviewLink">
            (No reviews yet)
        </span>
        <span class="productView-reviewLink">
            <a href="#"> Write a Review</a>
        </span>
    </div>
   <div class="productView-price">
    <h5>${"$"}${products[currentIndex].price} <del>$675.00</del></h5>
   </div>
   <div class=" form-increments">
    <label class="form-label" for="qty">Quantity:</label>
    <div class="form-increment">
        <input class="form-input" value="0" id="inputValue" type="number" id="qty">
        <input id="form-action-addToCart" onclick="subMit()" class="button" type="submit" value="Add to Cart">
    </div>
   </div>
  
 </div>
</div>
    `;
 
    document.getElementById("productView").innerHTML = productView ;
} 
function subMit() {
    let inputValue = document.getElementById("inputValue") ;
    let shopping = document.getElementById("shopping") ;
    let valueInput = {
        price : inputValue.value ,
    }
    shopping.innerHTML = valueInput.price ;
    productViewmain.style.display = "none" ;
};
function CloseSlide() {
    productViewmain.style.display = "none" ;
}
function changeMainImage (element) 
{
     let mainImage = document.querySelector(".mainImg") ; 
     mainImage.src = element.src ;
}
