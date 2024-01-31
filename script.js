// Complete the js code
function Car(make, model) {
	this.make = make;
	this.modal = modal;
}
Car.prototype.getMakeModel = function() {
	return `this is ${this.make} ${this.modal}`
}

function SportsCar(make, model, topSpeed) {
	this.make = make;
	this.modal = modal;
	this.topSpeed = topSpeed;
}
Car.prototype.getTopSpeed = function() {
	return `this is  ${this.topSpeed}`
}


// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
