import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../../service/api";

const inputClassName =
  "bg-slate-800 border border-slate-700 rounded-lg p-2 w-full text-white";

function ProdutoCreate() {
  const [produto, setProduto] = useState({
    descricao: "",
    quantidade: 0,
    valor: 0.0,
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value, type } = e.target;
    const finalValeu = type === "number" ? parseFloat(value) : value;

    setProduto((prevState) => ({
      ...prevState,
      [name]: finalValeu,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const method = "post";
    const url = "/produtos";
    const dataToSend = produto;

    try {
      await api[method](url, dataToSend);
      alert("Produto Inserido com Sucesso...");
      navigate("/produtos"); // redireciona a página para o local desejado, lista de produtos
    } catch (error) {
      console.error("Erro ao salvar produto: ", error);
      alertt("Erro al salvar Produto. Verifique o Console!!!");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div>
      <h1>Inserir Produtos</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <div>
          <label htmlFor="descricao" className="block text-sm font-medium mb-1">
            Descrição
          </label>
          <input
            type="text"
            id="descricao"
            name="descricao"
            value={produto.descriao}
            onChange={handleChange}
            className={inputClassName}
            required
          />
        </div>
        <div>
          <label
            htmlFor="quantidade"
            className="block text-sm font-medium mb-1"
          >
            Quantidade
          </label>
          <input
            type="number"
            id="quantidade"
            name="quantidade"
            value={produto.quantidade}
            onChange={handleChange}
            className={inputClassName}
            required
          />
        </div>
        <div>
          <label htmlFor="valor" className="block text-sm font-medium mb-1">
            Valor
          </label>
          <input
            type="number"
            id="valor"
            name="valor"
            step="0.01"
            value={produto.valor}
            onChange={handleChange}
            className={inputClassName}
            required
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:bg-slate-500"
          >
            {loading ? "Salvando" : "Salvar"}
          </button>

          <Link
            to="/produtos"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ProdutoCreate;
