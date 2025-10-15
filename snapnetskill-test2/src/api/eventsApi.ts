import axios from "axios";

const API_BASE =
  "https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events"; // replace with actual endpoint

export const fetchEvents = async (
  page: number,
  search: string,
  petsAllowed?: boolean
) => {
  const params: { page: number; search: string; petsAllowed?: boolean } = {
    page,
    search,
  };
  if (petsAllowed !== undefined) params.petsAllowed = petsAllowed;
  const { data } = await axios.get(API_BASE, { params });
  return data;
};

export const fetchEventById = async (id: string) => {
  const { data } = await axios.get(`${API_BASE}/${id}`);
  return data;
};
