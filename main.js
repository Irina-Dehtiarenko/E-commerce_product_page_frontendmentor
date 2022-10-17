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

const allContenersImage = [
  ...document.querySelectorAll(
    "article.main-page .all-images .container_image"
  ),
];
console.log(allContenersImage);

// show the clicked picture bigger
const showBiggerPicture = (e) => {
  // reset not active img
  allContenersImage.forEach((contenerImg) => {
    contenerImg.classList.remove("active");
  });

  const containerImg = e.target;
  containerImg.parentNode.classList.add("active");
};

allContenersImage.forEach((contenerImg) => {
  contenerImg.addEventListener("click", showBiggerPicture);
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
  amount -= 1;
  selectedAmount.textContent = amount;
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
