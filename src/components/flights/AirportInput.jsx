import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { Combobox } from "@headlessui/react";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  CheckIcon,
} from "@heroicons/react/20/solid";
import { useAirports } from "../../api/actions/airportActions";

export const AirportInput = ({ label, value, onChange }) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 300);
  const [airports, setAirports] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const { refetch } = useAirports(debouncedQuery);

  useEffect(() => {
    if (debouncedQuery.length > 2) {
      setHasSearched(true);
      setIsFetching(true);
      refetch(debouncedQuery)
        .then((data) => {
          setAirports(data?.data || []);
        })
        .finally(() => {
          setIsFetching(false);
        });
    } else {
      setAirports([]);
    }
  }, [debouncedQuery, refetch]);

  const showOptions =
    isFetching ||
    airports.length > 0 ||
    (hasSearched && debouncedQuery.length > 2 && airports.length === 0);

  return (
    <Combobox
      as="div"
      value={value}
      onChange={(selectedAirport) => {
        onChange(selectedAirport);
        setQuery(selectedAirport?.presentation?.title || "");
      }}
    >
      <Combobox.Label className="block text-[16px] font-[600] text-gray-700">
        {label}
      </Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm h-[45px]"
          displayValue={(airport) => airport?.presentation?.title || ""}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search airports..."
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none cursor-pointer">
          <div className="flex space-x-1">
            <ArrowUpIcon className="h-4 w-4 text-gray-400" />
            <ArrowDownIcon className="h-4 w-4 text-gray-400" />
          </div>
        </Combobox.Button>

        {showOptions && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {isFetching ? (
              <div className="px-4 py-2 text-gray-500 text-sm">
                Searching airports...
              </div>
            ) : airports?.length === 0 ? (
              <div className="px-4 py-2 text-gray-500 text-sm">
                No airports found
              </div>
            ) : (
              airports?.map((airport) => (
                <Combobox.Option
                  key={airport.skyId}
                  value={airport}
                  className={({ active, selected }) =>
                    `relative cursor-default select-none py-2 pl-3 pr-9 ${
                      active ? "bg-blue-100" : "text-gray-900"
                    } ${selected ? "bg-blue-50 font-medium" : ""}`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? "font-semibold" : ""}`}
                      >
                        {airport?.presentation?.suggestionTitle}
                      </span>
                      <span
                        className={`block truncate text-sm ${
                          selected ? "text-blue-600" : "text-gray-500"
                        }`}
                      >
                        {airport?.presentation?.subtitle}
                      </span>
                      {selected && (
                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600">
                          <CheckIcon className="h-5 w-5" />
                        </span>
                      )}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
};
