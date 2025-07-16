import useAuth from "../hooks/useAuth";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-[#1C1B1F]">
      <div className="container mx-auto p-6">
        <div className="max-w-2xl mx-auto bg-[#313033] p-8 rounded-2xl shadow-lg border border-[#49454F]">
          <h1 className="text-3xl font-medium text-[#E6E1E5] mb-6">
            Welcome to AuthApp
          </h1>
          {user ? (
            <p className="text-lg text-[#CAC4D0]">
              Hello,{" "}
              <span className="font-medium text-[#D0BCFF]">{user.name}</span>!
              You're logged in.
            </p>
          ) : (
            <p className="text-lg text-[#CAC4D0]">
              Please sign in or register to access your profile.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
