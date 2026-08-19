// === Module 9866: serverGuildRoomObjectToClient ===

// Module 9866 (serverGuildRoomObjectToClient)
import obj132 from "obj132" /* 2 */;
import GuildRoomObjectTypes from "GuildRoomObjectTypes" /* 9865 */;
import items from "items" /* 9867 */;

function serverGuildRoomObjectToClient(object_type) {
  if (object_type.object_type === GuildRoomObjectTypes.GuildRoomObjectTypes.PLANT) {
    let obj = { objectType: null };
    obj[0] = GuildRoomObjectTypes.GuildRoomObjectTypes.PLANT;
    obj = { objectId: null, createdBy: null, updatedAt: null, updatedBy: null };
    ({ object_id: obj2[0], created_by: obj2[1] } = object_type);
    let date;
    if (null != object_type.updated_at) {
      const _Date2 = Date;
      date = new Date(object_type.updated_at);
    }
    obj[2] = date;
    obj[3] = object_type.updated_by;
    const merged = Object.assign(obj);
  } else {
    obj = { objectType: null };
    obj[0] = GuildRoomObjectTypes.GuildRoomObjectTypes.NOTE;
    obj1 = { objectId: null, createdBy: null, updatedAt: null, updatedBy: null };
    ({ object_id: obj4[0], created_by: obj4[1] } = object_type);
    let date1;
    if (null != object_type.updated_at) {
      const _Date = Date;
      date1 = new Date(object_type.updated_at);
    }
    obj1[2] = date1;
    obj1[3] = object_type.updated_by;
    const merged1 = Object.assign(obj1);
    ({ content: obj3.content, position: obj3.position } = object_type);
  }
  return obj;
}
let closure_2 = items.GUILD_ROOM_BACKGROUND_CONFIG;
let result = obj132.fileFinishedImporting("modules/guild_rooms/GuildRoomUtils.tsx");

export const findSeat = function findSeat(items1) {
  const _require = items1;
  const seats = table[_require(undefined, 9868).GuildRoomBackgrounds.DEFAULT].seats;
  return seats.find((item, index) => item.position.x === items1.x && item.position.y === tmp.y);
};
export const serverGuildRoomToClient = function serverGuildRoomToClient(body) {
  const obj = {
    roomId: body.room_id,
    users: users.reduce((acc, item, index) => {
      const result = acc.set(item.user_id, { userId: item.user_id, position: item.position, statusId: item.status_id, statusText: item.status_text });
      return acc;
    }, new Map()),
    background: body.background,
    objects: null
  };
  users = body.users;
  const entries = Object.entries(body.objects);
  const map = new Map();
  obj[3] = entries.reduce((acc, item, index) => {
    [tmp, arr] = item;
    const result = acc.set(+tmp, arr.map(closure_3));
    return acc;
  }, new Map());
  return obj;
};