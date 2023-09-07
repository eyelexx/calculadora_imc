import { useEffect, useState } from "react";

    const magreza = {
        nome: 'Magreza',
        descricao: 'Magreza blablabla'
    }

    const normal = {
        nome: 'Normal',
        descricao: 'Normal blablabla'    
    }

    const sobrepeso = {
        nome: 'Sobrepeso',
        descricao: 'Sobrepeso blablabla'    
    }

    const obesidade = {
        nome: 'Obesidade',
        descricao: 'Obesidade blablabla'    
    }

    const obesidadeGrave = {
        nome: 'Obesidade Grave',
        descricao: 'Obesidade Grave blablabla'    
    }

const CalculadoraIMC = () => {
    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [result, setResult] = useState(null)


    const calc = () => {
        const alturaEmMetros = altura; // Converte altura de metros para centrímetros
        const imc = (peso / (alturaEmMetros * alturaEmMetros)).toFixed(1); // Calcula o IMC
        
        setResult(imc)
        console.log(altura)
    }

    useEffect(() => {
        
    }, [result])

    return (
        <>
            <form className="container d-flex justify-content-center gap-3">
                <div className="d-flex flex-column gap-3">
                    <input onChange={e => setPeso(e.target.value)}
                        className="form-control"
                        type="number" placeholder="Peso"
                    />
                    <input onChange={e => setAltura(e.target.value)}
                        className="form-control"
                        type="number" placeholder="Altura"
                    />
                </div>
                <button onClick={calc} type="button" className="btn btn-primary">Calcular</button>
            </form>
            <div className="text-center mt-5">
                {result !== null ? (
                        <h2>Seu IMC é {result}</h2>
                    ) : (
                    <p>Insira seu peso e altura para calcular o IMC.</p>
                )}
            </div>
        </>
    )
}

export default CalculadoraIMC