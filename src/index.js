function MyComponent() {
  console.log("Hi from MyComponent");  
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "there", "webpack"], " ");

  return element;
}

document.body.appendChild(MyComponent());