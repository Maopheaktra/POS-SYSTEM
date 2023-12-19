let display_table = document.querySelector('.g')
let table = document.querySelector('table');
// console.log(table);
// DOM elements//
let adddialog = document.querySelector('#add-dialog');
let categoriesName = document.querySelector(".category_name");
let discription_name = document.querySelector(".discription");
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

function showDialog() {
    show(adddialog);
}
function add_category() {
    console.log(1);
    Unique_Id = Unique_Id + 1;
    let category = {
        id: Unique_Id,
        name: categoriesName.value,
        Discription: discription_name.value
    }
    categories.push(category);
    // clear input file
    saveCategories();
    // getCategories();
    Show_addCategories()
    // onCreate()
    // createRowCategories();    
    clearInput()
    categoriesName.value = ""
    discription_name.value = ""

}
function Show_addCategories() {
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


        // create button "edit" to edit the row;
        let btnEdit = document.createElement('button');
        btnEdit.className = "Edit";
        btnEdit.textContent = "EDIT"


        tdAction.appendChild(btnDelete);
        tdAction.appendChild(btnEdit);
        // add all td to tbody

        tableRow.appendChild(tdId);
        tableRow.appendChild(tdName);
        tableRow.appendChild(tdAction);

        tbody.appendChild(tableRow);
    }
    saveCategories();
    getCategories();
    console.log(2);
}
function clearInput(){
    name.value = ""
    Discription.value = ""
}
function onCreate() {
    hide(adddialog);
    console.log(1);

}
function onCancel() {
    adddialog.style.display = "none";
}
btnAdd.addEventListener('click', showDialog);