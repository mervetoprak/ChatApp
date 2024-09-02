export function filterPhrases(query: string, phrases: string[]): string[] {
    if (query.length === 0) return [];

    return phrases.filter(phrase =>
        phrase.toLowerCase().startsWith(query.toLowerCase())
    );
}

export function getPlaceholderImageUrl(number: number): string {
    return `https://picsum.photos/200?random=${number}`;
}

export function formatMessage(message: string): string {
    return message.trim();
}

export function handleComboBoxSelection(selectedOption: string, onOptionSelect: (option: string) => void): void {
    onOptionSelect(selectedOption);
}
