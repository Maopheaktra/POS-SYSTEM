let disTable = document.querySelector('.g');
let table = document.querySelector('table');
<<<<<<< HEAD
// let thead = document.createElement('thead');
// let tr = document.createElement('tr');
// let thId = document.createElement('th');
// thId.textContent = "ID"
// let thName = document.createElement('th');
// thName.textContent = "Name";
// let thQty = document.createElement('th');
// thQty.textContent = "Quantity";
// let thCateg = document.createElement('th');
// thCateg.textContent = "Categories";
// let thPrice = document.createElement('th');
// thPrice.textContent = "Price"
// let thAction = document.createElement('th');
// thAction.textContent = "Action"
// table.appendChild(thead)
// thead.appendChild(tr)
// tr.appendChild(thId)
// tr.appendChild(thName)
// tr.appendChild(thQty)
// tr.appendChild(thCateg)
// tr.appendChild(thAction)
// console.log(table);

=======
let products = [];
>>>>>>> Display-categories
disTable.appendChild(table)

// create new product and add product to product list 
let product = {
    id: proId,
    name: productName.value,
    Quantity: Quantity.value,
    price: price.value,
}
function addProduct(){
    let proId = document.latestId
}

function createProducts() {
    // create td element as name tableRow
    let tbody = document.querySelector('tbody')
    let tableRow = document.createElement('tr');
    // createe td element as name tdId
    let tdId = document.createElement('td');
    tdId.textContent = product.id;
    //    create td element as name tdName
    let tdName = document.createElement('td');
    tdName.textContent = product.Name;
    //    crete td element as name tdQuantity
    let tdQuantity = document.createElement('td');
    tdQuantity.textContent = product.Quantity;
    //    create td element as name tdCategories
    let tdPrice = document.createElement('td');
    tdPrice.textContent = product.price;
    let tdCategories = document.createElement('td');
    tdCategories.textContent = product.Categories;
    //    create td element as name tdPrice
    //    create td element as name tdAction
    let tdAction = document.createElement('td');
    let btnDelete = document.createElement('button')
    btnDelete.setAttribute('id', 'delete')
    btnDelete.textContent = "Delete"
    let btnEdit = document.createElement('button')
    btnEdit.setAttribute('id', 'edit')
    btnEdit.textContent = "Edit"
    let btnView = document.createElement('button')
    btnView.setAttribute('id', 'view')
    btnView.textContent = "View"
    //    append all td to tr
    tableRow.appendChild(tdId)
    tableRow.appendChild(tdName)
    tableRow.appendChild(tdQuantity)
    tableRow.appendChild(tdPrice)
    tableRow.appendChild(tdCategories)
    tableRow.appendChild(tdAction)
    tdAction.appendChild(btnDelete)
    tdAction.appendChild(btnEdit)
    tdAction.appendChild(btnView)
    tbody.appendChild(tableRow)
    table.appendChild(tbody)
}

// Create function to delete products
function deleteProducts() {

}
// create function to edit product 
function editProduct() {

}
// Create function to view product
function viewProduct() {

}
// Create function to save product
function saveProduct() {

}
// create product to load product to localStorage
function loadProduct() {

}
// product data



let productName = document.querySelector('#product-name')
let Quantity = document.querySelector('#qty')
let price = document.querySelector('#price')
// let grossPrice = document.querySelector('#gross-price')
let btnAdd = document.querySelector('#add')
let btnCancel = document.querySelector('#Cancel')
// load product 
btnAdd.addEventListener('click', addProduct);
createProducts()