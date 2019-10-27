const message = "Welcome!";
try {
  document.getElementById("title").innerHTML = message;
  console.log("ok");
}
catch(err) {
  alert(err);
}
