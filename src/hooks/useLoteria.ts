import { useContext } from "react";
import { Ctx } from "../contexts"

export default function useLoteria(): any {
    return useContext(Ctx);
}