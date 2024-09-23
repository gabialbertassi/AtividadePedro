import { useState } from "react";
import Cabecalho from "../../components/cabecalho";
import Card from "../../components/card";
import "./index.scss";
import axios from "axios"
import CardFimBimestrem from "../../components/cardFimBimestre";

export default function App( ){
    
    const [cards, setCards] = useState ([])

    async  function listarcard() {
         try{
            const dados = await axios.get('http://localhost:8080/cards');    
            setCards(dados.data);
         } catch (error){
            alert(error)
         }
    }

    return(
        
        <div>
            <Cabecalho />

            <button onClick={listarcard}> Liste </button>
            
            <h1>Conteúdo</h1>

                {/* {cards.map( c=> 
                    <Card 
                        titulo={c.titulo}
                        status={c.status}
                        conteudo={c.conteudo}
                        data={c.data} 
                        entregaTrab={c.entregaTrab}
                    />
                )} */}

                {/* IF cards.length > 0 ? <LISTA CARDS> : <IMG> */}
                {cards.map(c => c.fimBimestre
                    ? <CardFimBimestrem titulo='Fim 3' />
                    : 
                    <Card
                        titulo={c.titulo}
                        status={c.status}
                        conteudo={c.conteudo}
                        data={c.data} 
                        entregaTrab={c.entregaTrab}
                    />
                )

                }

            
        </div>

    )
}