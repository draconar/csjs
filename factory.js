//Factory Design Pattern

//car constructor
function Car(options){
  this.doors = options.doors || 4;
  this.state = options.state || "new";
  this.color = options.color || "blue";
}
//truck constructor
function Truck(options){
  Car.call(this, options);
  this.wheelSize = options.wheelSize || "large";
}


function CarFactory(){};
CarFactory.prototype.vehicleClass = Car;

CarFactory.prototype.create = function(options){
  switch(options.vehicle) {
    case "car":
      this.vehicleClass = Car;
      break;
    case "truck":
        this.vehicleClass = Truck;
        break;
    }
      return new this.vehicleClass(options);
}
