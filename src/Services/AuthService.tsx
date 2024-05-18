import axios from "axios";

const api = "https://api.homologation.cliqdrive.com.br/auth/"

export const loginAPI = async (email: string, password: string) => {
  try {
    const response = await axios.post(api + "login", {
            email,
            password
        });
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getProfileAPI = async (token: string) => {
  try {
    const response = await axios.get(api + "profile", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        return error;
    }
}
