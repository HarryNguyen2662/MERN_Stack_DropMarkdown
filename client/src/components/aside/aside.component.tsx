import { PlusIcon } from "@heroicons/react/24/outline";
import styles from "../../layouts/dashboard/userLayout.module.css";
import { Logo } from "../logo/logo.component";
import { ThemeSlider } from "../themeSlider/themeSlider.component";
import { LogoutButton } from "../logoutButton/logoutButton.component";
import { logoutUser } from "../../api/user.handler";
import { removeSessionCookie } from "../../context/session";
import { useNavigate } from "react-router-dom";

import { DocumentLinks } from "../documentLinks/documentLinks.component";
import { createDocument } from "../../api/document.handler";
import { useQueryClient } from "react-query";
interface IProps {
  handleToggle: () => void;
}
export const Aside = ({ handleToggle }: IProps) => {
  const navigation = useNavigate();
  const queryClient = useQueryClient()
  const logout = async () => {
    await logoutUser();
    removeSessionCookie();
    navigation('/login', { replace: true })
  }
  const createADocument = async () => {
    try {
      const { data } = await createDocument();
      queryClient.invalidateQueries('documents');
      handleToggle();
      navigation(`/${data.id}`, { replace: true });

    } catch (e) {
      console.log("An Error Occurred while creating the document", e)
    }
  }
  return (
    <div className={`bg-gradient-to-br from-purple-800 to-blue-500 flex flex-col justify-between px-6 py-7 ${styles.aside} animate__animated animate__fadeIn animate__delay-1s`}>
      <div className="flex flex-col gap-4">
        <div className="bg-pink-600 rounded-md p-4 transform hover:scale-105 transition-transform">
          <Logo classes="lg:hidden animate__animated animate__rubberBand" />
          <h2 className="text-white text-lg leading-5 font-semibold text-left mt-7 lg:mt-0 self-start animate__animated animate__fadeInUp">
            My Documents
          </h2>
          <button
            type="button"
            onClick={createADocument}
            className="inline-flex items-center justify-center w-full py-2 text-white border border-transparent rounded-md shadow-sm bg-blue-500 mt-7 hover:bg-blue-600 transition-all animate__animated animate__bounceInRight">
            <PlusIcon className="w-4 h-4 md:-ml-1 md:mr-1 animate__animated animate__flip" />
            <span className="text-sm leading-5 font-medium animate__animated animate__fadeInLeft">
              New Document
            </span>
          </button>
        </div>
        <div className="flex flex-col self-start flex-1 py-4 mt-6 overflow-scroll max-h-[500px] md:max-h-[1024px] lg:max-h-[900px] gap-7 scrollbar-hide animate__animated animate__fadeIn">
          <DocumentLinks />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <LogoutButton logout={() => logout()} />
        <ThemeSlider />
      </div>
    </div>
  );
};
