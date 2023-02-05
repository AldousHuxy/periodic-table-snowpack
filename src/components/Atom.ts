enum Series {
    ALKALI    = 'Alkali metal',
    ALKALINE  = 'Alkaline earth metal',
    LANTHANOID   = 'LanthanOIDoid',
    ACTINOID     = 'ActinOIDoid',
    TRANSIT   = 'Transitions metal',
    PTRANSIT  = 'Post-transition metal',
    METALLOID = 'Metalloid',
    REACTIVE  = 'Reactive nonmetal',
    NOBLE     = 'Noble gas',
    UNKNOWN   = 'Unknown'
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
    isDiatom: boolean

    constructor (atomicNum: number, symbol: string, name: string, atomicWeight: number, 
        series: Series, state: State, negativity: number, 
        meltingPoint: degree, boilingPoint: degree, affinity: number,
        isDiatom: boolean) {
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
        this.isDiatom = isDiatom
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
    new Atom(1  , 'H' , 'Hydrogen',      1.0080, Series.REACTIVE,     State.GAS,     2.20, 0.00, 100.00, 1.01, true),
    new Atom(2  , 'He', 'Helium',        4.0026, Series.NOBLE,        State.SOLID,   2.04, 0.00, 100.00, 1.01, false),
    new Atom(3  , 'Li', 'Lithium',       6.9400, Series.ALKALI,       State.SOLID,   0.98, 0.00, 100.00, 1.01, false),
    new Atom(4  , 'Be', 'Beryllium',     9.0122, Series.ALKALINE,     State.SOLID,   1.57, 0.00, 100.00, 1.01, false),
    new Atom(5  , 'B' , 'Boron',         10.810, Series.METALLOID,    State.SOLID,   2.04, 0.00, 100.00, 1.01, false),
    new Atom(6  , 'C' , 'Carbon',        12.011, Series.REACTIVE,     State.SOLID,   2.55, 0.00, 100.00, 1.01, false),
    new Atom(7  , 'N' , 'Nitrogen',      14.007, Series.REACTIVE,     State.GAS,     3.04, 0.00, 100.00, 1.01, true),
    new Atom(8  , 'O' , 'Oxygen',        15.999, Series.REACTIVE,     State.GAS,     3.44, 0.00, 100.00, 1.01, true),
    new Atom(9  , 'F' , 'Fluorine',      18.998, Series.REACTIVE,     State.GAS,     3.98, 0.00, 100.00, 1.01, true),
    new Atom(10 , 'Ne', 'Neon',          20.180, Series.NOBLE,        State.GAS,     0.00, 0.00, 100.00, 1.01, false),
    new Atom(11 , 'Na', 'Sodium',        22.990, Series.ALKALI,       State.SOLID,   0.93, 0.00, 100.00, 1.01, false),
    new Atom(12 , 'Mg', 'Magnesium',     24.305, Series.ALKALINE,     State.SOLID,   1.31, 0.00, 100.00, 1.01, false),
    new Atom(13 , 'Al', 'Aluminum',      26.982, Series.PTRANSIT,     State.SOLID,   1.61, 0.00, 100.00, 1.01, false),
    new Atom(14 , 'Si', 'Silicon',       28.085, Series.METALLOID,    State.SOLID,   1.90, 0.00, 100.00, 1.01, false),
    new Atom(15 , 'P' , 'Phosphorus',    30.974, Series.REACTIVE,     State.SOLID,   2.19, 0.00, 100.00, 1.01, false),
    new Atom(16 , 'S' , 'Sulfur',        32.060, Series.REACTIVE,     State.SOLID,   2.58, 0.00, 100.00, 1.01, false),
    new Atom(17 , 'Cl', 'Chlorine',      35.450, Series.REACTIVE,     State.GAS,     3.16, 0.00, 100.00, 1.01, true),
    new Atom(18 , 'Ar', 'Argon',         39.948, Series.NOBLE,        State.GAS,     0.00, 0.00, 100.00, 1.01, false),
    new Atom(19 , 'K' , 'Potassium',     39.098, Series.ALKALI,       State.SOLID,   0.82, 0.00, 100.00, 1.01, false),
    new Atom(20 , 'Ca', 'Calcium',       40.078, Series.ALKALINE,     State.SOLID,   1.00, 0.00, 100.00, 1.01, false),
    new Atom(21 , 'Sc', 'Scandium',      44.956, Series.TRANSIT,      State.SOLID,   1.36, 0.00, 100.00, 1.01, false),
    new Atom(22 , 'Ti', 'Titanium',      47.867, Series.TRANSIT,      State.SOLID,   1.54, 0.00, 100.00, 1.01, false),
    new Atom(23 , 'V' , 'Vanadium',      50.942, Series.TRANSIT,      State.SOLID,   1.63, 0.00, 100.00, 1.01, false),
    new Atom(24 , 'Cr', 'Chromium',      51.996, Series.TRANSIT,      State.SOLID,   1.66, 0.00, 100.00, 1.01, false),
    new Atom(25 , 'Mn', 'Manganese',     54.938, Series.TRANSIT,      State.SOLID,   1.55, 0.00, 100.00, 1.01, false),
    new Atom(26 , 'Fe', 'Iron',          55.845, Series.TRANSIT,      State.SOLID,   1.83, 0.00, 100.00, 1.01, false),
    new Atom(27 , 'Co', 'Cobalt',        58.933, Series.TRANSIT,      State.SOLID,   1.88, 0.00, 100.00, 1.01, false),
    new Atom(28 , 'Ni', 'Nickel',        58.693, Series.TRANSIT,      State.SOLID,   1.91, 0.00, 100.00, 1.01, false),
    new Atom(29 , 'Cu', 'Copper',        63.546, Series.TRANSIT,      State.SOLID,   1.90, 0.00, 100.00, 1.01, false),
    new Atom(30 , 'Zn', 'Zinc',          65.380, Series.TRANSIT,      State.SOLID,   1.65, 0.00, 100.00, 1.01, false),
    new Atom(31 , 'Ga', 'Gallium',       69.723, Series.PTRANSIT,     State.SOLID,   1.81, 0.00, 100.00, 1.01, false),
    new Atom(32 , 'Ge', 'Germanium',     72.630, Series.METALLOID,    State.SOLID,   2.01, 0.00, 100.00, 1.01, false),
    new Atom(33 , 'As', 'Arsenic',       74.922, Series.METALLOID,    State.SOLID,   2.18, 0.00, 100.00, 1.01, false),
    new Atom(34 , 'Se', 'Selenium',      78.971, Series.REACTIVE,     State.SOLID,   2.55, 0.00, 100.00, 1.01, false),
    new Atom(35 , 'Br', 'Bromine',       79.904, Series.REACTIVE,     State.LIQUID,  2.96, 0.00, 100.00, 1.01, true),
    new Atom(36 , 'Kr', 'Krypton',       83.798, Series.NOBLE,        State.GAS,     3.00, 0.00, 100.00, 1.01, false),
    new Atom(37 , 'Rb', 'Rubidium',      85.468, Series.ALKALI,       State.SOLID,   0.82, 0.00, 100.00, 1.01, false),
    new Atom(38 , 'Sr', 'Strontium',     87.620, Series.ALKALINE,     State.SOLID,   0.95, 0.00, 100.00, 1.01, false),
    new Atom(39 , 'Y' , 'Yttrium',       88.906, Series.TRANSIT,      State.SOLID,   1.22, 0.00, 100.00, 1.01, false),
    new Atom(40 , 'Zr', 'Zirconium',     91.224, Series.TRANSIT,      State.SOLID,   1.33, 0.00, 100.00, 1.01, false),
    new Atom(41 , 'Nb', 'Niobium',       92.906, Series.TRANSIT,      State.SOLID,   1.60, 0.00, 100.00, 1.01, false),
    new Atom(42 , 'Mo', 'Molybdenum',    95.950, Series.TRANSIT,      State.SOLID,   2.16, 0.00, 100.00, 1.01, false),
    new Atom(43 , 'Tc', 'Technetium',    98.000, Series.TRANSIT,      State.SOLID,   1.90, 0.00, 100.00, 1.01, false),
    new Atom(44 , 'Ru', 'Ruthenium',     101.07, Series.TRANSIT,      State.SOLID,   2.20, 0.00, 100.00, 1.01, false),
    new Atom(45 , 'Rh', 'Rhodium',       102.91, Series.TRANSIT,      State.SOLID,   2.28, 0.00, 100.00, 1.01, false),
    new Atom(46 , 'Pd', 'Palladium',     106.42, Series.TRANSIT,      State.SOLID,   2.20, 0.00, 100.00, 1.01, false),
    new Atom(47 , 'Ag', 'Silver',        107.87, Series.TRANSIT,      State.SOLID,   1.93, 0.00, 100.00, 1.01, false),
    new Atom(48 , 'Cd', 'Cadmium',       112.41, Series.TRANSIT,      State.SOLID,   1.69, 0.00, 100.00, 1.01, false),
    new Atom(49 , 'In', 'Indium',        114.82, Series.PTRANSIT,     State.SOLID,   1.78, 0.00, 100.00, 1.01, false),
    new Atom(50 , 'Sn', 'Tin',           118.71, Series.PTRANSIT,     State.SOLID,   1.96, 0.00, 100.00, 1.01, false),
    new Atom(51 , 'Sb', 'Antimony',      121.76, Series.METALLOID,    State.SOLID,   2.05, 0.00, 100.00, 1.01, false),
    new Atom(52 , 'Te', 'Tellurium',     127.60, Series.METALLOID,    State.SOLID,   2.10, 0.00, 100.00, 1.01, false),
    new Atom(53 , 'I' , 'Iodine',        126.90, Series.REACTIVE,     State.SOLID,   2.66, 0.00, 100.00, 1.01, true),
    new Atom(54 , 'Xe', 'Xenon',         131.29, Series.NOBLE,        State.GAS,     2.60, 0.00, 100.00, 1.01, false),
    new Atom(55 , 'Cs', 'Cesium',        132.91, Series.ALKALI,       State.SOLID,   0.79, 0.00, 100.00, 1.01, false),
    new Atom(56 , 'Ba', 'Barium',        137.33, Series.ALKALINE,     State.SOLID,   0.89, 0.00, 100.00, 1.01, false),
    new Atom(57 , 'La', 'Lanthanum',     138.91, Series.LANTHANOID,   State.SOLID,   1.10, 0.00, 100.00, 1.01, false),
    new Atom(72 , 'Hf', 'Hafnium',       178.49, Series.TRANSIT,      State.SOLID,   1.30, 0.00, 100.00, 1.01, false),
    new Atom(73 , 'Ta', 'Tantalum',      180.95, Series.TRANSIT,      State.SOLID,   1.50, 0.00, 100.00, 1.01, false),
    new Atom(74 , 'W' , 'Tungsten',      183.84, Series.TRANSIT,      State.SOLID,   2.36, 0.00, 100.00, 1.01, false),
    new Atom(75 , 'Re', 'Rhenium',       186.21, Series.TRANSIT,      State.SOLID,   1.90, 0.00, 100.00, 1.01, false),
    new Atom(76 , 'Os', 'Osmium',        190.23, Series.TRANSIT,      State.SOLID,   2.20, 0.00, 100.00, 1.01, false),
    new Atom(77 , 'Ir', 'Iridium',       192.22, Series.TRANSIT,      State.SOLID,   2.20, 0.00, 100.00, 1.01, false),
    new Atom(78 , 'Pt', 'Platinum',      195.08, Series.TRANSIT,      State.SOLID,   2.28, 0.00, 100.00, 1.01, false),
    new Atom(79 , 'Au', 'Gold',          196.97, Series.TRANSIT,      State.SOLID,   2.54, 0.00, 100.00, 1.01, false),
    new Atom(80 , 'Hg', 'Mercury',       200.59, Series.TRANSIT,      State.LIQUID,  2.00, 0.00, 100.00, 1.01, false),
    new Atom(81 , 'Tl', 'thallium',      204.38, Series.PTRANSIT,     State.SOLID,   1.62, 0.00, 100.00, 1.01, false),
    new Atom(82 , 'Pb', 'Lead',          207.20, Series.PTRANSIT,     State.SOLID,   2.33, 0.00, 100.00, 1.01, false),
    new Atom(83 , 'Bi', 'Bismuth',       208.98, Series.PTRANSIT,     State.SOLID,   2.02, 0.00, 100.00, 1.01, false),
    new Atom(84 , 'Po', 'Polonium',      209.00, Series.PTRANSIT,     State.SOLID,   2.00, 0.00, 100.00, 1.01, false),
    new Atom(85 , 'At', 'Astatine',      210.00, Series.METALLOID,    State.SOLID,   2.20, 0.00, 100.00, 1.01, false),
    new Atom(86 , 'Rn', 'Radon',         222.00, Series.NOBLE,        State.GAS,     0.00, 0.00, 100.00, 1.01, false),
    new Atom(87 , 'Fr', 'Francium',      223.00, Series.ALKALI,       State.SOLID,   0.70, 0.00, 100.00, 1.01, false),
    new Atom(88 , 'Ra', 'Radium',        226.00, Series.ALKALINE,     State.SOLID,   0.90, 0.00, 100.00, 1.01, false),
    new Atom(89 , 'Ac', 'Actinium',      227.00, Series.ACTINOID,     State.SOLID,   2.02, 0.00, 100.00, 1.01, false),
    new Atom(104, 'Rf', 'Rutherfordium', 267.00, Series.TRANSIT,      State.UNKNOWN, 0.00, 0.00, 100.00, 1.01, false),
    new Atom(105, 'Db', 'Dubnium',       268.00, Series.TRANSIT,      State.UNKNOWN, 0.00, 0.00, 100.00, 1.01, false),
    new Atom(106, 'Sg', 'Seaborgium',    269.00, Series.TRANSIT,      State.UNKNOWN, 0.00, 0.00, 100.00, 1.01, false),
    new Atom(107, 'Bh', 'Bohrium',       270.00, Series.TRANSIT,      State.UNKNOWN, 0.00, 0.00, 100.00, 1.01, false),
    new Atom(108, 'Hs', 'Hassium',       277.00, Series.TRANSIT,      State.UNKNOWN, 0.00, 0.00, 100.00, 1.01, false),
    new Atom(109, 'Mt', 'Meitnerium',    278.00, Series.UNKNOWN,      State.UNKNOWN, 0.00, 0.00, 100.00, 1.01, false),
    new Atom(110, 'Ds', 'Darmstadtium',  281.00, Series.UNKNOWN,      State.UNKNOWN, 0.00, 0.00, 100.00, 1.01, false),
    new Atom(111, 'Rg', 'Roentgenium',   282.00, Series.UNKNOWN,      State.UNKNOWN, 0.00, 0.00, 100.00, 1.01, false),
    new Atom(112, 'Cn', 'Copernicium',   285.00, Series.UNKNOWN,      State.UNKNOWN, 0.00, 0.00, 100.00, 1.01, false),
    new Atom(113, 'Nh', 'Nihonium',      286.00, Series.UNKNOWN,      State.UNKNOWN, 0.00, 0.00, 100.00, 1.01, false),
    new Atom(114, 'Fl', 'Flerovium',     289.00, Series.UNKNOWN,      State.UNKNOWN, 0.00, 0.00, 100.00, 1.01, false),
    new Atom(115, 'Mc', 'Moscovium',     290.00, Series.UNKNOWN,      State.UNKNOWN, 0.00, 0.00, 100.00, 1.01, false),
    new Atom(116, 'Lv', 'Livermorium',   293.00, Series.UNKNOWN,      State.UNKNOWN, 0.00, 0.00, 100.00, 1.01, false),
    new Atom(117, 'Ts', 'Tennessine',    294.00, Series.UNKNOWN,      State.UNKNOWN, 0.00, 0.00, 100.00, 1.01, false),
    new Atom(118, 'Og', 'Oganesson',     294.00, Series.UNKNOWN,      State.UNKNOWN, 0.00, 0.00, 100.00, 1.01, false),
    new Atom(58 , 'Ce', 'Cerium',        140.12, Series.LANTHANOID,   State.SOLID,   1.12, 0.00, 100.00, 1.01, false),
    new Atom(59 , 'Pr', 'Praseodymium',  140.91, Series.LANTHANOID,   State.SOLID,   1.13, 0.00, 100.00, 1.01, false),
    new Atom(60 , 'Nd', 'Neodymium',     144.24, Series.LANTHANOID,   State.SOLID,   1.14, 0.00, 100.00, 1.01, false),
    new Atom(61 , 'Pm', 'Promethium',    145.00, Series.LANTHANOID,   State.SOLID,   0.00, 0.00, 100.00, 1.01, false),
    new Atom(62 , 'Sm', 'Samarium',      150.36, Series.LANTHANOID,   State.SOLID,   1.17, 0.00, 100.00, 1.01, false),
    new Atom(63 , 'Eu', 'Europium',      151.96, Series.LANTHANOID,   State.SOLID,   0.00, 0.00, 100.00, 1.01, false),
    new Atom(64 , 'Gd', 'Gadolinium',    157.25, Series.LANTHANOID,   State.SOLID,   1.20, 0.00, 100.00, 1.01, false),
    new Atom(65 , 'Tb', 'Terbium',       158.93, Series.LANTHANOID,   State.SOLID,   0.00, 0.00, 100.00, 1.01, false),
    new Atom(66 , 'Dy', 'Dysprosium',    162.50, Series.LANTHANOID,   State.SOLID,   1.22, 0.00, 100.00, 1.01, false),
    new Atom(67 , 'Ho', 'Holmium',       164.93, Series.LANTHANOID,   State.SOLID,   1.23, 0.00, 100.00, 1.01, false),
    new Atom(68 , 'Er', 'Erbium',        167.26, Series.LANTHANOID,   State.SOLID,   1.24, 0.00, 100.00, 1.01, false),
    new Atom(69 , 'Tm', 'Thulium',       168.93, Series.LANTHANOID,   State.SOLID,   1.25, 0.00, 100.00, 1.01, false),
    new Atom(70 , 'Yb', 'Ytterbium',     173.05, Series.LANTHANOID,   State.SOLID,   0.00, 0.00, 100.00, 1.01, false),
    new Atom(71 , 'Lu', 'Lutetium',      174.97, Series.LANTHANOID,   State.SOLID,   1.27, 0.00, 100.00, 1.01, false),
    new Atom(90 , 'Th', 'Thorium',       232.04, Series.ACTINOID,     State.SOLID,   1.30, 0.00, 100.00, 1.01, false),
    new Atom(91 , 'Pa', 'Protactinium',  231.04, Series.ACTINOID,     State.SOLID,   1.50, 0.00, 100.00, 1.01, false),
    new Atom(92 , 'U' , 'Uranium',       238.03, Series.ACTINOID,     State.SOLID,   1.38, 0.00, 100.00, 1.01, false),
    new Atom(93 , 'Np', 'Neptunium',     237.00, Series.ACTINOID,     State.SOLID,   1.36, 0.00, 100.00, 1.01, false),
    new Atom(94 , 'Pu', 'Plutonium',     244.00, Series.ACTINOID,     State.SOLID,   1.28, 0.00, 100.00, 1.01, false),
    new Atom(95 , 'Am', 'Americium',     243.00, Series.ACTINOID,     State.SOLID,   1.30, 0.00, 100.00, 1.01, false),
    new Atom(96 , 'Cm', 'Curium',        247.00, Series.ACTINOID,     State.SOLID,   1.30, 0.00, 100.00, 1.01, false),
    new Atom(97 , 'Bk', 'Berkelium',     247.00, Series.ACTINOID,     State.SOLID,   1.30, 0.00, 100.00, 1.01, false),
    new Atom(98 , 'Cf', 'Californium',   251.00, Series.ACTINOID,     State.SOLID,   1.30, 0.00, 100.00, 1.01, false),
    new Atom(99 , 'Es', 'Einsteinium',   252.00, Series.ACTINOID,     State.SOLID,   1.30, 0.00, 100.00, 1.01, false),
    new Atom(100, 'Fm', 'Fermium',       257.00, Series.ACTINOID,     State.SOLID,   1.30, 0.00, 100.00, 1.01, false),
    new Atom(101, 'Md', 'Mendelevium',   258.00, Series.ACTINOID,     State.SOLID,   1.30, 0.00, 100.00, 1.01, false),
    new Atom(102, 'No', 'Nobelium',      259.00, Series.ACTINOID,     State.SOLID,   1.30, 0.00, 100.00, 1.01, false),
    new Atom(103, 'Lr', 'Lawrencium',    266.00, Series.ACTINOID,     State.SOLID,   0.00, 0.00, 100.00, 1.01, false)
]

export { State, Atom, Molecule, atoms };