
let inputArea = document.querySelector('.inputArea'),
orderBut=document.querySelector('.orderBut');
orderBut.addEventListener('click',()=>{
confirm(inputArea.value + " add successfully ")
})
// ==============================================
let breakfastBut = document.querySelector('#breakfastBut'),
lunchBut= document.querySelector('#lunchBut'),
dinnerBut= document.querySelector('#dinnerBut');

let breakfast= document.querySelectorAll('.breakfast'),
lunch= document.querySelectorAll('.lunch'),
dinner= document.querySelectorAll('.dinner');



breakfastBut.addEventListener('click',function(){
breakfast.forEach((e) =>{
  breakfastBut.classList.add("active");
e.style.display='grid'
})
lunch.forEach((e) =>{
  lunchBut.classList.remove("active");
  e.style.display='none'
})
dinner.forEach((e) =>{
  dinnerBut.classList.remove("active");
  e.style.display='none'
})
})


lunchBut.addEventListener('click',function(){
  lunch.forEach((e) =>{
  lunchBut.classList.add("active");
  e.style.display='grid'
})
breakfast.forEach((e) =>{
  dinnerBut.classList.remove("active");
  e.style.display='none'
})
dinner.forEach((e) =>{
  breakfastBut.classList.remove("active");
  e.style.display='none'
})
})


dinnerBut.addEventListener('click',function(){
  dinner.forEach((e) =>{
    dinnerBut.classList.add("active");
  e.style.display='grid'
  })
  lunch.forEach((e) =>{
    lunchBut.classList.remove("active");
    e.style.display='none'
  })
  breakfast.forEach((e) =>{
    breakfastBut.classList.remove("active");
    e.style.display='none'
  })
  })
// ---------------------------------------
  let viewAll=document.querySelector('#viewAll');
  viewAll.addEventListener('click',function(){
    breakfast.forEach((e) =>{
      e.style.display='grid'
    })
    lunch.forEach((e) =>{
      e.style.display='grid'
    })
    dinner.forEach((e) =>{
      e.style.display='grid'
    })
  })
  // ----------------------------------------------------
  let butChecked= document.querySelectorAll('#addToCardBut');
  
    butChecked.forEach((e) =>{
      e.addEventListener('click',function(){ 
        e.classList.toggle('but-chicked')
      })
    })
// -------------------------------------------- 
let img1=document.querySelector('#img1'),
img3=document.querySelector('#img3'),
img4=document.querySelector('#img4'),
minImg=document.querySelector('#minImg'),
minName=document.querySelector('#minName');

img1.addEventListener('click', () => {
  minImg.setAttribute('src','imgs/user 1.jpg')
  minName.innerHTML='Ahmed Sam'
})
img3.addEventListener('click', () => {
  minImg.setAttribute('src','imgs/user 3.jpg')
  minName.innerHTML='Josh Sam'
})
img4.addEventListener('click', () => {
  minImg.setAttribute('src','imgs/user 4.jpg')
  minName.innerHTML='Noor Sam'
})