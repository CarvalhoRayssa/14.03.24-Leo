import{useState} from "react";
import "./App.css";

const Calculadora = () => {
  const [input, setInput] = useState(''); // valor inicial vazio

  //função para lidar com os clicks nos botões
  const handleButtonClick = (value) => {

    // atualiza o input concatenado os valores
  setInput((proxInput) => proxInput + value);
    
  }

  const handleCalculate = () => {
    //função nativa eval, calcula o resultado do input e atualiza o resultado 
    setInput(eval(input).toString());
  };

  const handleClear = () => {
    setInput(''); //função p limpar o input
  };

  return(
    <div className="calculadora-container">
      <div>
        {/* input aqui é a caixinha que vai mostrar as contas da calc.*/}
      <input type="text" className="calculadora-input" value={input} readOnly/>

      <div className="calculadora-botoes">

        <button className="calculadora-botao"
         onClick={() => handleButtonClick('1')}>1</button>

        <button className="calculadora-botao"
         onClick={() => handleButtonClick('2')}>2</button>

        <button className="calculadora-botao"
         onClick={() => handleButtonClick('3')}>3</button>

        <button className="calculadora-botao 
        calculadora-botao-operador"
         onClick={() => handleButtonClick('+')}>+</button>

      </div>


      <div className="calculadora-botoes">

        <button className="calculadora-botao"
         onClick={() => handleButtonClick('4')}>4</button>

        <button className="calculadora-botao"
         onClick={() => handleButtonClick('5')}>5</button>

        <button className="calculadora-botao"
         onClick={() => handleButtonClick('6')}>6</button>

        <button className="calculadora-botao 
        calculadora-botao-operador"
         onClick={() => handleButtonClick('-')}>-</button>


      </div>

      <div className="calculadora-botoes">

        <button className="calculadora-botao"
         onClick={() => handleButtonClick('7')}>7</button>

        <button className="calculadora-botao"
         onClick={() => handleButtonClick('8')}>8</button>

        <button className="calculadora-botao"
         onClick={() => handleButtonClick('9')}>9</button>

        <button className="calculadora-botao 
        calculadora-botao-operador"
         onClick={() => handleButtonClick('*')}>*</button>

      </div>

      <div className="calculadora-botoes">

        <button className="calculadora-botao"
         onClick={() => handleButtonClick('0')}>0</button>

        <button className="calculadora-botao "
         onClick={() => handleClear('C')}>C</button>

        <button className="calculadora-botao"
         onClick={() => handleCalculate('=')}>=</button>

        <button className="calculadora-botao 
        calculadora-botao-operador"
         onClick={() => handleButtonClick('/')}>/</button>

      </div>




    </div>
    </div>
  );
};

export default Calculadora;