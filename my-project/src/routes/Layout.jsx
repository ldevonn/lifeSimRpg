import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/*<header className="mb-8">*/}
      {/*  <h1 className="text-4xl font-bold">Life Simulation RPG</h1>*/}
      {/*</header>*/}

      <main className="flex flex-col items-center flex-grow">
        <Outlet />
      </main>

      <footer className="mt-8 text-sm text-gray-500">
        <p>&copy; 2024 Lars-Devon Nilsson. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout