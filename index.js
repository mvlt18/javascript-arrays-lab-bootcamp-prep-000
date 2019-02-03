var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  var newkitten = [...kittens, name];
  return newkitten;
}

function prependKitten(name){
  var newkitten = [name,...kittens];
  return newkitten;
}

function removeLastKitten(){
  var newkitten = kittens.slice(0,2);
  return newkitten;
}

function