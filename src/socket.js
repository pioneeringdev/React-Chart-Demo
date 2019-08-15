
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const subscribeToTimer = (cb) => {
    socket.on('data', data => cb(data));
}

const disconnect = () => {
    socket.disconnect();
}

export { subscribeToTimer, disconnect };