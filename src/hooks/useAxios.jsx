import axios from "axios";
// "https://book-courier-server-five.vercel.app",

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
