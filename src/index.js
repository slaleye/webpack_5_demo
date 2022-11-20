import _ from "lodash";
import "./style.css";

function MyComponent() {
  console.log("Hi from MyComponent");
  const element = document.createElement("div");

  // Lodash now importeds by this script
  element.innerHTML = _.join(["Hello", "there", "webpack!"], " ");
  element.classList.add("greeting");
  return element;
}

document.body.appendChild(MyComponent());
