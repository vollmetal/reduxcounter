import { useState } from "react";
import { connect } from 'react-redux'



function ChangeCounter (props) {

    const [counterChangeBuffer, setCounterChangeBuffer] = useState(0)

    const onTextChange = (e) => {
        setCounterChangeBuffer(parseInt(e.target.value))
    }


    return (
        <div>
            <input onChange={onTextChange} type="text" name="counter"/>
            <button onClick={() => props.onAdd(counterChangeBuffer)}>Add</button>
            <button onClick={() => props.onSubtract(counterChangeBuffer)}>Subtract</button>
        </div>
    )

}

const mapDispatch = (dispatch) => {
    return {
        onAdd: (value) => (dispatch({type: "ADD", payload: value})),
        onSubtract: (value) => (dispatch({type: "SUBTRACT", payload: value}))
    }

}

export default connect(null, mapDispatch)(ChangeCounter);