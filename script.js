// SOUCE OF CHARACTERS
const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["!", "@", "$", "#", "%", "^", "&", "*", "(", ")", "-", "_"];

function passwordGen() {
  const allchar = [letters, numbers, symbols];
  let passwordList = [];
  let size = Number(document.querySelector(".input-box").value);

  let p;
  for (let i = 1; i <= size; i++) {
    let q = Math.floor(Math.random() * 3);
    if (q == 0) {
      p = Math.floor(Math.random() * 26);
    } else if (q == 1) {
      p = Math.floor(Math.random() * 10);
    } else {
      p = Math.floor(Math.random() * 12);
    }

    passwordList.push(allchar[q][p]);
    const password = passwordList.join("");
    document.querySelector(".password").textContent = password;
  }
}

function resetfunc() {
  document.querySelector(".input-box").value = "";
  document.querySelector(".password").textContent = "";
}

document.querySelector(".submit").addEventListener("click", passwordGen);
document.querySelector(".reset").addEventListener("click", resetfunc);
