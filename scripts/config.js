function openPlayerConfig() {
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("player-name").trim();

  if (!enteredPlayerName) {
    // equivalent to enteredPlayerName === ""
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name !";
    return;
  }
}
