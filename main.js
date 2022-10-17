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
console.log(buttonDelete);

// odrazu po zaladowaniu strony:
selectedAmount.textContent = amount;

// show the amoun of order in cart(powinno się zmieniać po klinknięciu w button)

// if (amount >= 0) {
//   if (amount === 0) {
//     amounOfOrder.classList.add("hidden");
//   } else {
//     amounOfOrder.classList.remove("hidden");
//     amounOfOrder.textContent = amount;
//   }
// }

showMobNav = () => {
  navigation.classList.remove("hidden");
  //   close a mobile nav
  iconCloseNav.addEventListener("click", () => {
    navigation.classList.add("hidden");
  });
};

const resetEmount = () => {
  cartEmpty.classList.remove("hidden");
  cartNotEmpty.classList.add("hidden");
  amounOfOrder.classList.add("hidden");
};

iconMenu.addEventListener("click", showMobNav);

const deleteOrder = () => {
  amount = 0;
  selectedAmount.textContent = amount;
  resetEmount();
};

const showCart = () => {
  divCart.classList.toggle("hidden");

  if (!divCart.className.includes("hidden")) {
    buttonDelete.addEventListener("click", deleteOrder);
  }
};
buttonCart.addEventListener("click", showCart);

buttonMinus.addEventListener("click", () => {
  if (amount <= 0) {
    return;
  } else {
    amount -= 1;
    selectedAmount.textContent = amount;
  }
});

buttonPlus.addEventListener("click", () => {
  amount += 1;
  selectedAmount.textContent = amount;
});

const addToCart = () => {
  divCart.classList.add("hidden");
  if (amount === 0) {
    resetEmount();
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
