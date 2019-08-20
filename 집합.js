var A = ['1', '2', '3']
var B = ['1', '2', '5']

var result = 0
if (typeof A == 'object') {
    if (typeof B == 'object') {
        for (i = 0; i < B.length; i++) {
            if (A.includes(B[i])) {
                result++
            }
        }
    } else {
        for (i = 0; i < A.length; i++) {
            if (B.includes(A[i])) {
                result++
            }
        }
    }
} else {
    if (typeof B == 'object') {
        for (i = 0; i < B.length; i++) {
            if (A.includes(B[i])) {
                result++
            }
        }
    } else {
        if (A == B) {
            result++
        }
    }
}

if (typeof A == 'object' && typeof B == 'object') {
    if (result == B.length || result == A.length) {
        if (A.length == B.length) {
            console.log('A = B')
            console.log('A는 B를 포함한다')
            console.log('B는 A를 포함한다')
        } else if (A.length > B.length) {
            console.log('A는 B를 포함한다')
        } else {
            console.log('B는 A를 포함한다')
        }
    } else if (result < B.length || result < A.length) {
        console.log('교집합')
    } else {
        console.log('여집합')
    }
} else {
    if (A == B) {
        console.log('A = B')
    } else {
        console.log('여집합')
    }
}
