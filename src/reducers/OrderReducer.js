

const Orderreducer = (state=[],action) => {
    switch(action.type){
        case "ORDER_LIST":
            return action.payload;
        default :
            return state
    }
}

export default Orderreducer