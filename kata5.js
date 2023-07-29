const urlEncode = function(text) {
    const n = text.length;
    const start = text[0] === ' ' ? 1 : 0;
    const end = text[n - 1] === ' ' ? n - 1 : n;
    let result = "";

    for (let i = start; i < end; i++) {
         result += text[i] == ' ' ? '%20' : text[i];
    }

    return result;
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));