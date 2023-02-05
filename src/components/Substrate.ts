import { State, Molecule, Atom } from "./Atom";

type charge = number
class Substrate {
    coefficient: number = 0
    molecules: Molecule[] = []
    charge: charge = 0
    state: State = State.UNKNOWN
}

export { Substrate };