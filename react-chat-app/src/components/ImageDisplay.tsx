import React from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 0;
`;

const Image = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 8px;
`;

interface ImageDisplayProps {
    number: number;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ number }) => {
    const imageUrl = `https://picsum.photos/200?random=${number}`;

    return (
        <ImageWrapper>
            <Image src={imageUrl} alt={`Placeholder ${number}`} />
        </ImageWrapper>
    );
};

export default ImageDisplay;
