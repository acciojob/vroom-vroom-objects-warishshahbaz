// Complete the js code
function Car(make, model) {
	this.make = make;
	this.modal = modal;
}
Car.prototype.getMakeModel = function(){
	return `this is ${this.make} ${this.modal}`
}

function SportsCar(make, model, topSpeed){
	Car.call(this,make,modal);
	this.topSpeed = topSpeed;
}
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

Car.prototype.getTopSpeed = function(){
	return this.topSpeed
}


// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
