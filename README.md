# ToDo App (with React Flip Animations)

## **Project Overview**

- **Description:** A simple ToDo application built with React that demonstrates adding, removing, and toggling tasks with smooth list animations using `react-flip-move`.
- **Purpose:** Lightweight example app to show animated list updates and basic React component structure.

## **Features**

- **Add tasks:** Create new todo items.
- **Toggle complete:** Mark items as done/undone.
- **Remove tasks:** Delete items from the list.
- **Animated updates:** Uses `react-flip-move` to animate adding/removing/reordering of todos.

## **Prerequisites**

- **Node.js:** v14 or newer recommended.
- **npm:** v6+ (or use `yarn` if preferred).

## **Quick Start**

1. Install dependencies:

```
npm install
```

2. Start the development server:

```
npm start
```

Open `http://localhost:3000` in your browser. The app will hot-reload when you change source files.

## **Available Scripts**

- **`npm start`**: Runs the app in development mode.
- **`npm test`**: Runs the test suite (Create React App default).
- **`npm run build`**: Builds the app for production.
- **`npm run eject`**: Ejects the CRA configuration (one-way operation).

## **Project Structure**

- `public/` : Static files and `index.html`.
- `src/` : Application source code.
  - `index.js` : App entry point.
  - `App.js` : Main app component.
  - `TodoList.js` : Renders the list of todos and integrates animations.
  - `TodoItems.js` : Individual todo item component.
  - `App.css`, `index.css`, `TodoList.css` : Styling.
  - `reportWebVitals.js`, `setupTests.js`, `App.test.js` : CRA helpers and tests.

## **Animation Notes**

- This project uses `react-flip-move` (see `package.json`) to provide enter/leave/move animations for the todo list. The relevant code is in `TodoList.js` and `TodoItems.js`.
