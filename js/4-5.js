const rl = require('readline').createInterface({
    input: process.stdin
})
rl.question('', ans => {
    const a = parseInt(ans)
    rl.question('', ans => {
        ans = parseAns(ans)
        let y = ans.reduce((a, b) => a ^ b),
            x = 1;
        while(ans.includes(x ^ y) || ans.includes(x)) ++x
        console.log(`${x ^ y} ${x}`)
    })
})
function parseAns(ans) {
    return ans.split(' ').map(e => parseInt(e))
}