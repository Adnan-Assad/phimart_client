import React, { useState } from "react";
import useAuth from "../hooks/useAuth";

const AuthTest = () => {
  const { resendActivation, resetPassword } = useAuth();
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Auth Test</h2>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => resendActivation(email)}
            className="w-1/2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Resend Activation
          </button>

          <button
            onClick={() => resetPassword(email)}
            className="w-1/2 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthTest;
