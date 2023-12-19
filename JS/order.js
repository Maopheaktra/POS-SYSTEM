function DeleteList(event) {
    let list = event.target.closest('tr');
    let isConfirm = confirm('Are you sure')
    if (isConfirm) {
        list.remove()
    }
}


let button = document.querySelectorAll('.btn');
for (const btn of button) {
    btn.addEventListener('click', DeleteList)

}



