const input = document.querySelector("input");
const div = document.querySelector("div");

const label = div.querySelector("label");
input.addEventListener("focus", (e) => {
  input.placeholder = "";
  label.setAttribute("style", "display:block");
});

input.addEventListener("blur", (e) => {
  if (!input.value) {
    input.placeholder = "Name";
    label.setAttribute("style", "display:none");
  }
});
