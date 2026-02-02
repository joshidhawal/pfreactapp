import api from "./interceptor.js"; // or directly apiClient

// GET
const users = await api.get("/users");

// POST
try {
  const result = await api.post("/login", { email, password });
  console.log("Logged in:", result);
} catch (err) {
  console.error("Login failed:", err.message, err.status);
}

await api.get("/users");
await api.post("/login", { email, password });
