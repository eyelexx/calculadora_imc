import { useState } from "react";

    const classificacao = {
        magreza: 'Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.',
        normal: 'Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.',
        sobrepeso: 'Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.',
        obesidadeI: 'Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.',
        obesidadeII: 'Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.',
        obesidadeIII: 'Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.'
    }

const CalculadoraIMC = () => {
    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [resultado, setResultado] = useState(null);

    const calcula = () => {
        const alturaEmMetros = altura; // Converte altura de metros para centrímetros
        const imc = (peso / (alturaEmMetros * alturaEmMetros)).toFixed(1); // Calcula o IMC
        
        setResultado(imc)
        console.log(imc)
    }

    return (
        <>
            <form className="container d-flex justify-content-center gap-3">
                <div className="d-flex flex-column gap-3">
                    <input onBlur={e => setPeso(e.target.value)}
                        className="form-control"
                        type="number" placeholder="Peso (Ex.: 78,10)"
                    />
                    <input onBlur={e => setAltura(e.target.value)}
                        className="form-control"
                        type="number" placeholder="Altura (Ex.: 1,83)"
                    />
                </div>
                <button onClick={calcula} type="button" className="btn btn-primary">Calcular</button>
            </form>
            <div className="container text-center mt-5">
                {
                    resultado !== null ? (
                        <h3>Seu IMC é {resultado}</h3>
                    ) : (
                        <p></p>
                    )
                }
                {
                    resultado < 18.5 && resultado != null ? (
                        <>
                            <p className="fs-5">Abaixo do normal (18,5 ou menos)<br /></p>
                            <p>{classificacao.magreza}</p>
                        </>                        
                    ) : (
                        <p></p>
                    )
                }
                {
                    resultado >= 18.5 && resultado <= 24.9 ? (
                        <>
                            <p className="fs-5">Normal (Entre 18,6 e 24,9)<br /></p>
                            <p>{classificacao.normal}</p>
                        </> 
                    ) : (
                        <p></p>
                    )
                }
                {
                    resultado >= 25 && resultado <= 29.9 ? (
                        <>
                            <p className="fs-5">Sobrepeso (Entre 25,0 e 29,9)<br /></p>
                            <p>{classificacao.sobrepeso}</p>
                        </> 
                    ) : (
                        <p></p>
                    )
                }
                {
                    resultado >= 30 && resultado <= 34.9 ? (
                        <>
                            <p className="fs-5">Obesidade I (Entre 30,0 e 34,9)<br /></p>
                            <p>{classificacao.obesidadeI}</p>
                        </> 
                    ) : (
                        <p></p>
                    )
                }
                {
                    resultado >= 35 && resultado <= 39.9 ? (
                        <>
                            <p className="fs-5">Obesidade II (Entre 35,0 e 39,9)<br /></p>
                            <p>{classificacao.obesidadeII}</p>
                        </> 
                    ) : (
                        <p></p>
                    )
                }
                {
                    resultado >= 40 ? (
                        <>
                            <p className="fs-5">Obesidade III (Acima de 40,0)<br /></p>
                            <p>{classificacao.obesidadeIII}</p>
                        </> 
                    ) : (
                        <p></p>
                    )
                }
            </div>
        </>
    )
}

export default CalculadoraIMC