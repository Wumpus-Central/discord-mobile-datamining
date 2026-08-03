function parseParticipant(userId) {
  return { userId: userId.user_id, position: userId.position, avatar: userId.avatar };
}
function parseSeat(id) {
  return { id: id.id, claimedBy: id.claimed_by };
}
const result = require("messagesProxy").fileFinishedImporting("modules/haven/HavenUtils.tsx");

export { parseParticipant };
export { parseSeat };
export const parseRoom = function parseRoom(roomId) {
  const participants = roomId.participants;
  const seats = roomId.seats;
  return { roomId: roomId.room_id, participants: participants.map(parseParticipant), seats: seats.map(parseSeat) };
};
export const getHavenSoundControlName = function getHavenSoundControlName(arg0) {
  if (require(12899) /* HavenGenres */.HavenSoundKeys.RADIO === arg0) {
    const intl3 = tmp(1236).intl;
    return intl3.string(importDefault(2967).AjiGKB);
  } else if (tmp(12899).HavenSoundKeys.ENVIRONMENT === arg0) {
    const intl2 = tmp(1236).intl;
    return intl2.string(importDefault(2967).YEYIbI);
  } else if (tmp(12899).HavenSoundKeys.CAMPFIRE === arg0) {
    const intl = tmp(1236).intl;
    return intl.string(importDefault(2967)["Vk9+Ez"]);
  } else {
    return "";
  }
};