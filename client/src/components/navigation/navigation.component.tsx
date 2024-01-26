import { DashBoardLogo } from "../logo/dashboardLogo.component";
import { MenuIcon } from "../menuIcon/menuIcon.component";
import styles from "../../layouts/dashboard/userLayout.module.css";
import { Link, useParams } from "react-router-dom";
import { DocumentControls } from "../documentControls/documentControls.component";
import { useState } from "react";
import { DeleteConfirmation } from "../deleteConfirmation/deleteConfirmation.component";
import { CurrentDocument } from "../currentDocument/currentDocument.component";
import { useDocumentContext } from "../../context/document/document.context";
import { ThemeSlider } from "../themeSlider/themeSlider.component";


export const Navigation = ({
  navOpen,
  handleToggle,
}: {
  navOpen: boolean;
  handleToggle: () => void;
}) => {
  const [showDelete, setDelete] = useState(false);
  const { handleDelete, postUpdate, name, updateName } = useDocumentContext();
  const { id } = useParams();
  const toggleDelete = () => {
    if (!id) return
    setDelete(false);
    handleDelete(id);
  };
  return (
    <div
      className={`flex justify-between items-center bg-gradient-to-r from-pink-500 to-yellow-500 ${styles.nav}`}>

      <div
        className="text-cyan-400 hover:text-blue-400 transition duration-300 ease-in-out"
      >
        <MenuIcon isOpen={navOpen} toggleHandle={() => handleToggle()} />
      </div>

      <Link to="/welcome" className="absolute left-1/2 -translate-x-1/2">
        <div className="text-purple-500 drop-shadow-xl animate-pulse">
          <DashBoardLogo />
        </div>
      </Link>

      <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 px-4 md:px-5 w-full">

        <div className="text-green-500 hover:text-green-600 transition duration-300 ease-in-out ">
          <CurrentDocument
            handleChange={(d) => updateName(d)}
            name={name}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <ThemeSlider />
          <div className="text-yellow-500 hover:text-yellow-600 transition duration-300 ease-in-out">
            <DocumentControls
              onClick={() => { if (id) return postUpdate(); }}
              onDelete={() => setDelete(true)}
            />
          </div>

          <div className="text-red-500 hover:text-red-600 transition duration-300 ease-in-out">
            <DeleteConfirmation
              confirmDelete={() => toggleDelete()}
              cancelDelete={() => setDelete(false)}
              isDelete={showDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
