const btn =document.querySelector('button');
const sidebar=document.querySelector('.end');
const closebtn= document.querySelector('.end i');
const overlay=document.querySelector('.overlay')
btn.onmouseover=()=>{
    btn.classList.add('hover');
}
btn.onmouseleave=()=>{
    btn.classList.remove('hover');
  
}
btn.onclick=()=>{
    sidebar.classList.remove('d-none');
    overlay.style.display="block";
    

}
closebtn.onclick=()=>{
    sidebar.classList.add('d-none');
    overlay.style.display="none";

}