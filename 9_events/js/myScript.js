const btn1 = document.createElement("BUTTON");
btn1.innerHTML = "Home";
btn1.onclick = () => {window.location.href = "index.html"};

const btn2 = document.createElement("BUTTON");
btn2.innerHTML = "Add";
btn2.onclick = () => {window.location.href = "page1.html"};

const btn3 = document.createElement("BUTTON");
btn3.innerHTML = "Multiply";
btn3.onclick = () => {window.location.href = "page2.html"};

const btn4 = document.createElement("BUTTON");
btn4.innerHTML = "Divide";
btn4.onclick = () => {window.location.href = "page3.html"};

document.getElementById("container").append(btn1);
document.getElementById("container").append(btn2);
document.getElementById("container").append(btn3);
document.getElementById("container").append(btn4);

function validateForm(f) {
  var num1 = document.forms["squareForm"]["num1"].valueAsNumber;
  var num2 = document.forms["squareForm"]["num2"].valueAsNumber;
  var result;
  try {
    switch (f) {
      case 'add':
        result = num1+num2;
        break;
      case 'mul':
        result = num1*num2;
        break;
      case 'div':
        if (num2 === 0) {
          window.location.href = "page4.html"
        } else {
          result = num1/num2;
        }
        break;
      default:

    }
    document.getElementById("value").innerHTML = result
  } catch (err) {
    alert("Something went wrong");
    console.log(err);
  }
  return false;
}
