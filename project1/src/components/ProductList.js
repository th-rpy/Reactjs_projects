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

          const nameStyle = {
                color: 'blue'
          };

          const priceStyle = {
                color: 'red'
        };

        const marqueStyle = {
                color: 'green'
        };

        return (  
        <div style={divStyle} className="ui items">
           <h4 style={nameStyle} >  {this.props.name} </h4>
           <h5 style={priceStyle}> {this.props.price} </h5>
           <h6 style={marqueStyle}> {this.props.marque} </h6>
      </div>
        );
    }
}
 
export default Product;