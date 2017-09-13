

const Findreducer = (state=[],action) => {
   switch(action.type){
        case "FIND_LIST":
            return action.payload;
        default :
            return state
    }
}

export default Findreducer