// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface -Done?
interface TruckProperties {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;
}

class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  constructor({
    vin,
    color,
    make,
    model,
    year,
    weight,
    topSpeed,
    wheels,
    towingCapacity,
  }: TruckProperties) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
    this.towingCapacity = towingCapacity;
  }

  tow(vehicle: Truck | Motorbike | Car): void {
    const vehicleMake = vehicle.make || 'Unknown';
    const vehicleModel = vehicle.model || 'Unknown';
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`Towing ${vehicleMake} ${vehicleModel}`);
    } else {
      console.log(`${vehicleMake} ${vehicleModel} is too heavy to tow`);
    }
  }

 override printDetails(): void {
    super.printDetails();
    console.log(
      `VIN: ${this.vin}, Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Weight: ${this.weight}, Top Speed: ${this.topSpeed}, Color: ${this.color}, Towing Capacity: ${this.towingCapacity}, Wheels: ${this.wheels.length}`
    );
  }
}

export default Truck;
