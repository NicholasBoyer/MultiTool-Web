/*
    Timing demo
*/

const RECURSE_DEPTH = 15;

const recurse = (x) => {
    if (x > 0) {
        recurse(x - 1);
    }
}

console.time(`Recurse depth of ${RECURSE_DEPTH}`);
recurse(RECURSE_DEPTH);
console.timeEnd(`Recurse depth of ${RECURSE_DEPTH}`);