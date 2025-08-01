import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AirportInput } from "./AirportInput";
import CalendarIcon from "../../../public/assets/svgs/CalendarIcon";

export const SearchForm = ({ onSubmit }) => {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [date, setDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!origin || !destination) {
      alert("Please select origin and destination airports");
      return;
    }
    onSubmit({
      origin,
      destination,
      date: date.toISOString().split("T")[0],
      returnDate: returnDate.toISOString().split("T")[0],
    });
  };

  return (
    <div>
      <form className="w-full mx-auto p-4 bg-white rounded-lg shadow">
        <div className="flex flex-col md:flex-row md:items-end gap-4 mb-4">
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* "From" airport input */}
            <AirportInput label="From" value={origin} onChange={setOrigin} />

            {/* "Where To" airport input */}
            <AirportInput
              label="Where To"
              value={destination}
              onChange={setDestination}
            />
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[16px] font-[600] text-gray-700">
                Departure
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CalendarIcon />
                </div>

                {/* Date picker component for departure */}
                <DatePicker
                  selected={date}
                  onChange={setDate}
                  minDate={new Date()}
                  maxDate={returnDate}
                  placeholderText="Departure"
                  className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border cursor-pointer h-[45px]"
                />
              </div>
            </div>

            {/* Return date picker */}
            <div>
              <label className="block text-[16px] font-[600] text-gray-700">
                Return
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CalendarIcon />
                </div>
                <DatePicker
                  selected={returnDate}
                  onChange={setReturnDate}
                  minDate={date}
                  placeholderText="Return"
                  className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border cursor-pointer h-[45px]"
                />
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="relative flex items-center justify-center my-4">
        <div className="flex-grow border-t border-gray-300 border-dashed"></div>
        {/* Submit button to trigger flight search */}
        <button
          onClick={handleSubmit}
          className="mx-4 bg-blue-600 hover:bg-blue-700 hover:cursor-pointer text-white font-medium py-2 px-6 rounded-md shadow-sm whitespace-nowrap"
        >
          Search Flights
        </button>
        <div className="flex-grow border-t border-gray-300 border-dashed"></div>
      </div>
    </div>
  );
};
