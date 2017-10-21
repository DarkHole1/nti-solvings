const rl = require('readline').createInterface({
    input: process.stdin
})
rl.question('', ans => {
    const a = parseInt(ans)
    rl.question('', ans => {
        ans = parseAns(ans)
        if(ans[0] == 1) console.log(`${ans[0] ^ 2} 2`)
        else console.log(`${ans[0] ^ 1} 1`)
    })
})
function parseAns(ans) {
    return ans.split(' ').map(e => parseInt(e))
}