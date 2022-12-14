import {column} from "./types";
import './ColumnComponent.scss'

function ColumnComponent(column: column) {

    return (<div className="column">
        <div>{column.heading}</div>
        <div>{column.text}</div>
    </div>)
}

export default ColumnComponent;