let isAnimationForward = true;

function toggleFloatingButtons(button) {
  // Disable the button
  button.disabled = true;

  // Wait for one second (1000 milliseconds) and then enable the button
  setTimeout(function () {
    button.disabled = false;
  }, 800);

  toggleFloatingButtonPosition();
  toggleLogo();
  animateSVG();
  rotateArrow();
  toggleButtonText();
  animatePersonalImg();
  animateButton();
  animateDataElements();
  moveDataContent();
  moveHeaders();
}
//logo animation
function toggleLogo() {
  let logo = document.querySelector(".logo-img");
  logo.classList.toggle("flipped");
}

function animateSVG() {
  const svg1 = document.getElementById("svg1");
  const svg2 = document.getElementById("svg2");

  svg1.style.transition = "transform 1s ease-out";
  svg2.style.transition = "transform 1s ease-out";

  if (isAnimationForward) {
    svg1.style.transform = "translateX(-160px) rotateY(-180deg)";
    svg2.style.transform = "translateX(-160px) rotateY(180deg)";
  } else {
    svg1.style.transform = "translateX(0)";
    svg2.style.transform = "translateX(0)";
  }

  isAnimationForward = !isAnimationForward;
}
//personal img animation
function animatePersonalImg() {
  let personalImg = document.querySelector(".personal-img");

  let isTranslated = personalImg.style.transform.includes("translateX(212px)");

  personalImg.style.transform = isTranslated
    ? "translateX(0)"
    : "translateX(212px)";
}

//arrow img animation
function rotateArrow() {
  let arrow = document.querySelector(".personal-container button svg");

  let isRotated = arrow.style.transform.includes("rotate(-180deg)");

  arrow.style.transform = isRotated
    ? "rotate(0deg)"
    : "translateX(50px) translateY(2px) rotate(-180deg)";
}

// change text in button animation
function animateButtonContainer() {
  let buttonsContainer = document.querySelector(".buttons-container");

  let isFlipped = document
    .querySelector(".personal-container button")
    .classList.contains("flipped");

  let buttons = buttonsContainer.querySelectorAll("button");

  buttons.forEach(function (button) {
    let svgInButton = button.querySelector("svg");
    let arabicText = button.querySelector(".arabic-text");
    let englishText = button.querySelector(".english-text");

    svgInButton.style.transition = "transform .8s ease-in-out";
    arabicText.style.transition = "opacity 0.8s ease-in-out";
    englishText.style.transition = "opacity 0.8s ease-in-out";

    if (isFlipped) {
      svgInButton.style.transform = "translateX(50px)";
      arabicText.style.opacity = 1;
      arabicText.style.transform = "translateX(-20px)";
      englishText.style.opacity = 0;
    } else {
      svgInButton.style.transform = "translateX(0)";
      arabicText.style.opacity = 0;
      englishText.style.opacity = 1;
    }
  });
}

// language change button animation
function toggleButtonText() {
  let button = document.querySelector(".personal-container button");
  button.classList.toggle("flipped");

  animateButtonContainer();
}

//headers move animation
function moveHeaders() {
  let nameAng = document.getElementById("name-ang");
  let nameArabic = document.getElementById("name-arabic");
  let positionAng = document.getElementById("position-ang");
  let positionArabic = document.getElementById("position-arabic");

  if (nameAng && nameArabic) {
    nameAng.classList.toggle("move-headers");
    let isNameHidden =
      parseFloat(window.getComputedStyle(nameAng).opacity) === 0;

    positionAng.classList.toggle("move-headers");
    let isPositionHidden =
      parseFloat(window.getComputedStyle(nameAng).opacity) === 0;

    nameAng.style.opacity = isNameHidden ? 1 : 0;
    nameArabic.style.opacity = isNameHidden ? 0 : 1;
    positionAng.style.opacity = isPositionHidden ? 1 : 0;
    positionArabic.style.opacity = isPositionHidden ? 0 : 1;
  }
}

//move button animation
function animateButton() {
  let button = document.querySelector(".personal-container button");

  let isTranslated = button.style.transform.includes("translateX(-210px)");

  button.style.transform = isTranslated
    ? "translateX(0)"
    : "translateX(-210px)";
}

// data elements icon's animation
function animateDataElements() {
  let dataElements = document.querySelectorAll(".data-element");
  dataElements.forEach(function (dataElement) {
    let svgInDataElement = dataElement.querySelector("svg");

    let isTranslated =
      svgInDataElement.style.transform.includes("translateX(1000%)");

    svgInDataElement.style.transform = isTranslated
      ? "translateX(0)"
      : "translateX(1000%)";
  });
}

//data element content animation
function moveDataContent() {
  let linkElements = document.getElementsByClassName("link-element");
  let arabicTel = document.getElementById("arabic-tel");

  for (let i = 0; i < linkElements.length; i++) {
    linkElements[i].classList.toggle("move-data");
  }

  let isDefaultText = arabicTel.textContent.trim() === "+971 55 414 9343";

  arabicTel.textContent = isDefaultText ? "٣٤٣٩٤١٤٥٥١٧٩" : "+971 55 414 9343";

  arabicTel.style.lineHeight = "18px";
  arabicTel.style.top = isDefaultText ? "15px" : "12px";

  if (!isDefaultText) {
    arabicTel.style.fontFamily = "AtypText";
    arabicTel.style.fontWeight = "400";
    arabicTel.style.letterSpacing = "0";
  } else {
    arabicTel.style.fontFamily = "Tajawal";
    arabicTel.style.fontWeight = "300";
    arabicTel.style.letterSpacing = "2.7px";
  }
}

// floatingbuttons animation
function toggleFloatingButtonPosition() {
  let floatingButtons = document.getElementById("floatingButtons");

  floatingButtons.style.right =
    parseFloat(getComputedStyle(floatingButtons).right.replace("px", "")) === 15
      ? "276px"
      : "15px";
}

// POPUP;
function openPopup() {
  document.getElementById("overlay").style.display = "flex";
}

function closePopup() {
  document.getElementById("overlay").style.display = "none";
}

// Copy text

function copyText() {
  const inputField = document.getElementById("myInput");
  const copyMessage = document.getElementById("copyMessage");

  navigator.clipboard
    .writeText(inputField.value)
    .then(() => {
      copyMessage.textContent = "copied to clipboard";

      setTimeout(function () {
        copyMessage.textContent = "";
      }, 1500);
    })
    .catch((err) => {
      console.error("error", err);
      copyMessage.textContent = "error failed to copy";
    });
}

//CREATE CONTACT

function createContact() {
  const contactName = "Aamash Mukhtar";
  const phoneNumber = "+971554149343";
  const emailAddress = "aamash.mukhtar@skillspark.com";
  const homepage = "https://www.skillspark.com/";

  const vCardContent =
    "BEGIN:VCARD\n" +
    "VERSION:3.0\n" +
    "FN:" +
    contactName +
    "\n" +
    "TEL:" +
    phoneNumber +
    "\n" +
    "EMAIL:" +
    emailAddress +
    "\n" +
    (homepage ? "URL:" + homepage + "\n" : "") +
    "END:VCARD";

  const blob = new Blob([vCardContent], { type: "text/vcard" });

  const link = document.getElementById("downloadLink");
  link.href = window.URL.createObjectURL(blob);
  link.download = "contact.vcf";

  link.onclick = function () {
    document.getElementById("overlay").style.display = "none";
  };
}
