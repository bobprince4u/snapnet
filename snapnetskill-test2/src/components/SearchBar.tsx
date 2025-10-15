interface Props {
  search: string;
  setSearch: (val: string) => void;
  petsAllowed: boolean;
  setPetsAllowed: (val: boolean) => void;
}

export default function SearchBar({
  search,
  setSearch,
  petsAllowed,
  setPetsAllowed,
}: Props) {
  return (
    <div className="flex flex-wrap gap-4 mb-4 items-center">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search events..."
        className="border p-2 rounded w-60"
      />
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={petsAllowed}
          onChange={(e) => setPetsAllowed(e.target.checked)}
        />
        Pets Allowed
      </label>
    </div>
  );
}
