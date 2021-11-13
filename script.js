var data = JSON.parse(localStorage.getItem("shoppingBag"));
var cart = JSON.parse(localStorage.getItem("cart")) || [];
var count = 0;
for(var i =0; i< data.length;i++){
count++;
}
document.querySelector("#count").innerHTML=`${count} Items`


function sorting(){
var selected = document.getElementById("selectprice").value;
if(selected == "Low"){
  var prod = data.sort(function(a,b){
    return a.price-b.price;
  });
}
if(selected == "High"){
  var prod = data.sort(function(a,b){
    return b.price-a.price;
  }) 
}
showProducts(prod);
}
var mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", "container2");
  document.querySelector("#rightdiv").appendChild(mainDiv);
  
  showProducts();

  function showProducts() {
    document.querySelector("#container2").innerHTML="";
    data.map(function (item) {
      var imageDiv = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", item.Image_url);
      img.setAttribute("id", "right-image");
      var gender = document.createElement("h5");
      gender.textContent = item.gender;
      gender.setAttribute("id", "gender");
     size = document.createElement("h5");
    size.textContent = item.size;
    size.setAttribute("id", "size");
    name2 = document.createElement("h5");
    name2.textContent = item.name;
    name2.setAttribute("id", "name");
    price=document.createElement("h3");
    price.textContent = `Rs. ${item.price}`
    price.setAttribute("id","price")
    var btn1 = document.createElement("button");
    btn1.textContent = "AddtoCart";
    imageDiv.append(img,gender,size,name2,price, btn1);
    mainDiv.append(imageDiv);
     
    btn1.addEventListener("click",function(){
    addTocart(item);
    });
    });
function addTocart(item){
cart.push(item);
localStorage.setItem("cart",JSON.stringify(cart));
}
  }

//Left side bar code

var dropdown = document.getElementsByClassName("dropdown-btn");

for (var i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}




//Admin Script

var data = [{
    Image_url: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/442821/item/goods_56_442821.jpg?width=1008&impolicy=quality_75",
gender: "Men",
name: "MEN AIRism Pique Polo Short Sleeve Shirt",
price: "1990.00",
size: "S-XXL",
}, 
{
    Image_url: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/438314/item/ingoods_60_438314.jpg?width=1600&impolicy=quality_75",
gender: "Men",
name: "MEN AIRism Pique Polo Short Sleeve Shirt",
price: "2000.00",
size: "S-XXL",
}, 
{
    Image_url: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/437239/item/ingoods_63_437239.jpg?width=1600&impolicy=quality_75",
gender: "Men",
name: "MEN AIRism Fly Front Polo Short Sleeve Shirt",
price: "1990.00",
size: "S-XXL",
}, 
{
    Image_url: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/436181/item/ingoods_00_436181.jpg?width=1600&impolicy=quality_75",
gender: "Men",
name: "MEN AIRism Pique Polo Short Sleeve Shirt",
price: "1990.00",
size: "S-XXL",
}, 
{
    Image_url: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/435813/item/ingoods_32_435813.jpg?width=1600&impolicy=quality_75",
gender: "Men",
name: "MEN AIRism Fly Front Polo Shirt",
price: "1990.00",
size: "S-XXL",
}, 
{
    Image_url: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/425775/item/goods_09_425775.jpg?width=1600&impolicy=quality_75",
gender: "Men",
name: "MEN AIRism Jersey Short Sleeve Polo Shirt",
price: "1990.00",
size: "S-XXL",
}, 
{
    Image_url: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/424217/item/goods_00_424217.jpg?width=1600&impolicy=quality_75",
gender: "Men",
name: "MEN AIRism Pique Short Sleeve Polo Shirt",
price: "1990.00",
size: "S-XXL",
}, 
{
    Image_url: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/441603/item/ingoods_58_441603.jpg?width=1600&impolicy=quality_75",
gender: "Men",
name: "Dry Pique Short Sleeve Polo Shirt",
price: "1490.00",
size: "S-XXL",
}, 
{
    Image_url: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/422987/item/ingoods_41_422987.jpg?width=1600&impolicy=quality_75",
gender: "Men",
name: "Dry Pique Short Sleeve Polo Shirt",
price: "1490.00",
size: "S-XXL",
}, 
{
    Image_url: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/433041/item/ingoods_69_433041.jpg?width=1600&impolicy=quality_75",
gender: "Men",
name: "MEN DRY-EX Short Sleeve Polo Shirt",
price: "1990.00",
size: "S-XXL",
}, 
{
    Image_url: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/424214/item/goods_69_424214.jpg?width=1600&impolicy=quality_75",
gender: "Men",
name: "MEN DRY-EX Designed Short Sleeve Polo Shirt",
price: "1990.00",
size: "S-XXL",
}, 
{
    Image_url: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/422970/item/goods_69_422970.jpg?width=1600&impolicy=quality_75",
gender: "Men",
name: "MEN DRY-EX Short Sleeve Polo Shirt",
price: "1990.00",
size: "S-XXL",
}, 
{
    Image_url: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/442131/item/ingoods_31_442131.jpg?width=1600&impolicy=quality_75",
gender: "Men",
name: "MEN Dry-EX Crew Neck Short Sleeve T-Shirt",
price: "990.00",
size: "S-XXL",
}, 
]





localStorage.setItem("shoppingBag",JSON.stringify(data));
document.querySelector("form").addEventListener("submit",addItem);
var prod = JSON.parse(localStorage.getItem("shoppingBag")) || [];

function addItem(e){
e.preventDefault();
var productObj ={
Image_url:document.getElementById("img").value,
gender:document.getElementById("gender").value,
size:document.getElementById("size").value,
name:document.getElementById("name").value,
price:document.getElementById("price").value,
}
prod.push(productObj);
localStorage.setItem("shoppingBag",JSON.stringify(prod));
}




// Payment page

