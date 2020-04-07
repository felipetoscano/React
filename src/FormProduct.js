import React, { Component } from 'react';

class FormProduct extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            price: "",
            amount: ""
        }
        this.add = this.add.bind(this);
        this.update = this.update.bind(this);
        this.name = React.createRef();
        this.price = React.createRef();
        this.amount = React.createRef();
    }
    update(){
        if(isNaN(this.price.current.value)){
            this.price.current.value = "";
        }
        if(isNaN(this.amount.current.value)){
            this.amount.current.value = "";
        }
        this.setState({
            name: this.name.current.value,
            price: parseFloat(this.price.current.value),
            amount: parseFloat(this.amount.current.value)
        });         
    }
    add(){
        if(this.props.addEvent)
            this.props.addEvent(this.state);
        this.resetValues();
    }
    resetValues(){
        this.name.current.value = "";
        this.price.current.value = "";
        this.amount.current.value = "";
        this.setState({
            name: "",
            price: "",
            amount: ""
        });
    }
    render(){
        return (
            <div>
                <p>Nome: <input ref={this.name} type="text" value={this.props.name} onChange={this.update} /></p>
                <p>Preço: <input ref={this.price} type="text" value={this.props.price} onChange={this.update}/></p>
                <p>Quantidade: <input ref={this.amount} type="text" value={this.props.amount} onChange={this.update}/></p>
                <p><input type="button" value="Adicionar" onClick={this.add} /></p>
            </div>
        );
    }
}
export default FormProduct;