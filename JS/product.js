let display_table = document.querySelector('.g')
let table = document.querySelector('table');
// console.log(table);
// DOM elements//
let adddialog = document.querySelector('#add-dialog');
let ProductsName = document.querySelector("#product-name");
let discription_name = document.querySelector(".discription");
let quantity = document.querySelector('#qty');
let price = document.querySelector('#price');
let Categories = document.querySelector('#categories');
let btnAdd = document.querySelector('.Add');
display_table.appendChild(table)
// console.log(adddialog);
// let btnAdd = document.querySelector('.Add');
// console.log(btnAdd);
function hide(element) {
    element.style.display = "none";
}

// Show a given element
function show(element) {
    element.style.display = "block";
}

function saveProducts() {
    localStorage.setItem("Products", JSON.stringify(Products));
    localStorage.setItem("Id", JSON.stringify(Unique_Id));
}
function getProducts() {
    // Local Storage ------------------------------------
    let ProductsStorage = JSON.parse(localStorage.getItem("Products"));
    let ProductsID = JSON.parse(localStorage.getItem("Id"));
    if (ProductsStorage != undefined) {
        Products = ProductsStorage;
        Unique_Id = ProductsID;
    } else {
        saveProducts();
    }
    Show_addProducts()
}
// Data --------------------------------------
let Products = [];
let Unique_Id = 0;

function showDialog() {
    show(adddialog);
}
function add_Products() {
    Unique_Id = Unique_Id + 1;
    let Product = {
        id: Unique_Id,
        name: ProductsName.value,
        quantity: quantity.value,
        price: price.value,
        Categories: Categories.value
    }
    Products.push(Product);
    // clear input file
    saveProducts();
    // getProducts();
    Show_addProducts()
    // onCreate()
    // createRowProducts();    
    clearInput()
    ProductsName.value = ""
    discription_name.value = ""
    price.value = ""
    quantity.value = ""
    Categories.value = ""
}
function clearInput() {
    ProductsName.value = ""
    discription_name.value = ""
    price.value = ""
    quantity.value = ""
    Categories.value = ""
}
function Show_addProducts() {
    hide(adddialog);
    let tbody = document.querySelector('tbody');
    let trs = document.querySelectorAll('tbody tr');
    for (const tr of trs) {
        tr.remove();
    }
    for (let index = 0; index < Products.length; index++) {
        // create tr element by using "tableRow"
        let tableRow = document.createElement('tr')
        //  create td element by using "tdId"
        let tdId = document.createElement('td')
        tdId.textContent = Products[index].id;

        // console.log(tdId);
        // create td element by usinh "tdName";
        let tdName = document.createElement('td');
        tdName.textContent = Products[index].name;

        // create td element by using "tdQuantity"
        let tdQuantity = document.createElement('td');
        tdQuantity.textContent = Products[index].quantity;
        // create Input element as "qtyInput"
        const qtyInput = document.createElement('input');

        // add attribute type input to number
        qtyInput.setAttribute('type', 'number');
        // add value to input from product quantity
        qtyInput.value = Products[index].quantity;
        // create td element by using "tdPrice"
        let tdPrice = document.createElement('td');
        tdPrice.textContent = Products[index].price + "$";
        // create td element by using "tdAction"
        let tdAction = document.createElement('td');
        tdAction.className = "action"

        let tdCategories = document.createElement('td');
        tdCategories.textContent = Products[index].Categories;
        // create button "edit" and "delete" 
        let btnDelete = document.createElement('button');
        btnDelete.setAttribute('class', 'delete');
        btnDelete.textContent = "DELETE"
        btnDelete.addEventListener('click', deleteProducts)

        // create button "edit" to edit the row;
        let btnEdit = document.createElement('button');
        btnEdit.className = "Edit";
        btnEdit.textContent = "EDIT"
        btnEdit.dataset.index = index;
        btnEdit.addEventListener('click', editProduct)
        // create button "edit" to edit the row;
        let btnView = document.createElement('button');
        btnView.className = "View";
        btnView.textContent = "VIEW"


        tdAction.appendChild(btnDelete);
        tdAction.appendChild(btnEdit);
        tdAction.appendChild(btnView);
        // add all td to tbody

        tableRow.appendChild(tdId);
        tableRow.appendChild(tdName);
        tableRow.appendChild(tdQuantity);
        tableRow.appendChild(tdPrice);
        tableRow.appendChild(tdCategories)
        tableRow.appendChild(tdAction);

        tbody.appendChild(tableRow);
    }
    saveProducts();
    // // clearInput();
    // console.log(2);
    // DeleteList();
}
function updateProduct(id) {
    console.log(id);
    Products[id].name = document.getElementById("product-name").value;
    Products[id].quantity = document.getElementById("qty").value;
    Products[id].Categories = document.getElementById("categories").value;
    Products[id].price = document.getElementById("price").value;
    saveProducts();
    Show_addProducts();
}
function editProduct(event) {
    let tr = event.target.closest('tr');
    let id = event.target.dataset.index;
    document.getElementById("qty").value = Products[id].quantity;
    document.getElementById("categories").value = Products[id].Categories;
    document.getElementById("price").value = Products[id].price;
    document.getElementById("add").textContent = "Edit";
    document.getElementById("add").setAttribute("onclick", `updateProduct(${id})`);
    showDialog()
    saveProducts()
}
function deleteProducts(event) {
    let tr = event.target.closest('tr')
    Products.splice(tr, 1)
    saveProducts()
    getProducts()
    Show_addProducts()
    // window.location.reload()
}
function onCreate() {
    hide(adddialog);
    console.log(1);

}
function onCancel() {
    adddialog.style.display = "none";
}
getProducts();
btnAdd.addEventListener('click', showDialog);
// btnAdd.addEventListener('click', showDialog);