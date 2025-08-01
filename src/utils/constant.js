export const mockFlights = {
  status: true,
  timestamp: 1753967744154,
  data: {
    itineraries: [
      {
        id: "flight-123",
        price: {
          raw: 299.99,
          formatted: "$300",
        },
        legs: [
          {
            origin: {
              id: "JFK",
              name: "John F. Kennedy International",
              displayCode: "JFK",
              city: "New York",
              country: "USA",
            },
            destination: {
              id: "LAX",
              name: "Los Angeles International",
              displayCode: "LAX",
              city: "Los Angeles",
              country: "USA",
            },
            departure: "2025-08-15T08:00:00",
            arrival: "2025-08-15T11:30:00",
            durationInMinutes: 210,
            stopCount: 0,
            segments: [
              {
                flightNumber: "AA123",
                marketingCarrier: {
                  name: "American Airlines",
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/AA.png",
                },
                departure: "2025-08-15T08:00:00",
                arrival: "2025-08-15T11:30:00",
              },
            ],
          },
        ],
      },
      {
        id: "flight-456",
        price: {
          raw: 259.99,
          formatted: "$260",
        },
        legs: [
          {
            origin: {
              id: "JFK",
              name: "John F. Kennedy International",
              displayCode: "JFK",
              city: "New York",
              country: "USA",
            },
            destination: {
              id: "LAX",
              name: "Los Angeles International",
              displayCode: "LAX",
              city: "Los Angeles",
              country: "USA",
            },
            departure: "2025-08-15T12:30:00",
            arrival: "2025-08-15T17:45:00",
            durationInMinutes: 315,
            stopCount: 1,
            segments: [
              {
                flightNumber: "DL456",
                marketingCarrier: {
                  name: "Delta Airlines",
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/DL.png",
                },
                departure: "2025-08-15T12:30:00",
                arrival: "2025-08-15T15:00:00",
                destination: {
                  displayCode: "ATL",
                  name: "Hartsfield-Jackson Atlanta",
                },
              },
              {
                flightNumber: "DL789",
                marketingCarrier: {
                  name: "Delta Airlines",
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/DL.png",
                },
                departure: "2025-08-15T16:00:00",
                arrival: "2025-08-15T17:45:00",
              },
            ],
          },
        ],
      },
      {
        id: "flight-789",
        price: {
          raw: 349.99,
          formatted: "$350",
        },
        legs: [
          {
            origin: {
              id: "JFK",
              name: "John F. Kennedy International",
              displayCode: "JFK",
              city: "New York",
              country: "USA",
            },
            destination: {
              id: "LAX",
              name: "Los Angeles International",
              displayCode: "LAX",
              city: "Los Angeles",
              country: "USA",
            },
            departure: "2025-08-15T18:00:00",
            arrival: "2025-08-15T21:15:00",
            durationInMinutes: 195,
            stopCount: 0,
            segments: [
              {
                flightNumber: "UA789",
                marketingCarrier: {
                  name: "United Airlines",
                  logoUrl:
                    "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
                },
                departure: "2025-08-15T18:00:00",
                arrival: "2025-08-15T21:15:00",
              },
            ],
          },
        ],
      },
    ],
    filterStats: {
      stopPrices: {
        direct: {
          isPresent: true,
          formattedPrice: "$300",
        },
        one: {
          isPresent: true,
          formattedPrice: "$260",
        },
      },
    },
  },
};
