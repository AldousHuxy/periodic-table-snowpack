enum Series {
    ALKALI    = 'Alkali metal',
    ALKALINE  = 'Alkaline earth metal',
    LANTHAN   = 'Lanthanoid',
    ACTIN     = 'Actinoid',
    TRANSIT   = 'Transitions metal',
    PTRANSIT  = 'Post-transition metal',
    METALLOID = 'Metalloid',
    REACTIVE  = 'Reactive nonmetal',
    NOBLE     = 'Noble gas'
}

enum State {
    SOLID   = '(s)', LIQUID   = '(l)', GAS      = '(g)',
    CRYSTAL = '(cr)', AQUEOUS = '(aq)', UNKNOWN = ''
}

type degree = number
type energy = number
class Atom {
    atomicNum: number
    symbol: string
    name: string
    atomicWeight: number
    series: Series
    state: State
    negativity: number
    meltingPoint: degree
    boilingPoint: degree
    affinity: energy

    constructor (atomicNum: number, symbol: string, name: string, atomicWeight: number, 
        series: Series, state: State, negativity: number, 
        meltingPoint: degree, boilingPoint: degree, affinity: number) {
        this.atomicNum = atomicNum
        this.symbol = symbol
        this.name = name
        this.atomicWeight = atomicWeight
        this.series = series
        this.state = state
        this.negativity = negativity
        this.meltingPoint = meltingPoint
        this.boilingPoint = boilingPoint
        this.affinity = affinity
    }
}

class Molecule {
    molecule: Atom
    subscript: number = 1

    constructor (molecule: Atom) {
        this.molecule = molecule
    }
}

const atoms: Atom[] = [
    new Atom(1  , 'H' , 'Hydrogen',      1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(2  , 'He', 'Helium',        1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(3  , 'Li', 'Lithium',       6.940, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(4  , 'Be', 'Beryllium',     9.012, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(5  , 'B' , 'Boron',         1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(6  , 'C' , 'Carbon',        1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(7  , 'N' , 'Nitrogen',      1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(8  , 'O' , 'Oxygen',        1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(9  , 'F' , 'Fluorine',      1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(10 , 'Ne', 'Neon',          1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(11 , 'Na', 'Sodium',        1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(12 , 'Mg', 'Magnesium',     1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(13 , 'Al', 'Aluminum',      1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(14 , 'Si', 'Silicon',       1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(15 , 'P' , 'Phosphorus',    1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(16 , 'S' , 'Sulfur',        1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(17 , 'Cl', 'Chlorine',      1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(18 , 'Ar', 'Argon',         1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(19 , 'K' , 'Potassium',     1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(20 , 'Ca', 'Calcium',       1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(21 , 'Sc', 'Scandium',      1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(22 , 'Ti', 'Titanium',      1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(23 , 'V' , 'Vandium',       1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(24 , 'Cr', 'Chromium',      1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(25 , 'Mn', 'Manganese',     1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(26 , 'Fe', 'Iron',          1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(27 , 'Co', 'Colbalt',       1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(28 , 'Ni', 'Nickel',        1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(29 , 'Cu', 'Copper',        1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(30 , 'Zn', 'Zinc',          1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(31 , 'Ga', 'Galium',        1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(32 , 'Ge', 'Germanium',     1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(33 , 'As', 'Arsenic',       1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(34 , 'Se', 'Selenium',      1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(35 , 'Br', 'Bromine',       1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(36 , 'Kr', 'Kypton',        1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(37 , 'Rb', 'Rubidium',      1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(38 , 'Sr', 'Strontium',     1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(39 , 'Y' , 'Yttrium',       1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(40 , 'Zr', 'Zirconium',     1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(41 , 'Nb', 'Niobium',       1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(42 , 'Mo', 'Molybdenum',    1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(43 , 'Tc', 'Technetium',    1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(44 , 'Ru', 'Rutherium',     1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(45 , 'Rh', 'Rhodium',       1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(46 , 'Pd', 'Palladium',     1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(47 , 'Ag', 'Silver',        1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(48 , 'Cd', 'Cadmium',       1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(49 , 'In', 'Indium',        1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(50 , 'Sn', 'Tin',           1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(51 , 'Sb', 'Antimony',      1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(52 , 'Te', 'Tellurium',     1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(53 , 'I' , 'Iodine',        1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(54 , 'Xe', 'Xenon',         1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(55 , 'Cs', 'Cesium',      1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(56 , 'Ba', 'Barium',     1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(57 , 'La', 'Lathanum',       1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(72 , 'Hf', 'Hafnium',         1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(73 , 'Ta', 'Tantalum',     1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(74 , 'W' , 'Tungsten',       1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(75 , 'Re', 'Rhenium',     1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(76 , 'Os', 'Osmium',        1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(77 , 'Ir', 'Iridium',       1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(78 , 'Pt', 'Platinum',      1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(79 , 'Au', 'Gold',          1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(80 , 'Hg', 'Mercury',       1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(81 , 'Tl', 'thallium',      1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(82 , 'Pb', 'Lead',          1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(83 , 'Bi', 'Bismuth',       1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(84 , 'Po', 'Polonium',      1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(85 , 'At', 'Astatine',      1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(86 , 'Rn', 'Radon',         1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(87 , 'Fr', 'Francium',      1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(88 , 'Ra', 'Radium',        1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(89 , 'Ac', 'Actinium',      1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(104, 'Rf', 'Rutherfordium', 1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(105, 'Db', 'Dubnium',       1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(106, 'Sg', 'Seaborgium',    1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(107, 'Bh', 'Bohrium',       1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(108, 'Hs', 'Hassium',       1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(109, 'Mt', 'Meitnerium',    1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(110, 'Ds', 'Darmstadtium',  1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(111, 'Rg', 'Roentgenium',   1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(112, 'Cn', 'Copernicium',   1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(113, 'Nh', 'Nihonium',      1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(114, 'Fl', 'Flerovium',     1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(115, 'Mc', 'Moscovium',     1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(116, 'Lv', 'Livermorium',   1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(117, 'Ts', 'Tennessine',    1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(118, 'Og', 'Oganesson',     1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(58 , 'Ce', 'Cerium',     1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(59 , 'Pr', 'Praesodymium',       1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(60 , 'Nd', 'Neodymium',    1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(61 , 'Pm', 'Promethium',    1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(62 , 'Sm', 'Samarium',     1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(63 , 'Eu', 'Europium',      1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(64 , 'Gd', 'Gadolinium',    1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(65 , 'Tb', 'Terbium',       1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(66 , 'Dy', 'Dysprosium',    1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(67 , 'Ho', 'Holmium',       1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(68 , 'Er', 'Erbium',        1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(69 , 'Tm', 'Thulium',       1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(70 , 'Yb', 'Ytterbium',     1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(71 , 'Lu', 'Lutetium',      1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(90 , 'Th', 'Thorium',       1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(91 , 'Pa', 'Iodine',        1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(92 , 'U' , 'Xenon',         1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(93 , 'Np', 'Rhodium',       1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(94 , 'Pu', 'Palladium',     1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(95 , 'Am', 'Americium',     1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(96 , 'Cm', 'Curium',        1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(97 , 'Bk', 'Berkelium',     1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(98 , 'Cf', 'Californium',   1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(99 , 'Es', 'Einsteinium',   1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(100, 'Fm', 'Fermium',       1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(101, 'Md', 'Mendelevium',   1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(102, 'No', 'Nobelium',      1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01),
    new Atom(103, 'Lr', 'Lawrencium',    1.008, Series.REACTIVE, State.GAS, 2.02, 0.00, 100.00, 1.01)
]

export { State, Atom, Molecule, atoms };