function decomposition(num) {
    var tempnum = num;
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
    return tempnum+"="+primefactors.join("");
}

function isPrime(num) {
    if (num < 2) {
        return false
    }
    if (num === 2) {
        return true
    } else if (num % 2 === 0) {
        return false;
    }
    var max = Math.sqrt(num);
    for (var i = 3; i <= max; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(decomposition(90));