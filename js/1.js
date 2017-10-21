const rl = require('readline').createInterface({
    input: process.stdin
})

rl.question('', (ans) => {
    console.log(/[A-Z][0-9]{3}[A-Z]{2}/.test(ans) ? 'Yes' : 'No')
})