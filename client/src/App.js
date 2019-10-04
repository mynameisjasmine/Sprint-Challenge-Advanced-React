import React from 'react';
import axios from 'axios';
import Players from './Players';
import Nav from './Nav';
import './App.css';

class App extends React.Component  {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios
    .get(`http://localhost:5000/api/players`)
    .then(res => {
      console.log(res.data);
     this.setState({
       data: res.data
     });
    })
    .catch(err => console.log(err));
  }

  render () {
  
    return (
      <>
      <Nav />
      <div className="App">
      <h1 className="title">Women's World Cup Stats!</h1>
      {this.state.data.map(stats => (
        <Players key={stats.id} info={stats}/>
      ))}
        
      </div>
      </>
    );
  }
  
}
  

export default App;
