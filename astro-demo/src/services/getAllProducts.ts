export async function getAllProductsForAllUsers(jwt: string, articleData: any) {
  try {
    const response = await fetch(`http://localhost:8080/api/article/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });

    if (response.ok) {
      articleData = await response.json();
      console.log(articleData);
      return articleData;
    } else {
      throw new Error("Error articles");
    }
  } catch (error) {
    console.log(error);
  }
}
