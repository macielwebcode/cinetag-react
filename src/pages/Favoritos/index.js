
import Banner from 'components/Banner';
import Card from 'components/Card';
import Title from 'components/Title';
import { useFavoriteContext } from 'contextos/Favoritos';
import styles from './Favorito.module.css';

function Favoritos(){
    const { favorito } = useFavoriteContext();
    return(
        <>
           <Banner imagem='banner' />
            <Title>
                <h1>My Favorites</h1>
            </Title>
           <section className={styles.container}>
                {favorito.map((fav) =>{
                    return <Card {...fav} key={fav.id} />
                })}
           </section>
        </>
    )
}
export default Favoritos;