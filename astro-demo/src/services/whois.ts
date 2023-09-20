export async function getWhoisData(jwt: string) {
  try {
    const response = await fetch("http://18.216.97.242/auth/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      throw new Error("Error data");
    }
  } catch (error) {
    console.log(error);
  }
}
