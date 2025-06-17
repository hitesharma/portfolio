# React Developer Portfolio

[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/tailwind_css-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcn-ui&logoColor=white)](https://ui.shadcn.com/)

This repository contains the source code for my personal developer portfolio, showcasing my skills, projects, and professional experience.

**Live Demo:** [**hitesharma.github.io/portfolio**](https://hitesharma.github.io/portfolio)

---

## ✨ Features

-   **Modern Tech Stack:** Built with Vite, React, and TypeScript for a fast and type-safe development experience.
-   **Responsive Design:** Fully responsive layout using Tailwind CSS, ensuring a great experience on all devices.
-   **Reusable Components:** Styled with the beautifully designed and accessible `shadcn/ui` component library.
-   **Live Deployment:** Automatically deployed to GitHub Pages.

## 🛠️ Technologies Used

This project is built with the following technologies:

-   **[Vite](https://vitejs.dev/):** A next-generation frontend tooling that provides a faster and leaner development experience.
-   **[React](https://reactjs.org/):** A JavaScript library for building user interfaces.
-   **[TypeScript](https://www.typescriptlang.org/):** A strongly typed programming language that builds on JavaScript.
-   **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for rapid UI development.
-   **[shadcn/ui](https://ui.shadcn.com/):** A collection of re-usable components built using Radix UI and Tailwind CSS.

## 🚀 Getting Started

To get a local copy up and running, please follow these simple steps.

### Prerequisites

The only requirement is having **Node.js** and **npm** installed. It is recommended to use `nvm` (Node Version Manager) to manage Node.js versions.

-   [Install Node.js with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation & Setup

1.  **Clone the repository**
    ```sh
    git clone [https://github.com/hitesharma/portfolio.git](https://github.com/hitesharma/portfolio.git)
    ```

2.  **Navigate to the project directory**
    ```sh
    cd portfolio
    ```

3.  **Install dependencies**
    ```sh
    npm install
    ```

4.  **Run the development server**
    This will start a local server with hot-reloading.
    ```sh
    npm run dev
    ```

Open [http://localhost:8080](http://localhost:8080) (or the port shown in your terminal) to view it in the browser.

## 📜 Available Scripts

In the project directory, you can run the following scripts:

| Script        | Description                                                                 |
| ------------- | --------------------------------------------------------------------------- |
| `npm run dev`     | Starts the development server with hot-reloading.                           |
| `npm run build`   | Bundles the app into static files for production.                           |
| `npm run preview` | Serves the production build locally to preview it.                          |
| `npm run lint`    | Runs the ESLint checker to find and fix problems in the code.               |
| `npm run deploy`  | Deploys the application to GitHub Pages (uses the `build` directory).       |

## 🚢 Deployment

This project is configured for easy deployment to **GitHub Pages**.

To deploy your version of the site, simply run the following command:

```sh
npm run deploy
```

This command first runs the `predeploy` script (`npm run build`) to create a production-ready build, and then the `deploy` script (`gh-pages -d build`) pushes the contents of the `build` folder to the `gh-pages` branch of your repository.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/hitesharma/portfolio/issues).

You can also contribute by:

-   **Editing a file directly in GitHub:** Navigate to the file you want to change and click the "Edit" (pencil) icon.
-   **Using GitHub Codespaces:** Launch a full development environment in the cloud by clicking `Code` > `Codespaces` > `New codespace`.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details. (You may want to add a LICENSE.md file if you don't have one).
