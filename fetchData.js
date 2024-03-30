import { apiKey } from "./apiKey.js";

export const fetchData=async (url,renderFc)=>{
  let configObj= {
    method: "GET",
    headers: { "X-Api-Key": apiKey },
  }
  try {
    const response = await fetch(url,configObj);
    const data = await response.json();
    renderFc(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
