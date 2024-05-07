import React, { Component } from 'react';
import TvcProductList from './components/TvcProductList';
import TvcProductAdd from './components/TvcProductAdd';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : [
        { title: 'Trịnh Văn Chung', id: 22001234 , status:1},
        { title: 'Cabbage', id: 1 , status:1},
        { title: 'Garlic', id: 2 , status:0},
        { title: 'Apple', id: 3, status:0 },
        { title: 'Sumsung', id: 4 , status:1 },
      ]
    }
  }

  tvcHandldSubmit = (param)=>{
    console.log("App:",param);
    // thêm vào mảng dữ liệu products
    let {products} = this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container  border mt-5'>
          <h1>Trịnh Văn Chung - Render Data - Event Form</h1>
          <hr/>
          <TvcProductList renderProducts={this.state.products}/>
          <hr/>
          <TvcProductAdd onSummit = {this.tvcHandldSubmit} />
      </div>
    );
  }
}

export default App;