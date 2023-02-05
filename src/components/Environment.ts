import $ from "jquery";
import type { Atom } from "./Atom";
import type { Substrate } from "./Substrate";

type jquery = JQuery<HTMLElement>
class Environment {
    // Substrates
    reactants: Substrate[] = []
    products: Substrate[] = []

    // Environmental factors
    catalyst: boolean = false
    heated: boolean = false
    reversible: boolean = false
    precipitate: boolean = false
    evaporate: boolean = false

    // Environment I/O
    env: jquery = $('#searchBar')
    reactantAdded: boolean = false

    modifyEnv(atom: Atom) {

        return this.writeEnv(atom)
    }

    writeEnv(atom: Atom) {
        return atom.symbol
    }
}

export { Environment };