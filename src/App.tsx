import ColumnComponent from "./ColumnComponent";
import './App.scss'
import {column} from "./types";
import iconLuxurySvg from './assets/icon-luxury.svg'
import iconSedansSvg from './assets/icon-sedans.svg'
import iconSuvsSvg from './assets/icon-suvs.svg'

function App() {

    const columns: column[] = [
        {
            heading: 'Sedans',
            text: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
            img: iconSedansSvg
        },
        {
            heading: 'Suvs',
            text: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
            img: iconSuvsSvg
        },
        {
            heading: 'Luxury',
            text: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style',
            img: iconLuxurySvg
        },
    ];

    return (
        <div className="app" role="main">
            {columns.map(column => <ColumnComponent column={column} key={column.heading}/>
            )}
        </div>
    )
}

export default App
