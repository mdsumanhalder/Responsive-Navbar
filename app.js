const button=document.querySelector('.nav-toggle');
const links=document.querySelector('.links');
button.addEventListener('click',()=>{
  // links.classList.toggle('show-links')
  if(links.classList.contains('show-links')){
    links.classList.remove('show-links');
  }else{
    links.classList.add('show-links');
  }
})