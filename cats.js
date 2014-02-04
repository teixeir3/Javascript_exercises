function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
  return this.owner + " loves " + this.name;
};

var cat1 = new Cat("Sennacy", "Jonathan");
console.log(cat1.cuteStatement());

Cat.prototype.cuteStatement = function() {
  return "everyone loves " + this.name;
};

console.log(cat1.cuteStatement());

Cat.prototype.meow = function(){
  return "meow!"
}

console.log(cat1.meow());

cat1.meow = function () {
  return "meow! meow!"
}

console.log(cat1.meow());