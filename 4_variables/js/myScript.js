const wordList = ["this", "is", "about", "five", "words"];
const numList = [1,2,3,4,5];

const listElem = document.getElementById("words");

try {
  wordList.forEach((word, i) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(numList[i] + " - " + word));
    listElem.appendChild(li);
  });
} catch (err) {
  alert("Something went wrong");
  console.err(err);
}
