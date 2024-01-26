import { TrashIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
import { SaveIcon } from "../saveIcon/saveIcon.component";

export const DocumentControls = ({ onClick, onDelete }: { onClick: () => void, onDelete: () => void; }) => {
  const { pathname } = useLocation();

  if (pathname === "/welcome") return <div />;

  return (
    <div className="flex items-center gap-6 md:gap-8">
      <TrashIcon
        onClick={onDelete}
        className="text-gray-500 h-6 w-6 hover:text-red-500 cursor-pointer transition duration-300 ease-in-out"
      />

      <button
        type="button"
        onClick={onClick}
        className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-base font-semibold text-white shadow-md hover:shadow-lg focus:outline-none focus:ring focus:border-blue-300 transform hover:scale-105 transition duration-300"
      >
        <SaveIcon
          className="h-5 w-5 md:-ml-1 md:mr-3 md:h-6 md:w-6 text-blue-300"
          style={{ fill: "#fff" }}
        />
        <span className="hidden md:inline">Save Changes</span>
      </button>
    </div>
  );
};
