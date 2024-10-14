//--------------index.html-------------------
// ======navSection==========
const menuA = [
  { href: "index.html", icon: "fa-solid fa-house", text: "Home" },
  { href: "menu.html", icon: "fa-solid fa-book-open", text: "Menu" },
  { href: "Reservation.html", icon: "fa-solid fa-kitchen-set", text: "Reserv" },
  { href: "about.html", icon: "fa-solid fa-address-card", text: "AboutUs" },
  { href: "contact.html", icon: "fa-solid fa-person-military-to-person", text: "Contact" },
  { href: "adminpanel.html", icon: "fa-solid fa-user-tie", text: "Admin" },
];
const nav = document.querySelector('.menu');

menuA.forEach(item => {
  const a = document.createElement('a');
  a.href = item.href;
  a.className="menu-item sadow"
  a.innerHTML = `<i class="${item.icon}"></i><b class="hid">${item.text}</b>`;
  nav.appendChild(a);
});

//=========carouselImgSection=============
  const imeges=[
    "image2/Food01.jpg",
    "image2/Food04.jpg",
    "image2/Food05.jpg"
  ];
  const carouselInner=document.getElementById('carouselITtems');
  if(carouselInner){
  imeges.forEach((src,index)=>{
    const itemDiv=document.createElement('div');
    itemDiv.className=`carousel-item ${index===0?'active':''}`;
    const img=document.createElement('img');
    img.src=src;
    img.className="d-block w-100 sadow";
    img.alt=`Food image ${index+1}`;
    itemDiv.appendChild(img);
    carouselInner.appendChild(itemDiv);
  });
}

// ============photo_flex============
const images = ['first_img', 'second_img', 'third_img', 'fourth_img'];
const container = document.querySelector('.photo_flex');
if(container){
images.forEach(imageClass => {
  const div = document.createElement('div');
  div.classList.add('first');

  const imgDiv = document.createElement('div');
  imgDiv.classList.add(imageClass, 'img');

  const button = document.createElement('button');
  button.classList.add('sadow');
  button.textContent = 'click';
  button.addEventListener('click',()=>{
    window.location.href='menu.html';
  })

  div.appendChild(imgDiv);
  div.appendChild(button);
  container.appendChild(div);
});
}

// ==============video============
const videoSources = [
  'place.mp4',
  'kitchen.mp4',
  'chef_1.mp4',
  'customer.mp4'
];

const containers = document.getElementById('videoContainer');
if(containers){
videoSources.forEach(src => {
  const video = document.createElement('video');
  video.className = 'sadow';
  video.controls = true;
  video.src = src;
  containers.appendChild(video);
});
}
// =============random Color for every Sections=============
function randname(){
  return Math.floor(Math.random()*256);
 }
 function randcolor(){
return `rgb(${randname()},${randname()},${randname()})`;
 }
 let logo=document.querySelector('.logo');
 let logos=document.querySelectorAll('.sadow');
 let imgs=document.querySelectorAll('.img');
 let back=document.querySelectorAll('.back');
let color;

  logo.addEventListener('click',function(){
    color=randcolor();
    for(let j=0;j<logos.length;j++){
      logos[j].style.boxShadow=`1px 1px 8px 3px ${color}`;
       logos[j].style.color=`${color}`;
    }
    for(let k=0;k<imgs.length;k++){
      imgs[k].style.border=`2px solid ${color}`;
    }
     for(let l=0;l<back.length;l++){
       back[l].style.background=`${color}`;
     }
    console.log(color);
  });
  for(let l=0;l<imgs.length;l++){
    imgs[l].addEventListener('mouseover',function(){
      if(color){
        imgs[l].style.boxShadow=`1px 10px 30px 3px ${color}`;
      }
    });
    imgs[l].addEventListener('mouseout',function(){
      imgs[l].style.boxShadow='';
    });
  }


//---------------- CHEFS ---------------
const readMoreButtons = document.querySelectorAll(".btn");

readMoreButtons.forEach(item => {
    item.addEventListener("click", () => {
        const box = item.closest(".box");
        const readMoreText = box.querySelector(".text");

        if(readMoreText.style.maxHeight){
            readMoreText.style.maxHeight = null;
            item.textContent = "Read More";
            item.style.backgroundColor = "#fdca23";
        } else{
            readMoreText.style.maxHeight = readMoreText.scrollHeight + "px";
            item.textContent = "Read Less";
            item.style.backgroundColor = "#ff0000";
        }
    });
});