/**
 * Drodpown Component
 */
 import _ from "lodash";

function dropdown(optionList = []) {
  const selectEl = document.createElement("select");
  selectEl.setAttribute("id", "dropdown");
  selectEl.classList.add(_.join(["custom","dropdown"],"-"))
  selectEl.style.alignSelf = "center";

  if (optionList.length) {
    optionList.forEach((option) => {
      let optionEl = document.createElement("option");
      optionEl.value = option.value;
      optionEl.text = option.text;
      selectEl.add(optionEl);
    });
  }

  return selectEl;
}

export default dropdown;
