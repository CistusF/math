var A = ['1', '2', '3']
var B = ['1', '2', '3', '4']

var result = 0
for (i = 0; i < B.length; i++) {
    if (A.includes(B[i])) {
        result++
    }
}
if (result == B.length || result == A.length) {
    if (A.length == B.length) {
        console.log('A = B')
    } else if (A.length > B.length) {
        console.log('A는 B를 포함한다')
    } else {
        console.log('B는 A를 포함한다')
    }
} else if (result < B.length) {
    console.log('교집합')
} else {
    console.log('여집합')
}
