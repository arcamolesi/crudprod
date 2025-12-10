import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../service/api";

const inputClassName =
  "bg-slate-800 border border-slate-700 rounded-lg p-2 w-full text-white disabled:opacity-75 disabled:cursor-not-allowed";

function ProdutoDetails() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduto() {
      try {
        const response = await api.get(`/produtos/${id}`);
        setProduto(response.data);
      } catch (error) {
        console.error("Erro ao buscar detalhes do produto:", error);
        alert("Erro ao carregar os dados do produto.");
      } finally {
        setLoading(false);
      }
    }

    fetchProduto();
  }, [id]);

  if (loading) {
    return <div className="text-white">Carregando detalhes de produtos...</div>;
  }

  if (!produto) {
    return <div className="text-white">Produto não encontrado.</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-white">
        Detalhes do Produto
      </h1>
      <form className="space-y-4 max-w-lg">
        <div>
          <label
            htmlFor="id"
            className="block text-sm font-medium mb-1 text-white"
          >
            ID
          </label>
          <input
            type="text"
            id="id"
            value={produto.id || id} // Mostra o ID retornado ou o da URL
            className={inputClassName}
            disabled // Campo desabilitado
          />
        </div>
                
        <div>
          <label
            htmlFor="descricao"
            className="block text-sm font-medium mb-1 text-white"
          >
            Descrição
          </label>
          <input
            type="text"
            id="descricao"
            value={produto.descricao}
            className={inputClassName}
            disabled
          />
        </div>

        
        <div>
          <label
            htmlFor="quantidade"
            className="block text-sm font-medium mb-1 text-white"
          >
            Quantidade
          </label>
          <input
            type="number"
            id="quantidade"
            value={produto.quantidade}
            className={inputClassName}
            disabled
          />
        </div>

        <div>
          <label
            htmlFor="valor"
            className="block text-sm font-medium mb-1 text-white"
          >
            Valor
          </label>
          <input
            type="text"
            id="valor"
            // Formatação simples para moeda brasileira, se desejar
            value={new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(produto.valor)}
            className={inputClassName}
            disabled
          />
        </div>

        <div className="flex gap-4 pt-2">
          <Link
            to="/produtos"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Voltar
          </Link>
          
          <Link
            to={`/produtos/edit/${id}`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Editar
          </Link>
        </div>

      </form>


    </div>
  ); 

}



export default ProdutoDetails;
