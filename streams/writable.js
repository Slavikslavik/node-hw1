const fs = require('fs');

const writeStream = fs.createWriteStream('../txt-files/wrf.txt',{ encoding: 'utf-8' });

writeStream.write('data ');

writeStream.end('data end');

writeStream.on('finish', () => {
    console.log('finished');
});
writeStream.on('close', () => {
    console.log('closed');
});