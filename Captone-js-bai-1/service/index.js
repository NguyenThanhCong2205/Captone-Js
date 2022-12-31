const btn = document.querySelectorAll("button");
btn.forEach(function (button, index) {
  button.addEventListener("click", function (event) {
    var btnItem = event.target;
    var product = btnItem.parentElement;
    var productImg = product.querySelector("img").src;
    var productName = product.querySelector("H1").innerText;
    var productPrice = product.querySelector("span").innerText;
    addcart(productName, productImg, productPrice);
  });
});

function addcart(productName, productImg, productPrice) {
  var addtr = document.createElement("tr");
  var cartItem = document.querySelectorAll("tbody tr");
  for (var i = 0; i < cartItem.length; i++) {
    var productT = document.querySelectorAll(".title")
    if(productT[i].innerHTML == productName){
        alert("San Pham Da Co")
      return
    }
  }
  var trcontent ='<tr><td style="display:flex;align-items: center;"><img style="width: 90px;" src="'+productImg+'"alt=""><span class="title">'+productName+'</span></td><td><p><span class="price">'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 30px; outline: none;" type="number" value="1" min="0"></td><td style="cursor: pointer;" ><span class="card-delete">xóa</span></td></tr><tr>';
  
    
    addtr.innerHTML = trcontent;
  var cartTable = document.querySelector("tbody");
  cartTable.append(addtr);
  carttotal();
  deleteCart();
}

function carttotal() {
  var cartItem = document.querySelectorAll("tbody tr");
  var totalC = 0;
  for (var i = 0; i < cartItem.length; i++) {
    var inputValue = cartItem[i].querySelector("input").value;
    // console.log(inputValue)
    var productPrice = cartItem[i].querySelector(".price").innerHTML;
    // console.log(productPrice)
    totalA = inputValue * productPrice * 1;
    // totalB = totalA.toLocaleString('de-DE')
    totalC = totalC + totalA;
  }
  var cartTotalA = document.querySelector(".price-total span");
   var cardPrice = document.querySelector(".cart-icon span")
   cartTotalA.innerHTML = totalC.toLocaleString('de-DE');
   cardPrice.innerHTML =  totalC.toLocaleString('de-DE');
  inputChange()
}


function deleteCart(){
  var cartItem = document.querySelectorAll("tbody tr")
  for (var i = 0; i < cartItem.length; i++) {
    var productT = document.querySelectorAll(".card-delete")
    productT[i].addEventListener("click",function(event){
      var cardDelete = event.target
      var cardItemR = cardDelete.parentElement.parentElement;
      cardItemR.remove()
      carttotal()
    })
  }
}

function inputChange(){

  var cartItem = document.querySelectorAll("tbody tr")
  for (var i = 0; i < cartItem.length; i++) {
    var inputValue = cartItem[i].querySelector("input")
    inputValue.addEventListener("change", function(){
      carttotal()
    })
  }
}

const cartBtn = document.querySelector(".fa-times");
const cartShow =document.querySelector(".fa-shopping-cart");

cartShow.addEventListener("click",function(){
  document.querySelector(".cart").style.right = "0";
})

cartBtn.addEventListener("click",function(){
  document.querySelector(".cart").style.right = "-100%";
})


function saveLocalTodos() {
  let value ;
  if (localStorage.getItem("save") === null) {
    value = [];
  } else {
    value = JSON.parse(localStorage.getItem("save"));
  }
  todos.push(todo);
  localStorage.setItem("save", JSON.stringify(value));
}