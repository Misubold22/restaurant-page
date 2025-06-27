# Restaurant Page

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

---

## Introduction
**The Restaurant Page** is a single-page application (SPA) built to practice DOM manipulation, ES6 modules, npm package management, and Webpack bundling. The entire website content is created and managed through modular JavaScript.

**Live Demo**: [View Site](https://misubold22.github.io/restaurant-page/)

---

## Features
- **ES6 Modules**: Organized code using import/export statements for better maintainability.
- **Webpack Bundling**: Practice with module bundling and build processes.
- **npm Package Management**: Experience with Node.js package ecosystem.
- **Dynamic Tab Navigation**: Switch between Home, Menu, and Contact sections seamlessly.
- **Pure JavaScript DOM Manipulation**: All content is generated dynamically using vanilla JS.
- **Single Page Application**: No page refreshes - content updates instantly.

---

## Technologies Used
- **HTML5**: Basic page structure and semantic elements.
- **CSS3**: Styling and layout for the user interface.
- **JavaScript (ES6+)**: Core logic with modern module syntax.
- **Webpack**: Module bundler for build process.
- **npm**: Package management and script running.

---

## Project Structure
The file structure of the project is as follows:

```
restaurant-page/
├── dist/                # Webpack build output
├── src/
│   ├── index.js         # Main entry point
│   ├── home.js          # Home tab module
│   ├── menu.js          # Menu tab module
│   └── contact.js       # Contact tab module
├── package.json         # npm configuration
├── webpack.config.js    # Webpack configuration
├── index.html           # Main HTML file
└── README.md            # Project documentation
```

- **src/index.js**: Main entry point with module imports and initialization.
- **src/**: Modular JavaScript files using ES6 import/export.
- **dist/**: Webpack bundled output files.
- **webpack.config.js**: Webpack build configuration.
- **package.json**: npm dependencies and scripts.

---

## Usage
To set up and use the Restaurant Page, follow these steps:

```bash
git clone https://github.com/misubold22/restaurant-page.git
cd restaurant-page
npm install
npm run build
npm start
```

**Usage:**
- Navigate between tabs using the navigation menu.
- Content dynamically loads without page refresh.
- Each tab displays different restaurant information.

---

## Credits
- **Background image**:https://unsplash.com/@supa_95/
- **Other images**: https://www.freepik.com/

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.