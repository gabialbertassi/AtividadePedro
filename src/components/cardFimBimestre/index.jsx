import './index.scss'

export default function CardFimBimestrem({titulo}){
    
    return (
        <div className='app-container'>
        <div className='conteiner'>
        <div className='cards'>
            <div className='card'>
                <div className='card-cabecalho'>
                    <h2>{titulo}</h2>
                </div>
               
            </div>
        </div>
        </div>
    </div>
    )
}