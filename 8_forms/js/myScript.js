const btn1 = document.createElement("BUTTON");
btn1.innerHTML = "Home";
btn1.onclick = () => {window.location.href = "index.html"};

const btn2 = document.createElement("BUTTON");
btn2.innerHTML = "Page 1";
btn2.onclick = () => {window.location.href = "page1.html"};

const btn3 = document.createElement("BUTTON");
btn3.innerHTML = "Page 2";
btn3.onclick = () => {window.location.href = "page2.html"};

document.getElementById("container").append(btn1);
document.getElementById("container").append(btn2);
document.getElementById("container").append(btn3);

function validateForm() {
  try {
    var x = document.forms["squareForm"]["num"].valueAsNumber;
    document.getElementById("squared").innerHTML = x**2;
  } catch (err) {
    alert("Something went wrong");
    console.log(err);
  }
  return false;
}
