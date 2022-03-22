const fs = require('fs');
const fsPromises = require('fs/promises');
const path = require('path');
const EventEmitter = require('events');

const message = new EventEmitter();

async function seek(dir, file, verbose) {
    try {
        await fsPromises.access(dir);
        const files = await fsPromises.readdir(dir);
        let content;
        if (files.includes(file)) {
            content = await fsPromises.readFile(path.join(dir, file), 'utf-8');
            message.emit('success', file);
            message.emit('data', content);
            if (verbose) {
                fileLogger('success', file);
                fileLogger('data', content);
            }
        } else {
            message.emit('fail', 'Error no such file');
            if (verbose) {
                fileLogger('fail', 'Error no such file');
            }
        }
    } catch (err) {
        message.emit('fail', err);
        if (verbose) {
            fileLogger('fail', err);
        }
    }
};

async function fileLogger(event, file, fileName = 'events.log') {
    const date = new Date;
    try {
        const directory = await fsPromises.readdir('./');
        if (directory.includes(fileName)) {
            await fsPromises.appendFile(fileName, `date: ${date.toUTCString()}, event: ${event}, file: ${file} \n`, err => console.log(err));
        } else {
            await fsPromises.writeFile(fileName, `date: ${date.toUTCString()}, event: ${event}, file: ${file} \n`, { encoding: "utf8", flag: "a+" }, err => console.log(err));
        }
    }
    catch (e) {
        console.log(e);
    }
};

module.exports = {
    seek,
    message,
    fileLogger
};