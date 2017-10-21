const rl = require('readline').createInterface({
    input: process.stdin
})

rl.question('', (ans) => {
    const n = parseInt(ans) - 1
    console.log((n - n % 3) / 3 * 2 + n % 3 + 1)
})