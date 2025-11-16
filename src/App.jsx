import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="flex-1 bg-slate-950 text-white">
      {/* O Navbar aparecerá em todas as páginas */}
      <NavBar />

      {/* A tag 'main' com padding é onde o conteúdo da página será renderizado */}
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
