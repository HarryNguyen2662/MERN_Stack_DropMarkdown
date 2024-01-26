import { DocumentIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";

interface IProps {
  handleChange: (value: string) => void;
  name: string;
}

export const CurrentDocument = ({ handleChange, name }: IProps) => {
  const { pathname } = useLocation();

  if (pathname === "/welcome") return <div />;

  return (
    <div className="flex gap-4 items-center lg:pl-5 lg:border-l-2 lg:border-gray-500 justify-between">
      <div className="flex items-center gap-4">
        <div className="bg-blue-500 p-2 rounded-md">
          <DocumentIcon className="text-white h-6 w-6" />
        </div>
        <div className="rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 p-3">
          <label
            htmlFor="name"
            className="block text-sm font-default font-medium leading-4 text-white">
            Document Name
          </label>
          <input
            type="text"
            name="name"
            className="block w-full bg-transparent border-0 p-0 text-white outline-none placeholder-white sm:text-sm focus-within:border-b-purple-500 focus-within:border-b"
            value={name}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
