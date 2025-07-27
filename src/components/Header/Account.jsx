import React, {useEffect, useState} from 'react'
import authService from '../../Appwrite/auth';

function Account() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await authService.getCurrentUser();
        if (user) {
          setName(user.name);
          setEmail(user.email);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full mb-4"
            src="https://icon-library.com/images/my-account-icon-png/my-account-icon-png-3.jpg"
            alt="Account Icon"
          />
          <h2 className="text-xl font-semibold mb-1">{name}</h2>
          <p className="text-gray-600 text-sm mb-4">{email}</p>

          {/* Edit Button */}
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  )
}

export default Account
