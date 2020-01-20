import React from "react";

const UserCard = props => {
    console.log(props);
    return (
        <div>
            <h1>Github User Card</h1>
            <p>{props.name}</p>
            <p>{props.location}</p>
            <p>{props.followers}</p>
        </div>
    );
};

export default UserCard;