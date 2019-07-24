var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(element) {
  return kittens.push("element");
}

function destructivelyPrependKitten(element) {
  return kittens.unshift("element");
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(element) {
  return kittens.concat("element");
}

function prependKitten(element) {
  return [element, ...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}