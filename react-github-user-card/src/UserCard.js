import React from "react";

const UserCard = props => {
    console.log(props);
    return (
        <div>
            <h1>Github Follower Card</h1>
            <img src={props.avatar_url}/>
            <p>{props.name}</p>
            <p>{props.location}</p>
            <p>{props.followers}</p>
        </div>
    );
};

export default UserCard;