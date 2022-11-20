import _ from "lodash";

function MyComponent() {
  console.log("Hi from MyComponent");
  const element = document.createElement("div");

  // Lodash now importeds by this script
  element.innerHTML = _.join(["Hello", "there", "webpack"], " ");

  return element;
}

document.body.appendChild(MyComponent());
