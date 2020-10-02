let openbtn=document.querySelector('#open-modal')
let closebtn=document.querySelector('#close-modal')
let nav=document.querySelector('#navbar')
let bars=document.querySelector('#bars')
let modal_container=document.querySelector('#modal-container')

bars.addEventListener('click',()=>{
  document.body.classList.toggle('reveal')
})

openbtn.addEventListener('click',()=>{
    modal_container.classList.toggle('show')
})

closebtn.addEventListener('click',()=>{
    modal_container.classList.remove('show')
})


