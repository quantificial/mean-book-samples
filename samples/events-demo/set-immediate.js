const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

myEmitter.on('event', (a, b) => {
    setImmediate(async () => {
        await sleep(10000);
        console.log('异步进行');
    });
});

myEmitter.emit('event', 'a', 'b');
//await sleep(1000);

tryEmit();

console.log('end...');

function tryEmit() {
    console.log('start emit');
    myEmitter.emit('event', 'c', 'd');
    console.log('end emit');
}

function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

async function trySleep(millis) {
    await sleep(millis);
}