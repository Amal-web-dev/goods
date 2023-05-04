import arr from './modules/db.js'


const body = document.body
const header = document.createElement('header')
const container = document.createElement('div')
const headerTop = document.createElement('div')
const headerBottom = document.createElement('div')
const left = document.createElement('div')
const right = document.createElement('div')
let btnWhiteOne = document.createElement('button')
let btnRedOne = document.createElement('button')
let btnWhiteTwo = document.createElement('button')
let cardText = document.createElement('p')
let phoneNumber = document.createElement('p')
let btnSell = document.createElement('button')
let hr = document.createElement('hr')
let languageOne = document.createElement('p')
let languageTwo = document.createElement('p')
let languageThree = document.createElement('p')
let hrTwo = document.createElement('hr')
const languageSwitcher = document.createElement('div')
let h1 = document.createElement('h1')
let btnBurger = document.createElement('button')
let imgBurger = document.createElement('img')
let textBurger = document.createElement('p')
let inputSearch = document.createElement('input')
let btnSearch = document.createElement('button')
let imgSearch = document.createElement('img')
const allIcon = document.createElement('div')
let allRedIconOne = document.createElement('div')
let allRedIconTwo = document.createElement('div')
let allRedIconThree = document.createElement('div')
let allRedIconFour = document.createElement('div')
let comperisonIcon = document.createElement('img')
let heartIcon = document.createElement('img')
let basketIcon = document.createElement('img')
let signInIcon = document.createElement('img')
let comperisonText = document.createElement('p')
let heartText = document.createElement('p')
let basketText = document.createElement('p')
let signInText = document.createElement('p')


header.classList.add('header')
container.classList.add('container')
headerTop.classList.add('header-top')
headerBottom.classList.add('header-bottom')
left.classList.add('left')
right.classList.add('right')
btnWhiteOne.classList.add('btn-header-white')
btnRedOne.classList.add('btn-header-red')
btnWhiteTwo.classList.add('btn-header-white')
cardText.classList.add('p-header-card')
phoneNumber.classList.add('phone-number')
btnSell.classList.add('btn-sell')
languageSwitcher.classList.add('language-switcher')
languageOne.classList.add('language')
languageTwo.classList.add('language-2')
languageTwo.classList.add('active')
languageThree.classList.add('language')
btnBurger.classList.add('btn-burger')
inputSearch.classList.add('inp-search')
btnSearch.classList.add('btn-search')
allIcon.classList.add('all-icon')
allRedIconOne.classList.add('all-red-icon')
allRedIconOne.classList.add('comperison')
allRedIconTwo.classList.add('all-red-icon')
allRedIconThree.classList.add('all-red-icon')
allRedIconFour.classList.add('all-red-icon')
comperisonIcon.classList.add('comperison-icon')
heartIcon.classList.add('heart-icon')
basketIcon.classList.add('basket-icon')
signInIcon.classList.add('sign-in-icon')

comperisonIcon.src = './icon/7119818_growth_diagram_comparison_graph_information_icon.png'
heartIcon.src = './icon/211754_heart_icon.png'
basketIcon.src = './icon/2784211_basket_business_finance_money_icon.png'
signInIcon.src = './icon/392531_account_friend_human_man_member_icon.png'
comperisonText.innerHTML = 'Сравнениe'
heartText.innerHTML = 'Избранныe'
basketText.innerHTML = 'Корзина'
signInText.innerHTML = 'Войти'
btnWhiteOne.innerHTML = '0% Рассрочка'
btnRedOne.innerHTML = 'Скидки'
btnWhiteTwo.innerHTML = 'Розыгрыши'
cardText.innerHTML = 'Карта сайта'
phoneNumber.innerHTML = '+998 (71) 202 20 21'
btnSell.innerHTML = 'Продавайте на olcha'
languageOne.innerHTML = 'Ўзб'
languageTwo.innerHTML = 'Рус'
languageThree.innerHTML = 'Eng'
h1.innerHTML = 'olcha'
textBurger.innerHTML = 'Каталог'
imgBurger.src = './icon/6351905_burger_checklist_list_menu_navigation_icon.png'
imgSearch.src = './icon/search.2a234c15.svg'

body.prepend(header)
header.append(container)
container.append(headerTop, headerBottom)
headerTop.append(left, right)
left.append(btnWhiteOne, btnRedOne, btnWhiteTwo, cardText)
right.append(phoneNumber, btnSell, hr, languageSwitcher, hrTwo)
languageSwitcher.append(languageOne, languageTwo, languageThree);
headerBottom.append(h1, btnBurger, inputSearch, btnSearch, allIcon)
btnBurger.append(imgBurger, textBurger)
btnSearch.append(imgSearch)
allIcon.append(allRedIconOne, allRedIconTwo, allRedIconThree, allRedIconFour)
allRedIconOne.append(comperisonIcon, comperisonText)
allRedIconTwo.append(heartIcon, heartText)
allRedIconThree.append(basketIcon, basketText)
allRedIconFour.append(signInIcon, signInText)


languageSwitcher.addEventListener('click', (event) => {
    if (event.target.tagName === 'P') {
      languageSwitcher.querySelectorAll('p').forEach((item) => {
        item.classList.remove('active');
      });
      event.target.classList.add('active');
    }
  });
 let favourite = document.querySelector('.favourite')
  allRedIconThree.onclick = () => {
    favourite.style.right = '0%'
  }

  
  let allRedIcons = [allRedIconOne, allRedIconTwo, allRedIconThree, allRedIconFour];

allRedIcons.forEach(function(icon) {
  icon.addEventListener('click', function() {
    allRedIcons.forEach(function(icon) {
      icon.classList.remove('btn-change-bg');
    });
    icon.classList.add('btn-change-bg');
  });
});

let center = document.querySelector('.main-goods')

btnBurger.onclick = () => {
  center.classList.add('mt')
}



let icons = ['price', 'rate', 'count']
let showBtnFive = document.querySelector('#btn-show-5')
let showBtnAll = document.querySelector('#btn-show-all')




showBtnFive.addEventListener('click', () => {
  showProducts(5);
});

showBtnAll.addEventListener('click', () => {
  showProducts(arr.length);
});



function showProducts(count) {
  const productsContainer = document.querySelector('.product-container');
  let item;
  let pCounter = document.querySelector('#cart_amount')


  for (let i = 0; i < count; i++) {
    
    item = arr[i];
    

    const itemDiv = document.createElement('div');
    const imgContent = document.createElement('img');
    const decrDiv = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const row = document.createElement('div');
    const btn = document.createElement('button');

    for (let icon of icons) {
      const feature = document.createElement('div');
      const img = document.createElement('img');
      const span = document.createElement('span');

      feature.classList.add('feature');

      img.src = './public/icons/' + icon + '.svg';
      span.innerHTML = item[icon] !== undefined ? item[icon] : item.rating[icon];

      feature.append(img, span);
      row.append(feature);
      img.onclick = () => {
        img.classList.add('svg');
      };
    }

    itemDiv.classList.add('item');
    imgContent.classList.add('content');
    decrDiv.classList.add('description');
    row.classList.add('row');

    h3.innerHTML = item.category;
    p.innerHTML = item.description.slice(0, 100).toLowerCase();
    btn.innerHTML = 'В избранное';

    imgContent.src = item.image;

    itemDiv.append(imgContent, decrDiv);
    decrDiv.append(h3, p, row, btn);
    productsContainer.append(itemDiv);

    let countTwo = 0

btn.onclick = () => {
  if (btn.innerHTML == 'Добавлено') {
    btn.innerHTML = 'В избранное';
    btn.classList.remove('add-btn');
    countTwo--;
  } else {
    btn.innerHTML = 'Добавлено';
    btn.classList.add('add-btn');
    countTwo++;
  }
  pCounter.innerHTML = countTwo;
};
    if (i == arr.length) {
      break;
    }
  }
  
}



let imgClose = document.querySelectorAll('.close-icon')
let click = false

imgClose.forEach(close =>  {
  close.onclick = () => {
    if(click == false) {
      center.classList.remove('mt')
      favourite.style.right = '-100%'
      click = true
    } else {
      click = false
    }
  }
})
  