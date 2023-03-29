import Container from 'components/Container';
import Footer from 'components/Footer';
import Header from 'components/Header';
import FavoritosProvider from 'contextos/Favoritos';
import { Outlet } from 'react-router-dom';



function PageBase(){
 
    return(
        <main>
            <Header />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Footer />
        </main>
    )
}
export default PageBase;