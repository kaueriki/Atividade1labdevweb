import Lotofacil from "../components/Lotofacil";
import Megasena from "../components/Megasena";
import { useLoteria } from "../hooks";
import "./index.css";

export default function Home(){
    const { megasena } = useLoteria();
    console.log("Principal", megasena)
    return (
        <>
        {
            megasena.dataApuracao ?
            (
                <div className="home-bloco">
                    <Megasena />
                    <Lotofacil />
                </div>
            ):
            (
                <div className="home-carregando">
                    <h3>Carregando...</h3>
                </div>
            )
        }
        </>
    );
}