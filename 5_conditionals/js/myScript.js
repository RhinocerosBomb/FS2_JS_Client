const wordList = ["this", "is", "fullstack"];
const numList = [1,22,342];
const letter = "f";
const greaterThanVal = 4;
const wordListElem = document.getElementById("words");
const numberListElem = document.getElementById("numbers");

try {
  wordList.forEach(word => {
    if (word.startsWith(letter)) {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(word));
      wordListElem.appendChild(li);
    }
  });

  numList.forEach(number => {
    if (number > greaterThanVal) {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(number));
      numberListElem.appendChild(li);
    }
  });
} catch (e) {
  alert("something went wrong");
  console.error(e);
}
