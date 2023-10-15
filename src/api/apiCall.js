export const apiCall = async (url, method, payload) => {
  console.log(url, method, payload);
  try {
    let response;
    switch (method) {
      case "GET":
        response = await fetch(url);
        break;
      case "POST":
        response = await fetch(url, {
          method: method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        break;

      default:
        return;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return { msg: "fail", err: error };
  }
};
