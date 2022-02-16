
const {init, warn, error} = require('./utils/logger');

init('node');
warn('js');
debugger;
error('hello world');

init('javascript',42);
warn('rabbit', 'string');
error({}, {}, [100,42,73]);

init('car');
warn('100000', 'test');
error('hello world', 'world hello world', 'error');