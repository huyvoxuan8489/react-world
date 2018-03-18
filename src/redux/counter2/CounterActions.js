import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER
} from './ActionTypes';

export function increment() {
    return {
        type: INCREMENT_COUNTER
    };
}

export function incrementIfOdd() {
    return (dispatch, state) => {
        if (state.counterStore.counter % 2 === 0) {
            return;
        }

        dispatch(increment());
    };
}

export function incrementAsync() {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment());
        }, 1000);
    };
}

export function decrement() {
    return {
        type: DECREMENT_COUNTER
    };
}