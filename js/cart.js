const addBtn = document.querySelectorAll('.added')
const reduceBtn = document.querySelectorAll('.reduced')
const itemInput = document.querySelectorAll('.itemInput')
const cartItem = document.querySelectorAll('.cart-item')
const hr = document.querySelectorAll('.hr')
const unitPrice = document.querySelectorAll('.hidden-price')  //單價(hidden版)
const price = document.querySelectorAll('.price span')  //單價

const order_qty = document.querySelector('.qty .num')
const order_subtotal = document.querySelector('.subtotal .num')
const order_fee = document.querySelector('.delivery-fee .num')
const order_total = document.querySelector('.total')

//處理按鈕功能 單品數量發生增減
function count_btn(i,num){
    itemInput[i].value = Number(itemInput[i].value) + num;
    calc_item_price(i);
    calc_orderPrice()
}

//計算單品價格
function calc_item_price(i){
    price[i].innerHTML = Number(itemInput[i].value) * 
    Number(unitPrice[i].textContent)
    calc_orderPrice()
}

//計算所有單品數量總和、訂單總金額
function calc_orderPrice(){
    let qty = 0;
    let subtotal = 0;
    let fee = 60;
    
    for( let i = 0; i < cartItem.length; i++){
        qty += Number(itemInput[i].value);
        subtotal += Number(price[i].textContent)
    }
    if(subtotal > 599) fee = 0;

    order_qty.innerHTML = qty;
    order_subtotal.innerHTML = '$ ' + subtotal;
    order_fee.innerHTML = '$ ' + fee;
    order_total.innerHTML = '$' + Number(subtotal + fee)
}

window.onload = function(){  //初始化 將所有商品價格際算過一次
    for(let i = 0; cartItem<length; i++){
        calc_item_price(i);
    }
}
 
addBtn.forEach(function(btn, i){
    // console.log(btn);
    btn.addEventListener('click',function(){
        count_btn(i, 1)
        // console.log(Number(itemInput[i].value)*Number(unitPrice[i].textContent));
    })
})

reduceBtn.forEach(function(btn, i){
    btn.addEventListener('click', function(){
        if(itemInput[i].value <= 1){
            let yes = confirm('是否確定刪除該商品？');
            if(yes){
                cartItem[i].remove();
                hr[i].remove()
                // console.log(cartItem[i], cartItem[i].nextElementSibling);
            }else{
                return;
            }
        }
        count_btn(i, -1)
    })
})

itemInput.forEach(function(input, i){
    input.addEventListener('change', function(){
        if(this.value <= 1){
            this.value = 1
        }
        calc_item_price(i);
    })
})