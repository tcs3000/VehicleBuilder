"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
var Vehicle_js_1 = require("./Vehicle.js");
var Wheel_js_1 = require("./Wheel.js");
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(_a) {
        var vin = _a.vin, color = _a.color, make = _a.make, model = _a.model, year = _a.year, weight = _a.weight, topSpeed = _a.topSpeed, wheels = _a.wheels, towingCapacity = _a.towingCapacity;
        var _this = _super.call(this) || this;
        _this.vin = vin;
        _this.color = color;
        _this.make = make;
        _this.model = model;
        _this.year = year;
        _this.weight = weight;
        _this.topSpeed = topSpeed;
        if (wheels.length !== 4) {
            _this.wheels = [new Wheel_js_1.default(), new Wheel_js_1.default(), new Wheel_js_1.default(), new Wheel_js_1.default()];
        }
        else {
            _this.wheels = wheels;
        }
        _this.towingCapacity = towingCapacity;
        return _this;
    }
    Truck.prototype.tow = function (vehicle) {
        var vehicleMake = vehicle.make || 'Unknown';
        var vehicleModel = vehicle.model || 'Unknown';
        if (vehicle.weight <= this.towingCapacity) {
            console.log("Towing ".concat(vehicleMake, " ").concat(vehicleModel));
        }
        else {
            console.log("".concat(vehicleMake, " ").concat(vehicleModel, " is too heavy to tow"));
        }
    };
    Truck.prototype.printDetails = function () {
        _super.prototype.printDetails.call(this);
        console.log("VIN: ".concat(this.vin, ", Make: ").concat(this.make, ", Model: ").concat(this.model, ", Year: ").concat(this.year, ", Weight: ").concat(this.weight, ", Top Speed: ").concat(this.topSpeed, ", Color: ").concat(this.color, ", Towing Capacity: ").concat(this.towingCapacity, ", Wheels: ").concat(this.wheels.length));
    };
    return Truck;
}(Vehicle_js_1.default));
exports.default = Truck;
