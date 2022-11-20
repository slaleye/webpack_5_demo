import _ from "lodash";
import printMe from "./print";
import "./style.css";
import WebpackLogo from "./img/logo-on-white-bg.png";

function MyComponent() {
  console.log("Hi from MyComponent");
  const rootEl = document.createElement("div");
  rootEl.setAttribute("id", "root");

  // Lodash now importeds by this script
  const textEl = document.createElement("p");
  textEl.innerHTML = _.join(["Hello", "there", "webpack!"], " ");
  textEl.classList.add("greeting");

  const myImage = new Image();
  myImage.src = WebpackLogo;
  myImage.classList.add("image");

  const btn = document.createElement("button");
  btn.innerHTML = "View Email Logs in Console";
  btn.style.alignSelf="center"
  btn.onclick = printMe;

  rootEl.appendChild(textEl);
  rootEl.appendChild(myImage);
  rootEl.appendChild(btn);

  return rootEl;
}

document.body.appendChild(MyComponent());
