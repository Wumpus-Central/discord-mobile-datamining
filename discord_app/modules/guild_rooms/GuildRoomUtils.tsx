// discord_app/modules/guild_rooms/GuildRoomUtils.tsx
import GuildRoomTypes from "GuildRoomTypes.tsx";
import GuildRoomSeats from "../../../discord_common/js/shared/shared-constants/GuildRoomSeats.tsx";
import GuildRoomBackgrounds from "../../../discord_common/js/shared/shared-constants/GuildRoomBackgrounds.tsx";
import GuildRoomStore from "GuildRoomStore.tsx";

require = fn;
function serverGuildRoomObjectToClient(object_type) {
  if (object_type.object_type === GuildRoomTypes.GuildRoomObjectTypes.PLANT) {
    let obj = { objectType: tmp(4719).GuildRoomObjectTypes.PLANT };
    obj = { objectId: null, createdBy: null, updatedAt: null, updatedBy: null };
    ({ object_id: obj2.objectId, created_by: obj2.createdBy } = object_type);
    let date;
    if (null != object_type.updated_at) {
      const _Date2 = Date;
      date = new Date(object_type.updated_at);
    }
    obj.updatedAt = date;
    obj.updatedBy = object_type.updated_by;
    const merged = Object.assign(obj);
  } else {
    obj = { objectType: tmp(4719).GuildRoomObjectTypes.NOTE };
    const obj1 = { objectId: null, createdBy: null, updatedAt: null, updatedBy: null };
    ({ object_id: obj4.objectId, created_by: obj4.createdBy } = object_type);
    let date1;
    if (null != object_type.updated_at) {
      const _Date = Date;
      date1 = new Date(object_type.updated_at);
    }
    obj1.updatedAt = date1;
    obj1.updatedBy = object_type.updated_by;
    const merged1 = Object.assign(obj1);
    ({ content: obj3.content, position: obj3.position } = object_type);
  }
  return obj;
}
let closure_3 = fn(4722).GUILD_ROOM_BACKGROUND_CONFIG;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_rooms/GuildRoomUtils.tsx");

export const findSeat = function findSeat(seat, position, channelId) {
  const room = GuildRoomStore.getRoom(channelId);
  let background;
  if (room != null) {
    background = room.background;
  }
  if (background == null) {
    background = GuildRoomBackgrounds.GuildRoomBackgrounds.DEFAULT;
  }
  const seats = closure_3[background].seats;
  if (null != seat) {
    if (seat !== GuildRoomSeats.GuildRoomSeats.UNSET) {
      let found = seats[seat];
    }
    return found;
  }
  const values = Object.values(seats);
  found = values.find((position) => position.position.x === position.x && position.position.y === tmp.y);
};
export const serverGuildRoomToClient = function serverGuildRoomToClient(body) {
  const obj = { roomId: body.room_id, users: null, background: body.background, objects: null };
  const users = body.users;
  obj.users = users.reduce((set, userId) => {
    const result = set.set(userId.user_id, {
      userId: userId.user_id,
      seat: userId.seat,
      position: userId.position,
      statusId: userId.status_id,
      statusText: userId.status_text,
    });
    return set;
  }, new Map());
  const entries = Object.entries(body.objects);
  const map = new Map();
  obj.objects = entries.reduce((set, item) => {
    [tmp, arr] = item;
    const result = set.set(+tmp, arr.map(serverGuildRoomObjectToClient));
    return set;
  }, new Map());
  return obj;
};
