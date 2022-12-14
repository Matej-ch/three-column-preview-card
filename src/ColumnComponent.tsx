import {column} from "./types";
import './ColumnComponent.scss'

function ColumnComponent({column}: { column: column }) {

    return (<div className="column">
        <img src={column.img} alt="" width="64" height="40"/>
        <h1>{column.heading}</h1>
        <p>{column.text}</p>
        <button>Learn More</button>
    </div>)
}

export default ColumnComponent;