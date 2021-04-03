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
            padding: '0.1rem',
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

        const buttonStyle = {
            font: 'inherit',
            textDecoration: 'none',
            backgroundColor: '#EEEEEE',
            color: '#333333',
            padding: '0.6rem 0.5rem',
            borderTop: '1px solid #CCCCCC',
            borderRight: '1px solid #333333',
            borderBottom: '1px solid #333333',
            borderLeft: '1px solid #CCCCCC',
        }

        const voteFunc = () => {

        };

        return (  
        <div style={divStyle} className="ui items">
           Name : <p style={nameStyle} >  {this.props.name} </p>
           Price : <p style={priceStyle}> {this.props.price} </p>
           Marque : <p style={marqueStyle}> {this.props.marque} </p>
           <button type="button"
           style = {buttonStyle} >  

                <span role="img" aria-label="Fox">
                    👍
                </span>

            </button>
           
           Rating Score : <p style={{color : 'black'}}>  </p>
      </div>
        );
    }
}
 
export default Product;