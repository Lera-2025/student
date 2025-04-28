const images = ['img/Аверченко_Дюжина_ножей_в_спину_революции.png', 'img/Аверченко_Нечистая_сила.jpg', 'img/Аверченко_Осколки.jpg', 'img/Аверченко_Развороченный_муравейник.jpg'];
const entry = ["Аркадий Аверченко. Дюжина ножей в спину революции. Париж, 1921","Аркадий Аверченко. Нечистая сила. Константинополь, 1921","Аркадий Аверченко. Осколки разбитого вдребезги. Москва; Ленинград, 1926","Аркадий Аверченко. Развороченный муравейник. Москва; Ленинград, 1927"]
let img = document.querySelector ('img');
let entr = document.createElement('entr');
entr.className = "carousel-entry";
const stopbtn = ("#carousel");
let i = 0;

window.setInterval (function(){
  img.src = images[i];
  document.querySelectorAll('.carousel-entry').forEach((n, i) => n.textContent = entry[i]);
  entr.innerHTML = entry[i];
  document.body.append(entr);
  i++;
   if (i == images.length) {i=0;}
}, 1500);

let downS = false;
console.log("downS");
stopbtn.mouseover(function() {
  downS = true;

})
.mouseout(function() {
  downS = false;
});

// (".carousel-entry-img").hover(function(){
//   (".carousel-entry-img").slick('slickPause')
// });

const imgbtn = document.querySelectorAll('.carousel-entry-img');
let j = 0;
function btn_next() {
    imgbtn[j].classList.add('active');
    j = (j + 1) % images.length;
    imgbtn[j].classList.remove('active');
console.log(imgbtn[j], j);
}



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


