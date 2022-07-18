import { connect } from 'react-redux'


function CounterDisplay (props) {
    return (
        <div>
            <h1>Counter: {props.counter}</h1>
        </div>
    )
}

const mapState = (state) => {
    return {
        counter: state.counter
    }
    
}

export default connect(mapState)(CounterDisplay)