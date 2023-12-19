let lis =document.querySelectorAll('li');
let input=document.querySelector('input');
console.log(lis);

function searchList(event){
    for (let li of lis){
        if (li.textContent.toLowerCase().includes(event.target.value.toLowerCase())) {
            li.style.display='block'
        } else {
            li.style.display='none'
        }
    }
}

input.addEventListener('input',searchList);