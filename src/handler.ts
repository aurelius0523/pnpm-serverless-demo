import axios from "axios";

export const getQuote = async (event) => {
    const result = await axios.get('https://quotes.rest/qod?language=en', {
        headers: {
            'accept': 'application/json'
        }
    })

    return result.data.contents.quotes[0].quote;
}
