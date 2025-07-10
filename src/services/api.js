import axios from 'axios'

export async function shortenUrl(longUrl) {
    const response = await axios.post('/api/shortener/generate', { url: longUrl })
    return response.data;
}
