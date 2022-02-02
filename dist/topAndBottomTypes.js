let anything;
let user;
class Machine {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    loadCargo() {
        console.log("Loading cargo...");
    }
}
let myVehicle = obtainRandomVehicle();
function obtainRandomVehicle() {
    return Math.random() < 0.5 ? new Machine() : new Truck();
}
if (myVehicle instanceof Machine) {
    myVehicle.drive();
}
else if (myVehicle instanceof Truck) {
    myVehicle.loadCargo();
}
else {
    const neverValue = myVehicle;
}
