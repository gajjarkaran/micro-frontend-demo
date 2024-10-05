import { useEffect, useState } from "react";

const TypingText = () => {

    const [typingText, setTypingText] = useState('');

    const fetchPara = async () => {
        try {
            const response = await fetch("http://metaphorpsum.com/sentences/300");
            const data = await response.text();
            setTypingText(data);
            console.log("Para: ", data);
        }
        catch (error) {
            console.error("Unable to fetch paragraph: ", error);
        }
    }

    useEffect(() => {
        fetchPara();
    }, [])

    return (
        <div>
            {typingText}
        </div>
    )
}

export default TypingText;