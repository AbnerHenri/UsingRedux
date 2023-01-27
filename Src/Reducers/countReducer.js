const InitialState = {
    number : 0
}

export default (state = InitialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            state += 1
            break;
        case 'DECREMENT':
            state -= 1
            break;
    
        default:
            state;
    }

    return state
}