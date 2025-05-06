const element = document.getElementById("hhh"); 
const rect = element.getBoundingClientRect(); 

const images = ['img/Аверченко_Дюжина_ножей_в_спину_революции.png', 'img/Аверченко_Нечистая_сила.jpg', 'img/Аверченко_Осколки.jpg', 'img/Аверченко_Развороченный_муравейник.jpg'];
const entry = ["Аркадий Аверченко. Дюжина ножей в спину революции. Париж, 1921","Аркадий Аверченко. Нечистая сила. Константинополь, 1921","Аркадий Аверченко. Осколки разбитого вдребезги. Москва; Ленинград, 1926","Аркадий Аверченко. Развороченный муравейник. Москва; Ленинград, 1927"]
let img = document.querySelector ('img');
let entr = document.createElement('entr');
entr.className = "carousel-entry";
const stopbtn = ("#carousel");
let i = 0;

const intervalId = setInterval (function(){
  img.src = images[i];
  entr.innerHTML = entry[i];
  document.body.append(entr);
  i++;
   if (i == images.length) {i=0};
}, 3000);

const btnprev = document.querySelector('.button-prev');
btnprev.addEventListener("click", ()=>{
  // clearInterval(intervalId);
  i = i-1;
  if(i < 0){i = images.length - 1;}
  img.src = images[i];
  entr.innerHTML = entry[i];
  document.body.append(entr);
})

const btnnext = document.querySelector('.button-next');
btnnext.addEventListener("click", ()=>{
  // clearInterval(intervalId);
  if(i < (images.length-1)) {i = i + 1;}
  else {i = 0;}
  img.src = images[i];
  entr.innerHTML = entry[i];
  document.body.append(entr);
})



// const btn_prev = document.querySelector("button-prev");
// const btn_next = document.querySelector("button-next");
// btn_prev.addEventListener("click", ()=>{
//   images[i].style.display = 'none';
//   console.log(click)
//   i = i - 1;
//   if(i < 0){
//       i = images.length - 1;
//   }
//   images[i].style.display = 'block';
// })


