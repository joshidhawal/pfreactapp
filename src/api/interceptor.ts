// src/api/interceptors.js
import api from "./apiClient";

// Example: attach token automatically before each request
api.addRequestInterceptor(async (config: any) => {
  console.log("Outgoing request:", config.method, config);
  return config;
});

// Example: global error handling
api.addResponseInterceptor(async (response: any) => {
  if (response.status === 401) {
    console.warn("Unauthorized - maybe redirect to login");
  }
});

export default api;
