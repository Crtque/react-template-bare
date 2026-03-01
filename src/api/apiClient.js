const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const apiClient = async (endpoint, options = {}) => {
  const token = localStorage.getItem("token");

  const headers = {
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  if (options.body instanceof FormData) {
    delete headers["Content-Type"]; 
  } else {
    headers["Content-Type"] = "application/json";
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Ошибка ${response.status}: ${errorText}`);
  }

  return response.json();
};

export default apiClient;