(() => {
  const send = document.querySelector("#sendBtn");
  const skip = document.querySelector("#skipBtn");
  const hint = document.querySelector("#hint");
  const reset = document.querySelector("#resetBtn");

  function complete(button, message) {
    button.classList.add("done");
    button.setAttribute("aria-pressed", "true");
    hint.textContent = message;
  }
  function restore(button) {
    button.classList.remove("done");
    button.setAttribute("aria-pressed", "false");
  }

  send.addEventListener("click", () => {
    restore(skip);
    complete(send, "Message sent successfully.");
  });
  skip.addEventListener("click", () => {
    restore(send);
    complete(skip, "Skipped — you're out.");
  });
  reset.addEventListener("click", () => {
    restore(send);
    restore(skip);
    hint.textContent = "Choose an action to see the animation.";
  });
})();