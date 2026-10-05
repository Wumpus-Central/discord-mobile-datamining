// === Module 5051: GuildRoomUtils ===

// Module 5051 (GuildRoomUtils)
import GuildRoomTypes from "GuildRoomTypes" /* 5049 */;
import GuildRoomSeats from "GuildRoomSeats" /* 5050 */;
import GuildRoomConstants from "GuildRoomConstants" /* 5052 */;
import GuildRoomBackgrounds from "GuildRoomBackgrounds" /* 5053 */;
import GuildRoomStore from "GuildRoomStore" /* 5048 */;
import size from "module_2" /* 2 */;

let map, map1;

function serverGuildRoomObjectToClient(object_type) {
  let date;
  let date1;
  let obj8;
  if (object_type.object_type === GuildRoomTypes.GuildRoomObjectTypes.PLANT) {
    const obj7 = { objectId: null, createdBy: null, updatedAt: date, updatedBy: object_type.updated_by };
    ({ object_id: obj2.objectId, created_by: obj2.createdBy } = object_type);
    date = undefined;
    const obj = { objectType: GuildRoomTypes.GuildRoomObjectTypes.PLANT };
    if (null != object_type.updated_at) {
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      date = new Date(object_type.updated_at);
    }
    const merged = Object.assign(obj7);
    obj8 = obj;
  } else {
    obj8 = { objectType: GuildRoomTypes.GuildRoomObjectTypes.NOTE };
    const obj9 = { objectId: null, createdBy: null, updatedAt: date1, updatedBy: object_type.updated_by };
    ({ object_id: obj4.objectId, created_by: obj4.createdBy } = object_type);
    date1 = undefined;
    if (null != object_type.updated_at) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      date1 = new Date(object_type.updated_at);
    }
    const merged1 = Object.assign(obj9);
    ({ content: obj3.content, position: obj3.position } = object_type);
  }
  return obj8;
}
let closure_3 = GuildRoomConstants.GUILD_ROOM_BACKGROUND_CONFIG;
let result = size.fileFinishedImporting("modules/guild_rooms/GuildRoomUtils.tsx");

export const findSeat = function findSeat(seat, position, channelId) {
  let closure_0 = position;
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
    let found;
    if (seat !== GuildRoomSeats.GuildRoomSeats.UNSET) {
      found = seats[seat];
    }
    return found;
  }
  const values = Object.values(seats);
  found = values.find((position) => position.position.x === x.x && position.position.y === tmp.y);
};
export const serverGuildRoomToClient = function serverGuildRoomToClient(body) {
  let reduce;
  let reduce2;
  let obj = {
    roomId: body.room_id,
    users: reduce((set, userId) => {
      const obj = { userId: userId.user_id, seat: userId.seat, position: userId.position, statusId: userId.status_id, statusText: userId.status_text };
      const result = set.set(userId.user_id, obj);
      return set;
    }, map),
    background: body.background,
    objects: reduce2((set, arg1) => {
      let arr;
      let tmp;
      [tmp, arr] = arg1;
      const tmp2 = +tmp;
      const result = set.set(tmp2, arr.map(serverGuildRoomObjectToClient));
      return set;
    }, map1)
  };
  const users = body.users;
  reduce = users.reduce;
  map = new Map();
  const entries = Object.entries(body.objects);
  reduce2 = entries.reduce;
  map1 = new Map();
  return obj;
};