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

let amount = 2;
let price = 125;
const buttonCart = document.querySelector("button.cart");
const divCart = document.querySelector("div.cart");
const amounOfOrder = document.querySelector(".amount-of-order");
const cartEmpty = document.querySelector("div.empty");
const cartNotEmpty = document.querySelector("div.not-empty");
const amountInCart = document.querySelector("span.amount-in-cart");
const fullPrice = document.querySelector("strong.full-price");
const selectedAmount = document.querySelector(".change-amount strong.amount");
console.log(selectedAmount);

// odrazu po zaladowaniu strony:
selectedAmount.textContent = amount;

// show the amoun of order in cart(powinno się zmieniać po klinknięciu w button)

if (amount >= 0) {
  if (amount === 0) {
    amounOfOrder.classList.add("hidden");
  } else {
    amounOfOrder.classList.remove("hidden");
    amounOfOrder.textContent = amount;
  }
}

const showCart = () => {
  if (amount >= 0) {
    divCart.classList.toggle("hidden");
    if (amount === 0) {
      cartEmpty.classList.remove("hidden");
      cartNotEmpty.classList.add("hidden");
      amounOfOrder.classList.add("hidden");
    } else {
      cartEmpty.classList.add("hidden");
      cartNotEmpty.classList.remove("hidden");
      amounOfOrder.classList.remove("hidden");
      amounOfOrder.textContent = amount;
      amountInCart.textContent = amount;
      fullPrice.textContent = `$ ${price * amount}.00`;
    }
  }
};
buttonCart.addEventListener("click", showCart);
