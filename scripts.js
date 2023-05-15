const neroslanguageMap = {
    'a': '10np2',
    'b': '20qe3',
    'c': '13mm1',
    'd': '24kj6',
    'e': '85lp9',
    'f': '75mh8',
    'g': '49ou7',
    'h': '51is2',
    'i': '27ut6',
    'j': '33ge9',
    'k': '22bs1',
    'l': '94zw5',
    'm': '12fa4',
    'n': '08ph1',
    'ñ': '62vq8',
    'o': '57dr2',
    'p': '99ca3',
    'q': '36te5',
    'r': '78gb1',
    's': '41of6',
    't': '63iu9',
    'u': '40jn3',
    'v': '14ky2',
    'w': '71uh5',
    'x': '23pl6',
    'y': '82ea7',
    'z': '44rq1'
};


// Objeto que contiene la correspondencia inversa de letras
const neroslanguageInverseMap = {};
for (const [key, value] of Object.entries(neroslanguageMap)) {
    neroslanguageInverseMap[value] = key;
}

// Función para convertir de español a neroslanguage
function convertToNeroslanguage() {
    const spanishText = document.getElementById('input-text').value.toLowerCase();
    let neroslanguageText = '';
    for (let i = 0; i < spanishText.length; i++) {
        const spanishLetter = spanishText[i];
        const nerosLetter = neroslanguageMap[spanishLetter];
        if (nerosLetter) {
            neroslanguageText += nerosLetter + ' ';
        } else {
            neroslanguageText += spanishLetter + ' ';
        }
    }
    document.getElementById('output-text').value = neroslanguageText.trim();
}

// Función para convertir de neroslanguage a español
function convertToSpanish() {
    const neroslanguageText = document.getElementById('output-text').value;
    const words = neroslanguageText.split(' ');
    let spanishText = '';
    for (let i = 0; i < words.length; i++) {
        const nerosWord = words[i];
        let spanishWord = '';
        for (let j = 0; j < nerosWord.length; j += 5) {
            const nerosLetter = nerosWord.substr(j, 5);
            const spanishLetter = neroslanguageInverseMap[nerosLetter];
            spanishWord += spanishLetter;
        }
        spanishText += spanishWord + ' ';
    }
    document.getElementById('output-text2').value = spanishText.trim();
}

function clearFields() {
    document.getElementById('input-text').value = '';
    document.getElementById('output-text').value = '';
    document.getElementById('output-text2').value = '';
  }
  function copyToClipboard() {
    const outputText = document.getElementById('output-text');
    outputText.select();
    navigator.clipboard.writeText(outputText.value);
  }
  
  

