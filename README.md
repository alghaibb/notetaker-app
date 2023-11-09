# <strong>Note Taker App

## Table Of Contents

- [Description](#description)
- [Screenshot](#screenshot)

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contribution)
- [Tests](#tests)
- [Portfolio](#portfolio)
- [License](#license)

<img src="https://img.shields.io/github/repo-size/alghaibb/notetaker-app?style=plastic" alt="GitHub repo size"><br>
<img src="https://img.shields.io/github/languages/top/alghaibb/notetaker-app?style=plastic" alt="GitHub top language"></p>

## Description

Note Taker is an Express.js application designed for writing, saving, and deleting notes. This application uses an Express.js backend and saves and retrieves note data from a JSON file.

<a href="#table-of-contents">Back to Table of Contents</a>

### Motivation

I built the Note Taker app to make it easier for people to keep track of their ideas and tasks. It's meant to be a simple tool that anyone can use.

<a href="#table-of-contents">Back to Table of Contents</a>

### Why I Built This

The goal was to create something that's easy to use for writing and organizing notes. This app is for people who need to quickly write down their thoughts and come back to them later.

<a href="#table-of-contents">Back to Table of Contents</a>

### Problem Solved

The app helps keep notes organized. It lets you write, save, and delete notes. This is really useful for people who need to keep their ideas in order, whether for work, school, or personal use.

<a href="#table-of-contents">Back to Table of Contents</a>

### What I Learned

Making this app taught me a lot about using Express.js for server-side work. I learned how to handle web requests, work with JSON files, and how to use UUIDs to make each note unique. I also got better at making apps that are easy and friendly for people to use.

<a href="#table-of-contents">Back to Table of Contents</a>

## Screenshot / Deployed Website

<p align="center">
  <img alt="live screenshot of application" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWtxMnZrMnhsa3huang5c3RxeGMzM3A1ZnN0aXBoM3lsd3U0bzlzbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sWn5yJvCU8AtGPtOw0/giphy.gif" width="400px"><br>
  Live Screenshot GIF Demonstration
</p>

[Deployed Website](https://notetaker-app-alghaibb-95962244ce20.herokuapp.com/)

<a href="#table-of-contents">Back to Table of Contents</a>

## Technologies

<a href="#table-of-contents">Back to Table of Contents</a>

## Installation

1. **Clone the Repo:**

   ```bash
   git clone https://github.com/alghaibb/notetaker-app

   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd notetaker-app
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Start the Server:**

   ```bash
   npm start
   ```

5. **Access the App**
   Visit `localhost:3001` in your browser:

   ```bash
   http://localhost:3001/
   ```

<a href="#table-of-contents">Back to Table of Contents</a>

## Usage

### Functionality and Use

1. **Taking and Managing Notes**:

- Users can create, view, and delete notes.
- Each note consists of a title and a text body.
- Notes are uniquely identified using UUIDs.

2. **Web Interface**:

- The application has a simple, user-friendly web interface.
- It includes an index page and a notes page.
- Bootstrap is used for styling, making the interface responsive and visually appealing.

### Workflow

1. **Viewing Notes**:

- On accessing the /notes URL, users are presented with a list of existing notes (fetched using a GET request to /api/notes).
- This page allows users to view all the notes that have been saved.

2. **Adding a New Note**:

- Users can add a new note by entering a title and the note's content.
- Upon submitting, a POST request is sent to /api/notes, which saves the new note to the server (in db/db.json).

3. **Deleting Notes**:

- Each note can be deleted through an interface button.
- Deleting a note sends a DELETE request to /api/notes/:id, removing the note with the corresponding UUID from the server's storage.

### Server-Side Operations

1. **Data Storage**:

- Notes are stored in a JSON file (db/db.json), serving as a simple database.
- Every time a note is added or deleted, this file is updated.

2. **Express.js for Routing**:

- Express.js handles HTTP requests (GET, POST, DELETE).
- Separate routes are defined for API interactions (api-routes) and HTML page serving (html-routes).

3. **UUID for Unique Identification**:

- The UUID library ensures each note has a unique identifier, which is crucial for the delete operation.

### Deployment and Accessibility:

- The app is designed to be run on a server, typically using Node.js.
- It can be deployed to a cloud platform like Heroku for broader accessibility.

This application serves as a practical tool for users to jot down and manage their notes in a digital format. It combines front-end interaction with back-end data management, providing an end-to-end solution for note-taking needs.

<a href="#table-of-contents">Back to Table of Contents</a>

## Contribution

Thank you for your interest in contributing to the NoteTaker-App! We value your contributions and look forward to collaborating with the community. Here are some guidelines to follow when contributing to this project.

## Getting Started

1. **Fork the Repository:**
   Start by forking the repository to your GitHub account. This creates a copy of the project for you to work on.

2. **Clone the Forked Repository:**
   Clone your fork to your local machine to start making changes.

3. **Create a New Branch:**
   Before making any changes, create a new branch in your local repository. This keeps your updates organized and separate from the main branch.

## Making Changes

1. **Understand the Codebase:**
   Take some time to understand the structure and functionality of the code. This will help you make meaningful contributions.

2. **Update/Add Features:**

- Feel free to add new features or improve existing ones.
- Make sure your code follows the existing coding style and conventions.
- Write clear, commented, and readable code.

3. **Test Your Changes:**

- Ensure that your changes do not break the application.
- Test your updates thoroughly to make sure everything works as expected.

## Submitting Contributions

1. **Commit Your Changes:**

- Write clear and meaningful commit messages.
- Include a brief description of the changes you've made.

2. **Push to Your Fork:**

- Push your changes to your forked repository on GitHub.

3. **Create a Pull Request:**

- Once you've pushed your changes, create a pull request to the main repository.
- Provide a clear description of the changes and why they are necessary.

4. **Code Review:**

- Wait for the code review process. The project maintainers will review your changes.
- Be open to feedback and make any requested changes.

## Coding Standards

- Follow [JavaScript best practices](https://www.w3schools.com/js/js_best_practices.asp).
- Adhere to [Node.js guidelines](https://nodejs.org/en/docs/guides/) for server-side code.
- Ensure compatibility with Express.js and other used libraries.

## Reporting Issues

- If you find any bugs or issues, please report them by creating an issue in the GitHub repository.
- Clearly describe the issue, including steps to reproduce and expected behavior.

## Questions or Suggestions

- Feel free to open an issue for any questions or suggestions to improve the project.

Your contributions are greatly appreciated and will help make the NoteTaker-App even better!

<a href="#table-of-contents">Back to Table of Contents</a>

## Tests

To ensure the NoteTaker-App functions as intended, follow these testing guidelines. Testing is a crucial part of the development process and helps in maintaining the reliability of the application.

## Prerequisites for Testing

- Ensure Node.js is installed on your system. If not, download and install it from [Node.js official website](https://nodejs.org/).
- Clone the repository to your local machine.
- Install all the necessary dependencies by running `npm install` in the project root directory.

## Running the Tests

### Manual Testing

1. **Start the Server:**

- Run `npm start` to start the server. The application should be running on `http://localhost:3001`.

2. **Test the Application Interface:**

- Open your browser and navigate to `http://localhost:3001`.
- Interact with the user interface to create, view, and delete notes.
- Ensure that the application's UI is responsive and functions correctly.

3. **Test Note Creation:**

- Create a new note by entering a title and text, then save it.
- Verify that the note appears in the list of notes.

4. **Test Note Deletion:**

- Delete a note and confirm that it is removed from the list.

5. **Data Persistence Check:**

- Restart the server and verify if the notes are still present.

### Automated Testing

(Currently, automated tests are not set up for this project. However, setting up automated tests using a framework like Jest or Mocha is recommended for future improvements.)

## Reporting Issues

If you encounter any bugs or issues during testing, please report them by creating an issue in the GitHub repository. Be sure to include:

- A clear description of the problem.
- Steps to reproduce the issue.
- Expected behavior and actual behavior.
- Screenshots (if applicable).

Your contributions to testing and improving the NoteTaker-App are greatly appreciated!

<a href="#table-of-contents">Back to Table of Contents</a>

## Portfolio

Visit my portfolio:
[Visit my portfolio](https://alghaibb-portfolio.vercel.app/)

<a href="#table-of-contents">Back to Table of Contents</a>

## License

This application is covered under the following licence:

<p><img src="https://img.shields.io/static/v1?label=License&message=MIT&color=blue" alt="License"></p>
