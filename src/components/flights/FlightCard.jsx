const FlightCard = ({ itinerary }) => {
  const { price, legs } = itinerary;
  const firstLeg = legs[0];
  const firstSegment = firstLeg?.segments[0];
  const lastSegment = firstLeg?.segments[firstLeg?.segments?.length - 1];

  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition-shadow w-full lg:w-[49%] mb-[3%]">
      {/* Header: Airline logo, name, and flight price */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <img
            src={firstSegment?.marketingCarrier?.logoUrl}
            alt={firstSegment?.marketingCarrier?.name}
            className="h-8 w-8 mr-2"
          />
          <span>{firstSegment?.marketingCarrier?.name}</span>
        </div>
        <div className="text-xl font-bold">{price?.formatted}</div>
      </div>

      {/* Flight details: Departure, duration + stops, and arrival */}
      <div className="flex justify-between items-center mb-2">
        {/* Departure time and code */}
        <div className="text-center">
          <div className="font-semibold">
            {new Date(firstSegment?.departure).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
          <div className="text-sm text-gray-600">
            {firstLeg?.origin?.displayCode}
          </div>
        </div>

        {/* Flight duration and stop info */}
        <div className="mx-4 text-center flex-grow">
          <div className="text-xs text-gray-500">
            {Math.floor(firstLeg?.durationInMinutes / 60)}h{" "}
            {firstLeg?.durationInMinutes % 60}m
          </div>
          <div className="border-t border-gray-300 my-1"></div>
          <div className="text-xs">
            {firstLeg?.stopCount === 0
              ? "Nonstop"
              : `${firstLeg?.stopCount} stop${firstLeg?.stopCount > 1 ? "s" : ""}`}
          </div>
        </div>

        {/* Arrival time and code */}
        <div className="text-center">
          <div className="font-semibold">
            {new Date(lastSegment?.arrival)?.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
          <div className="text-sm text-gray-600">
            {firstLeg?.destination?.displayCode}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
