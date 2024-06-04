class Day {
    id: string;
    dayName: string;
    cityName: string;
    degrees: number;

    constructor(name: string, city: string, degrees: number) { 
        this.dayName = name;
        this.degrees = degrees;
        this.cityName = city;
        this.id = `${new Date().toISOString()}${Math.random()}`;
    }
}

export default Day;