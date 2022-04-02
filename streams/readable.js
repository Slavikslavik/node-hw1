const Readable = require('stream');
const fs = require('fs');

const readStream = fs.createReadStream('../txt-files/ck.txt',{encoding: 'utf-8', highWaterMark: 1024});

readStream.on('readable', () => {
    console.log('[readable] Recived', readStream.read());
    // readStream.destroy(); if we need destroy reading file after after first chulk => jum[ to 'close';
})
readStream.on('data', (chunk) => {
    console.log('Recived ', chunk);
})
readStream.on('end', () => {
    console.log('file was read');
})