import axios from "axios";

export const url = "https://panorbit.in/api/users.json";
export const getUsersData = async () => {
    const response = await axios.get(url);
    return response.data.users;
};
