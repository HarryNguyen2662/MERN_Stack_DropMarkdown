import {
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
interface IProps {
  logout: () => void;
}
export const LogoutButton = ({ logout }: IProps) => {
  return (
    <button
      className="relative inline-flex items-center justify-center p-2 overflow-hidden text-white bg-indigo-500 rounded-full shadow-md outline-none focus:outline-none"
      onClick={logout}
    >
      <ArrowRightOnRectangleIcon
        className="absolute left-0 w-5 h-5 ml-2 text-indigo-100 transition-all duration-300 ease-in-out transform hover:translate-x-1 hover:translate-y-1 hover:rotate-45"
      />

      <span className="relative px-8 py-2 text-lg tracking-widest text-indigo-300 transition-all duration-500 ease-in-out transform origin-left">
        Logout
      </span>
    </button>
  );
};