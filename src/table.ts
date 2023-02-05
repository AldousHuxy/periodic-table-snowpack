import $ from "jquery";
import { Atom, atoms } from "./components/Atom";
import type { Environment } from "./components/Environment";

type jquery = JQuery<HTMLElement>
const div: string = '<div></div>'

// Main Table HTML
const table = (env: Environment): void => {
    $('.table-container').append(tableTitle, tableElements(atoms, env), tableEvaluation(env))
}

// Table Title HTML
const tableTitle: jquery = $('<h2>Periodic Table of Elements</h2>').attr('class', 'table-title')

// Table Elements List HTML
const tableElements = (atoms: Atom[], env: Environment): jquery => {
    const table = $(div).attr('id', 'table')
    
    atoms.forEach(atom => {
        const lowerName: string = atom.name.toLowerCase()
        
        // element - HTML body
        const element: jquery = $('<button></button>').attr({ id:lowerName, class:'element' })
        element.on('click', () => {
            $('#evalBar').val(env.modifyEnv(atom))
            env.reactantAdded = false
        })
        
        // element - atomic num
        const atomicNum: jquery = $(div)
            .attr('class', 'atomic-num')
            .text(atom.atomicNum)
        
        // element - symbol
        const symbol: jquery = $(div)
            .attr('class', 'symbol')
            .text(atom.symbol)
        
        // element - name
        const name: jquery = $(div)
            .attr('class', 'name')
            .text(atom.name)
        
        // element - atomic weight
        const atomicWeight: jquery = $(div)
            .attr('class', 'atomic-weight')
            .text(atom.atomicWeight)
        
        table.append(element.append(atomicNum, symbol, name, atomicWeight))
    })
    
    return table
}

// Table Evaluation HTML
const tableEvaluation = (env: Environment): jquery => {
    // evaluate - HTML body
    const evaluation: jquery = $(div).attr('id', 'evaluation')

    // evaluate
    const evaluate: jquery = $('<div>Evaluate</div>').attr('id', 'eval')

    // evaluate - add
    const evalAdd: jquery = $('<button>+</button>').attr('id', 'evalAdd')
    evalAdd.on('click', () => {
        (evalBar.val() === '') ? evalBar.val('') : evalBar.val(evalBar.val() + ' + ')
        env.reactantAdded = true
    })
    
    // evaluate - text box
    const evalBar: jquery = $('<input>').attr({ type:'text', id:'evalBar' })

    // evaluate - clear
    const evalClear: jquery = $('<div>Clear</div>').attr('id', 'evalClear')
    
    evaluation.append(evaluate, evalAdd, evalBar, evalClear)
    
    return evaluation
}

export { table };