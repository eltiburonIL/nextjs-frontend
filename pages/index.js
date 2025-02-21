import { useEffect, useState } from "react";
import { getUserInfo } from "../lib/api";

export default function Home() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const data = await getUserInfo(1);
        setUser(data);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchUser();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Apigee + Cloud Run Demo</h1>

      {error && <p className="text-red-500">{error}</p>}

      {user ? (
        <div className="bg-white p-4 rounded shadow-md">
          <pre className="text-gray-800">{JSON.stringify(user, null, 2)}</pre>
        </div>
      ) : (
        <p className="text-gray-600">Loading user info...</p>
      )}
    </div>
  );
}