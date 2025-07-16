import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-[#1C1B1F] text-[#E6E1E5] p-4 border-b border-[#49454F]">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-medium text-[#D0BCFF] hover:text-[#D0BCFF]/90 transition-colors"
        >
          AuthApp
        </Link>
        <div className="flex space-x-2">
          {user ? (
            <>
              <Link
                to="/profile"
                className="text-[#E6E1E5] hover:bg-[#313033] px-4 py-2 rounded-full transition-colors text-sm font-medium"
              >
                Profile
              </Link>
              <button
                onClick={logout}
                className="bg-[#F2B8B5] text-[#201A1A] px-4 py-2 rounded-full 
                          hover:bg-[#F2B8B5]/90 active:bg-[#F2B8B5]/80
                          transition-colors duration-200 text-sm font-medium"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-[#E6E1E5] hover:bg-[#313033] px-4 py-2 rounded-full transition-colors text-sm font-medium"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                className="bg-[#D0BCFF] text-[#381E72] px-4 py-2 rounded-full 
                          hover:bg-[#D0BCFF]/90 active:bg-[#D0BCFF]/80
                          transition-colors duration-200 text-sm font-medium"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
