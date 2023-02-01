import $ from "jquery";
import { Atom, atoms } from "./components/Atom";
import { appendReactant } from "./index";

const table = (): void => {
    const tableTitle: JQuery<HTMLElement> = $('<div>Periodic Table of Elements</div>').attr('class', 'table-title')
    $('.table-container').append(tableTitle, tableElements(atoms), tableEvaluation())
}

const tableEvaluation = (): JQuery<HTMLElement> => {
    const evaluation: JQuery<HTMLElement> = $('<div></div>').attr('id', 'evaluation')
    const search: JQuery<HTMLElement> = $('<div>Evaluation</div>').attr('id', 'search')
    const searchBar: JQuery<HTMLElement> = $('<input>').attr('type', 'text')
    searchBar.attr('id', 'searchBar')
    evaluation.append(search, searchBar)
    
    return evaluation
}

const tableElements = (atoms: Atom[]): JQuery<HTMLElement> => {
    const table = $('<div></div>').attr('id', 'table')
    
    atoms.forEach(atom => {
        const lowerName: string = atom.name.toLowerCase()

        const element: JQuery<HTMLElement> = $('<button></button>').attr('id', lowerName)
        element.attr('class', 'element')
        element.on('click', () => {
            $('#searchBar').val(appendReactant(atom))
        })
        table.append(element)

        const atomicNum: JQuery<HTMLElement> = $('<div></div>').attr('class', 'atomic-num')
        atomicNum.text(atom.atomicNum)

        const symbol: JQuery<HTMLElement> = $('<div></div>').attr('class', 'symbol')
        symbol.text(atom.symbol)

        const name: JQuery<HTMLElement> = $('<div></div>').attr('class', 'name')
        name.text(atom.name)

        const atomicWeight: JQuery<HTMLElement> = $('<div></div>').attr('class', 'atomic-weight')
        atomicWeight.text(atom.atomicWeight)

        element.append(atomicNum, symbol, name, atomicWeight)
    })

    return table
}

export { table };