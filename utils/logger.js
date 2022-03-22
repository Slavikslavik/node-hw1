const chalk = require('chalk');

function init(...args) {
    console.log(chalk.green(...args));
}

function warn(...args) {
    console.log(chalk.yellow(...args));
}

function error(...args) {
    console.log(chalk.red(...args));
}

module.exports = {
    init,
    warn,
    error
}