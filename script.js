const cardHolderInput = document.getElementById("cardholder");
const nameOnCard = document.getElementById("card-name");
const nameOnCardInit = document.getElementById("card-name").textContent;
const monthInput = document.getElementById("month");
const cardMonth = document.getElementById("exp-month");
const cardMonthInit = document.getElementById("exp-month").textContent;
const yearInput = document.getElementById("year");
const cardYear = document.getElementById("exp-year");
const cardYearInit = document.getElementById("exp-year").textContent;
const cardNumberInput = document.getElementById("cardnumber");
const cardNumber = document.getElementById("number-on-card");
const cardNumberInit = document.getElementById("number-on-card").textContent;
const cvcInput = document.getElementById("cvc");
const cardCvc = document.getElementById("card-cvc");
const cardCvcInit = document.getElementById("card-cvc").textContent;

const nameError = document.querySelector(".name-error");
const cardNumberError = document.querySelector(".card-error");
const dateError = document.querySelector(".date-error");
const cvcError = document.querySelector(".cvc-error");

const submitButton = document.getElementById("submit");

const form = document.querySelector("form");
const successPage = document.querySelector(".completed");

// ALL UPDATE FUNCTIONS

function updateName() {
  // Updates card name as user types
  nameOnCard.innerHTML = cardHolderInput.value;

  //resets card name if input is cleared
  if (cardHolderInput.value === "") {
    nameOnCard.textContent = nameOnCardInit;
  }
}

function updateCardNumber() {
  // reset error border style
  cardNumberInput.style.cssText = `border-color: var(--light-grey)`;
  cardNumberError.innerHTML = "";
  // Updates card number as user types
  cardNumber.innerHTML = cardNumberInput.value;

  // Check if input is number
  if (isNaN(cardNumberInput.value)) {
    cardNumberError1();
  }

  //resets card number if input is cleared
  if (cardNumberInput.value === "") {
    cardNumber.textContent = cardNumberInit;
  }
}

function updateMonth() {
  // reset error border style
  monthInput.style.cssText = `border-color: var(--light-grey)`;
  dateError.innerHTML = "";
  // Updates card month as user types
  cardMonth.innerHTML = monthInput.value;

  // Check if input is number
  if (isNaN(monthInput.value)) {
    monthError1();
  }

  //resets card month if input is cleared
  if (monthInput.value === "") {
    cardMonth.textContent = cardMonthInit;
  }

  if (monthInput.value > 12) {
    monthError2();
  }
}

function updateYear() {
  // reset error border style
  dateError.innerHTML = "";
  yearInput.style.cssText = `border-color: var(--light-grey)`;
  // Updates card year as user types
  cardYear.innerHTML = parseInt(yearInput.value);

  // Check if input is number
  if (isNaN(yearInput.value)) {
    yearError1();
  }

  //resets card year if input is cleared
  if (yearInput.value === "") {
    cardYear.textContent = cardYearInit;
  }
}

function updateCvc() {
  // reset error border style
  cvcInput.style.cssText = `border-color: var(--light-grey)`;
  cvcError.innerHTML = "";
  // Updates card cvc as user types
  cardCvc.innerHTML = cvcInput.value;

  // Check if input is number
  if (isNaN(cvcInput.value)) {
    cvcError1();
  }

  //resets card cvc if input is cleared
  if (cvcInput.value === "") {
    cardCvc.textContent = cardCvcInit;
  }
}

// ERRORS
function cardNumberError1() {
  cardNumberError.innerHTML = "Wrong format, numbers only";
  cardNumberInput.style.cssText = `border-color: var(--error-color)`;
}

function cardNumberError2() {
  cardNumberError.innerHTML = "Invalid card number";
  cardNumberInput.style.cssText = `border-color: var(--error-color)`;
}

function monthError1() {
  dateError.innerHTML = "Wrong format, numbers only";
  monthInput.style.cssText = `border-color: var(--error-color)`;
}
function monthError2() {
  dateError.innerHTML = "Invalid Month";
  monthInput.style.cssText = `border-color: var(--error-color)`;
}

function yearError1() {
  dateError.innerHTML = "Wrong format, numbers only";
  yearInput.style.cssText = `border-color: var(--error-color)`;
}

function cvcError1() {
  cvcError.innerHTML = "Wrong format, numbers only";
  cvcInput.style.cssText = `border-color: var(--error-color)`;
}

function cvcError2() {
  cvcError.innerHTML = "Invalid CVC";
  cvcInput.style.cssText = `border-color: var(--error-color)`;
}

function blankNameError() {
  nameError.innerHTML = `Can't be blank`;
  cardHolderInput.style.cssText = `border-color: var(--error-color)`;
}

function blankCardNumberError() {
  cardNumberError.innerHTML = `Can't be blank`;
  cardNumberInput.style.cssText = `border-color: var(--error-color)`;
}

function blankMonthError() {
  dateError.innerHTML = `Can't be blank`;
  monthInput.style.cssText = `border-color: var(--error-color)`;
}

function blankYearError() {
  dateError.innerHTML = `Can't be blank`;
  yearInput.style.cssText = `border-color: var(--error-color)`;
}

function blankCvcError() {
  cvcError.innerHTML = `Can't be blank`;
  cvcInput.style.cssText = `border-color: var(--error-color)`;
}

// SUBMIT FUNCTION
function checkAllFields() {
  // checks if name is blank
  if (cardHolderInput.value === "") {
    blankNameError();
  }

  // checks if month is blank
  if (monthInput.value === "") {
    blankMonthError();
  }

  // checks if year is blank
  if (yearInput.value === "") {
    blankYearError();
  }

  // checks if card number is blank or incomplete
  if (cardNumberInput.value === "") {
    blankCardNumberError();
  } else if (cardNumberInput.value.length < 16) {
    cardNumberError2();
  }

  // checks if cvc is blank
  if (cvcInput.value === "") {
    blankCvcError();
  } else if (cvcInput.value.length < 3) {
    cvcError2();
  }

  // show success
  if (
    cardHolderInput.value !== "" &&
    monthInput.value !== "" &&
    yearInput.value !== "" &&
    cardNumberInput.value !== "" &&
    cvcInput.value !== "" &&
    cardNumberInput.value.length == 16 &&
    cvcInput.value.length == 3
  ) {
    console.log("success");
    form.style.cssText = "visibility: hidden;";
    successPage.style.display = "block";
  }
}

// EVENT LISTENERS
cardHolderInput.addEventListener("keyup", updateName);
cardNumberInput.addEventListener("keyup", updateCardNumber);
monthInput.addEventListener("keyup", updateMonth);
yearInput.addEventListener("keyup", updateYear);
cvcInput.addEventListener("keyup", updateCvc);
submitButton.addEventListener("click", checkAllFields);

cardHolderInput.addEventListener("keyup", () => {
  cardHolderInput.style.cssText = `border-color: var(--light-grey)`;
  nameError.innerHTML = "";
});
