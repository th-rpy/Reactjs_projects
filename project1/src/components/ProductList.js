import react from 'react';

class Product extends react.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        const divStyle = {
            border: '2px ridge white',
            backgroundColor: 'white',
            padding: '0.25rem',
            display: 'flex',
            flexDirection: 'column'
          };

        return (  
        <div style={divStyle} className="ui items">
          <h4 style={{color: "red"}} > {this.props.name} </h4>
          <h5 style={{color: "green"}}> {this.props.price} </h5>
          <h6 style={{color: "blue"}}> {this.props.marque} </h6>
      </div>
        );
    }
}
 
export default Product;