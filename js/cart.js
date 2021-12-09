let addBtn = document.querySelectorAll('.added')
let reduceBtn = document.querySelectorAll('.reduced')
let itemInput = document.querySelectorAll('.itemInput')
let cartItem = document.querySelectorAll('.cart-item')
let hr = document.querySelectorAll('.hr')
let unitPrice = document.querySelectorAll('.hidden-price')
let price = document.querySelectorAll('.price span')

// window.onload(function(){  //初始化 將所有商品價格際算過一次
//     for(let i = 0; cartItem<length; i++){
//         price[i].innerHTML = Number(itemInput[i].value)* Number(unitPrice[i].textContent)
//     }
// })
 
addBtn.forEach(function(btn, i){
    // console.log(btn);
    btn.addEventListener('click',function(){
        itemInput[i].value = Number(itemInput[i].value)+1;
        price[i].innerHTML = Number(itemInput[i].value)* Number(unitPrice[i].textContent)
        // console.log(Number(itemInput[i].value)*Number(unitPrice[i].textContent));
    })
})

reduceBtn.forEach(function(btn, i){
    btn.addEventListener('click', function(){
        if(itemInput[i].value == 1){
            let yes = confirm('是否確定刪除該商品？');
            if(yes){
                cartItem[i].remove();
                hr[i].remove()
                // console.log(cartItem[i], cartItem[i].nextElementSibling);
            }else{
                return;
            }
        }
        itemInput[i].value = Number(itemInput[i].value)-1;
    })
})