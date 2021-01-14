const BASE_URL = 'http://newsapi.org/v2/'
const API_TOKEN = process.env.REACT_APP_NEWS_API_KEY;

async function getNews(req, res) {
    try {
        return fetch(BASE_URL + '/top-headlines?country=us&apiKey=' + API_TOKEN)
        .then((res) => res.json());
    } catch (error) {
       return res.status(400).json({ err: 'Bad Request' })
    }
}

module.exports = {
    getNews
};
    

    
    