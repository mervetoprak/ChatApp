import React from 'react';
import styled from 'styled-components';

const ComboBoxWrapper = styled.div`
  position: absolute;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const Option = styled.div`
    padding: 10px;
    cursor: pointer;

    &:hover {
        background: #f0f0f0;
    }
`;

interface ComboBoxProps {
    options: string[];  // options propunu ekliyoruz
    onSelect: (option: string) => void;
}

const ComboBox: React.FC<ComboBoxProps> = ({ options, onSelect }) => (
    <ComboBoxWrapper>
        {options.map((option, index) => (
            <Option key={index} onClick={() => onSelect(option)}>
                {option}
            </Option>
        ))}
    </ComboBoxWrapper>
);

export default ComboBox;
