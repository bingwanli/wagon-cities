import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {

  render(){

    const src = `https://kitt.lewagon.com/placeholder/cities/${this.props.selectedCity.slug}`

    return(
      <div className="active-city">

        <h3>Welcome to {this.props.selectedCity.name}</h3>
        <h4> Address: {this.props.selectedCity.address}</h4>
        <img src={src} alt=""/>


      </div>
    )
  }
}

function mapStatetoProps(state){
  return { selectedCity: state.selectedCity }
}


export default connect(mapStatetoProps)(ActiveCity);

