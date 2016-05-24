var Animal = function(age,name,sound,region){
  this.age = age;
  this.name = name;
  this.sound = sound;
  this.region = region;
  this.say = function(){console.log(this.name+" say's "+this.sound)};
}

function inheritance(){
Animal.apply(this,arguments);
this.prototype = Animal;
this.goAway = function(){console.log(this.name+" go away")};
}

var Dog = function(){ inherit.apply(this,arguments) };
var Cat = function(){ inherit.apply(this,arguments) };
var Woodpecker = function(){ inherit.apply(this,arguments) };

function getTypep() {
	
}




tom = new Cat(1,'dicj','ddsf','fef');
tom.say();