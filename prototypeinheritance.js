var Animal = function(age,name,sound,region){
	 this.age = age;
	 this.name = name;
	 this.sound = sound;
	 this.region = region;
}

Animal.prototype.say = function(){console.log(this.name+" say's "+this.sound)};

function inheritanceProp(){
	Animal.apply(this,arguments);
	Object.defineProperty(this,"sound",{writable: false});
}

function inheritanceMethods(obj){
	obj.prototype = new Animal();
	obj.prototype.goAway = function(){console.log(this.name+" go away")};
}

var Dog = function(age,name,weight,region){ 
	inheritanceProp.call(this,age,name,"Bark",region); 
	this.weight=weight;
};
inheritanceMethods(Dog);

var Cat = function(age,name,color,region){ 
	inheritanceProp.call(this,age,name,"Meow",region);
	this.color=color;
};
inheritanceMethods(Cat);

var Woodpecker = function(age,name,kind,region){ 
	inheritanceProp.call(this,age,name,"Guess Who?",region);
	this.kind=kind;
};
inheritanceMethods(Woodpecker);

function getTypep(obj) {
	if ("weight" in obj){
		return "Dog";
	} else if("color" in obj){
		return "Cat";
	} else if("kind" in obj){
		return "Woodpecker";
	} else {
		return "not an animal";
	}
};

function getTypep1() {
	obj = this;
	if ("weight" in obj){
		return "Dog";
	} else if("color" in obj){
		return "Cat";
	} else if("kind" in obj){
		return "Woodpecker";
	} else {
		return "not an animal";
	}
};




dg = new Dog(102, "Goofy", "42kg", "Disney");
ct = new Cat(30, "Thomas", "Gray/Blue", "Metro-Goldwyn-Mayer");
wp = new Woodpecker(76, "Woody", "Pileated", "Universal Pictures");

dg.say();
ct.say();
wp.say();
