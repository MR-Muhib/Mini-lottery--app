const print = document.getElementById("print");
const num = document.getElementById("num");
const winn = document.getElementById("winn");

let count = 0;
const HandleClick = () => {
  const number = num.value;
  const lukyeNumber = Math.floor(Math.random() * 10);

  if (number === "" || number >= 11) {
    alert("Please enter a valid number");
    return;
  } else if (lukyeNumber == number) {
    print.textContent = "you are winn!";
    count++;
    winn.textContent = count;
    num.value = "";
  } else {
    print.textContent = `Not matched your number: ${lukyeNumber}`;
    num.value = "";
  }
};
