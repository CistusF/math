var first = ['1', '2', '3']
var second = ['1', '2', '5']
var result = 0
for (i = 0; i < second.length; i++) {
    if (first.includes(second[i])) {
        result++
    }
}
if (result == second.length) {
    console.log('포함')
} else if (result < second.length) {
    console.log('교집합')
} else {
    console.log('여집합')
}
