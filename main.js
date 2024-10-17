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

if (nav) {
  menuA.forEach(item => {
    const a = document.createElement('a');
    a.href = item.href;
    a.className = "menu-item sadow"
    a.innerHTML = `<i class="${item.icon}"></i><b class="hid">${item.text}</b>`;
    nav.appendChild(a);
  });
}

//=========carouselImgSection=============
const imeges = [
  "image2/Food01.jpg",
  "image2/Food04.jpg",
  "image2/Food05.jpg"
];
const carouselInner = document.getElementById('carouselITtems');
if (carouselInner) {
  imeges.forEach((src, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = `carousel-item ${index === 0 ? 'active' : ''}`;
    const img = document.createElement('img');
    img.src = src;
    img.className = "d-block w-100 sadow";
    img.alt = `Food image ${index + 1}`;
    itemDiv.appendChild(img);
    carouselInner.appendChild(itemDiv);
  });
}

// ============photo_flex============
const images = ['first_img', 'second_img', 'third_img', 'fourth_img'];
const container = document.querySelector('.photo_flex');
if (container) {
  images.forEach(imageClass => {
    const div = document.createElement('div');
    div.classList.add('first');

    const imgDiv = document.createElement('div');
    imgDiv.classList.add(imageClass, 'img');

    const button = document.createElement('button');
    button.classList.add('sadow');
    button.textContent = 'click';
    button.addEventListener('click', () => {
      window.location.href = 'menu.html';
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
if (containers) {
  videoSources.forEach(src => {
    const video = document.createElement('video');
    video.className = 'sadow';
    video.controls = true;
    video.src = src;
    containers.appendChild(video);
  });
}


//===================menu.html==================
// ==============================Our Menu Section==============


const menuItems = [
  { name: 'Breakfast', image: 'image/breakfast.jpg', alt: 'breakfast' },
  { name: 'Lunch', image: 'image/lunch.jpg', alt: 'lunch' },
  { name: 'Dinner', image: 'image/dinner.jfif', alt: 'dinner' },
  { name: 'Drink', image: 'image/drink.jpg', alt: 'drink' },
  { name: 'Dessert', image: 'image/cake.jpg', alt: 'dessert' }
];

const foods = {
  Breakfast: [
    { title: "Pancake", image: "image/pancake.jpg", price: 25, chef: "Aslan Amirch", stars: "★★★★★" },
    { title: "Simit", image: "image/simit.jpg", price: 25, chef: "Aslan Amirch", stars: "★★★★★" },
    { title: "Croissant", image: "image/crosan ffti.jpg", price: 25, chef: "Aslan Amirch", stars: "★★★★★" },
    { title: "Dount", image: "image/Dount.PNG", price: 25, chef: "Aslan Amirch", stars: "★★★★★" },
    { title: "Cheese Cake", image: "image/cheese-cake2.PNG", price: 25, chef: "Aslan Amirch", stars: "★★★★★" },
    { title: "Eclair", image: "image/eclair.PNG", price: 25, chef: "Aslan Amirch", stars: "★★★★★" }
  ],
  Lunch: [
    { title: "Kobida", image: "image/kobida.jpg", price: 30, chef: "Aslan Amirch", stars: "★★★★" },
    { title: "kabab", image: "image/kabab-koobide-morgh.jpg", price: 30, chef: "Aslan Amirch", stars: "★★★★" },
    { title: "kichri", image: "image/kichri-gosht land.jpg", price: 30, chef: "Aslan Amirch", stars: "★★★★" },
    { title: "Kabuli", image: "image/Kabuli-Palau1jpg.jpg", price: 30, chef: "Aslan Amirch", stars: "★★★★" },
    { title: "chicken-biryani", image: "image/chicken-biryani.png", price: 30, chef: "Aslan Amirch", stars: "★★★★" },
    { title: "biaryani", image: "image/biaryani.jpg", price: 30, chef: "Aslan Amirch", stars: "★★★★" }
  ],
  Dinner: [
    { title: "pasta", image: "image/pasta.jpg", price: 35, chef: "Aslan Amirch", stars: "★★★★" },
    { title: "board", image: "image/breakfast-board.jpg", price: 35, chef: "Aslan Amirch", stars: "★★★★" },
    { title: "egg", image: "image/egg.jfif", price: 35, chef: "Aslan Amirch", stars: "★★★★" },
    { title: "spical_egg", image: "image/egg.jpg", price: 35, chef: "Aslan Amirch", stars: "★★★★" },
    { title: "pink", image: "image/IMG_4930.PNG", price: 35, chef: "Aslan Amirch", stars: "★★★★" },
    { title: "bread", image: "image/IMG_4925.PNG", price: 35, chef: "Aslan Amirch", stars: "★★★★" }
  ],
  Drink: [
    { title: "Jus", image: "image/drink1.jpg", price: 15, chef: "Aslan Amirch", stars: "★★★★" },
    { title: "orang", image: "image/drink2.jpg", price: 15, chef: "Aslan Amirch", stars: "★★★★" },
    { title: "Ice", image: "image/drink3.jpg", price: 15, chef: "Aslan Amirch", stars: "★★★★" },
    { title: "Special_Jus", image: "image/drink4.jpg", price: 15, chef: "Aslan Amirch", stars: "★★★★" },
    { title: "watermelon-juice", image: "image/watermelon-juice.jpg", price: 15, chef: "Aslan Amirch", stars: "★★★★" },
    { title: "majom", image: "image/majom.jpg", price: 15, chef: "Aslan Amirch", stars: "★★★★" }
  ],
  Dessert: [
    { title: "Desert", image: "image/Desert.jpg", price: 40, chef: "Aslan Amirch", stars: "★★★★" },
    { title: "Pink_Desert", image: "image/Desert1.jpg", price: 40, chef: "Aslan Amirch", stars: "★★★★" },
    { title: "special_Desert", image: "image/Desert3.jpg", price: 40, chef: "Aslan Amirch", stars: "★★★★" },
    { title: "Pomegrante", image: "image/Desert2.jpg", price: 40, chef: "Aslan Amirch", stars: "★★★★" },
    { title: "Plum", image: "image/Desert4.jpg", price: 40, chef: "Aslan Amirch", stars: "★★★★" },
    { title: "Susani_Desert", image: "image/Desert5.jpg", price: 40, chef: "Aslan Amirch", stars: "★★★★" }
  ]
};

const menuContainer = document.getElementById('menu-container');
const containere = document.getElementById("food-container");

if (menuContainer) {
  menuItems.forEach(item => {
    const col = document.createElement('div');
    col.className = 'col menu-column';
    col.innerHTML = `<a href="#" class="link-dark link link-underline link-underline-opacity-0" data-meal="${item.name}">
          <img class="menu-image rounded-circle sadow" src="${item.image}" alt="${item.alt}">
          <h5 class="menu pt-3">${item.name}</h5>
      </a>`;
    col.querySelector('a').addEventListener('click', (e) => {
      e.preventDefault(); 
      showFoods(item.name);
    });

    menuContainer.appendChild(col);
  });
}


function showFoods(mealType) {
  containere.innerHTML = ''; 
  if (foods[mealType]) {
    foods[mealType].forEach(food => {
      const col = document.createElement('div');
      col.className = "col-12 col-md-4 col-sm-6 col-lg-4 pb-2";
      const card = document.createElement('div');
      card.className = "card img sadow";
      const img = document.createElement('img');
      img.className = "card-img-top img-fluid";
      img.src = food.image;
      img.alt = `${food.title} image`;
      const priceWrapper = document.createElement('div');
      priceWrapper.className = "price-wrapper";
      const priceAmount = document.createElement('span');
      priceAmount.className = "price-amount";
      priceAmount.innerHTML = `${food.price}<span>$</span>`;
      const cardBody = document.createElement('div');
      cardBody.className = "card-body";
      const cardTitle = document.createElement('h4');
      cardTitle.className = "card-title";
      cardTitle.innerText = food.title;
      const cardText = document.createElement('p');
      cardText.className = "card-text stars";
      cardText.innerHTML = `Chef <span>${food.chef}</span> | ${food.stars}`;
      const orderButton = document.createElement('a');
      orderButton.href = "Reservation.html";
      orderButton.className = "btn d-block";
      orderButton.innerText = "Order Now";
      priceWrapper.appendChild(priceAmount);
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(orderButton);
      card.appendChild(img);
      card.appendChild(priceWrapper);
      card.appendChild(cardBody);

      col.appendChild(card);
      containere.appendChild(col);
      card.addEventListener('mouseover', function () {
        if (color) {
          card.style.boxShadow = `1px 10px 30px 3px ${color}`;
        }
      });
      card.addEventListener('mouseout', function () {
        card.style.boxShadow = '';
      });
    });
  }
}

// ----------------------Chefs--------------

const arrayData = [
  {  
      imageUrl : "image2/ch5.jpg",
      Heading :"Aslan Amirchi",
      para : "  He was born Turkey in 1985 , he is the master chef of our retuarant . He has more than 10 yrars of experience in this field.  And he graduated from the best university in Italy in the field of cooking .",
  },
  {
      imageUrl : "image2/c2.jfif",
      Heading :"Sugol Sakaria",
      para : " She was born in Turkey in 1989  , and graduated from one of the Turkish universities in the field of cooking . And she has written many cookbooks . and all books are known in Turkey . " ,
  },
  {
      imageUrl : "image2/c5.png",
      Heading :"Ela Achi ",
      para : "She was born in china in 1994 , and graduated from one of  the chinese universities in the field of cooking . She is very interested in cooking seafood . and her seafood has gained world fame." ,
  },
  {
      imageUrl : "image2/c6.png",
      Heading :"Carlo Adamo",
      para : "He was born in Italy in 1995 , and he graduated from one of the Italy universities in the field of cooking. He is very professional in cooking famous Italian foods .   " ,
  },
]

const cardContainer = document.getElementById('container')
if(cardContainer){
  const functionCards = () => {
    arrayData.map((data) => {
        cardContainer.innerHTML +=`
        <div class="box">
        <img class="image1" src="${data.imageUrl}" alt=""> 
         <h4>${data.Heading}</h4>
         <p class="text">${data.para}</p>
             <button class="btn">Read more</button> 
       </div>
        `
    })
  }
  functionCards();
}


const readMoreButtons = document.querySelectorAll(".btn");

if(readMoreButtons){
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
}


// ---------- Clients ---------------
const cardData = [
  {
      para :"It was one of the best restuarants I have ever been to . the service is really great and the food is served on time.👌🙌",
      image :"image2/cl2.jpg" ,
      Heading :"Wat-- ---",
  },
  {
      para :"By stepping there, a journey in the heart of history with a taste of authenticity.And every bite is a story ofancient culture.😎",
      image :"image2/cl4.jpg" ,
      Heading :"Son-- ---",
  },
  {
      para :"What I found very intersting was the quiet place with its traditional at the same time modern decoration and classical music.🎶😊",
      image :"image2/cl1.jpg" ,
      Heading :"Jon- ---",
  },
]

const PostContainer = document.querySelector('.container_clients');

if(PostContainer){
  const postMethods = () => {
    cardData.map((postData) =>{
       const postElement = document.createElement('div');
      postElement.classList.add('cards','sadow');
      postElement.innerHTML = `
      <div>
         <p> ${postData.para} </p>
          <img class="image2" src="${postData.image}" alt="">
          <h5 class="heading">${postData.Heading}</h5>
      </div>
      `
       PostContainer.appendChild(postElement)
    })
 }
 postMethods()
 
}

// =============random Color for every Sections=============
function randname() {
  return Math.floor(Math.random() * 256);
}
function randcolor() {
  return `rgb(${randname()},${randname()},${randname()})`;
}
let logo = document.querySelector('.logo');
let logos = document.querySelectorAll('.sadow');
let imgs = document.querySelectorAll('.img');
let back = document.querySelectorAll('.back');
let color;

logo.addEventListener('click', function () {
  color = randcolor();
  for (let j = 0; j < logos.length; j++) {
    logos[j].style.boxShadow = `1px 1px 8px 3px ${color}`;
    logos[j].style.color = `${color}`;
  }
  for (let k = 0; k < imgs.length; k++) {
    imgs[k].style.border = `2px solid ${color}`;
  }
  for (let l = 0; l < back.length; l++) {
    back[l].style.background = `${color}`;
  }
  for(let g=0;g< readMoreButtons.length;g++){
    readMoreButtons[g].style.boxShadow=`1px 1px 8px 3px ${color}`;
  }
  console.log(color);
});
for (let l = 0; l < imgs.length; l++) {
  imgs[l].addEventListener('mouseover', function () {
    if (color) {
      imgs[l].style.boxShadow = `1px 10px 30px 3px ${color}`;
    }
  });
  imgs[l].addEventListener('mouseout', function () {
    imgs[l].style.boxShadow = '';
  });
}

// ============AdminPanel=========================

const ctx = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      label: 'Revenue',
      data: [10000, 15000, 12000, 18000, 22000, 24000, 20000],
      borderColor: '#ED9110',
      fill: false
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 25000
      }
    }
  }
});




const foodItems = [
  { id: 1, name: "Cheese Cake", image: "image/cheese-cake2.PNG" },
  { id: 2, name: "Eclair", image: "image/eclair.PNG" },
  { id: 3, name: "Pancake", image: "image/pancake.jpg" },
  { id: 4, name: "Simit", image: "image/simit.jpg" },
  { id: 5, name: "Croissant", image: "image/crosan ffti.jpg" },
  { id: 6, name: "Donut", image: "image/Dount.PNG" },
];

const tableBody = document.getElementById('tableBody');

foodItems.forEach(item => {
  const row = document.createElement('tr');

  row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td><img src="${item.image}" alt="food image" style="width: 50px;"></td>
      <td>
          <div class="form-check form-switch mx-auto">
              <input class="form-check-input" type="checkbox" role="switch" checked>
          </div>
      </td>
      <td><button class="btn btn-edit btn-sm">Edit</button></td>
      <td><button class="btn btn-delete btn-sm">Delete</button></td>
  ;`

  tableBody.appendChild(row);
});





const orders = [
  {
    customer: 'Name', food: 'Donut', img: 'image/Dount.PNG', phone: '+93 1234567890', price: '$25.00', status: 'Accepted'
  },
  {
    customer: 'Name', food: 'Croissant', img: 'image/crosan ffti.jpg', phone: '+93 1234567890', price: '$25.00', status: 'Accepted'
  },
  {
    customer: 'Name', food: 'Simit', img: 'image/simit.jpg', phone: '+93 1234567890', price: '$25.00', status: 'Pending'
  },
  {
    customer: 'Name', food: 'Pancake', img: 'image/pancake.jpg', phone: '+93 1234567890', price: '$25.00', status: 'Accepted'
  },
  {
    customer: 'Name', food: 'Eclair', img: 'image/eclair.PNG', phone: '+93 1234567890', price: '$25.00', status: 'Accepted'
  },
  {
    customer: 'Name', food: 'Cheese Cake', img: 'image/cheese-cake2.PNG', phone: '+93 1234567890', price: '$25.00', status: 'Accepted'
  }
];

const orderBody = document.getElementById('orderBody');

orders.forEach(order => {
  const row = document.createElement('tr');
  row.innerHTML = `
      <td>${order.customer}</td>
      <td>
          <img src="${order.img}" alt="Food Image" class="img-fluid rounded" width="50"> ${order.food}
      </td>
      <td class="phon">${order.phone}</td>
      <td>${order.price}</td>
      <td>${order.status}</td>
      <td>
          <button class="btn-custom">Accept</button><br>
          <button class="btn-decline">Decline</button>
      </td>
  ;`
  orderBody.appendChild(row);
});




const reservations = [
  { name: 'Alice', table: 4, time: '9:41 AM' },
  { name: 'Bob', table: 9, time: '9:41 AM' },
  { name: 'Charlie', table: 17, time: '9:41 AM' },
  { name: 'David', table: 6, time: '9:41 AM' },
  { name: 'Eva', table: 19, time: '9:41 AM' },
];

const reservedTablesList = document.getElementById('reserved-tables-list');

reservations.forEach(reservation => {
  const listItem = document.createElement('li');
  listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between');
  listItem.innerHTML = `
      <span>${reservation.name}</span>
      <span>Table: ${reservation.table}</span>
      <span class="list-group-item text-primary">${reservation.time}</span>
  ;`
  reservedTablesList.appendChild(listItem);
});