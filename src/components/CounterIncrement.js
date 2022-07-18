import { connect } from 'react-redux'

function CounterIncrement (props) {

    const incrementCounter = () => {
        props.counter += 1;
    }

    const decrementCounter = () => {
        props.counter -= 1;
    }

    return (
        <div>
            <button onClick={() => {props.onIncrement()}}>+</button>
            <button onClick={() => {props.onDecrement()}}>-</button>
        </div>
    )

}

const mapDispatch = (dispatch) => {
    return {
        onIncrement: () => (dispatch({type: "INCREMENT"})),
        onDecrement: () => (dispatch({type: "DECREMENT"}))
    }

}

export default connect(null, mapDispatch)(CounterIncrement)