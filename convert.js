const decoder = {
    'ch': 'ч',
    'sh': 'ш',
    'sch': 'щ',
    'ts': 'ц',
    'ya': 'я',
    'yu': 'ю', 
    'yo': 'ё',
    'ye': 'е',
    'ai': 'ай',
    'ei': 'эй',
    'ii': 'ий',
    'oi': 'ой',
    'ui': 'уй',
    'wi': 'үй',

    'a': 'а',
    'b': 'б', 
    'v': 'в', 
    'g': 'г', 
    'd': 'д',
    'j': 'ж',
    'z': 'з',
    'k': 'к', 
    'l': 'л', 
    'm': 'м',
    'n': 'н',
    'o': 'о',
    'q': 'ө', 
    'p': 'п', 
    'r': 'р', 
    's': 'с',
    't': 'т',
    'u': 'у', 
    'w': 'ү',
    'c': 'ь',
    ']': 'ъ',
    'f': 'ф',   
    'h': 'х',
    'y': 'ы',
    'e': 'э',
    'x': 'и',
    'i': 'й',    
    
}

function convert() {
let input = document.getElementById('inputText').value

let output = ''

for (let i = 0; i < input.length; i++) {

    let char = input[i]
    let isUpperCase = char === char.toUpperCase()
    char = char.toLowerCase()
    
    if (i < input.length - 1) {
        let twoChars = input.substr(i, 2).toLowerCase()
        if (decoder[twoChars]) {
            output += isUpperCase ? decoder[twoChars].toUpperCase() : decoder[twoChars]
            i++
            continue
        }
}

    if (decoder[char]) 
            output += isUpperCase ? decoder[char].toUpperCase() : decoder[char]
        else 
            output += input[i]
    }

document.getElementById('outputText').value = output;
}

const tbody = document.getElementById('tbody')

for (let key in decoder) {
    
    if (decoder.hasOwnProperty(key)) {
    
    const row = document.createElement('tr');

    const keyCell = document.createElement('td');
    const valueCell = document.createElement('td');
    const examCell =document.createElement('td');

    keyCell.textContent = key;
    valueCell.textContent = decoder[key];
    
    row.appendChild(keyCell);
    row.appendChild(valueCell);
    row.appendChild(examCell)
    tbody.appendChild(row);
    }
}