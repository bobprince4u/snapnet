import { useParams, Link } from "react-router-dom";
import { useEvent } from "../hooks/useEvents";

export default function EventDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useEvent(id!);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Event not found.</p>;

  const event = data;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link to="/" className="text-blue-500">
        &larr; Back
      </Link>
      <img
        src={event.imageUrl}
        alt={event.title}
        className="rounded-lg w-full h-60 object-cover mt-4"
      />
      <h1 className="text-2xl font-bold mt-4">{event.title}</h1>
      <p className="text-gray-600">{event.location}</p>
      <p className="text-gray-500">
        {new Date(event.date).toLocaleDateString()}
      </p>
      <p className="mt-4">{event.description}</p>
      <p className="text-sm text-green-600 mt-2">
        {event.petsAllowed ? "Pets Allowed" : "No Pets"}
      </p>
    </div>
  );
}
