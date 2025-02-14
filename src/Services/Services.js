import axios from 'axios';
//import  { GoogleGenerativeAI } from "@google/generative-ai";

//const genAI = new GoogleGenerativeAI("YOUR_API_KEY");
//const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const prompt = "Eres una IA especializada en pokémon, responde con información acerca de ";

// const result = await model.generateContent(prompt);
// console.log(result.response.text());

export const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon', // URL base de la API
});

export const api2 = axios.create({
  baseURL: 'https://fakestoreapi.com/products', // URL base de la API
});

export const getContext = async(req) => {
  return axios.create({
    baseURL: 'https://localhost:3000', // URL base de la API
  }.get(prompt + req));
}

export const getPokimon = async (id) => {
  try {
    const response = await api.get(`/${id}/`);
    return response.data; // Retorna solo los datos del Pokémon
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
    throw error; // Lanza el error para que se maneje en el componente
  }
}

export const getBaseStat = async (name) => {
  try {
    const response = await api.get(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    console.log(response.data["base_experience"]);
    
    return response.data["base_experience"]; // Retorna solo los datos del Pokémon
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
    throw error; // Lanza el error para que se maneje en el componente
  }
}

export const getProduct = async (idProduct) => {
  try {
    const response = await api2.get(`https://fakestoreapi.com/products/${idProduct}/`);
    console.log(response.data);
    
    return response.data
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error; // Lanza el error para que se maneje en el componente
  }
}

