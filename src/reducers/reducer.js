import MyReducer from "./MyReducer";
import FindReducer from "./FindReducer";
import OrderReducer from "./OrderReducer";
import HomeReducer from "./HomeReducer";

 const reducerObj = {
    home_list:HomeReducer,
    find_list:FindReducer,
    order_list:OrderReducer,
    my_list:MyReducer
}

export default reducerObj
