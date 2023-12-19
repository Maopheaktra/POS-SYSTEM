function totalPrice(){
    let total = 0;
    let products = document.querySelectorAll('.product');
    for (const product of products) {
        let price = product.firstElementChild.nextElementSibling.nextElementSibling.textContent.split('$')[1];
        let input = product.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
        let checkbox = product.firstElementChild;
        if (checkbox.checked) {
            // console.log(input);
            total += price*input.value
        }
    }
    console.log(total);
    document.querySelector('#totalPrice').textContent = total.toFixed(2)
}

let productCheckboxs = document.querySelectorAll('.productCheckbox');
for (const productCheckbox of productCheckboxs) {
    productCheckbox.addEventListener('change',totalPrice)
}

let quantitys = document.querySelectorAll('.quantity');
for (const quantity of quantitys) {
    quantity.addEventListener('input',totalPrice)
}