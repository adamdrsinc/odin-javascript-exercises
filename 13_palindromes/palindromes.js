const palindromes = function (word) {
    const normalizedWord = sanitize(word.toLowerCase());

    let wordArray = normalizedWord.split(''); 
    if(wordArray.length === 1) return true;

    let lastIndex = wordArray.length - 1;

    for(let i = 0; i <= Math.trunc(lastIndex / 2); i++){
        if(wordArray[i] !== wordArray[lastIndex]){
            return false;
        }
        lastIndex--;
    }

    return true;
};

function sanitize(sentence){
    return sentence.replace(/[^a-zA-Z0-9]/g, '');
}

// Do not edit below this line
module.exports = palindromes;
