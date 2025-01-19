const USE_PROMPT_SYNC = true;

if (USE_PROMPT_SYNC) {
    const prompt = require('prompt-sync')();
    console.log("What is your favorite animal?");
    const animal = prompt();
    console.log(`${animal} is very cool!`);
    process.exit(0);
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your favorite animal?\n', (animal) => {
    console.log(`${animal} is very cool!`);
    rl.close();
})