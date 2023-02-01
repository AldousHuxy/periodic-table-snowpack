import type { Atom } from "./Atom";
import { Formula } from "./Formula";

class Environment {
    reactant: Formula = new Formula()
    catalyst: boolean = false
    heated: boolean = false
    reversible: boolean = false
    preciptate: boolean = false
    evaporate: boolean = false

    setupEnv(atom: Atom): void {
        this.reactant.addMolecule(atom)
    }
}

export { Environment };