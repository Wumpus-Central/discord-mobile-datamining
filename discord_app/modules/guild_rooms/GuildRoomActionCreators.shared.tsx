// === Module 4993: _guildRoomConnect ===

// Module 4993 (_guildRoomConnect)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import GuildRoomTypes from "GuildRoomTypes" /* 4995 */;
import GuildRoomSeats from "GuildRoomSeats" /* 4996 */;
import GuildRoomAnalytics from "GuildRoomAnalytics" /* 5015 */;
import GuildRoomsExperiment from "GuildRoomsExperiment" /* 5036 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildRoomStore from "GuildRoomStore" /* 4994 */;

require = fn;
let closure_8 = async function _guildRoomConnect(arg0) {
  if (c13 === 2) {
    c13 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    while (true) {
      c13 = 2;
      let tmp4 = c12;
      if (0 === c12) {
        if (arg0 === 1) {
          c13 = 3;
          throw value;
        } else if (arg0 === 2) {
          c13 = 3;
          let obj4 = { value, done: true };
          return obj4;
        } else {
          closure_9 = tmp;
          closure_8 = tmp4;
          closure_136_0 = closure_0;
          closure_136_1 = closure_1;
          closure_136_2 = closure_2;
          closure_136_3 = closure_3;
          closure_136_4 = undefined;
          closure_136_5 = undefined;
          closure_136_6 = undefined;
          closure_136_7 = undefined;
          closure_136_8 = undefined;
          closure_136_9 = undefined;
          closure_136_10 = undefined;
          c11 = 1;
          closure_4 = closure_2;
          if (closure_2 == null) {
            closure_4 = React5;
          }
          closure_136_4 = closure_4;
          let UNSET = closure_3;
          let tmp40 = closure_4;
          if (closure_3 == null) {
            UNSET = GuildRoomSeats.GuildRoomSeats.UNSET;
          }
          closure_136_5 = UNSET;
          let HTTP = HTTPUtils.HTTP;
          let request = { url: Endpoints.GUILD_ROOM_CONNECT(closure_0, closure_1), body: null, rejectWithError: true };
          let obj5 = { position: tmp40, seat: UNSET };
          request.body = obj5;
          c12 = 2;
          c13 = 1;
          let obj7 = { value: HTTP.post(request), done: false };
          return obj7;
        }
      } else if (1 === tmp4) {
        c11 = 0;
        closure_136_11 = guildRoomObjectCreate;
        let obj6 = closure_137_1(closure_137_2[7]);
        let obj8 = { type: "GUILD_ROOM_CONNECT_FAILURE", guildId: null, roomId: null };
        obj8.guildId = closure_136_0;
        obj8.roomId = closure_136_1;
        let dispatchResult = obj6.dispatch(obj8);
        throw closure_136_11;
      } else if (2 === tmp4) {
        if (arg0 === 1) {
          c13 = 3;
          throw value;
        } else if (arg0 === 2) {
          c11 = 0;
          c13 = 3;
          let obj9 = { value, done: true };
          return obj9;
        } else {
          closure_136_6 = value;
          let obj13 = closure_137_0(closure_137_2[6]);
          closure_136_7 = obj13.serverGuildRoomToClient(closure_136_6.body);
          let obj14 = closure_137_1(closure_137_2[7]);
          let obj10 = { type: "GUILD_ROOM_CONNECT", room: null, guildId: null, pendingPosition: null, pendingSeat: null };
          obj10.room = closure_136_7;
          obj10.guildId = closure_136_0;
          obj10.pendingPosition = closure_136_4;
          obj10.pendingSeat = closure_136_5;
          let dispatchResult1 = obj14.dispatch(obj10);
          if (closure_136_1 !== closure_136_0) {
            let obj16 = closure_137_0(closure_137_2[8]);
            let obj11 = { guildId: null, channelId: null };
            obj11.guildId = closure_136_0;
            obj11.channelId = closure_136_1;
            let result = obj16.trackGuildRoomUserConnected(obj11);
            let obj18 = closure_137_0(closure_137_2[9]);
            let fireSurveyActionResult = obj18.fireSurveyAction(closure_137_0(closure_137_2[10]).SurveyActionTypes.GUILD_ROOM_JOINED);
            let users = closure_136_7.users;
            closure_136_8 = users.get(closure_137_4.getId());
            if (null != closure_136_8) {
              let obj12 = { updateType: "position", updateReason: "default", position: null };
              obj12.position = closure_136_8.position;
              let items = [obj12, , , ];
              let obj15 = { updateType: "seat", updateReason: "default", seat: null };
              obj15.seat = closure_136_8.seat;
              items[1] = obj15;
              let obj17 = { updateType: "status_id", updateReason: "default", statusId: null };
              obj17.statusId = closure_136_8.statusId;
              items[2] = obj17;
              let obj19 = { updateType: "status_text", updateReason: "default", statusText: null };
              obj19.statusText = closure_136_8.statusText;
              items[3] = obj19;
              closure_136_9 = items;
              closure_7 = closure_136_9;
              Endpoints = closure_136_9[Symbol.iterator]();
              while (Endpoints !== undefined) {
                closure_136_10 = tmp10;
                let obj = closure_137_0(closure_137_2[8]);
                let obj20 = { channelId: null, update: null };
                obj20.channelId = closure_136_1;
                obj20.update = closure_136_10;
                let result1 = obj.trackGuildRoomUserUpdated(obj20);
                c11 = 1;
                continue;
              }
              let obj3 = closure_137_0(closure_137_2[8]);
              let obj21 = { guildId: null, channelId: null, actualSeatPosition: null, targetSeatPosition: null, actualSeatId: null, targetSeatId: null };
              obj21.guildId = closure_136_0;
              obj21.channelId = closure_136_1;
              obj21.actualSeatPosition = closure_136_8.position;
              obj21.targetSeatPosition = closure_136_2;
              obj21.actualSeatId = closure_136_8.seat;
              obj21.targetSeatId = closure_136_3;
              let result2 = obj3.trackGuildRoomSeatSelected(obj21);
            }
          }
          c11 = 0;
          c13 = 3;
          return { value: "HermesInternal", done: null };
        }
      } else {
        c11 = 1;
        Endpoints.return();
        throw guildRoomObjectCreate;
      }
    }
  }
};
let closure_9 = async function _guildRoomUpdate(arg0) {
  closure_0 = arg0;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp5;
            closure_131_0 = closure_0;
            closure_131_1 = roomId;
            closure_131_2 = body;
            let room;
            let roomUsers;
            let roomObjects;
            closure_131_6 = undefined;
            closure_131_7 = undefined;
            closure_131_8 = undefined;
            room = authStore.getRoom(roomId);
            roomUsers = authStore.getRoomUsers(roomId);
            roomObjects = authStore.getRoomObjects(roomId);
            c6 = 1;
            const obj5 = { type: "GUILD_ROOM_LOCAL_UPDATE", roomId };
            let background;
            if (body != null) {
              background = body.background;
            }
            if (null != background) {
              obj5.background = body.background;
            }
            let user_position;
            if (body != null) {
              user_position = body.user_position;
            }
            if (null != user_position) {
              obj5.position = body.user_position;
            }
            let user_seat;
            if (body != null) {
              user_seat = body.user_seat;
            }
            if (null != user_seat) {
              obj5.seat = body.user_seat;
            }
            let user_status_id;
            if (body != null) {
              user_status_id = body.user_status_id;
            }
            if (null != user_status_id) {
              obj5.statusId = body.user_status_id;
            }
            let user_status_text;
            if (body != null) {
              user_status_text = body.user_status_text;
            }
            if (null != user_status_text) {
              obj5.statusText = body.user_status_text;
            }
            DispatcherDefault.dispatch(obj5);
            const HTTP = HTTPUtils.HTTP;
            const request = { url: Endpoints.GUILD_ROOM_UPDATE(closure_0, roomId), body, rejectWithError: true };
            c7 = 2;
            c8 = 1;
            const obj6 = { value: HTTP.post(request), done: false };
            return obj6;
          }
        } else if (1 === tmp8) {
          c6 = 0;
          closure_131_9 = closure_5;
          const obj8 = { type: "GUILD_ROOM_UPDATE_FAILURE", originalRoom: room, originalRoomUsers: roomUsers, originalRoomObjects: roomObjects, guildId: closure_131_0 };
          closure_132_1(closure_132_2[7]).dispatch(obj8);
          throw closure_131_9;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_131_6 = value;
          closure_131_7 = closure_132_0(closure_132_2[6]).serverGuildRoomToClient(closure_131_6.body);
          if (closure_131_0 !== closure_131_1) {
            let user_position1;
            if (closure_131_2 != null) {
              user_position1 = closure_131_2.user_position;
            }
            if (null != user_position1) {
              const obj11 = { channelId: closure_131_1, update: null };
              const obj13 = { updateType: "position", updateReason: "user_selected", position: closure_131_2.user_position };
              obj11.update = obj13;
              const result = closure_132_0(closure_132_2[8]).trackGuildRoomUserUpdated(obj11);
              const obj = closure_132_0(closure_132_2[8]);
            }
            let user_status_id1;
            if (closure_131_2 != null) {
              user_status_id1 = closure_131_2.user_status_id;
            }
            if (null != user_status_id1) {
              const obj14 = { channelId: closure_131_1, update: null };
              const obj15 = { updateType: "status_id", updateReason: "user_selected", statusId: closure_131_2.user_status_id };
              obj14.update = obj15;
              const result1 = closure_132_0(closure_132_2[8]).trackGuildRoomUserUpdated(obj14);
              const obj4 = closure_132_0(closure_132_2[8]);
            }
            let user_status_text1;
            if (closure_131_2 != null) {
              user_status_text1 = closure_131_2.user_status_text;
            }
            if (null != user_status_text1) {
              const obj17 = { channelId: closure_131_1, update: null };
              const obj19 = { updateType: "status_text", updateReason: "user_selected", statusText: closure_131_2.user_status_text };
              obj17.update = obj19;
              const result2 = closure_132_0(closure_132_2[8]).trackGuildRoomUserUpdated(obj17);
              const obj7 = closure_132_0(closure_132_2[8]);
            }
            let user_position2;
            if (closure_131_2 != null) {
              user_position2 = closure_131_2.user_position;
            }
            if (null != user_position2) {
              const users = closure_131_7.users;
              closure_131_8 = users.get(closure_132_4.getId());
              if (null != closure_131_8) {
                const obj20 = { guildId: closure_131_0, channelId: closure_131_1, actualSeatPosition: closure_131_8.position, targetSeatPosition: closure_131_2.user_position, actualSeatId: closure_131_8.seat, targetSeatId: closure_131_2.user_seat };
                const result3 = closure_132_0(closure_132_2[8]).trackGuildRoomSeatSelected(obj20);
                const obj10 = closure_132_0(closure_132_2[8]);
              }
            }
            let background1;
            if (closure_131_2 != null) {
              background1 = closure_131_2.background;
            }
            if (null != background1) {
              const obj21 = { guildId: closure_131_0, channelId: closure_131_1, update: null };
              const obj22 = { updateType: "background", background: closure_131_2.background };
              obj21.update = obj22;
              const result4 = closure_132_0(closure_132_2[8]).trackGuildRoomUpdated(obj21);
              const obj12 = closure_132_0(closure_132_2[8]);
            }
          }
          c6 = 0;
          c8 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp81) {
        closure_5 = tmp81;
        if (tmp4 === c6) {
          c8 = tmp2;
          throw tmp81;
        } else {
          c7 = tmp;
        }
      }
    }
  })();
};
function guildRoomObjectCreate() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _guildRoomObjectCreate(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  c4 = 0;
  c3 = 0;
  return (async (arg0, value, arg2) => {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.GUILD_ROOM_OBJECT_CREATE(closure_0, closure_1), body, rejectWithError: true };
    await HTTP.post(request);
    return value;
  })();
};
let closure_12 = async function _guildRoomObjectUpdate(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  c5 = 0;
  c4 = 0;
  return (async (arg0, value, arg2, arg3) => {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.GUILD_ROOM_OBJECT_UPDATE(closure_0, closure_1, closure_2), body, rejectWithError: true };
    await HTTP.post(request);
    return value;
  })();
};
function guildRoomObjectDelete() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_14 = async function _guildRoomObjectDelete(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  c5 = 0;
  c4 = 0;
  return (async (arg0, value, arg2, arg3) => {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.GUILD_ROOM_OBJECT_DELETE(closure_0, closure_1, closure_2), body, rejectWithError: true };
    await HTTP.del(request);
    return value;
  })();
};
function deletePendingGuildRoomNote(roomId) {
  DispatcherDefault.dispatch({ type: "GUILD_ROOM_PENDING_NOTE_DELETE", roomId });
}
let closure_16 = async function _createGuildRoomNote(arg0) {
  closure_0 = arg0;
  c8 = 0;
  c9 = 0;
  c7 = 0;
  return (async (arg0, value, arg2, arg3) => {
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_5 = tmp3;
            closure_4 = tmp7;
            closure_132_0 = closure_0;
            closure_132_1 = roomId;
            closure_132_2 = undefined;
            const _Date = Date;
            const fromTimestampResult = SnowflakeUtilsDefault.fromTimestamp(Date.now());
            closure_132_2 = fromTimestampResult;
            const obj5 = { type: "GUILD_ROOM_NOTE_CREATE_START", roomId, localId: fromTimestampResult, position };
            DispatcherDefault.dispatch(obj5);
            deletePendingGuildRoomNote(roomId);
            c7 = 1;
            const obj6 = { object_type: GuildRoomTypes.GuildRoomObjectTypes.NOTE, content, position };
            c8 = 2;
            c9 = 1;
            const obj7 = { value: guildRoomObjectCreate(closure_0, roomId, obj6), done: false };
            return obj7;
          }
        } else if (1 === tmp7) {
          c7 = 0;
          closure_132_3 = closure_6;
          const obj8 = { type: "GUILD_ROOM_NOTE_CREATE_FAILURE", roomId: closure_132_1, localId: closure_132_2 };
          closure_133_1(closure_133_2[7]).dispatch(obj8);
          throw closure_132_3;
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 0;
          c9 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          if (closure_132_1 !== closure_132_0) {
            const obj12 = { interactionType: "note_created", guildId: closure_132_0, channelId: closure_132_1 };
            const result = closure_133_0(closure_133_2[8]).trackGuildRoomObjectInteracted(obj12);
            const obj = closure_133_0(closure_133_2[8]);
          }
          c7 = 0;
          c9 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp27) {
        closure_6 = tmp27;
        if (tmp4 === c7) {
          c9 = tmp2;
          throw tmp27;
        } else {
          c8 = tmp;
        }
      }
    }
  })();
};
let closure_17 = async function _deleteGuildRoomNote(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          const obj4 = { object_type: GuildRoomTypes.GuildRoomObjectTypes.NOTE };
          c5 = 1;
          c6 = 1;
          const obj5 = { value: guildRoomObjectDelete(closure_0, closure_1, closure_2, obj4), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        if (closure_131_1 !== closure_131_0) {
          const obj7 = { interactionType: "note_deleted", guildId: closure_131_0, channelId: closure_131_1 };
          const result = closure_132_0(closure_132_2[8]).trackGuildRoomObjectInteracted(obj7);
          const obj = closure_132_0(closure_132_2[8]);
        }
        c6 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp15) {
      c6 = tmp;
      throw tmp15;
    }
  }
};
let closure_18 = async function _fetchGuildRoom(arg0) {
  closure_3 = tmp3;
  closure_130_0 = closure_0;
  const HTTP = HTTPUtils.HTTP;
  await HTTP.get({ url: Endpoints.GUILD_ROOM(closure_0, closure_1), rejectWithError: true });
  if (1 === tmp7) {
    c5 = 0;
    closure_131_0(closure_131_2[13]).handleGuildRoomError({ silent: true });
    c7 = 3;
    closure_131_0(closure_131_2[13]);
  } else if (arg0 === 1) {
    c7 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_130_1 = value;
    closure_130_2 = closure_131_0(closure_131_2[6]).serverGuildRoomToClient(closure_130_1.body);
    closure_131_0(closure_131_2[6]);
    closure_131_1(closure_131_2[7]).dispatch({ type: "GUILD_ROOM_FETCH_SUCCESS", guildId: closure_130_0, room: closure_130_2 });
    c5 = 0;
    closure_131_1(closure_131_2[7]);
  }
  return value;
};
let Endpoints = fn(1074).Endpoints;
let closure_7 = { x: 0, y: 0 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_rooms/GuildRoomActionCreators.shared.tsx");

export const guildRoomConnect = function guildRoomConnect() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const guildRoomDisconnect = function guildRoomDisconnect(guildId, channelId) {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "GUILD_ROOM_DISCONNECT", userId: AuthenticationStore.getId(), roomId: channelId });
  if (channelId !== guildId) {
    const obj4 = { guildId, channelId };
    const result = GuildRoomAnalytics.trackGuildRoomUserDisconnected(obj4);
  }
  const obj2 = { type: "GUILD_ROOM_DISCONNECT", userId: AuthenticationStore.getId(), roomId: channelId };
};
export const guildRoomLocalDisconnect = function guildRoomLocalDisconnect(userId, oldChannelId) {
  DispatcherDefault.dispatch({ type: "GUILD_ROOM_DISCONNECT", userId, roomId: oldChannelId });
};
export const guildRoomUpdate = function guildRoomUpdate() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const clearGuildRoomPendingPosition = function clearGuildRoomPendingPosition() {
  DispatcherDefault.dispatch({ type: "GUILD_ROOM_LOCAL_POSITION_CLEARED" });
};
export const selectGuildRoomLocalPosition = function selectGuildRoomLocalPosition(position, seat) {
  DispatcherDefault.dispatch({ type: "GUILD_ROOM_LOCAL_POSITION_REQUESTED", position, seat });
};
export const guildRoomToggleLayout = function guildRoomToggleLayout(roomId) {
  DispatcherDefault.dispatch({ type: "GUILD_ROOM_TOGGLE_LAYOUT", roomId });
};
export { guildRoomObjectCreate };
export const guildRoomObjectUpdate = function guildRoomObjectUpdate() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { guildRoomObjectDelete };
export const startPendingGuildRoomNote = function startPendingGuildRoomNote(roomId) {
  DispatcherDefault.dispatch({ type: "GUILD_ROOM_PENDING_NOTE_START", roomId });
};
export const placePendingGuildRoomNote = function placePendingGuildRoomNote(roomId, position) {
  DispatcherDefault.dispatch({ type: "GUILD_ROOM_PENDING_NOTE_PLACE", roomId, position });
};
export { deletePendingGuildRoomNote };
export const createGuildRoomNote = function createGuildRoomNote() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteGuildRoomNote = function deleteGuildRoomNote() {
  const self = this;
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchGuildRoom = function fetchGuildRoom() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setGuildRoomVideoOverlayVisibility = function setGuildRoomVideoOverlayVisibility(value, channelId) {
  const videoOverlayVisibility = GuildRoomStore.getVideoOverlayVisibility();
  DispatcherDefault.dispatch({ type: "GUILD_ROOM_SET_VIDEO_OVERLAY_VISIBILITY", value });
  if (value !== videoOverlayVisibility) {
    let str = "video_overlay_closed";
    if (value) {
      str = "video_overlay_opened";
    }
    const obj4 = { interactionType: str, channelId };
    const result = GuildRoomAnalytics.trackGuildRoomInteracted(obj4);
  }
  const obj2 = { type: "GUILD_ROOM_SET_VIDEO_OVERLAY_VISIBILITY", value };
};
export const maybeSetGuildRoomVideoOverlay = function maybeSetGuildRoomVideoOverlay(value, guildId, channelId) {
  if (obj.getGuildRoomsConfig(obj2, { autoTrackExposure: false }).enabled) {
    const videoOverlayVisibility = GuildRoomStore.getVideoOverlayVisibility();
    const obj4 = { type: "GUILD_ROOM_SET_VIDEO_OVERLAY_VISIBILITY", value };
    DispatcherDefault.dispatch(obj4);
    if (value !== videoOverlayVisibility) {
      let str = "video_overlay_closed";
      if (value) {
        str = "video_overlay_opened";
      }
      const obj5 = { interactionType: str, channelId };
      const result = GuildRoomAnalytics.trackGuildRoomInteracted(obj5);
      const tmpResult = GuildRoomAnalytics;
    }
  }
  obj = GuildRoomsExperiment;
  obj2 = { guildId, location: "maybeSetGuildRoomVideoOverlay" };
};
export const setGuildRoomRememberVideoOverlayVisibility = function setGuildRoomRememberVideoOverlayVisibility(rememberVideoOverlayVisibility) {
  DispatcherDefault.dispatch({ type: "GUILD_ROOM_SET_REMEMBER_VIDEO_OVERLAY_VISIBILITY", rememberVideoOverlayVisibility });
  const obj2 = { type: "GUILD_ROOM_SET_REMEMBER_VIDEO_OVERLAY_VISIBILITY", rememberVideoOverlayVisibility };
  const result = GuildRoomAnalytics.trackGuildRoomSettingsUpdate({ rememberVideoOverlayVisibility });
};