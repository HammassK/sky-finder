import { useQuery } from "@tanstack/react-query";
import { searchAirports } from "../services/airportService";

export const useAirports = (query) => {
  return useQuery({
    queryKey: ["searchAirports"],
    queryFn: () => searchAirports(query),
    enabled: false,
  });
};
