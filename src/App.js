import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
          error: null,
          isLoaded: false,
          items: [],
          flag:0
        };
  }

MyPOSTAPI=()=>{

  // var registerDict = {name:'akhzar',email:'akhzarn@yahoo.com',pass:'123456'};

  var dict = { title: 'foo', body: 'bar', userId: 1 };

  axios.post('https://jsonplaceholder.typicode.com/posts',dict)
  .then(response => {
    console.log(response)
    this.setState({isLoaded:true,
                    flag:1
                  })
  })
  .catch(error => {
    alert(error);
    console.log(error);
  })

}

  render() {

    const { error, isLoaded, items } = this.state;

    if (this.state.flag == 0){

      return(
      <div>

      <button onClick={this.MyPOSTAPI}>
      Register
      </button>

      </div>

      );

    }else{

      return(

      <div>
      <button onClick={this.MyPOSTAPI}>
      Register
      </button>

      <h1> Akhzar Post Request Submitted Successfully</h1>

      </div>

      );
    }

  }

  componentDidMount() {

    }
}

export default App;
