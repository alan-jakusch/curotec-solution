# Example React Application: Zustand Slices & Tabs with Context API

This project is an example React application built with Vite and TypeScript. Its main purpose is to demonstrate:

- The correct usage of [Zustand](https://github.com/pmndrs/zustand) with slices for state management, including an example paginated list with CRUD operations.
- A reusable Tabs component built using the React Context API.

## Technologies Used

- [React](https://react.dev/) 18
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Router DOM](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/) (for styling)
- [Axios](https://axios-http.com/) (for HTTP requests, if needed)
- [ESLint](https://eslint.org/) (with recommended plugins)

## Features

### Zustand Store with Slices
- The application uses Zustand to manage state, organized in a slice pattern.
- Includes an example slice for managing a list of items, with async actions for fetching, adding, updating, and deleting items.
- The `PaginatedList` component demonstrates how to consume this store, with pagination and CRUD operations.

### Tabs Component with Context API
- The Tabs UI is implemented using a custom `TabContainer`, `TabList`, `Tab`, and `TabPanel` components.
- State and tab registration are managed via the React Context API, allowing for accessible keyboard navigation and flexible composition.

### Example Usage
- The home page displays a tabbed interface:
  - The first tab contains the paginated list example (with add, edit, delete, and pagination).
  - Other tabs show placeholder content.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v22 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd curotec-test
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Project

To start the development server with hot module replacement:

```sh
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### Building for Production

To build the project for production:

```sh
npm run build
```

To preview the production build locally:

```sh
npm run preview
```

### Linting

To run ESLint:

```sh
npm run lint
```

## Project Structure

- `src/store/itemsStore.ts`: Zustand store with slice for items (example list)
- `src/components/Tab/`: Tab components using Context API
- `src/components/PaginatedList.tsx`: Example paginated list using Zustand
- `src/pages/HomePage.tsx`: Example usage of Tabs and PaginatedList
