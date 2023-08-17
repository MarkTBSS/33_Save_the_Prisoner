function saveThePrisoner(n, m, s) {
    var a = 0
    var b = 0
    m = m % n 
    console.log(m)
    if ((n - s) >= m || n == s) {
        console.log("A")
        a = s + (m - 1)
    } else {
        console.log("B")
        b = n - s 
        a = m - (b + 1)
    }
    return a
}

var n = 59
var m = 999999998
var s = 2
//output 30

/* [2,  3,  4,  5,  6,  7,  8,  9, 10, 11,
12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 
22, 23, 24, 25, 26, 27, 28, 29, 30, 31,] */

console.log(saveThePrisoner(n, m, s))

/* var n = 46934
var m = 543563655
var s = 46743 
output : 20809*/

/* var n = 530
var m = 533048047
var s = 529
//output 15 */

/* var n = 436776012
var m = 436776012
var s = 436776011
//output 436776010 */

/* var n = 999999999
var m = 999999998
var s = 999983945
//output 999983943 */

/* var n = 7
var m = 19
var s = 2 
output : 6*/

/* var n = 3
var m = 7
var s = 3 
output : 3*/

/* function saveThePrisoner(n, m, s) {
    var chairNumber = s
    var chairGotTreats = []
    if (m > n) {
        m = m % n 
        console.log(m)
    }
    for (var i = 1; i <= m; i++) {
        //console.log("Round " + i + " : " + chairNumber)
        //chairGotTreats.push(chairNumber)
        chairGotTreats = chairNumber
        chairNumber++
        if (chairNumber > n) {
            chairNumber = 1
        }
    }
    //console.log(chairGotTreats)
    //return chairGotTreats[chairGotTreats.length-1]
    console.log("Case S = 60")
    return chairGotTreats
} */

//var n = 100
//var m = 1099
//var s = 60
//console.log(saveThePrisoner(n, m, s))