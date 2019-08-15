
import io from 'socket.io-client';

const socket = io(process.env.REACT_APP_API_ENDPOINT);

const subscribeToTimer = (cb) => {
    socket.on('data', data => cb(data));
};

const disconnect = () => {
    socket.disconnect();
};

export { subscribeToTimer, disconnect };