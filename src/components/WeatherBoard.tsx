import React from "react";
import Day from "../models/day";
import DayItem from "./DayItem";

const WeatherBoard: React.FC<{ items: Day[] }> = (props) => {
    return (
        <ul>
            {props.items.map(item => <DayItem key={item.id} dayName={item.dayName} degrees={item.degrees} />)}
        </ul>
    );
}

export default WeatherBoard;