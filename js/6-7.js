const rl = require('readline').createInterface({
    input: process.stdin
})
let c_bridges = 0, bridges, down, visited;
let n, m, v, u;
rl.question('', ans => {
    [n, m, v, u] = parseAns(ans)
    c_bridges = m;
    bridges = [];
    visited = [];
    bridges.length = visited.length = n;
    for(let i = 0; i < bridges.length; ++i) {
        bridges[i] = [];
        bridges[i].length = n;
    }
    if(c_bridges > 0) rl.question('', parseBridge)
    else console.log('NO')
})
function parseAns(ans) {
    return ans.split(' ').map(e => parseInt(e))
}
function parseBridge(ans) {
    let [a, b] = parseAns(ans)
    a -= 1
    b -= 1
    bridges[a][b] = bridges[b][a] = true
    if(--c_bridges <= 0) rl.question('', fin)
    else rl.question('', parseBridge)
}
function fin(ans) {
    const k = parseInt(ans)
    if(k === 0) {
        down = []
        console.log(find(v, u) ? 'YES' : 'NO')
    } else rl.question('', ans => {
        down = parseAns(ans)
        console.log(find(v, u) ? 'YES' : 'NO')
    })
}
function find(v, u) {
    if(v == u) return true
    visited[--v] = true
    for(let i = 0; i < n; ++i)
        if(bridges[v][i] && !visited[i] && !down.includes(v + 1))
            if(find(i + 1, u)) return true
    return false
}