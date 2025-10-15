import { useState } from "react";
import { useEvents } from "../hooks/useEvents";
import EventCard from "../components/EventCard";
import SearchBar from "../components/SearchBar";

type Event = {
  id: number;
  category: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  petsAllowed: boolean;
  organizer: string;
};

export default function EventsPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [petsAllowed, setPetsAllowed] = useState(false);

  const { data, isLoading, error } = useEvents(page, search, petsAllowed);

  if (isLoading) return <p className="text-center py-10">Loading...</p>;
  if (error)
    return (
      <p className="text-center py-10 text-red-500">Failed to load events.</p>
    );

  const events = data?.events || [];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Events
      </h1>

      {/* Search + Filter */}
      <SearchBar
        search={search}
        setSearch={setSearch}
        petsAllowed={petsAllowed}
        setPetsAllowed={setPetsAllowed}
      />

      {/* Event List */}
      {events.length === 0 ? (
        <p className="text-center text-gray-600 mt-10">No events found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event: Event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className={`px-4 py-2 rounded ${
            page === 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          Prev
        </button>

        <button
          disabled={!data?.hasMore}
          onClick={() => setPage((p) => p + 1)}
          className={`px-4 py-2 rounded ${
            !data?.hasMore
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
