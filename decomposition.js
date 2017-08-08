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
        if (num % n === 0 && n >= 2) {//可以整除
            num = num / n;
            primeFactors.push(n);
        } else {//不能整除，n++
            n++;
        }
    }
    return originNum + "=" + primeFactors.join("");
}
