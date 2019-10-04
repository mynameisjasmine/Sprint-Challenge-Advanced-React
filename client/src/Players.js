import React from 'react';

class Players extends React.Component {
    constructor(props) {
    super(props);
    }

 render() {

 return (
  <div className="stats-container">
 <div className="stats-div">
  <p>Name: {this.props.info.name}</p>
  <p>Country: {this.props.info.country}</p>
  <p>Searches: {this.props.info.searches}</p>
 </div>
 </div>
 )
 }
}
export default Players;
