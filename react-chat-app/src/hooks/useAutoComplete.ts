import { useState, useEffect } from 'react';

const phrases = [
    'Merhaba', 'Selam', 'Hoşçakal', 'Teşekkürler', 'Evet', 'Hayır', 'Belki', 'Lütfen', 'Özür Dilerim', 'Yardım Et',
    'Ne zaman ?', 'Neredesin ?', 'Bilmiyorum', 'Tamam', 'Aynen', 'Günaydın', 'Ne yapıyorsun ?',
    'Görüşürüz', 'İyi Günler', 'İyi Geceler'
];

export function useAutoComplete(query: string) {
    const [suggestions, setSuggestions] = useState<string[]>([]);


    useEffect(() => {
        if (query.length > 0) {
            const filtered = phrases.filter(phrase => phrase.toLowerCase().startsWith(query.toLowerCase()));
            setSuggestions(filtered);
        } else {
            setSuggestions([]);
        }
    }, [query]);

    return suggestions;
}