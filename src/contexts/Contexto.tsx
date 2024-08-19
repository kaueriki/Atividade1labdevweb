import { createContext, useEffect, useState } from "react";
import { LoteriaProps, Props } from "../types";
import loteria from "../services/Loteria";

export const Ctx = createContext({} as LoteriaProps);

export function Provider({ children }: any) {
        const [megasena, setMegasena] = useState({} as Props);
        const [lotofacil, setLotofacil] = useState({} as Props);
        const [quina, setQuina] = useState({} as Props);
    useEffect(() => {
            (async function() {
                const r = await loteria.get();
                setMegasena(r.megasena);
                setLotofacil(r.lotofacil); 
                setQuina(r.quina); 
                console.log(r);
            })();
        },[] );

    return (
        <Ctx.Provider value={{megasena, lotofacil, quina}}>
            {children}
        </Ctx.Provider>
    )
}
