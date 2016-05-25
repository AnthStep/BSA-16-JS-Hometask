var Animal = function(age,name,sound,region){
	 this.age = age;
	 this.name = name;
	 this.sound = sound;
	 this.region = region;
}

Animal.prototype.say = function(){console.log(this.name+" say's "+this.sound)};

function inheritance(obj){                         //prototyping from Animal
	obj.prototype = new Animal();                                             
	obj.prototype.goAway = function(){console.log(this.name+" go away")};
}



var Dog = function(age,name,sound,region){      //DOG CLASS
	Animal.apply(this,arguments);
};

Dog.prototype.barking = function() {console.log(this.sound+" "+this.sound)};
inheritance(Dog);



var Cat = function(age,name,sound,region){      //CAT CLASS
	Animal.apply(this,arguments);
};

Cat.prototype.meow = function() {console.log(this.sound+" "+this.sound)};
inheritance(Cat);



var Woodpecker = function(age,name,sound,region){    //WOODPECKER CLASS
	Animal.apply(this,arguments);
};

Woodpecker.prototype.knocking = function(){console.log(this.sound+" "+this.sound)};
inheritance(Woodpecker);





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




dg = new Dog(102, "Goofy", "Gav", "Disney");
ct = new Cat(30, "Thomas", "Meoww", "Metro-Goldwyn-Mayer");
wp = new Woodpecker(76, "Woody", "Tuk", "Universal Pictures");

dg.say();
ct.say();
wp.say();
