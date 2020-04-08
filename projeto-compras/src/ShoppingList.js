import React, { Component } from 'react';
import FormProduct from './FormProduct.js';
import Product from './Product.js';

class ShoppingList extends Component{
  constructor(props){
    super(props);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.state = { list: [], total: "0.00" };
  }
  add(product){
    this.setState({ list: this.state.list.concat(product) }, () => {
      let total = 0;
      for(let i in this.state.list){
        total += this.state.list[i].price * this.state.list[i].amount;
      }
      this.setState( {total: total} );
    });
  }
  remove(index){
    let removedSubtotal = this.state.list[index].price * this.state.list[index].amount;
    this.state.list.splice(index, 1);
    this.setState({ list: this.state.list }, () => {
      let total = this.state.total - removedSubtotal;
      this.setState({ total: total });
    });
  }
  render(){
    return (
      <div>
        <h2>Lista de Compras</h2>
        <fieldset>
          <legend>Adicionar Produto</legend>
          <FormProduct addEvent={this.add} />
        </fieldset>
        <table border="1" cellSpacing="0">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.list.map( (product, index) => {
                return <Product removeEvent={this.remove} key={index} index={index} product={product} />
              })
            }
          </tbody>
        </table>
        <div>Total: {this.state.total} </div>
      </div>
    );
  }
}
export default ShoppingList;
