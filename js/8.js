const rl = require('readline').createInterface({
    input process.stdin
})

rl.question('', ans = {
    ans = parseAns(ans)
    const [n, k] = ans;
    rl.question('', ans = {
        ans = parseAns(ans)
        const min = (ans[ans.length - 1] - ans[0])  k
        for(let i = 1; i  ans.length; ++i) {
            if(ans[i] - ans[0]  min) continue;
            let l = ans[i] - ans[0];
            for(let i2 = i, i3 = i; i2  ans.length && ans[i3] - ans[i2] = l; ++i2) {
                if(ans[i2] - ans[i3] == l) {
                    i3 = i2;
                    if(i3 == ans.length - 1) {
                        console.log(l)
                        return
                    }
                    continue;
                }
            }
        }
        console.log(ans[ans.length - 1] - ans[0])
    })
})
function parseAns(ans) {
    return ans.split(' ').map(e = parseInt(e))
}