import React from 'react';
import './App.css';
import UserCard from "./UserCard";

class App extends React.Component {
  state= {
    users: [],
    followers: []
  };

  componentDidMount(){
    fetch("https://api.github.com/users/jess-lam")
      .then(response => response.json())
      .then(user => {
        console.log(user);
        this.setState({...this.state, users: user})
      })
      .catch(err => console.log(err));

    fetch("https://api.github.com/users/jess-lam/followers")
    .then(response => response.json())
    .then(follower => {
      this.setState({...this.state, followers: follower})
    })
  };

  render() {
    return (
      <div className="App">
        <h1>User's followers</h1>
        <UserCard name={this.state.users.name}  location={this.state.users.location} followers={this.state.users.followers}/>
      </div>
    )
  }
}

export default App;
