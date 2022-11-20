import _ from "lodash";
import "./style.css";
import WebpackLogo from "./img/logo-on-white-bg.png";
import Emails from './data/emails.csv';

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

  rootEl.appendChild(textEl);
  rootEl.appendChild(myImage);

  console.log(Emails)

  return rootEl;
}

document.body.appendChild(MyComponent());
