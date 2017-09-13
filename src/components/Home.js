import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
//UI组件
class HomeUI extends React.Component{
    componentDidMount(){
        this.props.listData()
    }
    render(){
        console.log(this.props.home_list)
        return (
            <div>
                <h1>外卖</h1>
                <ul>
                    {
                        this.props.home_list.map((item,index) =>{
                            return <li key={"h_l" + index}>
                                <img src={item.logo} alt=""/>
                                <span>{item.shop_name}</span>
                                <span>{item.price}</span>
                                <Link to={"/detail/" + item.shop_name}> 详情 </Link>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

//容器组件
const mapStateToProps = (state) => {
    return {
        home_list:state.home_list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        listData:() => {
            fetch('./api').then((res) => {
                return res.json();
            }).then((json) => {
                dispatch({
                    type:"HOME_LIST",
                    payload:json
                })
            })
        }
    }
    
}
const Home = connect(mapStateToProps,mapDispatchToProps)(HomeUI)



// class Home extends React.Component{
//     render(){
//         return (
//             <div className="home">
//                 <p>首页</p>
//             </div>
//         )
        
//     }
// }

export default Home