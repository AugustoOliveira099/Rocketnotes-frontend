import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:3333/'
  // baseURL: 'https://rocketnotes-backend-production-ca60.up.railway.app/'
  // baseURL: 'https://rocketnotes-api-xhbd.onrender.com'
})