import { table } from './table';
import { Environment } from "./components/Environment";
import type { Atom } from './components/Atom';

// Setup chemical reaction environment
let env: Environment = new Environment()
table()

const appendReactant = (atom: Atom): string => {
    return env.setupEnv(atom)
}

export { appendReactant };