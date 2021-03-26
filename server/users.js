const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find(
    (user) => user.name === name && user.room === room
  );

  if (existingUser) {
    return {
      error: "Username already taken",
    };
  }
  const user = { id, name, room };

  users.push(user);

  console.log("User",user);

  return user;
};

const removeUser = () => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  const user = users.find((user) => user.id === id);
console.log("Found user:", user);
  return user
};

const getUsersInRoom = (room) => {
  users.filter((user) => user.room === room);
};
module.exports = { addUser, removeUser, getUser, getUsersInRoom };
