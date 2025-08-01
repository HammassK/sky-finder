import FlightList from "./components/flights/FlightList";
import { useState } from "react";
import Footer from "./components/layout/Footer";
import ErrorMessage from "./components/common/ErrorMessage";
import Loader from "./components/common/Loader";
import Header from "./components/layout/Header";
import { useFlights } from "./api/actions/flightActions";
import { SearchForm } from "./components/flights/SearchForm";
import { mockFlights } from "./utils/constant";

const App = () => {
  const [params, setParams] = useState(null);
  const [loading, setLoading] = useState(false);
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState(null);

  const { refetch } = useFlights(params);

  /* Function that trigger on search button */

  const handleSearch = async (searchParams) => {
    setParams(searchParams);
    setLoading(true);
    try {
      const { data } = await refetch(searchParams);

      if (!data.status) throw new Error("API request failed");
      setFlights(data?.data?.itineraries || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const flightsData =
    flights?.length > 0 ? flights : mockFlights.data.itineraries;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col w-full">
      {/* App header */}
      <Header />

      <main className="flex-grow w-full px-12 py-8">
        <div className="w-full">
          {/* Search form component, triggers flight search */}
          <SearchForm onSubmit={handleSearch} />

          {/* Loader shown while fetching data */}
          {loading && <Loader />}

          {/* Error message with retry option */}
          {error && (
            <ErrorMessage
              message={error}
              onRetry={() => params && handleSearch(params)}
            />
          )}

          {/* Display flight results only if not loading or error */}
          {!loading && (
            <FlightList
              itineraries={flightsData}
              onEmptyResults={() => setError("No flights found")}
            />
          )}
        </div>
      </main>

      {/* App footer */}
      <Footer />
    </div>
  );
};

export default App;
