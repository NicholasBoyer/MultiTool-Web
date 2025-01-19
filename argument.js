const minimist = require('minimist');

const PRINT_ARGS = true;
const USE_MINIMIST = true;

if (PRINT_ARGS) {
    process.argv.forEach((val, idx) => {
        console.log(`${idx}:${val}`);
    });
}

if (USE_MINIMIST) {
    const args = minimist(process.argv.slice(2));
    if (args.name) {
        console.log(`Hello, ${args.name}!`);
    } else {
        console.log(`No name provided. Use --name to specify a name.`);
    }
}