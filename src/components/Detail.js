import React from "react";


class Detail extends React.Component{
 
    render(){
        return(
            <div className="detail">
                <p>订单</p>
                {this.props.match.params.id}
            </div>
        )
        
    }
}

export default Detail