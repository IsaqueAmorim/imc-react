import './container.css'
import Logo from './logo.svg'
import { useState } from 'react';
export default ()=>{

    const [Altura, setAltura] = useState();
    const [Peso, setPeso] = useState();
    
    

    let resulte;
    let state;
    let color;
    let exp;
    const calcular =()=>{
        
        const alturaTotal = Altura*Altura;
        const result = Peso/alturaTotal;
        resulte = result.toString().substring(0,4);
        
        if(resulte <= 18.4){
            state = 'Desnutrição'
            color = '#e80000bb'
        }
        if(resulte >= 18.5 && resulte <=24.9){
            state = 'Normal'
            color = 'rgba(0, 128, 0, 0.562)'
        }
        if(resulte >= 25 && resulte <=29.9){
            state = 'Sobrepeso'
            color = 'rgba( 	255, 128, 0, 0.62)'
        }
        if(resulte >= 30){
            state = 'Obesidade'
            color = '#e80000bb'
        }
       

        if(resulte != 'NaN' && resulte != 'Infi'){
            exp = resulte;
        }else{exp = ''}
    }
    return(
        <div className='container-primary'>
            <div className="left-container">

                <img className='logo' src={Logo} alt="logo" />
                <h1>Calculadora IMC</h1>
                <h5>O IMC (ou índice de massa corporal) é um cálculo simples que permite avaliar se a pessoa está dentro do peso que é considerado ideal para a sua altura.</h5>
                    <input 
                    type="text" 
                    placeholder='Altura (m)'
                    value={Altura}
                    onChange={e => setAltura(e.target.value.replace(',','.'))} 
                    /><br/>
                    <input 
                    type="text" 
                    placeholder='Peso (KG)'
                    value={Peso}
                    onChange={e => setPeso(e.target.value.replace(',','.'))}
                    /><br/>
                     <h2
                     onClick={calcular()}>Resultado</h2>
                <div className='result' style={{backgroundColor: color}}>{state}</div>
                <h4>{exp}</h4>
                
            </div>
            <div className='line'></div>
            <div className="right-container">
                <h2>Orientações</h2>
                <div className="container-row">
                <div>
                <p>A realização do cálculo é simples, seu peso será dividido pela altura ao quadrado.</p>
                <h3>IMC = Peso / (Altura x Altura)</h3>
                </div>
                <div>
                <p>Se o resultado for:</p>
                <h3>Abaixo de 18,4 = Desnutrição<br/>
                Entre 18,5 e 24,9 = Normal<br/>
                Entre 25 e 29,9 = Sobrepeso<br/>
                Acima de 30 = Obesidade</h3>
                </div>
                </div>
            </div>
        </div>
    );
}