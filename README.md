# 🚀 Node.js Web Application

A simple Node.js web application with an Express backend and a basic HTML front-end that asks for a name and displays it. ✨

## 📝 Table of Contents

- [📖 Description](#-description)
- [📂 Folder Structure](#-folder-structure)
- [🛠️ Prerequisites](#️-prerequisites)
- [🚀 How to Run the Application](#️-how-to-run-the-application)
- [🔍 Usage](#-usage)

## 📖 Description

This project is a simple Node.js web application built with Express and EJS. It provides a basic UI that allows users to enter their name and displays a greeting message with the entered name. 🌐

## 📂 Folder Structure

```
node-app/
│
├── 📁 public/
│   └── 📄 index.html
│
├── 📁 views/
│   └── 📄 index.ejs
│
├── 📄 package.json
├── 📄 server.js
└── 📄 .gitignore
```

- **📁 public/**: Contains static assets and client-side code.
  - **📄 index.html**: HTML file with a form to enter the name.
  
- **📁 views/**: Contains EJS templates.
  - **📄 index.ejs**: EJS template to display the greeting message.
  
- **📄 server.js**: Express server setup and routes.
  
- **📄 package.json**: Lists project dependencies and scripts.
  
- **📄 .gitignore**: Specifies files and directories to ignore in Git.

## 🛠️ Prerequisites

- Node.js
- npm (Node.js package manager)

## 🚀 How to Run the Application

1. Clone the repository:

    ```bash
    git clone https://github.com/liquizar/node-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd node-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the server:

    ```bash
    npm start
    ```

The application should now be running on `http://localhost:3000`. 🌐

## 🔍 Usage

1. Open a web browser and navigate to `http://localhost:3000`.
2. Enter your name in the provided form.
3. Click the `Submit` button.
4. The application will display a greeting message with the entered name. 👋
