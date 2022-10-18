/* - 
- Otwórz galerię lightbox, klikając duży obraz produktu
- Przełącz duży obraz produktu, klikając małe miniatury zdjęć
- Dodaj przedmioty do koszyka
- Zobacz koszyk i usuń z niego przedmioty
 */
// 1. Clicking on the menu mobile - opened the menu
// 2. Clicking on thr cart  - opened the choping cart
// 3. Clicking on the button + :
// 3.1 (if strong amount < 0 - return, if strong amount === 0  - add .hidden)remove hidded(div.amount-of-order) amount +=1
// 3.2 strong.amount +=1
let number = 1;
let amount = 0;
const price = 125;
const buttonCart = document.querySelector("button.cart");
const divCart = document.querySelector("div.cart");
const amounOfOrder = document.querySelector(".amount-of-order");
const cartEmpty = document.querySelector("div.empty");
const cartNotEmpty = document.querySelector("div.not-empty");
const amountInCart = document.querySelector("span.amount-in-cart");
const fullPrice = document.querySelector("strong.full-price");
const selectedAmount = document.querySelector(".change-amount strong.amount");
const iconMenu = document.querySelector(".icon-menu");
const navigation = document.querySelector(".nav-mobile");
const iconCloseNav = document.querySelector(
  ".opened-nav-menu .contener_icon-close .icon-close"
);

const buttonMinus = document.querySelector("button.minus");
const buttonPlus = document.querySelector("button.plus");
const buttonAddToCart = document.querySelector("button.add");

const buttonDelete = document.querySelector("div.product svg");

const allContenersImageMainPage = [
  ...document.querySelectorAll(
    "article.main-page .all-images .container_image"
  ),
];

const allContenersImageLightbox = [
  ...document.querySelectorAll(
    "article.light-box .all-images .container_image"
  ),
];
const iconPrevious = document.querySelector(
  ".main-page div.main-images div.contener_icon-previous"
);

const iconNext = document.querySelector(
  ".main-page div.main-images div.contener_icon-next"
);

const mainImage = document.querySelector(
  ".main-page div.main-images img.main-image"
);
const mainImageLightbox = document.querySelector(
  "article.light-box div.main-images img.main-image"
);

const lightbox = document.querySelector("article.light-box");
const ButtonCloseLightbox = document.querySelector(
  "article.light-box .main-images .container_close-svg"
);
console.log(ButtonCloseLightbox);

const srcBigImg = () => {
  mainImage.src = `./images/image-product-${number}.jpg`;
};

// show the big picture in the mobile device
iconPrevious.addEventListener("click", () => {
  if (number <= 1) {
    number = 4;
    srcBigImg();
  } else {
    number -= 1;
    srcBigImg();
  }
});

iconNext.addEventListener("click", () => {
  if (number === 4) {
    number = 1;
    srcBigImg();
  } else {
    number += 1;
    srcBigImg();
  }
});

// show the clicked picture bigger in version for device with min-width 394px
const showBiggerPicture = (e) => {
  // reset not active img
  allContenersImageMainPage.forEach((contenerImg) => {
    contenerImg.classList.remove("active");
  });

  const containerImg = e.target;
  containerImg.parentNode.classList.add("active");
  mainImage.src = containerImg.src;
};

allContenersImageMainPage.forEach((contenerImg) => {
  contenerImg.addEventListener("click", showBiggerPicture);
});

// opening the lightbox
mainImage.addEventListener("click", (e) => {
  lightbox.classList.remove("hidden");
});

// closing the lightbox
ButtonCloseLightbox.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});

const resetAmount = () => {
  cartEmpty.classList.remove("hidden");
  cartNotEmpty.classList.add("hidden");
  amounOfOrder.classList.add("hidden");
};

// function of showing a mobile menu after klick on the button
showMobNav = () => {
  navigation.classList.remove("hidden");
  //   close a mobile nav
  iconCloseNav.addEventListener("click", () => {
    navigation.classList.add("hidden");
  });
};

iconMenu.addEventListener("click", showMobNav);

// Deleting order from the cart
const deleteOrder = () => {
  amount = 0;
  selectedAmount.textContent = amount;
  resetAmount();
};

// opening the cart after clicking on button "cart"
const showCart = () => {
  divCart.classList.toggle("hidden");

  if (!divCart.className.includes("hidden")) {
    buttonDelete.addEventListener("click", deleteOrder);
  }
};
buttonCart.addEventListener("click", showCart);

// reducing amount
buttonMinus.addEventListener("click", () => {
  if (amount === 0) {
    return;
  } else {
    amount -= 1;
    selectedAmount.textContent = amount;
  }
});

// increasing amount
buttonPlus.addEventListener("click", () => {
  amount += 1;
  selectedAmount.textContent = amount;
});

//adding order to the cart with the selected amount of goods
const addToCart = () => {
  divCart.classList.add("hidden");
  if (amount === 0) {
    resetAmount();
  } else {
    cartEmpty.classList.add("hidden");
    cartNotEmpty.classList.remove("hidden");
    amounOfOrder.classList.remove("hidden");
    amounOfOrder.textContent = amount;
    amountInCart.textContent = amount;
    fullPrice.textContent = `$${price * amount}.00`;
  }
};

buttonAddToCart.addEventListener("click", addToCart);
