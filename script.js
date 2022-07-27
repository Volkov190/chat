const button = document.querySelector(".main__button");
const buttonIcon = document.querySelector(".main__button_icon");
const chat = document.querySelector(".main__chat");
let isChatHidden = true;
const inputTextArea = document.querySelector(".input__textarea");
const inputSend = document.querySelector(".input__send");
const inputSmile = document.querySelector(".input__smile");
const chatPopup = document.querySelector(".chat__popup");

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
