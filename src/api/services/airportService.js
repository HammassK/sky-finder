import { apiClient } from "../client";

export const searchAirports = async (query) => {
  const response = await apiClient.get("/searchAirport", {
    params: { query },
  });
  return response.data.data;
};
