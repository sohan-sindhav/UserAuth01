import axios from "axios";

axios.defaults.withCredentials = true;
const API_URL = `https://userauth01.onrender.com/api/v1/user`;

export async function registerUser(username, email, password) {
  const response = await axios.post(`${API_URL}/create`, {
    username,
    email,
    password,
  });
  return response.data;
}

export async function loginUser(email, password) {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
}

export async function logoutUser() {
  const response = await axios.post(
    `${API_URL}/logout`,
    {},
    {
      withCredentials: true,
    }
  );
  return response.data;
}
export async function getProfile() {
  const response = await axios.post(`${API_URL}/me`);
  return response.data;
}
