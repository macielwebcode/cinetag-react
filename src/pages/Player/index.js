import Banner from 'components/Banner';
import Title from 'components/Title';
import { useParams } from 'react-router-dom';
import styles from './Player.module.css';
import NotFound from 'pages/NotFound';
import { useEffect, useState } from 'react';

function Player(){
    const [video, setVideo] = useState();
    const params = useParams();
   
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/macielwebcode/cinetag-api/videos?id=${params.id}`)
        .then(resposta => resposta.json())
            .then(dados => {
                setVideo(...dados)
            })
    }, [])

    if (!video) {
        return <NotFound />
    }
    

    return(
        <>
           <Banner imagem="ok" />
           <Title>
                <h1>Page Player</h1>
           </Title>
           <section className={styles.container}>
                <iframe 
                    width="100%" 
                    height="100%" 
                    src={video.link} 
                    title={video.titulo}
                    rameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>


                </iframe>
            </section>
        </>
    )
}
export default Player;