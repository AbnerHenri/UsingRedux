const InitialState = {
    name : '',
    email : '',
    tel : ''
}

export default (state = InitialState, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return {...state, name: action.payload.name }
        case 'SET_EMAIL':
            return {...state, email : action.payload.email }
        case 'SET_TEL':
            return {...state, tel : action.payload.tel }
    
        default:
            state;
    }

    return state
}