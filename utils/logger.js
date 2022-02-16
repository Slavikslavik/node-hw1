const chalk = require('chalk');

function init (...args) {
    debugger;
    console.log(chalk.green(...args));
}

function warn (...args) {
    debugger;
    console.log(chalk.yellow(...args));
}

function error (...args) {
    debugger;
    console.log(chalk.red(...args));
}

module.exports = {
    init,
    warn,
    error
}