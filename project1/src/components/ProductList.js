import react from 'react';
import React, { useState } from "react";
import ReactDOM from "react-dom";

class Product extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0,
        };
        
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
            backgroundColor: 'blue',
            color: '#333333',
            padding: '0.6rem 0.5rem',
            borderTop: '1px solid #CCCCCC',
            borderRight: '1px solid #333333',
            borderBottom: '1px solid #333333',
            borderLeft: '1px solid #CCCCCC',
            width: '50px',
            height: '40px',

            position: 'relative',
            background: '#f3f0f1',
            marginBottom: '25px',
            
            textAlign: 'center',
            cursor: "pointer",
            transition: 'all 0.1s ease-in-out',
            borderRadius: '50%'

        }

        const voteFunc = (e) => {
            
            e.preventDefault();
            this.setState({
                count: this.state.count + 1,
            })
            console.log('Clicked Button');
        };

        return (  
        <div style={divStyle} className="ui items">
           Name : <p style={nameStyle} >  {this.props.name} </p>
           Price : <p style={priceStyle}> {this.props.price} </p>
           Marque : <p style={marqueStyle}> {this.props.marque} </p>
           <button style={buttonStyle} onClick={voteFunc} type="submit"
            >  

                <span  role="img" aria-label="Fox">
                  ❤
                </span>

            </button>
           
           Rating Score : <p style={{color : 'black'}}> {this.state.count} </p>
      </div>
        );
    }
}
 
export default Product;