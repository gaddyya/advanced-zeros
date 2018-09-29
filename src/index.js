module.exports = function getZerosCount(number, base) {

    let primeValue = [];
    let countOfPrime = [];
    let localBase = base;
    let localNumber = number;
    let maxPrime = 0;
    let countOfMaxPrime = 0;
    let sumZero = 0;
    let memoize = 0;

    // search all prime value and their count
    for ( let i = 2; i <= localBase; i++ ) {
        let count = 0;
        while( (localBase % i) === 0 ) {
            localBase = localBase / i;
            count++;
        }
        countOfPrime.push(count);
        primeValue.push(i);
    }

    // set max prime value
    for( let i = 0, length = primeValue.length ; i < length; i++) {
        if( primeValue[i]^countOfPrime[i] > primeValue[i+i]^countOfPrime[i+1]) {
            maxPrime = primeValue[i];
            countOfMaxPrime = countOfPrime[i];
        }
    }

    // calculate 0's in the end
    do{
        memoize = Math.floor( localNumber / maxPrime );
        localNumber = memoize;
        sumZero = memoize + sumZero;
    }
    while( memoize > 0 )

    return Math.floor(sumZero / countOfMaxPrime);
}