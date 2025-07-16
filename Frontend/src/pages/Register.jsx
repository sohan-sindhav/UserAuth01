import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(username, email, password);
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#1C1B1F] flex items-center justify-center p-4">
      <div className="bg-[#313033] p-8 rounded-2xl shadow-lg w-full max-w-md border border-[#49454F]">
        <h1 className="text-2xl font-medium text-[#E6E1E5] mb-8 text-center">
          Create account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label
              className="block text-[#CAC4D0] text-sm font-medium"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-[#313033] border border-[#49454F] rounded-xl 
                        focus:outline-none focus:border-[#D0BCFF] focus:ring-1 focus:ring-[#D0BCFF]
                        text-[#E6E1E5] placeholder-[#938F99]"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="space-y-2">
            <label
              className="block text-[#CAC4D0] text-sm font-medium"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-[#313033] border border-[#49454F] rounded-xl 
                        focus:outline-none focus:border-[#D0BCFF] focus:ring-1 focus:ring-[#D0BCFF]
                        text-[#E6E1E5] placeholder-[#938F99]"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="space-y-2">
            <label
              className="block text-[#CAC4D0] text-sm font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-[#313033] border border-[#49454F] rounded-xl 
                        focus:outline-none focus:border-[#D0BCFF] focus:ring-1 focus:ring-[#D0BCFF]
                        text-[#E6E1E5] placeholder-[#938F99]"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#D0BCFF] text-[#381E72] py-3 px-4 rounded-full 
                      hover:bg-[#D0BCFF]/90 active:bg-[#D0BCFF]/80
                      transition-colors duration-200 font-medium"
          >
            Create account
          </button>
        </form>
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/login")}
            className="text-[#D0BCFF] hover:text-[#D0BCFF]/80 text-sm font-medium transition-colors"
          >
            Already have an account? Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
