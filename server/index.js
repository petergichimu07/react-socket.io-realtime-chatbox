const express = require('express');
const socketio = require('socket.io')
// (strapi.server, {
//     cors: {
//         origin: "http://localhost:3000",
//         credentials: true
//     }
// });

const http = require('http');
const cors = require('cors');
const router = require('./router');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users.js');
const app = express();

app.use(cors());
const PORT = process.env.PORT || 5000;


const server = http.createServer(app);
const io = socketio(server);

app.use(router);

io.on('connect', (socket) => {
    socket.on('join', ({ name, room }, callback) => {
        const res = addUser({ id: socket.id, name, room });

        if (res.error) return callback(res.error);

        socket.emit('message', { user: 'admin', text: `Hello ${res.name}, welcome to the ${res.room} room` });
        socket.broadcast.to(res.room).emit('message', { user: 'admin', text: `${res.name} has joined` });

        socket.join(res.room);

        io.to(res.room).emit('roomData',{room:res.room, users:getUsersInRoom(res.room)})

        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        console.log("SocketID:", socket.id);
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message });
        io.to(user.room).emit('roomData', { user: user.room, users:getUsersInRoom(user.room) });

        

        callback();
    });



    socket.on('disconect', () => {
        const user =removeUser(socket.id);

        if(user){
            io.to(user.room).emit('message',{user: 'admin',text:`${user.name} left.`})
        }
        console.log('User left');
    })
});

app.use(router);



server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));