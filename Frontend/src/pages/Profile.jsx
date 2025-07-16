import useAuth from "../hooks/useAuth";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-[#1C1B1F]">
      <div className="container mx-auto p-6">
        <div className="max-w-2xl mx-auto bg-[#313033] p-8 rounded-2xl shadow-lg border border-[#49454F]">
          <h1 className="text-3xl font-medium text-[#E6E1E5] mb-8">
            Your Profile
          </h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-medium text-[#CAC4D0] mb-1">Name</h2>
              <p className="text-lg font-medium text-[#E6E1E5]">{user?.name}</p>
            </div>
            <div>
              <h2 className="text-sm font-medium text-[#CAC4D0] mb-1">Email</h2>
              <p className="text-lg font-medium text-[#E6E1E5]">
                {user?.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
