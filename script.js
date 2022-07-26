const button = document.querySelector(".main__button");
const buttonIcon = document.querySelector(".main__button_icon");
const chat = document.querySelector(".main__chat");
let isChatHidden = true;

setTimeout(() => {
  buttonIcon.classList.add("main__button_icon-chat");
}, 1000);

button.addEventListener("click", () => {
  if (isChatHidden) {
    buttonIcon.classList.add("main__button_icon-close");
  } else {
    buttonIcon.classList.add("main__button_icon-close-hide");
    setTimeout(() => {
      buttonIcon.classList.remove("main__button_icon-close-hide");
      buttonIcon.classList.remove("main__button_icon-close");
    }, 1000);
  }

  chat.classList.toggle("main__chat_hidden");

  isChatHidden = !isChatHidden;
});
