function leaveRooms(userID, chatRoomUsers) {
    return chatRoomUsers.filter((user) => user.id != userID);
  }
  
  module.exports = leaveRooms;