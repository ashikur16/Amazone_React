import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.module.css';
import ProductData from './Utils/ProductData.js';

import ProductDetails from './ProductDetails/ProductDetails.js';
import ProductPreview from './ProductPreview/ProductPreview.js';
import Topbar from './Topbar/Topbar';
import { render } from '@testing-library/react';




class App extends Component{

  state = {
    productData: ProductData,
    currentPreviewImage: 'https://imgur.com/xSIK4M8.png',
    showHeartBeatSection: false,
  }

  onColorOptionClick = (pos) => {
    const updatedPreviewImage = this.state.productData.colorOptions[pos].imageUrl;
    this.setState({currentPreviewImage: updatedPreviewImage});
  }

  onFeatureItemClick = (pos) => {
    let updatedState = false;

    if(pos === 0){
      updatedState = true;
    }

    this.setState({showHeartBeatSection: updatedState});
  }

  render() {

    return (
      <div className="App">
        <Topbar/>
  
        <div className={classes.mainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.currentPreviewImage} showHeartBeatSection={this.state.showHeartBeatSection}/>
          
          </div>
  
  
          <div className={classes.ProductData}>
            <ProductDetails data={this.state.productData} onColorOptionClick = {this.onColorOptionClick} onFeatureItemClick={this.onFeatureItemClick} showHeartBeatSection={this.state.showHeartBeatSection}/>
  
          </div>
  
         
  
        </div>
  
      </div>
    );
  }
}

export default App;
