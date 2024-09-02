import React, { useState } from 'react';
import styled from 'styled-components';
import ComboBox from './ComboBox';

const AutoCompleteWrapper = styled.div`
  position: relative;
  width: 100%;
`;

interface AutoCompleteProps {
    suggestions: string[];
    onSelect: (option: string) => void;
}

const AutoComplete: React.FC<AutoCompleteProps> = ({ suggestions, onSelect }) => {
    const [value, setValue] = useState('');

    const handleSelect = (option: string) => {
        setValue(option);
        onSelect(option);
    };

    return (
        <AutoCompleteWrapper>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            {suggestions.length > 0 && (
                <ComboBox options={suggestions} onSelect={handleSelect} />
            )}
        </AutoCompleteWrapper>
    );
};

export default AutoComplete;
