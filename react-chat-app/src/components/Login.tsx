import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #dadada;
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #efefef;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
`;

const Input = styled.input`
    margin: 10px 0;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100%;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 16px;
    color: white;
    background-color: green;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    margin-top: 10px;

    &:hover {
        opacity: 0.8;
    }
`;

const Message = styled.div`
    margin-top: 20px;
    font-size: 18px;
    color: #4a4a9e;
    text-align: center;
`;

interface LoginProps {
    onLogin: (username: string, room: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');

    const handleLogin = () => {
        if (username && room) {
            onLogin(username, room);
        }
    };

    return (
        <Container>
            <FormContainer>
                <h1>Login</h1>
                <Input
                    type="text"
                    placeholder="Enter your name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Enter room name"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                />
                <Button onClick={handleLogin}>Login</Button>
                <Message>Enter your name and room name to start chatting.</Message>
            </FormContainer>
        </Container>
    );
};

export default Login;
