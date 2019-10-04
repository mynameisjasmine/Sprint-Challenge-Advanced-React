import React from 'react';

class Players extends React.Component {
    constructor(props) {
    super(props);
    }

 render() {

 return (
 <div>
  <p>Name: {this.props.info.name}</p>
  <p>Country: {this.props.info.country}</p>
  <p>Searches: {this.props.info.searches}</p>
 </div>
 )
 }
}
export default Players;
