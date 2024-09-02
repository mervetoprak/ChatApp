// utils.ts

// Örnek bir auto-complete için kullanılan işlev
export function filterPhrases(query: string, phrases: string[]): string[] {
    if (query.length === 0) return [];

    return phrases.filter(phrase =>
        phrase.toLowerCase().startsWith(query.toLowerCase())
    );
}

// Örnek bir placeholder image URL oluşturma işlevi
export function getPlaceholderImageUrl(number: number): string {
    return `https://picsum.photos/200?random=${number}`;
}

// Kullanıcıdan bir mesaj formatlama işlevi
export function formatMessage(message: string): string {
    return message.trim();
}

// Bir seçenek listesine bağlı olarak seçeneği alıp döndüren işlev
export function handleComboBoxSelection(selectedOption: string, onOptionSelect: (option: string) => void): void {
    onOptionSelect(selectedOption);
}