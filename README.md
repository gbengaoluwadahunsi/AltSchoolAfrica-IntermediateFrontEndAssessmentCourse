# My GitHub Repository APP

A React application for managing GitHub repositories. This app allows users to view, create, update, and delete repositories of a specified GitHub user. It also includes search functionality to filter repositories and modals for adding, editing, and deleting repositories.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)

## Features

- **View Repositories**: List all repositories of the specified GitHub user.
- **Search Repositories**: Search for repositories by name.
- **Add Repository**: Add a new repository to the specified GitHub user's account.
- **Edit Repository**: Edit the details of an existing repository.
- **Delete Repository**: Delete a repository after confirmation.
- **Responsive Design**: Works on mobile, tablet, and desktop screens.
- **Navigation**: Toggle navigation menu on mobile devices.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: For navigation between pages.
- **Axios**: For making HTTP requests.
- **Tailwind CSS**: For styling the application.
- **Material UI**: For UI components like buttons and text fields.
- **React Icons**: For icons used in the application.

## Installation

To get a local copy of the project, follow these steps:

1. **Clone the repository**:

    ```sh
    git clone https://github.com/yourusername/github-repository-manager.git
    ```

2. **Navigate to the project directory**:

    ```sh
    cd github-repository-manager
    ```

3. **Install dependencies**:

    ```sh
    npm install
    ```

4. **Set up environment variables**:

    Create a `.env` file in the root directory and add your GitHub token:

    ```env
    VITE_GITHUB_TOKEN=your_github_token
    ```

## Usage

To start the development server:

```sh
npm run dev

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Adding, Editing, and Deleting Repositories

## Add a Repository:

1. Click the "Add Repo" button.
2. Fill in the repository name and description(ensure demoBB is part of the new repo name you want to create).
3. Click "Add Repository".

## Edit a Repository:

1. Click the "Edit" button next to the repository you want to edit.
2. Update the repository details.
3. Click "Update Repository".

## Delete a Repository:

1. Click the "Delete" button next to the repository you want to delete.
2. Confirm the deletion in the modal.

# Search Repositories

- Use the search bar to filter repositories by name.
- Click "Clear" to reset the search query.

# Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.


# Acknowledgements

- React
- React Router
- Axios
- Tailwind CSS
- Material UI
- React Icons



