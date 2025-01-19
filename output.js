/*
    Output to console with formatting
*/

const minimist = require('minimist');

const args = minimist(process.argv.slice(2), {
    default: {
        name: "Johnny",
        age: 25
    },
    alias: {
        name: 'n',
        age: 'a'
    }
});

console.log("My name is %s and I'm %i years old.", args.name, args.age);
console.log("Next year, I'll be %i years old.", args.age + 1);