module.exports = function reverse(n) {
    n < 0 ? n = n * (-1) : n
    // n = n.toString()
    // return +(n.split('').reverse().join(''))
    let result = ''
    n < 0 ? n = n * (-1) : n
    while (n) {
        result = result + n % 10
        n = Math.floor(n / 10)
    }
    return +result
}
