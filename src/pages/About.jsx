import React from "react";
import { FaCode, FaLaptopCode, FaStore } from "react-icons/fa";

// Importação da imagem da pasta assets, conforme solicitado
import lojaImg from "../assets/loja.png";

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* --- CABEÇALHO DA PÁGINA --- */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
          Sobre o <span className="text-green-600">Sistema de Loja</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          Uma solução prática para gerenciamento de estoque e produtos,
          desenvolvida como parte de atividade acadêmica.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* --- COLUNA DA ESQUERDA: IMAGEM E INFORMAÇÕES VISUAIS --- */}
        <div className="flex flex-col items-center">
          <div className="relative group">
            {/* Efeito de brilho/borda atrás da imagem */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

            {/* Container da Imagem */}
            <div className="relative bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
              <img
                src={lojaImg}
                alt="Logo Sistema de Loja"
                className="w-64 h-64 object-contain mx-auto"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
            <FaStore className="text-green-500" />
            <span>Versão 1.0.0</span>
          </div>
        </div>

        {/* --- COLUNA DA DIREITA: DETALHES DO PROJETO --- */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
            <FaLaptopCode className="text-blue-500" /> Informações do Projeto
          </h2>

          <div className="space-y-6">
            {/* Item 1: Disciplina */}
            <div className="flex items-start gap-4">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg text-green-600 dark:text-green-400">
                <FaCode size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                  <span className="font-bold">Disciplina</span> Linguagem de
                  Programação
                </h3>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                  <span className="font-bold">Curso</span> Ciências da
                  Computação
                </h3>
                 <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                  <span className="font-bold">Professor Responsável</span> Almir
                  Camolesi
                </h3>
                <h6 className="text-lg font-semibold text-slate-800 dark:text-white">
                  Instituto Municipal de Ensino Superior de Assis (IMESA)
                </h6>
                <h7 className="text-lg font-semibold text-slate-800 dark:text-white">
                  Fundação Educacional do Município de Assis (FEMA)
                </h7>
               {" "}
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                  Desenvolvimento Front-end com React, Vite e Tailwind CSS.
                </p>
              </div>
            </div>

            <hr className="border-slate-200 dark:border-slate-700" />

            {/* Item 2: Objetivo */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                Objetivo do Sistema
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Este sistema foi criado para simular as operações fundamentais
                de um comércio, permitindo o cadastro, listagem, edição e
                remoção de produtos (CRUD), aplicando conceitos modernos de
                Componentização e Hooks do React.
              </p>
            </div>

            {/* Item 3: Tecnologias (Opcional, mas enriquece a página) */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-3">
                Stack Tecnológica
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full dark:bg-blue-900 dark:text-blue-200">
                  ReactJS
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full dark:bg-purple-900 dark:text-purple-200">
                  Vite
                </span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 text-xs font-semibold rounded-full dark:bg-cyan-900 dark:text-cyan-200">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full dark:bg-yellow-900 dark:text-yellow-200">
                  JavaScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

/* import React from "react";

function About() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Página Sobre</h1>
      <p>Esta é a página "Sobre" do nosso projeto.</p>
    </div>
  );
}

export default About;
 */