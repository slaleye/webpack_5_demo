import _ from "lodash";
import printMe, { getOptionList } from "./print";
import dropdown from "./dropdown";
import "./style.css";
import WebpackLogo from "./img/logo-on-white-bg.png";

function addCountryToDropdown(rootEl) {
  const options = getOptionList();
  console.log({ options });
  let DrodpownElement = dropdown(options);
  if (rootEl.contains(document.querySelector("#dropdown"))) {
    rootEl.removeChild(document.querySelector("#dropdown"));
  }

  rootEl.appendChild(DrodpownElement);
}

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
  btn.innerHTML = "Print Email Logs in The Console";
  btn.style.alignSelf = "center";
  btn.onclick = printMe;

  const btn2 = document.createElement("button");
  btn2.innerHTML = "Read Option List";
  btn2.style.alignSelf = "center";
  btn2.onclick = () => addCountryToDropdown(rootEl);

  rootEl.appendChild(textEl);
  rootEl.appendChild(myImage);
  rootEl.appendChild(btn);
  rootEl.appendChild(btn2);

  return rootEl;
}

document.body.appendChild(MyComponent());
