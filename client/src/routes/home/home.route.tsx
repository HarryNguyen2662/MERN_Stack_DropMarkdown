import { Link } from "react-router-dom";
import { AppTypography } from "../../components/typography/app-typography.component";
import { LoadingDashboard } from "../../components/loadingDashboard/loadingDashboard.component";

const HomePage = () => {

  return (
    <div className="flex flex-col gap-4 w-full text-justify px-4 md:py-8">
      <AppTypography
        intent="h2"
        className="text-2xl md:text-3xl lg:text-4xl underline">
        MERN Stack DropMarkdown | Typescript, React.js, Node.js, Express.js, MongoDB, PassportJS, AJAX, Bootstrap, CSS Grid
      </AppTypography>
      <AppTypography intent="p" className="text-lg md:text-xl lg:text-2xl">
        • Developed full-stack web app using React, Node.js, Express, and MongoDB, enabling real-time editing for 5+ users
      </AppTypography>
      <AppTypography intent="p" className="text-lg md:text-xl lg:text-2xl">
        • Implemented authentication with Passport.js to allow user account creation with encrypted passwords and JSON web tokens for secure access
      </AppTypography>
      <AppTypography intent="p" className="text-lg md:text-xl lg:text-2xl">
        • Built backend APIs with Node and Express serving dynamic Markdown content to React frontend, improving response times by 35%
      </AppTypography>
      <AppTypography intent="p" className="text-lg md:text-xl lg:text-2xl">
        • Stored data in MongoDB with optimized indexing and caching, improving query performance by 62% and retrieval speed by 84%.
      </AppTypography>
      <Link
        to="/code"
        className="inline-flex w-72 justify-center items-center mt-4 rounded-md border border-transparent bg-primary-orange px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-secondary-orange ">
        Check out the Code Here
      </Link>
    </div>
  );
};

export default HomePage;
