
import React from "react";

const DayItem: React.FC<{ dayName: string, degrees: number }> = (props) => {
    return <ul>
        <p>{props.dayName}</p>
        <p>{props.degrees} °C</p>
    </ul>;
}

export default DayItem;