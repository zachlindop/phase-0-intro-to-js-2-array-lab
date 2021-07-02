const cats = ["Milo", "Otis", "Garfield"];
beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });
function destructivelyAppendCat(){
    cats.push('Ralph');
}
beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });
function destructivelyPrependCat(){
      cats.unshift('Bob');
  }   
  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });
function destructivelyRemoveLastCat(){
    cats.pop();
}
beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });
  function destructivelyRemoveFirstCat(){
      cats.shift();
  }
  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });
  function appendCat(name){
    const newCat = [...cats, 'Broom'];
    return newCat;
  } 
  function prependCat(name){
    const nCat = ['Arnold', ...cats];
    return nCat;
  }
  function removeLastCat(){
      const nCats = cats.slice(0, cats.length -1);
      return nCats;
  }
  function removeFirstCat(){
      const nnCats = cats.slice(1);
      return nnCats;
  }