
const { init, warn, error } = require('./utils/logger');
const yargs = require('yargs');
const { seek, message } = require('./utils/file-seeker');

const args = yargs(process.argv).argv;

if (!args.dir || !args.file) {
    error('dir and file required');
    process.exit(1);
}

message.addListener('fail', err => {
    error(err);
});
message.addListener('success', file => {
    init('file ->', file);
});
message.addListener('data', content => {
    init('content ->', content);
});

seek(args.dir, args.file, args.verbose);

