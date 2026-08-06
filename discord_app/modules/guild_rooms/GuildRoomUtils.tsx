// discord_app/modules/guild_rooms/GuildRoomUtils.tsx
import { GuildRoomObjectTypes } from "GuildRoomTypes.tsx";
function serverGuildRoomObjectToClient(object_type) {
  if (object_type.object_type === GuildRoomObjectTypes.GuildRoomObjectTypes.PLANT) {
    let obj = { objectType: null };
    obj[0] = tmp(12939).GuildRoomObjectTypes.PLANT;
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
    obj[0] = tmp(12939).GuildRoomObjectTypes.NOTE;
    const obj1 = { objectId: null, createdBy: null, updatedAt: null, updatedBy: null };
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
let result = require("set").fileFinishedImporting("modules/guild_rooms/GuildRoomUtils.tsx");

export const serverGuildRoomToClient = function serverGuildRoomToClient(body) {
  const obj = { roomId: body.room_id, users: null, background: null, objects: null };
  const users = body.users;
  obj[1] = users.reduce((set, userId) => {
    const result = set.set(userId.user_id, { userId: userId.user_id, position: userId.position, statusId: userId.status_id, statusText: userId.status_text });
    return set;
  }, new Map());
  obj[2] = body.background;
  const entries = Object.entries(body.objects);
  const map = new Map();
  obj[3] = entries.reduce((set) => {
    let arr;
    let tmp;
    [tmp, arr] = arg1;
    const result = set.set(+tmp, arr.map(closure_2));
    return set;
  }, new Map());
  return obj;
};