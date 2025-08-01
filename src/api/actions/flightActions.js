import { useQuery } from "@tanstack/react-query";
import { searchFlights } from "../services/flightActions";

export const useFlights = (params) => {
  return useQuery({
    queryKey: ["flights"],
    queryFn: () => searchFlights(params),
    enabled: false,
  });
};
