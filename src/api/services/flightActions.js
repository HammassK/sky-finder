import { apiClient } from "../client";

export const searchFlights = async (params) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await apiClient.get("/searchFlights", {
    params: {
      originSkyId: params?.origin?.skyId,
      destinationSkyId: params?.destination?.skyId,
      originEntityId: params?.origin?.entityId,
      destinationEntityId: params?.destination?.entityId,
      date: params?.date,
      returnDate: params?.returnDate,
      currency: "USD",
    },
  });
  return response.data;
};
