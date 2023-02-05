import { table } from './table';
import type { Atom } from './components/Atom';
import { Environment } from './components/Environment';

// Setup chemical reaction environment
let env: Environment = new Environment()

// Generate periodic table html
table(env)