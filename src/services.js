
import axios from "axios";

export async function getResult(data) {
  const options = {
    method: "POST",
    withCredentials: false,
    url: "https://localhost:7000",
    data: data,
  };

  return await axios
    .request(options)
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch(function (error) {
       return error;
    });
}