function decomposition(num) {
    primefactors = [];//质因数
    var n = 0;
    while (num >= n) {
        if (n == num) {
            primefactors.push(n);
            break;
        }
        if (num % n === 0 && isPrime(n)) {//可以整除
            num = num / n;
            primefactors.push(n);
        } else {//不能整除，n++
            n++;
        }
    }
    return primefactors.join("");
}

function isPrime(number) {
    if (number < 2) {
        return false
    }
//2是素数，被2整除的都不是素数
    if (number === 2) {
        return true
    } else if (number % 2 === 0) {
        return false;
    }
//依次判断是否能被奇数整除，最大循环为数值的开方
    var squareRoot = Math.sqrt(number);
    for (var i = 3; i <= squareRoot; i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
