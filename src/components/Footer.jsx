import React, { useContext, useState } from "react";
import GitHubContext from "./hooks/GithubContext";


const Footer = () => {
    const {loading } = useContext(GitHubContext);
    
 return( <div className={`bg-black ${loading ? " bottom-0 fixed" : ""} w-[100dvw] h-28 text-white flex justify-center items-center`}>
 <p className="text-white">&copy; 2024 Gbenga Oluwadahunsi | All rights reserved.</p>
</div>)
};

export default Footer;
