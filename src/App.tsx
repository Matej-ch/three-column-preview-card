import {useState} from 'react'
import ColumnComponent from "./ColumnComponent";
import './App.scss'
import {column} from "./types";

function App() {

    const columns: column[] = [
        {
            heading: 'Sedans',
            text: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
        },
        {
            heading: 'Suvs',
            text: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
        },
        {
            heading: 'Luxury',
            text: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style'
        },
    ];

    return (
        <div className="App" role="main">
            {columns.map(column => <ColumnComponent column={column}/>
            )}
        </div>
    )
}

export default App
