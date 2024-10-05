import { useState } from "react";

const UserDetails = () => {

    const [userName, setUserName] = useState('');
    const [greeting, setGreeting] = useState('');

    const displayGreeting = () => {
        if (userName.trim()) {
            const capitalize = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
            setGreeting(`Hello ${capitalize}`);
        }
    }

    return (
        <div>
            <h2>Enter your name</h2>
            <input placeholder="Enter your name" type="text" onChange={(e) => setUserName(e.target.value)} />
            <button onClick={displayGreeting}>Enter</button>
            {greeting && <h2>{greeting}</h2>}
        </div>
    )
}

export default UserDetails;