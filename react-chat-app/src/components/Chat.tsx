import React, { useState } from 'react';
import styled from 'styled-components';
import MessageInput from './MessageInput';
import ComboBox from './ComboBox';

const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-width: 600px;
    margin: auto;
    background-color: white;
`;

const Header = styled.h2`
    text-align: center;
    color: white;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #5454c7;
    font-weight: normal;
    padding: 10px; 
    border: 4px solid #4A90E2; 
    border-radius: 8px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`;

const MessageList = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 10px;
    background: #f9f9f9;
`;

const Message = styled.div`
    padding: 10px;
    margin-bottom: 5px;
    background: green;
    border: 1px solid #ddd;
    font-size: large;
    color: white;
    border-radius: 12px;
    display: flex;
    align-items: center;
`;

const ProfilePicture = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
`;

const MessageText = styled.div`
    flex: 1;
`;

const MessageMeta = styled.div`
    font-size: small;
    color: lightgray;
    margin-left: auto;
    text-align: right;
`;

interface ChatProps {
    username: string;
    room: string;
}

const Chat: React.FC<ChatProps> = ({ username, room }) => {
    const [messages, setMessages] = useState<Array<{ text: string; username: string; timestamp: string }>>([]);
    const [showComboBox, setShowComboBox] = useState(false);

    const handleSend = (text: string) => {
        if (text.startsWith('/select')) {
            setShowComboBox(true);
        } else {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text, username, timestamp: new Date().toLocaleString() },
            ]);
            setShowComboBox(false);
        }
    };

    const handleSelect = (option: string) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: option, username, timestamp: new Date().toLocaleString() },
        ]);
        setShowComboBox(false); // Hide ComboBox after selecting an option
    };

    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

    return (
        <ChatContainer>
            <Header>Room: {room}</Header>
            <MessageList>
                {messages.map((message, index) => (
                    <Message key={index}>
                        <ProfilePicture src={`https://picsum.photos/seed/${index}/40/40`} alt="Profile" />
                        <MessageText>{message.text}</MessageText>
                        <MessageMeta>
                            {message.username}, {message.timestamp}
                        </MessageMeta>
                    </Message>
                ))}
            </MessageList>
            {showComboBox && <ComboBox options={options} onSelect={handleSelect} />}
            <MessageInput onSend={handleSend} />
        </ChatContainer>
    );
};

export default Chat;
