// interface Vehicle {
//   name: string;
//   year: number;
//   broken: boolean;

// }

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
};

const newCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
};

const printSummary = (vehicle: Reportable): void => {
  console.log(vehicle.summary());
};

printSummary(oldCivic);
printVehicle(newCivic);
