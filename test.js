const arg = process.argv.slice(2)
const x = arg[0]
const y = arg[1]
const a = arg[2]
args = [x, y, a]
function start(args) {
    const xx = args[0]
    const yy = args[1]
    const aa = args[2]
    function result(x, y, a) {
        console.log(a ** x)
        console.log(y == a ** x)
    }
    result(xx, yy, aa)
}
start(args)
