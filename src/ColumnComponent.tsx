import {column} from "./types";
import './ColumnComponent.scss'

function ColumnComponent({column}: { column: column }) {

    return (<div className="column">
        <img src={column.img} alt=""/>
        <h1>{column.heading}</h1>
        <p>{column.text}</p>
    </div>)
}

export default ColumnComponent;