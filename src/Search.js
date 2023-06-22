import axios from 'axios';

const API_KEY = '<your_alphavantage_api_key>';

export const searchCompanies = async (query) => {
  const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${API_KEY}`;

  try {
    const response = await axios.get(url);
    return response.data.bestMatches;
  } catch (error) {
    console.error('Error searching companies:', error);
    return [];
  }
};

export const getStockPrice = async (symbol) => {
  const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;

  try {
    const response = await axios.get(url);
    return response.data['Global Quote']['05. price'];
  } catch (error) {
    console.error('Error fetching stock price:', error);
    return null;
  }
};
