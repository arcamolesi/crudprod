import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../service/api";
import { FaPlus, FaEdit, FaInfoCircle, FaTrash } from "react-icons/fa";

function ProdutoIndex() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchProdutos() {
    setLoading(true);
    try {
      const response = await api.get("/produtos");
      setProdutos(response.data);
    } catch (error) {
      console.error("Erro na busca de produtos: ", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProdutos();
  }, []);

  async function handleDelete(id) {
    if (!window.confirm(`Tem certeza que deseja remover o produto ${id}?`)) {
      return;
    }
    try {
      await api.delete(`/produtos/${id}`);
      // Atualiza a lista de produtos removendo o item deletado
      setProdutos(produtos.filter((produto) => produto.id !== id));
      alert("Produto removido com sucesso!");
    } catch (error) {
      console.error("Erro ao remover produto:", error);
      alert("Erro ao remover produto.");
    }
  }

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Manter Produtos</h1>
        <Link
          to="/produtos/create"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          <FaPlus />
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-slate-800 rounded-lg">
          <thead>
            <th className="py-2 px-4 border-b border-slate-700 text-left">
              ID
            </th>
            <th className="py-2 px-4 border-b border-slate-700 text-left">
              Descrição
            </th>
            <th className="py-2 px-4 border-b border-slate-700 text-left">
              Quantidade
            </th>
            <th className="py-2 px-4 border-b border-slate-700 text-left">
              Valor
            </th>
            <th className="py-2 px-4 border-b border-slate-700 text-left">
              Ações
            </th>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr>
                <td className="py-2 px-4 border-b border-slate-700">
                  {produto.id}
                </td>
                <td className="py-2 px-4 border-b border-slate-700">
                  {produto.descricao}
                </td>
                <td className="py-2 px-4 border-b border-slate-700">
                  {produto.quantidade}
                </td>
                <td className="py-2 px-4 border-b border-slate-700">
                  {produto.valor.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
                <td className="py-2 px-4 border-b border-slate-700">
                  <Link
                    to={`/produtos/edit/${produto.id}`}
                    className="bg-amber-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded mr-2 inline-flex items-center gap-1"
                  >
                    <FaEdit />
                  </Link>

                  <Link
                    to={`/produtos/details/${produto.id}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-2 inline-flex items-center gap-1"
                  >
                    <FaInfoCircle /> {/* Detalhes */}
                  </Link>

                  <button
                    onClick={() => handleDelete(produto.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded inline-flex items-center gap-1"
                  >
                    <FaTrash /> {/* Remover */}
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProdutoIndex;
