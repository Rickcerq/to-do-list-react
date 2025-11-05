import { useState } from 'react';

function FormularioDeTarefa({ onAdd }) {
  const [tarefa, setTarefa] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tarefa.trim()) {
      onAdd(tarefa);
      setTarefa('');
    }
  };

  return (
 // Adiciona classes de layout e margem para o formulário
   <form onSubmit={handleSubmit} className="mb-4 d-flex">
 {/* Classe 'form-control' para estilizar o input */}
   <input
   type="text"
   placeholder="Adicionar nova tarefa..."
   value={tarefa}
   onChange={(e) => setTarefa(e.target.value)}
   className="form-control me-2" // 'me-2' para margem à direita
   />
 {/* Classe 'btn' e 'btn-primary' para estilizar o botão */}
   <button type="submit" className="btn btn-primary">
   Adicionar
   </button>
   </form>
 );

}

export default FormularioDeTarefa;