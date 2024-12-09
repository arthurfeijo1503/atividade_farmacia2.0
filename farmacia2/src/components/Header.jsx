import './Header.css';
import { useState } from 'react';

function Header() {
  // Estados para controlar as filas de senhas
  const [filaNormal, setFilaNormal] = useState([]);
  const [filaPreferencial, setFilaPreferencial] = useState([]);
  const [senhaChamando, setSenhaChamando] = useState('');
  const [filaVazia, setFilaVazia] = useState(true);

  // Função para gerar uma senha normal
  const gerarSenhaNormal = () => {
    const numero = filaNormal.length + 1;
    const novaSenha = { tipo: 'Normal', numero };
    setFilaNormal([...filaNormal, novaSenha]);
    setFilaVazia(false);
  };

  // Função para gerar uma senha preferencial
  const gerarSenhaPreferencial = () => {
    const numero = filaPreferencial.length + 1;
    const novaSenha = { tipo: 'Preferencial', numero };
    setFilaPreferencial([...filaPreferencial, novaSenha]);
    setFilaVazia(false);
  };

  // Função para chamar a próxima senha
  const chamarSenha = () => {
    if (filaPreferencial.length > 0) {
      // Chama a senha preferencial com o menor número
      const senha = filaPreferencial.sort((a, b) => a.numero - b.numero)[0];
      setSenhaChamando(`P${senha.numero}`);
      setFilaPreferencial(filaPreferencial.filter(s => s.numero !== senha.numero));
    } else if (filaNormal.length > 0) {
      // Chama a senha normal com o menor número
      const senha = filaNormal.sort((a, b) => a.numero - b.numero)[0];
      setSenhaChamando(`N${senha.numero}`);
      setFilaNormal(filaNormal.filter(s => s.numero !== senha.numero));
    } else {
      setSenhaChamando('Fila vazia');
      setFilaVazia(true);
    }
  };

  return (
    <div className='navBar'>
      <div className='logo'>
        <img src='/farmarciaLogoPq.png' width={200} height={200} alt="Logo da Farmácia" />
      </div>
      <h1 className='farmacia'>Farmárcia</h1>
      <nav className='navLinks'>
        <button className='button' onClick={gerarSenhaNormal}>Gerar Senha Normal</button>
        <button className='button' onClick={gerarSenhaPreferencial}>Gerar Senha Preferencial</button>
        <button className='button' onClick={chamarSenha}>Chamar Senha</button>
      </nav>
      <div className="filaStatus">
        {filaVazia ? (
          <p>Fila está vazia</p>
        ) : (
          <p>Fila não está vazia</p>
        )}
        <h2>Senha chamada: {senhaChamando}</h2>
      </div>
    </div>
  );
}

export default Header;
