var Animal = {
	
	 constructor: function(age,name,sound,region){
	 this.age = age;
	 this.name = name;
	 this.sound = sound;
	 this.region = region;
	 },
	 say: function(){console.log(this.name+" say's "+this.sound)}

}


var Dog = Object.create(Animal);
Dog.barking = function() {console.log(this.sound+" "+this.sound)};

var Cat = Object.create(Animal);
Cat.meow = function() {console.log(this.sound+" "+this.sound)};

var Woodpecker = Object.create(Animal);
Woodpecker.knocking = function(){console.log(this.sound+" "+this.sound)};

function getTypep(obj) {
	if ("barking" in obj){
		return "Dog";
	} else if("meow" in obj){
		return "Cat";
	} else if("knocking" in obj){
		return "Woodpecker";
	} else {
		return "not Dog, Cat or Woodpecker";
	}
};

function getTypep1() {
	obj = this;
	if ("barking" in obj){
		return "Dog";
	} else if("meow" in obj){
		return "Cat";
	} else if("knocking" in obj){
		return "Woodpecker";
	} else {
		return "not Dog, Cat or Woodpecker";
	}
};

var dg = Object.create(Dog);
var ct = Object.create(Cat);
var wp = Object.create(Woodpecker)

dg.constructor(102, "Goofy", "Gav", "Disney");
ct.constructor(30, "Thomas", "Meoww", "Metro-Goldwyn-Mayer");
wp.constructor(76, "Woody", "Tuk", "Universal Pictures");

dg.say();
ct.say();
wp.say();