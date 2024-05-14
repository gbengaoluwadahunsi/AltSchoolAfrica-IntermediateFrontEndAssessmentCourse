import React, { useContext, useState } from "react";
import GitHubContext from "./hooks/GithubContext";
import { FaGithub } from "react-icons/fa";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import ReactPaginate from "react-paginate";

const RepositoriesPage = () => {
  const { repos, loading } = useContext(GitHubContext);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [showForked, setShowForked] = useState(false);
  const [showRecent, setShowRecent] = useState(false);
  const reposPerPage = getReposPerPage(); // Dynamic repos per page based on viewport

  function getReposPerPage() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      // Large screen
      return 9;
    } else if (screenWidth >= 768) {
      // Tablet
      return 6;
    }  else if (screenWidth >=  479 ) {
      // Tablet
      return 6;
    } 
    
    else {
      // Mobile
      return 4;
    }
  }

  const indexOfLastRepo = (currentPage + 1) * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;

  const filteredRepos = repos
    .filter((repo) =>
      repo.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((repo) => !showForked || repo.fork)
    .filter(
      (repo) =>
        !showRecent ||
        new Date(repo.created_at) >=
          new Date(new Date().setMonth(new Date().getMonth() - 3))
    );

  const totalPages = Math.ceil(filteredRepos.length / reposPerPage);

  const currentRepos = filteredRepos.slice(indexOfFirstRepo, indexOfLastRepo);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    scrollToTop();
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    scrollToTop();
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setShowForked(false);
    setShowRecent(false);
  };

  if (loading) {
    return <div className="loader"></div>;
  }

  return (
    <div className="flex flex-col gap-4 px-4 md:px-8 lg:px-8 xl:px-20 p md:py-16 lg:py-24 xl:">
      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-4">
        My GitHub Repositories Info App
      </h1>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <TextField
          label="Search"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleClearFilters}
        >
          Clear
        </Button>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-4">
        <FormControlLabel
          control={<Switch checked={showForked} onChange={() => setShowForked(!showForked)} />}
          label="Show Forked Repos"
        />
        <FormControlLabel
          control={<Switch checked={showRecent} onChange={() => setShowRecent(!showRecent)} />}
          label="Show Recent Repos"
        />
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center items-center ">
        {currentRepos.map((repo) => (
          <div
            key={repo.id}
            // className="flex flex-col justify-center items-center rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 bg-white border border-gray-300"
            className="flex transform transition-transform ease-in-out gap-8 justify-center  rounded-3xl shadow-lg shadow-gray-600 w-[28rem] h-[10rem] items-center border-[10px] border-indigo-400 border-r-orange-600  py-4 px-10 hover:scale-95 scroll"
          >
            <div className="hover:scale-95">
              <FaGithub className="text-4xl mb-2 text-gray-600" />
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-800">{repo.name}</p>
              <p className="text-sm text-gray-500">{repo.visibility}</p>
              <p className="text-xs text-gray-400">{repo.lastUpdated}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-4">
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          onPageChange={(selected) => setCurrentPage(selected.selected)}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default RepositoriesPage;
