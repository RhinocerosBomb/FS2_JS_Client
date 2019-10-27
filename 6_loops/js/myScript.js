const wordList = ["this", "is", "fullstack"];
const numList = [1,22,342];
const letter = "f";
const greaterThanVal = 4;
const wordListElem = document.getElementById("words");
const numberListElem = document.getElementById("numbers");

try {
  for(let i = 0; i < wordList.length; i++) {
    if (wordList[i].startsWith(letter)) {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(wordList[i]));
      wordListElem.appendChild(li);
    }
  }

  for(let i = 0; i < numList.length; i++) {
    if (numList[i] > greaterThanVal) {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(numList[i]));
      numberListElem.appendChild(li);
    }
  }
} catch (e) {
  alert("something went wrong");
  console.error(e);
}
