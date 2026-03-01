import axios from "axios";
// "https://book-courier-server-five.vercel.app",

const axiosInstance = axios.create({
  baseURL: "https://bookcourier-tau.vercel.app",
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
