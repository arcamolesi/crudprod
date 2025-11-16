import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="bg-green-500 p-4">
      <div className="container mx-auto">
        <Link to={"/"}> Inicio </Link>
        <Link to={"/about"}> Sobre </Link>
        <Link to={"/produtos"}>Produtos</Link>
      </div>
    </nav>
  );
}
