import './container.css'
import Logo from './logo.svg'
export default ()=>{
    return(
        <div className='container-primary'>
            <div className="left-container">

                <img className='logo' src={Logo} alt="logo" />
                <h1>Calculadora IMC</h1>
                
                    <input type="text" placeholder='Altura (m)' /><br/>
                    <input type="text" placeholder='Peso (KG)'/><br/>
                    <button>Calcular</button>
                
            </div>
            <div className='line'></div>
            <div className="right-container">
                <h2>Orientações</h2>
                <p>A realização do cálculo é simples, seu peso será dividido pela altura ao quadrado.</p>
                <h3>IMC = Peso / (Altura x Altura)</h3>
                <p>Se o resultado for:</p>
                <h3>Abaixo de 18,4 = Desnutrição<br/>
                Entre 18,5 e 24,9 = Normal<br/>
                Entre 25 e 29,9 = Sobrepeso<br/>
                Acima de 30 = Obesidade</h3>
                <h2>Resultado</h2>
                <div className='result'>Normal</div>
                <h4>19.3</h4>
            </div>
        </div>
    );
}