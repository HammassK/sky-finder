import FlightCard from "./FlightCard";

const FlightList = ({ itineraries }) => {
  if (!itineraries?.length)
    return <p className="text-center py-4">No flights found</p>;

  return (
    <div className="space-y-8 flex flex-wrap gap-[2%]">
      {itineraries.map((itinerary) => (
        <FlightCard key={itinerary?.id} itinerary={itinerary} />
      ))}
    </div>
  );
};

export default FlightList;
