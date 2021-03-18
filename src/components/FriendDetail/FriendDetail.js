import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFreind] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFreind(data))
    }, [])
    return (
        <div>
            <p>This is friend Detail Component:{friendId}</p>
            <h3>{friend.name}</h3>
            <p>{friend.email}</p>
            <p>{friend.website}</p>
            <p>{friend.phone}</p>
        </div>
    );
};

export default FriendDetail;