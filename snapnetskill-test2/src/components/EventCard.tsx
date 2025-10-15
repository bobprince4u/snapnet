import type { Event } from "../types";
import { Link } from "react-router-dom";

interface Props {
  event: Event;
}

export default function EventCard({ event }: Props) {
  return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <h2 className="text-lg font-semibold">{event.title}</h2>
      <p className="text-gray-600">{event.location}</p>
      <p className="text-sm text-gray-500">
        {new Date(event.date).toDateString()}
      </p>
      <p className="text-xs text-green-600 mt-1">
        {event.petsAllowed ? "Pets Allowed" : "No Pets"}
      </p>
      <Link
        to={`/events/${event.id}`}
        className="text-blue-500 text-sm mt-2 block"
      >
        View Details →
      </Link>
    </div>
  );
}
