import {useState} from 'react';
import '../styles/BoxRecensione.css';

function BoxRecensione({titolo, descrizione, url}) {

    // Creiamo le variabile like e dislike e le inizializziamo a 0
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);

    // Creiamo la variabile voto e la inizializziamo a null (non ha ancora votato)
    const [voted, setVoted] = useState(null);
    
    // Funzione per gestire il click sul like
    const handleLike = () => {
        // Se non ha ancora votato o ha votato dislike
        if (voted !== 'like') {
            // Se aveva votato dislike prima, decrementa il contatore di dislike
            if (voted === 'dislike') {
                setDislike(dislike - 1);
            }
            // Incrementa il contatore di like e imposta voted a 'like'
            setLike(like + 1);
            setVoted('like');
        } else {
            // Se aveva già votato like, rimuove il voto
            setLike(like - 1);
            setVoted(null);
        }
    };
    
    // Funzione per gestire il click sul dislike
    const handleDislike = () => {
        // Se non ha ancora votato o ha votato like
        if (voted !== 'dislike') {
            // Se aveva votato like prima, decrementa il contatore di like
            if (voted === 'like') {
                setLike(like - 1);
            }
            // Incrementa il contatore di dislike e imposta voted a 'dislike'
            setDislike(dislike + 1);
            setVoted('dislike');
        } else {
            // Se aveva già votato dislike, rimuove il voto
            setDislike(dislike - 1);
            setVoted(null);
        }
    };
    
    // Utilizziamo return per creare il box recensione
    return (
        <div className="box-recensione">
            <h2>{titolo}</h2>
            
            {/* Aggiungiamo l'immagine solo se l'URL è fornito */}
            {url && (
                <div className="box-recensione-immagine">
                    <img src={url} alt={titolo} />
                </div>
            )}
            
            <p>{descrizione}</p>
            
            <div className="box-recensione-bottone">
                <button 
                    onClick={handleLike}
                    className={voted === 'like' ? 'active' : ''}
                >
                    Mi piace
                </button>
                <button 
                    onClick={handleDislike}
                    className={voted === 'dislike' ? 'active' : ''}
                >
                    Non mi piace
                </button>
            </div>
        </div>
    );
}

export default BoxRecensione;