import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../service/api";

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

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Manter Produtos</h1>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProdutoIndex;
