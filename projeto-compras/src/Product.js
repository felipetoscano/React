import React, { Component } from 'react';

class Product extends Component{
    constructor(props){
        super(props);
        this.remove = this.remove.bind(this);
    }
    remove(){
        if(this.props.removeEvent)
            this.props.removeEvent(this.props.index);
    }
    render(){
        return(
            <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
                <td>{this.props.product.amount}</td>
                <td>{(this.props.product.price * this.props.product.amount)}</td>
                <td><input type="button" value="Deletar" onClick={this.remove} /></td>
            </tr>
        );
    }
}
export default Product;