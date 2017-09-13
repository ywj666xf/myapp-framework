

const Myreducer = (state=[],action) => {
    switch(action.type){
        case "MY_LIST":
            return action.payload;
        default :
            return state
    }
}

export default Myreducer