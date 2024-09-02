import React, { useState } from 'react';
import styled from 'styled-components';
import { useAutoComplete } from '../hooks/useAutoComplete';

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    border-top: 1px solid #ddd;
    background-color: #fff;
    position: relative;
    bottom: 0;
    width: 100%;
`;

const Input = styled.input`
    flex: 1;
    padding: 10px;
    font-size: medium;
    border: 1px solid #ddd;
    border-radius: 4px;
    outline: none;
`;

const Button = styled.button`
    padding: 10px 20px;
    margin-left: 10px;
    font-size: medium;
    background-color: green;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;

const AutoCompleteList = styled.div`
    position: absolute;
    bottom: 60px; 
    left: 0;
    right: 0;
    background: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-height: 150px;
    overflow-y: auto;
    z-index: 1000; 
`;

const AutoCompleteItem = styled.div`
    padding: 10px;
    cursor: pointer;
    &:hover {
        background: #f0f0f0;
    }
`;

interface Props {
    onSend: (text: string) => void;
}

const MessageInput: React.FC<Props> = ({ onSend }) => {
    const [inputValue, setInputValue] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const suggestions = useAutoComplete(inputValue);

    const handleSend = () => {
        if (inputValue.trim()) {
            onSend(inputValue);
            setInputValue('');
            setShowSuggestions(false);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSend();
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        setInputValue(suggestion);
        setShowSuggestions(false);
    };

    return (
        <InputContainer>
            <Input
                type="text"
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                    setShowSuggestions(e.target.value.length > 0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
            />
            <Button onClick={handleSend}>SEND</Button>
            {showSuggestions && suggestions.length > 0 && (
                <AutoCompleteList>
                    {suggestions.map((suggestion, index) => (
                        <AutoCompleteItem key={index} onClick={() => handleSuggestionClick(suggestion)}>
                            {suggestion}
                        </AutoCompleteItem>
                    ))}
                </AutoCompleteList>
            )}
        </InputContainer>
    );
};

export default MessageInput;