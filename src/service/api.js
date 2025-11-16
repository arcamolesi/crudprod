import axios from "axios";

const API_URL = 'https://localhost:7271/api'

const api = axios.create({
     baseURL:API_URL,
});

export default api; 