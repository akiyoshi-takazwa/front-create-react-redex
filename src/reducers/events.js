import { READ_EVENTS } from '../actions'

const initalState = { value: 0 }

export default (state = initalState, action) => {
    switch (action.type) {
        case READ_EVENTS: 
            return state
        default: 
            return state
    }
}