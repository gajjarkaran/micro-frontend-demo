import { useState } from "react";
import TypingText from "../TypingText/TypingText";

const UserDetails = () => {

    const [userName, setUserName] = useState('');
    const [greeting, setGreeting] = useState('');
    const [showTypingText, setShowTypingText] = useState(false);

    const displayGreeting = () => {
        if (userName.trim()) {
            const capitalize = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
            setGreeting(`Hello ${capitalize}`);
            setShowTypingText(true);
        }
    }

    return (
        <div>
            <h2>Enter your name</h2>
            <input placeholder="Enter your name" type="text" onChange={(e) => setUserName(e.target.value)} />
            <button onClick={displayGreeting}>Enter</button>
            {greeting && <h2>{greeting}</h2>}
            {showTypingText && <TypingText />}
        </div>
    )
}

export default UserDetails;