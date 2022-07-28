let buttonLetter = document.getElementById("button");

function buttonClick(event) {
  let btnValue = event.target.innerText;
  let inputValue = document.getElementById("mainInput").value;
  if (btnValue == "C") {
    document.getElementById("mainInput").value = "";
    document.getElementById("secondInput").value = "";
  } else if (btnValue == "DEL") {
    document.getElementById("mainInput").value = inputValue.slice(
      0,
      inputValue.length - 1
    );
  } else if (btnValue == "=") {
    document.getElementById("secondInput").value = inputValue;
    document.getElementById("mainInput").value = eval(inputValue);
  } else {
    document.getElementById("mainInput").value = inputValue + btnValue;
  }
}

buttonLetter.addEventListener("click", buttonClick);
