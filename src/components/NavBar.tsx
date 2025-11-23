import { Link } from "react-router-dom";
import { FaHome, FaBoxOpen, FaInfoCircle } from "react-icons/fa";
 import logoLoja from '../assets/loja.png';

// ----------------------------------------------------------------------
// DICA: Para usar uma imagem local do seu projeto (ex: logo.png na pasta assets)
// 1. Coloque a imagem em src/assets/logo.png
// 2. Importe ela assim:
// import logoImg from '../assets/logo.png';
// 3. No src da tag img, use: src={logoImg}
// ----------------------------------------------------------------------

export function NavBar() {
  // URL de exemplo (ícone de loja)
  const logoUrl = "https://cdn-icons-png.flaticon.com/512/3081/3081559.png"; 

  return (
    <nav className="bg-slate-900 p-4 shadow-md mb-6 border-b-4 border-green-500">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* --- ÁREA DA LOGO E TÍTULO --- */}
        <Link to="/" className="flex items-center gap-3 group">
          {/* Imagem da Loja */}
          <img 
            src={logoLoja} 
            alt="Logo Minha Loja" 
            // Classes explicadas:
            // h-12 w-12: Define altura e largura (48px)
            // bg-white rounded-full: Fundo branco e redondo para destacar o ícone
            // p-1: Um pouco de preenchimento interno
            className="h-12 w-12 bg-white rounded-full p-1 object-contain border-2 border-transparent group-hover:border-green-500 transition"
          />
          
          {/* Texto da Loja */}
          <span className="text-2xl font-bold text-white tracking-wide">
            Minha<span className="text-green-500"> Loja</span>
          </span>
        </Link>

        {/* --- MENU DE NAVEGAÇÃO --- */}
        <div className="flex gap-2">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-slate-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-md transition font-medium"
          >
            <FaHome /> Início
          </Link>

          <Link 
            to="/produtos" 
            className="flex items-center gap-2 text-slate-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-md transition font-medium"
          >
            <FaBoxOpen /> Produtos
          </Link>

          <Link 
            to="/about" 
            className="flex items-center gap-2 text-slate-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-md transition font-medium"
          >
            <FaInfoCircle /> Sobre
          </Link>
        </div>

      </div>
    </nav>
  );
}