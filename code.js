const testFor = document.getElementById('testFor');

testFor.addEventListener('click' , () =>  {
for (let i='2'; i <= 10; i++){
    if (i % 2 === 0) console.log(i);
}
    console.log('boom boom boom se inscreva')
});

const testWhile = document.getElementById('testWhile');

testWhile.addEventListener('click' , () => {
let i = 1
while (i <= 10) {
    console.log(i)
    i++;
}
    console.log('skibidi rizz')
});

WhileSN.addEventListener('click', () => {
    let resp;
    while (resp !== 'S' && resp !== 's' && resp !== 'N' && resp !== 'n') {
        resp = window.prompt('Confirme S/N');
    }
    if (resp === 'S'|| resp == 's')
        console.log('Você disse SIM');
    else
        console.log('Você disse NÃO');
});

const testPrimos = document.getElementById('testPrimos');
testPrimos.addEventListener('click', () => {
    for (let i = 1; i <= 100; i++) {
        if (ehPrimo(i)) console.log(i);
    }
});

function ehPrimo(numero) {
    for (let i = 2; i < numero / 2; i++) {
        if (numero % i === 0) return false;
    }
    return true;
}