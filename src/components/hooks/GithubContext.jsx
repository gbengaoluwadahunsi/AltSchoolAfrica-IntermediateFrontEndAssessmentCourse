import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create the context
const GitHubContext = createContext();

// Helper function to format the last updated time
const formatLastUpdated = (updatedTime) => {
  const now = new Date();
  const updated = new Date(updatedTime);
  const diffInMs = now - updated;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) {
    return "Updated today";
  } else if (diffInDays === 1) {
    return "Updated yesterday";
  } else {
    return `Updated ${diffInDays} days ago`;
  }
};

// Create a provider component
export const GitHubProvider = ({ children }) => {
  const [repos, setRepos] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      const username = "gbengaoluwadahunsi";
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );

        const sortedRepos = response.data.sort((a, b) => {
          return new Date(b.updated_at) - new Date(a.updated_at);
        });
        const data = sortedRepos.map((repo) => ({
          ...repo,
          lastUpdated: formatLastUpdated(repo.updated_at),
        }));
        console.log(data);
        setRepos(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    fetchRepos();
  }, []);

  const accessToken = import.meta.env.VITE_GITHUB_TOKEN;

  const createRepo = async (repoData) => {
    try {
      const response = await axios.post(
        "https://api.github.com/user/repos",
        repoData,
        {
          headers: {
            Authorization: `token ${accessToken}`, // Fix concatenation syntax
          },
        }
      );

      // Update local state immediately after successful creation
      const newRepo = {
        ...repoData,
        id: response.data.id, // Add the ID returned by the API
        lastUpdated: "Just now", // Assuming last updated should be set to "Just now"
        stargazers_count: 0, // Assuming initial star count is 0
        forks_count: 0, // Assuming initial fork count is 0
        open_issues_count: 0, // Assuming initial open issues count is 0
        html_url: response.data.html_url, // Add the URL returned by the API
      };

      setRepos((prevRepos) => [...prevRepos, newRepo]); // Add the new repository to the list

      return response.data;
    } catch (error) {
      throw new Error("Failed to create repository");
    }
  };

  const updateRepo = async (repoData, repoName) => {
    const username = "gbengaoluwadahunsi";
    try {
      const response = await axios.patch(
        `https://api.github.com/repos/${username}/${repoName}`, // Fix backticks for URL
        repoData,
        {
          headers: {
            Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
        }
      );
      console.log(repoName);
      console.log(repoData);
      return response.data;
    } catch (error) {
      throw new Error("Failed to update repository");
    }
  };

  const deleteRepo = async (repoName) => {
    const username = "gbengaoluwadahunsi";
    try {
      const confirmDelete = window.confirm(
        `Are you sure you want to delete the repository "${repoName}"?`
      );
      if (!confirmDelete) {
        return;
      }

      const response = await axios.delete(
        `https://api.github.com/repos/${username}/${repoName}`,
        {
          headers: {
            Authorization: `token ${accessToken}`,
          },
        }
      );

      const rateLimitRemaining = response.headers["x-ratelimit-remaining"];
      if (rateLimitRemaining === "0") {
        const rateLimitReset = new Date(
          response.headers["x-ratelimit-reset"] * 1000
        );
        const now = new Date();
        const timeToReset = (rateLimitReset - now) / 1000;
        console.log(
          `Rate limit exceeded. Please wait ${timeToReset} seconds until the rate limit is reset.`
        );
      }

      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error(
          "Repository not found. Please check the repository name."
        );
      } else {
        console.error("Failed to delete repository", error.message);
      }
      throw new Error("Failed to delete repository");
    }
  };

  const value = {
    repos,
    loading,
    createRepo,
    updateRepo,
    deleteRepo,
    accessToken,
    setRepos,
  };

  return (
    <GitHubContext.Provider value={value}>{children}</GitHubContext.Provider>
  );
};

export default GitHubContext;
