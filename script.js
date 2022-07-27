const button = document.querySelector(".main__button");
const buttonIcon = document.querySelector(".main__button_icon");
const chat = document.querySelector(".main__chat");
let isChatHidden = true;
const inputTextArea = document.querySelector(".input__textarea");
const inputSend = document.querySelector(".input__send");
const inputSmile = document.querySelector(".input__smile");
const chatPopup = document.querySelector(".chat__popup");
const buttonIdleTextLeft = document.querySelector(
  ".button__idle-text-left_hidden"
);
const buttonIdleTextRight = document.querySelector(
  ".button__idle-text-right_hidden"
);
const buttonIdleCheck = document.querySelector(".button__idle-check_hidden");

const idle = () => {
  if (!isChatHidden) return;

  buttonIdleTextLeft.classList.add("button__idle-text-left");
  setTimeout(() => {
    buttonIcon.classList.add("main__button_icon-chat_hidden");
    setTimeout(() => {
      buttonIcon.classList.add("main__button_icon-chat_rotated");
      buttonIdleTextRight.classList.add("button__idle-text-right");
      setTimeout(() => {
        buttonIcon.classList.remove("main__button_icon-chat_hidden");
        setTimeout(() => {
          buttonIdleCheck.classList.remove("button__idle-check_hidden");
          setTimeout(() => {
            buttonIdleCheck.classList.add("button__idle-check_hidden");
            buttonIdleTextLeft.classList.remove("button__idle-text-left");
            buttonIdleTextRight.classList.remove("button__idle-text-right");
            setTimeout(() => {
              buttonIcon.classList.remove("main__button_icon-chat_rotated");
            }, 1000);
          }, 1000);
        }, 1000);
      }, 2000);
    }, 1000);
  }, 800);
};

setTimeout(idle, 20000);

window.addEventListener("click", (event) => {
  if (
    !(
      event.target.classList.contains("chat__popup") ||
      event.target.classList.contains("popup__smile") ||
      event.target.classList.contains("input__smile")
    )
  ) {
    chatPopup.classList.add("chat__popup_hidden");
  }
});

setTimeout(() => {
  buttonIcon.classList.add("main__button_icon-chat");
}, 1000);

button.addEventListener("click", () => {
  buttonIdleCheck.classList.add("button__idle-check_hidden");
  buttonIdleTextLeft.classList.remove("button__idle-text-left");
  buttonIdleTextRight.classList.remove("button__idle-text-right");
  buttonIcon.classList.remove("main__button_icon-chat_hidden");
  buttonIcon.classList.remove("main__button_icon-chat_rotated");

  if (isChatHidden) {
    buttonIcon.classList.add("main__button_icon-close");
  } else {
    buttonIcon.classList.add("main__button_icon-close-hide");
    setTimeout(() => {
      buttonIcon.classList.remove("main__button_icon-close-hide");
      buttonIcon.classList.remove("main__button_icon-close");
    }, 1000);
    setTimeout(idle, 20000);
  }

  chat.classList.toggle("main__chat_hidden");

  isChatHidden = !isChatHidden;
});

inputTextArea.addEventListener("input", (ev) => {
  if (inputTextArea.value.length > 0) {
    inputSend.classList.remove("input__send_hidden");
  } else {
    inputSend.classList.add("input__send_hidden");
  }

  const inputTextArea1 = inputTextArea.cloneNode(true);
  inputTextArea1.style.opacity = "0";
  inputTextArea.after(inputTextArea1);
  let diff = 0;
  if (
    inputTextArea1.scrollHeight > inputTextArea1.clientHeight &&
    inputTextArea1.rows < 5
  ) {
    diff = 1;
  } else if (inputTextArea1.rows > 1) {
    while (
      !(inputTextArea1.scrollHeight > inputTextArea1.clientHeight) &&
      inputTextArea1.rows > 2
    ) {
      inputTextArea1.rows -= 1;
      --diff;
    }
    if (inputTextArea1.rows === 2) {
      inputTextArea1.rows -= 1;
      --diff;
      if (inputTextArea1.scrollHeight > inputTextArea1.clientHeight) {
        ++diff;
      }
    }
  }

  inputTextArea.rows += diff;
  inputTextArea1.remove();
});

inputSmile.addEventListener("click", () => {
  chatPopup.classList.toggle("chat__popup_hidden");
});
