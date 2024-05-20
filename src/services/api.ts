// src/services/api.ts

import axios from 'axios';

const API_URL = 'http://localhost:8000/api';  // Update this with your backend URL

const api = axios.create({
  baseURL: API_URL,
});

export const getToken = async (username: string, password: string) => {
  const response = await api.post('/token/', { username, password });
  return response.data;
};

export const getVehicles = async (token: string) => {
  const response = await api.get('/vehicles/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const registerVehicle = async (token: string, vehicleData: any) => {
  const response = await api.post('/vehicles/', vehicleData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
