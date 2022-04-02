const fs = require('fs');

const readable$ =fs.createReadStream('../txt-files/ck.txt', {encoding: 'utf-8'});
const writable$ =fs.createWriteStream('../txt-files/ck-copy.txt', {encoding: 'utf-8'});

readable$.pipe(writable$);

//pipe = same as  under code but without check for errors
// readable$.on('data', (chunk) =>{ 
//     writable$.write(chunk);
// });
// readable$.on('end', () =>{ 
//     writable$.end();
// });