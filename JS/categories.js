let display_table = document.querySelector('.g')
let table = document.querySelector('table');
// console.log(table);
// DOM elements//
let adddialog = document.querySelector('#add-dialog');
let categoriesName = document.querySelector(".category_name");
let discription_name = document.querySelector(".discription");
let btnAdd = document.querySelector('.Add');
// display_table.appendChild(table)
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

function saveCategories() {
    localStorage.setItem("categorie", JSON.stringify(categories));
    localStorage.setItem("Id", JSON.stringify(Unique_Id));
}
function getCategories() {
    // Local Storage ------------------------------------
    let categoriesStorage = JSON.parse(localStorage.getItem("categorie"));
    let CategoriesID = JSON.parse(localStorage.getItem("Id"));
    if (categoriesStorage != undefined) {
        categories = categoriesStorage;
        Unique_Id = CategoriesID;
    } else {
        saveCategories();
    }
}
// Data --------------------------------------
let categories = [];
let Unique_Id = 0;
// set categories to string and save to local storage by using key "categories"
// Hide a given element/
//     // show(adddialog);
//     console.log(1);
// }
// Create function to addcategory 
// get question from local storage
btnAdd.addEventListener('click', onCreate);
console.log(btnAdd);
function add_category() {
    // event.preventDefault();
    // adddialog.style.display = 'block';
    hide(adddialog);
    Unique_Id = Unique_Id + 1;
    let category = {
        id: Unique_Id,
        name: categoriesName.value,
        Discription: discription_name.value
    }
    categories.push(category);
    // clear input file
    saveCategories();
    getCategories();
    // createRowCategories();    
    // clear()
    window.location.reload();
}
function onCreate(){
    hide(adddialog);
    let tbody = document.querySelector('tbody');
    let trs = document.querySelectorAll('tbody tr');
    for (const tr of trs) {
        tr.remove();
    }
    for (let index = 0; index < categories.length; index++) {
        // create tr element by using "tableRow"
        let tableRow = document.createElement('tr')
        //  create td element by using "tdId"
        let tdId = document.createElement('td')
        tdId.textContent = categories[index].id;
        // console.log(tdId);
        // create td element by usinh "tdName";
        let tdName = document.createElement('td');
        tdName.textContent = categories[index].name;
        // create td element by using "tdAction"
        let tdAction = document.createElement('td');
        tdAction.className = "action"
        // create button "edit" and "delete" 
        let btnDelete = document.createElement('button');
        btnDelete.className = "delete";
        btnDelete.textContent = "DELETE"
        // btnDelete.addEventListener('click',deleteCategory);
        // btnDelete. = "Delete";
    
        // create button "edit" to edit the row;
        let btnEdit = document.createElement('button');
        btnEdit.className = "Edit";
        btnEdit.textContent = "EDIT"
        // btnEdit.addEventListener('click',editCategories);
        // add btn to tdAction
        tdAction.appendChild(btnDelete);
        tdAction.appendChild(btnEdit);
        // add all td to tbody
        tableRow.appendChild(tdId);
        tableRow.appendChild(tdName);
        tableRow.appendChild(tdAction);
        tbody.appendChild(tableRow);
    }
    // console.log(1);
    // console.log(tbody);
    // table.appendChild(tbody)
    add_category();
    saveCategories();
    getCategories();
    
}
function onCancel(){
    adddialog.style.display = "none";
}
// create categories with click and edit
// function createRowCategories() {
    
//     // hide(adddialog);
// }
// for (const cate of categ) {
//     createRowCategories(cate);
// }
// Show_addCategories();