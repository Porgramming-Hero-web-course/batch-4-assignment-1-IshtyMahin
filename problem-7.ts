{
  class Car {
    public make: string;
    public model: string;
    public year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    public getCarAge = () => {
      let currentYear = new Date().getFullYear();

      console.log(currentYear - this.year);
    };
  }

  const car = new Car("Honda", "Civic", 2018);
  car.getCarAge();
}
