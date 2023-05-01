const add = document.querySelector('#add');
const sort = document.querySelector('#sort');
const list = document.querySelector('#list');

function addEventListItem(text,list){
    const li =document.createElement('li');
    const span =document.createElement('span');
    span.innerText = text;

    const del = document.createElement ('button');
    del.innerText ='X';
    del.addEventListener('click', (e) => {
       e.target.parentElements.remove();
    });
       li.append(del);
       list.append(li);
}
add.addEventListener('click', () => {
    const info = prompt();
    addListItem(info, list);
});

sort.addEventListener('click', () => {
    const arr =new Array () ;
    const siyahi = document.querySelectorAll('li');
   
})

































add.addEventListener('click', () =>{
 const info = prompt ();
 const li =document.createElement('li');
 li.innerText = info;

 const del = document.createElement ('button');
 del.innerText ='X';
 del.addEventListener('click', (e) => {
    e.target.parentElements.remove();
 });
    li.append(del);
    list.append(li);
});
   sort.addEventListener