/**
 * Drodpown Component
 */
function Dropdown(optionList = []) {
  const selectEl = document.createElement("select");
  selectEl.setAttribute("id", "dropdown");
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

export default Dropdown;
