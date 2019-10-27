const errHandle = (err) => {
  alert("Somethings went wrong");
  console.error(err);
}

function f1(one, elem) {
  try {
    document.write(one);
  } catch (err) {
    errHandle(err);
  }
}

function f2(two, elem) {
  try {
    document.write(two.repeat(2));
  } catch (err) {
    errHandle(err);
  }
}

function f3(three, elem) {
  try {
    document.write(three.repeat(3));
  } catch (err) {
    errHandle(err);
  }
}
