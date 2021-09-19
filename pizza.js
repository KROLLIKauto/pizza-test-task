
let button = document.querySelectorAll('.cart-pizza-sizes div');


for(let elem of button){
    elem.addEventListener('click', f);

function f(){

    let parentBox = this.parentNode.parentNode;
    let image = parentBox.querySelector('.cart-pizza-image img');

        if(elem.innerHTML == +20){
            image.style.width = '140px';
        }
               if(elem.innerHTML == +30){
             image.style.width = '160px';
        }
                if(elem.innerHTML == +40){
             image.style.width = '184px';
        }
    }
}



let Logo = getImages(10);


function getImages(n) {
   let array = [];
    for(i = 1; i <= n; i++) {
        let image = new Image;
        if(i<=9){
            image.src = "insta/" + 'inst0'+ i + ".jpg";
        }
        else{
            image.src = "insta/" + 'inst'+ i + ".jpg";
        }
        array.push(image.src);
    };
    return array;
};



function inst(){
    for (let j = 0; j < Logo.length; j++){
  let Div = document.querySelector(".footer-image-container");
  let image = document.createElement("img");
  image.src = Logo[j];

      Div.appendChild(image);

  }
}
inst();









let popup = document.querySelector('#popup');
let basket = document.querySelector('.header-zakaz');

    basket.addEventListener('click', show);

function show(){
     popup.style.display='flex';
}

let close = document.querySelector('.top-exit');
close.addEventListener('click', exit);
function exit(){
    popup.style.display='none';
}





let parent = document.querySelector('.parent-pizza-basket');
let pizzaBasket = parent.querySelector('.pizza-basket');
let zakaz = document.querySelectorAll('.cart-pizza-button');



    for(let elem of zakaz){
        elem.addEventListener('click', funcZakaz);

        function funcZakaz(){
            alert('Добавлено в "Ваш заказ"');
            let parentBox = this.parentNode;

            let image = parentBox.querySelector('.cart-pizza-image img');
            let name = parentBox.querySelector('.cart-pizza-name').innerHTML;
            let price = parentBox.querySelector('.cart-pizza-price');



        let clone = pizzaBasket.cloneNode(true);

/*let count = [];

            count.push(clone.querySelector('.pizza-basket-price').innerHTML);
document.querySelector('.sum span').innerHTML = count;*/

            clone.querySelector('.pizza-basket-name').innerHTML = parentBox.querySelector('.cart-pizza-name').innerHTML;

            clone.querySelector('.pizza-basket-image img').src = parentBox.querySelector('.cart-pizza-image img').src;

            clone.querySelector('.pizza-basket-price span').innerHTML = parentBox.querySelector('.cart-pizza-price span').innerHTML;

            if(image.style.width == '140px'){
                clone.querySelector('.pizza-basket-size span').innerHTML = 20;
            }
            if(image.style.width == '160px'){
                clone.querySelector('.pizza-basket-size span').innerHTML = 30;
            }
            if(image.style.width == '184px'){
                clone.querySelector('.pizza-basket-size span').innerHTML = 40;
            }






            parent.appendChild(clone);

             let xDelete = document.querySelectorAll('.pizza-basket-delete');

            for (let x of xDelete){
                x.addEventListener('click', function(){
                   x.parentElement.remove();
                })
            }





        }
    }



















