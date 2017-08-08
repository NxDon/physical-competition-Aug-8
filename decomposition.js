/**
 * Prime factor decomposition
 * @param {Number} num
 * @returns {string}
 */
function decomposition(num) {
    var originNum = num;
    var primeFactors = [];//质因数数组
    var n = 0;
    while (num >= n) {
        if (n === num) {
            primeFactors.push(n);
            break;
        }
        if (num % n === 0 && isPrime(n)) {//可以整除
            num = num / n;
            primeFactors.push(n);
        } else {//不能整除，n++
            n++;
        }
    }
    return originNum + "=" + primeFactors.join("");
}

function isPrime(num) {
    if (num !== 2) {
        if (num < 2 || num % 2 === 0) {
            return false;
        }
        for (var i = 3; (i * i) <= num; i += 2) {//因为x = a * b,那么一定是a == b 或者 a != b,因此只需循环到sqrt(num)
            if (num % 2 === 0) {
                return false;
            }
        }
    }
    return true;
}

console.log(decomposition(90));