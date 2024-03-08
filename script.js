const div = document.querySelector(".text");
const text =
  "Meet the Naughty Owls who cover everything in the night sky. They have a unique and fascinating story.";

function textTypingEffect(element, text, i = 0) {
  if (i === 0) {
    element.textContent = "";
  }
  element.textContent += text[i];

  // if we reached the end of the string
  if (i === text.length - 1) {
    return;
  }

  setTimeout(() => textTypingEffect(element, text, i + 1), 30);
}

textTypingEffect(div, text);

// For To Top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
