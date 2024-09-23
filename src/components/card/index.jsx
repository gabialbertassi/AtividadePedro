import './index.scss';

export default function Card({titulo, conteudo, data, status, entregaTrab}) {
    let corPrimaria = ''
    let corSecundaria = ''

    switch (status) {
        case 'Complemento':
            corPrimaria = '#A3E5BA';
            corSecundaria = '#EFFBE2';
            break;
        case 'Em andamento':
            corPrimaria = '#DCA3E5';
            corSecundaria = '#EDE2FB';
            break;
        case 'Criado':
            corPrimaria = '#C3C3C3';
            corSecundaria = '#F2F2F2';
            break;
        case 'Evento':
            corPrimaria = '#F6E448';
            corSecundaria = '#FAF4C1';
            break;
        default:
        corPrimaria = '#C3C3C3';
        corSecundaria = '#FAF4C1';
            break;
    }

    return (
        
        <div className='app-container'>
            <div className='conteiner'>
            <div className='cards'>
                <div className='card' style={{ backgroundColor: corSecundaria }}>
                    <div className='card-cabecalho' style={{ backgroundColor: corPrimaria }}>
                        <h2>{titulo}</h2>
                    </div>
                    <div className='card-conteudo'>
                        <h3>Assuntos</h3>
                        <pre>{conteudo}</pre>
                    </div>
                    <p className='tag'>{data}</p>
                    {entregaTrab && <p className='tag'> Entrega Trab. </p>}
                </div>
            </div>
            </div>
        </div>
    );
}

