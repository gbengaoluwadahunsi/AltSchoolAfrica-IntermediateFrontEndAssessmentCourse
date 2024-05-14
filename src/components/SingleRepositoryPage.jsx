// import React, { useState, useContext } from "react";
// import GitHubContext from "./hooks/GithubContext";
// import { AiFillStar, AiOutlineFork } from "react-icons/ai";
// import { FaCodeBranch, FaRegCalendarAlt } from "react-icons/fa";
// import CustomModal from "./CustomModal";

// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";







// const SingleRepositoryPage = () => {
//   const { repos, loading, createRepo, updateRepo, deleteRepo } = useContext(
//     GitHubContext
//   );
//   const [selectedRepoId, setSelectedRepoId] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [newRepoName, setNewRepoName] = useState("");
//   const [newRepoDescription, setNewRepoDescription] = useState("");
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  


//   const handleRepoClick = (repoId) => {
//     setSelectedRepoId(repoId);
//   };

//   const handleEditRepo = (repoId) => {
//     setSelectedRepoId(repoId);
//     setIsEditModalOpen(true);
//   };

//   const handleAddRepo = () => {
//     setIsAddModalOpen(true);
//   };

//   const handleDeleteRepo = (repoId) => {
//     setSelectedRepoId(repoId);
//     setIsDeleteModalOpen(true);
//   };

//   const confirmDeleteRepo = async () => {
//     try {
//       await deleteRepo(selectedRepoId);
//       setIsDeleteModalOpen(false);
//       setSelectedRepoId(null); // Clear selected repo after deletion
//     } catch (error) {
//       console.error("Error deleting repository:", error.message);
//     }
//   };

//   const selectedRepo = repos.find((repo) => repo.id === selectedRepoId);

//   const filteredRepos = repos.filter((repo) =>
//     repo.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   if (loading) {
//     return <div className="loader"></div>;
//   }

//   return (
//     <div className="flex flex-col md:flex-row mb-4">
//       <div className="border-r p-4 mb-10 md:2/4">
//         <h2 className="text-lg font-semibold mb-4 text-center text-blue-600">
//           All Repositories
//         </h2>
//         <p className="text-center text-gray-700 mb-4">
//           To create a new repo, ensure "demoBB" is part of the name.
//         </p>
//         <div className="flex flex-col md:flex-row gap-4 justify-center mb-4">
//           <TextField
//             label="Search"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             variant="outlined"
//             fullWidth
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => {
//               setSearchQuery("");
//               setSelectedRepoId(null);
//             }}
//           >
//             Clear
//           </Button>
//         </div>
//         <div className="grid overflow-y-auto overflow-x-hidden max-h-[60vh] gap-4">
//           {filteredRepos.map((repo) => (
//             <div
//               key={repo.id}
//               className="bg-gray-200 font-semibold flex flex-col p-4 rounded cursor-pointer hover:bg-gray-300 transform hover:scale-105 transition-all duration-300 justify-between"
//               onClick={() => handleRepoClick(repo.id)}
//             >
//               {repo.name}
//               {repo.name.includes("demoBB") && (
//                 <div className="grid grid-cols-2 gap-2">
//                   <Button
//                     variant="contained"
//                     color="secondary"
//                     onClick={() => handleDeleteRepo(repo.id)}
//                     className="mr-2"
//                   >
//                     Delete
//                   </Button>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => handleEditRepo(repo.id)}
//                   >
//                     Edit
//                   </Button>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center mt-4">
//           <Button variant="contained" color="primary" onClick={handleAddRepo}>
//             Add Repo
//           </Button>
//         </div>
//       </div>

//       <div className="p-4 md:w-3/4">
//         {selectedRepo ? (
//           <div>
//             <div className="flex items-center mb-4">
//               <h2 className="text-xl font-semibold mr-2">
//                 {selectedRepo.name}
//               </h2>
//               <a
//                 href={selectedRepo.html_url}
//                 className="text-blue-600 hover:underline"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 View on GitHub
//               </a>
//             </div>
//             <p className="mb-4">{selectedRepo.description}</p>
//             <div className="flex items-center mb-4">
//               <FaRegCalendarAlt className="mr-2 text-blue-500" />
//               <span className="text-gray-700">
//                 Last Updated: {selectedRepo.lastUpdated}
//               </span>
//             </div>
//             <div className="flex items-center mb-4">
//               <AiFillStar className="mr-2 text-yellow-500" />
//               <span className="text-gray-700">
//                 Stars: {selectedRepo.stargazers_count}
//               </span>
//             </div>
//             <div className="flex items-center mb-4">
//               <AiOutlineFork className="mr-2 text-green-500" />
//               <span className="text-gray-700">
//                 Forks: {selectedRepo.forks_count}
//               </span>
//             </div>
//             <div className="flex items-center mb-4">
//               <FaCodeBranch className="mr-2 text-purple-500" />
//               <span className="text-gray-700">
//                 Open Issues: {selectedRepo.open_issues_count}
//               </span>
//             </div>
//           </div>
//         ) : (
//           <p className="italic text-center text-gray-700">
//             Select a repository from the left to view details.
//           </p>
//         )}
//       </div>

//       <CustomModal
//         isOpen={isAddModalOpen}
//         onRequestClose={() => setIsAddModalOpen(false)}
//         title="Add Repository"
//         className="mb-4"
//       >
//         <form>
//           <TextField
//             label="Repository Name"
//             value={newRepoName}
//             onChange={(e) => setNewRepoName(e.target.value)}
//             variant="outlined"
//             fullWidth
//             className="mb-4"
//           />
//           <TextField
//             label="Repository Description"
//             value={newRepoDescription}
//             onChange={(e) => setNewRepoDescription(e.target.value)}
//             variant="outlined"
//             fullWidth
//             className="mb-4"
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={async () => {
//               try {
//                 await createRepo({
//                   name: newRepoName,
//                   description: newRepoDescription,
//                 });
//                 setIsAddModalOpen(false);
//               } catch (error) {
//                 console.error("Error creating repository:", error.message);
//               }
//             }}
//           >
//             Add Repository
//           </Button>
//         </form>
//       </CustomModal>

//       <CustomModal
//         isOpen={isEditModalOpen}
//         onRequestClose={() => setIsEditModalOpen(false)}
//         title="Edit Repository"
//         className="modal"
//       >
//         <form>
//           <TextField
//             label="Repository Name"
//             value={newRepoName}
//             onChange={(e) => setNewRepoName(e.target.value)}
//             variant="outlined"
//             fullWidth
//             className="mb-4"
//           />
//           <TextField
//             label="Repository Description"
//             value={newRepoDescription}
//             onChange={(e) => setNewRepoDescription(e.target.value)}
//             variant="outlined"
//             fullWidth
//             className="mb-4"
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={async () => {
//               try {
//                 await updateRepo(
//                   { name: newRepoName, description: newRepoDescription },
//                   selectedRepo.name
//                 );
//                 setIsEditModalOpen(false);
//               } catch (error) {
//                 console.error("Error updating repository:", error.message);
//               }
//             }}
//           >
//             Update Repository
//           </Button>
//         </form>
//       </CustomModal>

//       <CustomModal
//         isOpen={isDeleteModalOpen}
//         onRequestClose={() => setIsDeleteModalOpen(false)}
//         title="Delete Repository"
//         className="modal"
//       >
//         <div>
//           <p>Are you sure you want to delete this repository?</p>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={confirmDeleteRepo}
//           >
//             Yes, Delete
//           </Button>
//           <Button
//             variant="contained"
//             color="secondary"
//             onClick={() => setIsDeleteModalOpen(false)}
//           >
//             Cancel
//           </Button>
//         </div>
//       </CustomModal>
//     </div>
//   );
// };

// export default SingleRepositoryPage;
import React, { useState, useEffect, useContext } from "react";
import GitHubContext from "./hooks/GithubContext";
import { AiFillStar, AiOutlineFork } from "react-icons/ai";
import { FaCodeBranch, FaRegCalendarAlt } from "react-icons/fa";
import CustomModal from "./CustomModal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Swal from 'sweetalert2';

const SingleRepositoryPage = () => {
  const { repos, setRepos, loading, createRepo, updateRepo, deleteRepo } = useContext(GitHubContext);
  const [selectedRepoId, setSelectedRepoId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [newRepoName, setNewRepoName] = useState("");
  const [newRepoDescription, setNewRepoDescription] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleRepoClick = (repoId) => {
    setSelectedRepoId(repoId);
  };

  const handleEditRepo = (repoId) => {
    const repo = repos.find((repo) => repo.id === repoId);
    setNewRepoName(repo.name);
    setNewRepoDescription(repo.description);
    setSelectedRepoId(repoId);
    setIsEditModalOpen(true);
  };

  const handleAddRepo = () => {
    setNewRepoName("");
    setNewRepoDescription("");
    setIsAddModalOpen(true);
  };

  const handleDeleteRepo = (repoName) => {
    setSelectedRepoId(repoName); // Use the repository name
    setIsDeleteModalOpen(true);
  };
  

  const confirmDeleteRepo = async () => {
    try {
      console.log('Attempting to delete repo with ID:', selectedRepoId); // Debugging log
      const repoToDelete = repos.find(repo => repo.id === selectedRepoId);
      if (!repoToDelete) {
        throw new Error('Repository not found.');
      }
      await deleteRepo(repoToDelete.name); // Ensure the correct identifier is passed
      setRepos((prevRepos) => prevRepos.filter((repo) => repo.id !== selectedRepoId));
      setIsDeleteModalOpen(false);
      setSelectedRepoId(null);
      Swal.fire({
        title: 'Success!',
        text: 'Repository deleted successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } catch (error) {
      console.error("Error deleting repository:", error.message);
      Swal.fire({
        title: 'Error!',
        text: `Failed to delete repository: ${error.message}`,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };
  const selectedRepo = repos.find((repo) => repo.id === selectedRepoId);

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div className="loader"></div>;
  }

  return (
    <div className="flex flex-col md:flex-row mb-4">
      <div className="border-r p-4 mb-10 md:2/4">
        <h2 className="text-lg font-semibold mb-4 text-center text-blue-600">
          All Repositories
        </h2>
        <p className="text-center text-gray-700 mb-4">
          To create a new repo, ensure "demoBB" is part of the name.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-4">
          <TextField
            label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            variant="outlined"
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setSearchQuery("");
              setSelectedRepoId(null);
            }}
          >
            Clear
          </Button>
        </div>
        <div className="grid overflow-y-auto overflow-x-hidden max-h-[60vh] gap-4">
          {filteredRepos.map((repo) => (
            <div
              key={repo.id}
              className="bg-gray-200 font-semibold flex flex-col p-4 rounded cursor-pointer hover:bg-gray-300 transform hover:scale-105 transition-all duration-300 justify-between"
              onClick={() => handleRepoClick(repo.id)}
            >
              {repo.name}
              {repo.name.includes("demoBB") && (
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDeleteRepo(repo.id)}
                    className="mr-2"
                  >
                    Delete
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEditRepo(repo.id)}
                  >
                    Edit
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Button variant="contained" color="primary" onClick={handleAddRepo}>
            Add Repo
          </Button>
        </div>
      </div>

      <div className="p-4 md:w-3/4">
        {selectedRepo ? (
          <div>
            <div className="flex items-center mb-4">
              <h2 className="text-xl font-semibold mr-2">
                {selectedRepo.name}
              </h2>
              <a
                href={selectedRepo.html_url}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
            <p className="mb-4">{selectedRepo.description}</p>
            <div className="flex items-center mb-4">
              <FaRegCalendarAlt className="mr-2 text-blue-500" />
              <span className="text-gray-700">
                Last Updated: {selectedRepo.lastUpdated}
              </span>
            </div>
            <div className="flex items-center mb-4">
              <AiFillStar className="mr-2 text-yellow-500" />
              <span className="text-gray-700">
                Stars: {selectedRepo.stargazers_count}
              </span>
            </div>
            <div className="flex items-center mb-4">
              <AiOutlineFork className="mr-2 text-green-500" />
              <span className="text-gray-700">
                Forks: {selectedRepo.forks_count}
              </span>
            </div>
            <div className="flex items-center mb-4">
              <FaCodeBranch className="mr-2 text-purple-500" />
              <span className="text-gray-700">
                Open Issues: {selectedRepo.open_issues_count}
              </span>
            </div>
          </div>
        ) : (
          <p className="italic text-center text-gray-700">
            Select a repository from the left to view details.
          </p>
        )}
      </div>

      <CustomModal
        isOpen={isAddModalOpen}
        onRequestClose={() => setIsAddModalOpen(false)}
        title="Add Repository"
      >
        <form style={{ margin: "20px 0" }}>
          <TextField
            label="Repository Name"
            value={newRepoName}
            onChange={(e) => setNewRepoName(e.target.value)}
            variant="outlined"
            fullWidth
            className="mb-4"
            style={{ marginBottom: "20px" }}
          />
          <TextField
            label="Repository Description"
            value={newRepoDescription}
            onChange={(e) => setNewRepoDescription(e.target.value)}
            variant="outlined"
            fullWidth
            className="mb-4"
            style={{ marginBottom: "20px" }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={async () => {
              try {
                const newRepo = await createRepo({
                  name: newRepoName,
                  description: newRepoDescription,
                });
                setRepos((prevRepos) => [...prevRepos, newRepo]);
                setIsAddModalOpen(false);
                Swal.fire({
                  title: 'Success!',
                  text: 'Repository created successfully.',
                  icon: 'success',
                  confirmButtonText: 'OK'
                });
              } catch (error) {
                console.error("Error creating repository:", error.message);
              }
            }}
          >
            Add Repository
          </Button>
        </form>
      </CustomModal>

      <CustomModal
        isOpen={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
        title="Edit Repository"
      >
        <form style={{ margin: "20px 0" }}>
          <TextField
            label="Repository Name"
            value={newRepoName}
            onChange={(e) => setNewRepoName(e.target.value)}
            variant="outlined"
            fullWidth
            className="mb-4"
            style={{ marginBottom: "20px" }}
          />
          <TextField
            label="Repository Description"
            value={newRepoDescription}
            onChange={(e) => setNewRepoDescription(e.target.value)}
            variant="outlined"
            fullWidth
            className="mb-4"
            style={{ marginBottom: "20px" }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={async () => {
              try {
                const updatedRepo = await updateRepo(
                  { name: newRepoName, description: newRepoDescription },
                  selectedRepo.name
                );
                setRepos((prevRepos) =>
                  prevRepos.map((repo) =>
                    repo.id === selectedRepoId ? updatedRepo : repo
                  )
                );
                setIsEditModalOpen(false);
                Swal.fire({
                  title: 'Success!',
                  text: 'Repository updated successfully.',
                  icon: 'success',
                  confirmButtonText: 'OK'
                });
              } catch (error) {
                console.error("Error updating repository:", error.message);
              }
            }}
          >
            Update Repository
          </Button>
        </form>
      </CustomModal>

      <CustomModal
        isOpen={isDeleteModalOpen}
        onRequestClose={() => setIsDeleteModalOpen(false)}
        title="Delete Repository"
      >
        <div style={{ margin: "20px 0" }}>
          <p>Are you sure you want to delete this repository?</p>
          <Button
            variant="contained"
            color="primary"
            onClick={confirmDeleteRepo}
            style={{ marginRight: "10px" }}
          >
            Yes, Delete
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setIsDeleteModalOpen(false)}
          >
            Cancel
          </Button>
        </div>
      </CustomModal>
    </div>
  );
};

export default SingleRepositoryPage;
