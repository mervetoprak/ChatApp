import React from 'react';
import styled from 'styled-components';
import ImageDisplay from './ImageDisplay';

const MessageContainer = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 10px;
    margin-bottom: 5px;
    background: green;
    border: 1px solid #ddd;
    font-size: large;
    color: white;
    border-radius: 12px;
    position: relative;
    max-width: 500px;
`;

const ProfileImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
`;

const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const MessageText = styled.div`
    margin-bottom: 20px;
`;

const UserNameAndTime = styled.div`
    font-size: small;
    color: #ddd;
    text-align: right;
    margin-top: 5px;
`;

interface MessageProps {
    text: string;
    username: string;
    timestamp: string;
}

const ChatMessage: React.FC<MessageProps> = ({ text, username, timestamp }) => {
    const imageRegex = /^\/image\s+(\d+)$/;
    const match = text.match(imageRegex);

    return (
        <MessageContainer>
            <ProfileImage src="https://via.placeholder.com/40" alt="Profile" />
            <MessageContent>
                <MessageText>
                    {match ? (
                        <ImageDisplay number={parseInt(match[1], 10)} />
                    ) : (
                        text
                    )}
                </MessageText>
                <UserNameAndTime>
                    {username} - {timestamp}
                </UserNameAndTime>
            </MessageContent>
        </MessageContainer>
    );
};

export default ChatMessage;
