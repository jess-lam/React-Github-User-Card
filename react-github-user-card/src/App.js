import React from 'react';
import './App.css';
import UserCard from "./UserCard";
import FollowerCard from "./FollowerCard";

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
      console.log(follower);
        this.setState({...this.state, followers: follower})
    })
  };

  render() {
    return (
      <div className="App">
        <h1>User's followers</h1>
        <UserCard avatar_url={this.state.users.avatar_url} name={this.state.users.name}  location={this.state.users.location} followers={this.state.users.followers}/>
        {this.state.followers.map(friends => {
          return <FollowerCard avatar_url={friends.avatar_url} login={friends.login} type={friends.type}/>
        })}

      </div>
    )
  }
}

export default App;
