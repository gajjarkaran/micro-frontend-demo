import { useEffect, useState } from "react";
import './TypingText.scss';

const TypingText = () => {

    const [typingText, setTypingText] = useState('');
    const [userInput, setUserInput] = useState('');

    const fetchPara = async () => {
        try {
            const response = await fetch("http://metaphorpsum.com/sentences/300");
            const data = await response.text();
            setTypingText(data);
        }
        catch (error) {
            console.error("Unable to fetch paragraph: ", error);
        }
    }

    useEffect(() => {
        fetchPara();
    }, []);

    return (
        <div className="typing-container">
            {/* Scrollable Paragraph Box */}
            <div className="paragraph-box">
                {typingText}
            </div>

            {/* Fixed Input Box */}
            <div className="input-container">
                <input
                    className="typing-input"
                    type="text"
                    placeholder="start typing"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
            </div>
        </div>
    );
};

export default TypingText;