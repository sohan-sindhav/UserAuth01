import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1F1B24] text-[#E6E1E5]">
      <h1 className="text-2xl font-bold mb-6 text-[#E6E1E5]">
        Welcome, <span className="text-[#D0BCFF]">{user?.name}</span>
      </h1>
      <button
        onClick={handleLogout}
        className="bg-[#F2B8B5] text-[#201A1A] px-6 py-3 rounded-full 
                 hover:bg-[#F2B8B5]/90 active:bg-[#F2B8B5]/80
                 transition-colors duration-200 shadow-sm
                 text-sm font-medium tracking-wide"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
