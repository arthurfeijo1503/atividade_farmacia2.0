import './Body.css';

function Body() {
    return (
        <div className='container'>
            <h2>Bem-vindo à Farmárcia!</h2>
            <img src='/farmarcia.PNG.png' width={200} height={200} alt="Imagem da Farmácia" className='farmacia-img' />
            <p className='horario'>Estamos sob nova direção venha para nossa inalguração</p>
            
            <div className='camisetas'>
                <p>Participe de sorteios de camisetas da nossa farmárcia!</p>
                <img src='/farmarcia-camisetas.PNG.png' width={100} height={100} className='imgCamisetas' alt="Camisetas da Farmácia" />
            </div>
        </div>
    );
}

export default Body;
