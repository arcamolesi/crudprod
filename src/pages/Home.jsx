import React from 'react';
import { Link } from 'react-router-dom';
import { FaBoxOpen, FaInfoCircle, FaArrowRight } from 'react-icons/fa';

// Importação da imagem da pasta assets (conforme solicitado)
import lojaImg from '../assets/loja.png';

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* --- SEÇÃO HERO (BOAS-VINDAS) --- */}
      <div className="bg-slate-800 rounded-2xl p-8 md:p-12 text-center shadow-xl mb-10 border border-slate-700 relative overflow-hidden">
        {/* Efeito de fundo decorativo (opcional) */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-blue-500"></div>

        <div className="flex flex-col items-center justify-center">
          {/* Imagem da Loja com estilo de destaque */}
          <div className="bg-white p-4 rounded-full shadow-lg mb-6 ring-4 ring-green-500/30">
            <img 
              src={lojaImg} 
              alt="Logo Sistema de Loja" 
              className="h-24 w-24 object-contain"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Bem-vindo ao <span className="text-green-500">Sistema de Loja</span>
          </h1>
          
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Gerencie seu estoque, controle seus produtos e visualize informações importantes em um único lugar, de forma simples e rápida.
          </p>

          <Link 
            to="/produtos" 
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105 shadow-lg flex items-center gap-2"
          >
            Começar Agora <FaArrowRight />
          </Link>
        </div>
      </div>

      {/* --- GRID DE ATALHOS --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Card: Produtos */}
        <Link 
          to="/produtos" 
          className="group bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 hover:shadow-xl transition-all hover:-translate-y-1"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-800 group-hover:text-green-600 transition">Gerenciar Produtos</h2>
              <p className="text-sm text-slate-500 mt-1">Adicione, edite ou remova itens do estoque.</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg text-green-600">
              <FaBoxOpen className="text-2xl" />
            </div>
          </div>
          <span className="text-green-600 font-semibold text-sm flex items-center gap-1 mt-4">
            Acessar catálogo <FaArrowRight className="text-xs" />
          </span>
        </Link>

        {/* Card: Sobre */}
        <Link 
          to="/about" 
          className="group bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 hover:shadow-xl transition-all hover:-translate-y-1"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition">Sobre o Sistema</h2>
              <p className="text-sm text-slate-500 mt-1">Informações sobre a versão e desenvolvedores.</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
              <FaInfoCircle className="text-2xl" />
            </div>
          </div>
          <span className="text-blue-600 font-semibold text-sm flex items-center gap-1 mt-4">
            Ver detalhes <FaArrowRight className="text-xs" />
          </span>
        </Link>

        {/* Card: Estatísticas (Placeholder/Exemplo Futuro) */}
        <div className="bg-slate-100 rounded-xl shadow-inner p-6 border border-slate-200 opacity-75 cursor-not-allowed">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-500">Relatórios</h2>
              <p className="text-sm text-slate-400 mt-1">Dashboard de vendas (Em breve).</p>
            </div>
            <div className="bg-slate-200 p-3 rounded-lg text-slate-400">
              <span className="text-2xl font-bold">📊</span>
            </div>
          </div>
          <span className="text-slate-400 font-semibold text-sm mt-4 inline-block">
            Em desenvolvimento...
          </span>
        </div>

      </div>
    </div>
  );
}

export default Home;


/* import React from 'react'; 

function Home(){
    return(
        <div>
            <h1 className='text-2xl font-extrabold text-blue-700'>Página HOME</h1>
            <p>Bem vindo ao nosso CRUD de Produtos usando REACT Vite Tailwdind com serviço ASP Net Core MVC</p>
        </div>
    );

}

export default Home;  */