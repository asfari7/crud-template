export async function loginUser(username: string, password: string) {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message = (data && (data.message || data.error)) || "Login failed";
    throw new Error(message);
  }

  return data;
}