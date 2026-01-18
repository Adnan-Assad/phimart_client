import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  // Resend Activation Email
  const resendActivation = async (email) => {
    try {
      await apiClient.post("/auth/users/resend_activation/", { email });
      alert("Activation email sent!");
    } catch (error) {
      alert(error.response?.data?.email || "Something went wrong!");
    }
  };

  // Reset Password
  const resetPassword = async (email) => {
    try {
      await apiClient.post("/auth/users/reset_password/", { email });
      alert("password reset email sent!");
    } catch (error) {
      alert(error.response?.data?.eamil || "Something went wrong!");
    }
  };

  const getToken = () => {
    const token = localStorage.getItem("authTokens");
    return token ? JSON.parse(token) : null;
  };

  const [authTokens, setAuthTokens] = useState(getToken());
  useEffect(() => {
    if (authTokens) fetchUserProfile();
  }, [authTokens]);

  const handleAPIError = (
    error,
    defaultMessage = "Something went wrong! Try Again",
  ) => {
    if (error.response && error.response.data) {
      const errorMessage = Object.values(error.response.data).flat().join("\n");
      setErrorMsg(errorMessage);
      return { success: false, message: errorMessage };
    }
    setErrorMsg(defaultMessage);
    return {
      success: false,
      message: defaultMessage,
    };
  };

  // Fetch user Profile

  const fetchUserProfile = async () => {
    try {
      const response = await apiClient.get("/auth/users/me", {
        headers: { Authorization: `JWT ${authTokens?.access}` },
      });
      setUser(response.data);
    } catch (error) {
      console.log("Error Fetching user", error);
    }
  };

  // Update User Profile

  const updateUserProfile = async (data) => {
    setErrorMsg("");
    try {
      await apiClient.put("/auth/users/me/", data, {
        headers: {
          Authorization: `JWT ${authTokens?.access}`,
        },
      });
    } catch (error) {
      return handleAPIError(error);
    }
  };

  // Password Change

  const changePassword = async (data) => {
    setErrorMsg("");
    try {
      await apiClient.post("auth/users/set_password/", data, {
        headers: {
          Authorization: `JWT ${authTokens?.access}`,
        },
      });
      alert("password changed");
    } catch (error) {
      return handleAPIError(error);
    }
  };

  // Login User

  const loginUser = async (userData) => {
    setErrorMsg("");
    try {
      const response = await apiClient.post("/auth/jwt/create/", userData);
      setAuthTokens(response.data);
      localStorage.setItem("authTokens", JSON.stringify(response.data));

      // After login set user
      await fetchUserProfile();
    } catch (error) {
      setErrorMsg(error.response.data?.detail || "Login Failed");
    }
  };

  // Register User

  const registerUser = async (userData) => {
    setErrorMsg("");
    try {
      await apiClient.post("/auth/users/", userData);

      return {
        success: true,
        message: "Registration successfull.. Check your email activate....",
      };
    } catch (error) {
      return handleAPIError(error, "Registration Failed! Please try again.");
    }
  };

  // Logout User

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
  };

  return {
    user,
    errorMsg,
    authTokens,
    loginUser,
    registerUser,
    logoutUser,
    updateUserProfile,
    changePassword,
    resendActivation,
    resetPassword,
  };
};

export default useAuth;
