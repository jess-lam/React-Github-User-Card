import React from "react";

const FollowerCard = props => {
    console.log(props);
    return (
        <div>
            <h1>Github Follower Card</h1>
            <img src={props.avatar_url}/>
            <p>{props.login}</p>
            <p>{props.type}</p>
        </div>
    );
};

export default FollowerCard;