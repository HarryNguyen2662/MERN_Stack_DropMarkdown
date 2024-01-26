import { AppTypography } from "../../components/typography/app-typography.component";

const Disclaimer = () => {
    return (
        <div className="flex flex-col gap-4">
            <AppTypography intent="h2">MERN Stack DropMarkdown | Typescript, React.js, Node.js, Express.js, MongoDB, PassportJS, AJAX, Bootstrap, CSS Grid</AppTypography>
            <AppTypography intent="p">• Developed full-stack web app using React, Node.js, Express, and MongoDB, enabling real-time editing for 5+ users</AppTypography>
            <AppTypography intent="p">• Implemented authentication with Passport.js to allow user account creation with encrypted passwords and JSON web tokens for secure access</AppTypography>
            <AppTypography intent="p">• Built backend APIs with Node and Express serving dynamic Markdown content to React frontend, improving response times by 35%</AppTypography>
            <AppTypography intent="p">• Stored data in MongoDB with optimized indexing and caching, improving query performance by 62% and retrieval speed by 84%.</AppTypography>
        </div>
    )
}

export default Disclaimer;