const progressBar = require('progress');
const chalk = require('chalk');

const bar = new progressBar("downloading [:bar] :rate/bps :percent :etas", {
    total:20
});

const timer = setInterval(() => {
    bar.tick();
    if (bar.complete) {
        clearInterval(timer);
        console.log(chalk.green("Download complete!"));
    }
}, 100);

