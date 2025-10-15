import { useQuery } from "@tanstack/react-query";
import { fetchEvents, fetchEventById } from "../api/eventsApi";

export const useEvents = (
  page: number,
  search: string,
  petsAllowed?: boolean
) =>
  useQuery({
    queryKey: ["events", page, search, petsAllowed],
    queryFn: () => fetchEvents(page, search, petsAllowed),
    staleTime: 5000, // Use staleTime instead of keepPreviousData for older versions
  });

export const useEvent = (id: string) =>
  useQuery({
    queryKey: ["event", id],
    queryFn: () => fetchEventById(id),
  });
