class Day {
    id: string;
    dayName: string;
    degrees: number;

    constructor(name: string, degrees: number) { 
        this.dayName = name;
        this.degrees = degrees;
        this.id = new Date().toISOString();
    }
}

export default Day;