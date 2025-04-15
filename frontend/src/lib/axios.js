import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://6679-180-243-15-238.ngrok-free.app/api" : "/api",
  withCredentials: true,
});
