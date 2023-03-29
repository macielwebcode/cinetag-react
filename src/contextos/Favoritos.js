import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({children}){
    const [favorito, setFavorito] = useState([]);
    //favorito é o valor inicial e o setFavorito responsavel por atualizar o valor de favorito
    //context para compartilhar informações entre rotas, components independentes
    return(
        <FavoritosContext.Provider value={{favorito, setFavorito}}>
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoriteContext(){

    const {favorito, setFavorito } = useContext(FavoritosContext);

    function adicionarFavorito(newFavorito){
        const favoritoRepetido = favorito.some(item => item.id === newFavorito.id)

        let novaListaFavoritos = [...favorito];

        if(!favoritoRepetido){
            novaListaFavoritos.push(newFavorito);
            return setFavorito(novaListaFavoritos);
        }

        novaListaFavoritos.splice(novaListaFavoritos.indexOf(newFavorito), 1);
        return setFavorito(novaListaFavoritos);
    }

    return {
        favorito,
        adicionarFavorito
    }
}