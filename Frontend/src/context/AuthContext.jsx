import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser, logoutUser, getProfile } from "../api/auth";

export const AuthContext = createContext(); // Add export here

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      try {
        const data = await getProfile();
        setUser(data.user);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, []);

  const login = async (email, password) => {
    const data = await loginUser(email, password);
    setUser(data.user);
    navigate("/profile");
  };

  const register = async (username, email, password) => {
    const data = await registerUser(username, email, password);
    setUser(data.user);
    navigate("/profile");
  };

  const logout = async () => {
    try {
      await logoutUser();
      setUser(null);
      navigate("/");
      window.location.reload(); // Force full reset
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
