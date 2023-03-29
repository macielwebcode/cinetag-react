import Banner from "components/Banner";
import Card from "components/Card";
import Title from "components/Title";
import { useEffect, useState } from "react";
import styles from './Inicio.module.css';

function Inicio(){
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/macielwebcode/cinetag-api/videos')
        .then(resposta => resposta.json())
        .then(dados => {
            setVideos(dados)
        })
    }, [])
    return(
        <>
           
            <Banner imagem="banner" />
            <Title>
                <h1>Um site para encontrar informações diversas!</h1>
            </Title>
            <section className={styles.container}>
                {videos.map((itemvideo) => {
                    return <Card {...itemvideo} key={itemvideo.id} />
                })}
            </section>
            
        </>
    )
}
export default Inicio;