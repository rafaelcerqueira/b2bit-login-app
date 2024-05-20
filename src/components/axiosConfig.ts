import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.homologation.cliqdrive.com.br/",
    headers: {
        Accept: "application/json;version=v1_web",
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem("accessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem("accessToken");
            window.location.href = "/";
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;