import { useFavoriteContext } from 'contextos/Favoritos';
import styles from './Card.module.css';
import iconFavorite from './favorite.png';
import iconDesfavoritar from './desfavoritar.png';
import { Link } from 'react-router-dom';

function Card({id, title, capa}){

    const {favorito, adicionarFavorito} = useFavoriteContext();
    const isFavorite = favorito.some((fav) => fav.id === id);
    const icon = !isFavorite ? iconFavorite : iconDesfavoritar

    return(
        <div className={styles.cardcontainer}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={title} className={styles.capa} />
                <h2>{title}</h2>
            </Link>
            
           
            <img 
                src={icon} 
                alt="Favoritar Item" 
                className={styles.favoritar}
                onClick={() => {
                    adicionarFavorito({id, title, capa})
                }}
            />
        </div>
    )
}

export default Card;