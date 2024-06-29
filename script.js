let heading = document.querySelector(".heading");
let image = document.querySelector("#img");
let prices = document.querySelector(".price");
let rating = document.querySelector(".rating");
let prevBtn = document.querySelector(".prevBtn");
let nextBtn = document.querySelector(".nextBtn");

function products(path, name, price, rate){
   this.name = name;
   this.price = price;
   this.rate = rate;
   this.path = path;
   this.display = function(){
    heading.innerHTML = name;
    image.src = path;
    prices.innerHTML = price;
    rating.innerHTML = rate
   }
};
let item1 = new products("./images/product-1.jpg", "Power Bank", "900 Tk", "4.3/5");
let item2 = new products("./images/product-2.jpg", "I-phone 13 Pro", "1,26,399 Tk", "4.5/5");
let item3 = new products("./images/product-3.jpg", "Mens T-shirt", "450 Tk", "3.7/5");
let item4 = new products("./images/product-5.jpg", "Lenevo Neck-Band", "650 Tk", "4.4/5");
let item5 = new products("./images/product-6.jpg", "Rolex-GT-65 Watch", "3,45,000 Tk", "4.9/5");
let item6 = new products("./images/product-7.jpg", "BlueTooth Headset", "1,230 Tk", "4.1/5");
let item7 = new products("./images/product-8.jpg", "Mens-Jins Pant", "865 Tk", "3.7/5");
let item8 = new products("./images/product-9.jpg", "Google Glass", "89,799 Tk", "4.8/5");
let item9 = new products("./images/product-10.jpg", "Niky Sports Shoe", "2,800 Tk", "3.7/5");
let item10 = new products("./images/product-11.jpg", "Windows Surface Pro", "1,28,970 Tk", "4.6/5");
let item11 = new products("./images/product-12.jpg", "Sony T401 HomeTheater", "54,900 Tk", "3.7/5");
let item12 = new products("./images/product-14.jpg", "Asus ROG GT-909 Router", "22,450 Tk", "4.8/5");
let item13 = new products("./images/product-15.jpg", "Omega Mens Watch C44", "1800 Tk", "4.1/5");

let items = [item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12,item13];
items[0].display();
let count = 0;

const nextProduct =()=>{
   count++;
   if(count>=items.length){
      count = 0;
      items[count].display();
   }
   else{
      items[count].display();
   }
};

const prevProduct =()=>{
   count --;
   if(count<=0){
      count = items.length -1;
      items[count].display();
   }
   else{
      items[count].display();
   }
};

nextBtn.addEventListener("click", nextProduct);
prevBtn.addEventListener("click", prevProduct);

