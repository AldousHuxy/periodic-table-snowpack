import { State, Molecule, Atom } from "./Atom";

type charge = number
class Formula {
    coefficient: number = 0
    molecules: Molecule[] = []
    charge: charge = 0
    state: State = State.UNKNOWN

    addMolecule(atom: Atom) {
        if (this.molecules.some(e => e.molecule.symbol === atom.symbol)) {
            
        } else {
            this.molecules.push(new Molecule(atom))

        }
    }
}

export { Formula };