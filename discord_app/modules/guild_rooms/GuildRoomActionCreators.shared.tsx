// discord_app/modules/guild_rooms/GuildRoomActionCreators.shared.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import GuildRoomTypes from "GuildRoomTypes.tsx";
import GuildRoomSeats from "../../../discord_common/js/shared/shared-constants/GuildRoomSeats.tsx";
import GuildRoomAnalytics from "GuildRoomAnalytics.tsx";
import GuildRoomsExperiment from "GuildRoomsExperiment.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import GuildRoomStore from "GuildRoomStore.tsx";

require = fn;
let closure_8 = async function _guildRoomConnect(arg0) {
  if (c13 === 2) {
    c13 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
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
          let obj1 = { position: tmp40, seat: UNSET };
          request.body = obj1;
          c12 = 2;
          c13 = 1;
          let obj2 = { value: HTTP.post(request), done: false };
          return obj2;
        }
      } else if (1 === tmp4) {
        c11 = 0;
        closure_136_11 = guildRoomObjectCreate;
        let obj5 = closure_137_1(closure_137_2[7]);
        let obj3 = { type: "GUILD_ROOM_CONNECT_FAILURE", guildId: null, roomId: null };
        obj3.guildId = closure_136_0;
        obj3.roomId = closure_136_1;
        let dispatchResult = obj5.dispatch(obj3);
        throw closure_136_11;
      } else if (2 === tmp4) {
        if (arg0 === 1) {
          c13 = 3;
          throw value;
        } else if (arg0 === 2) {
          c11 = 0;
          c13 = 3;
          let obj4 = { value, done: true };
          return obj4;
        } else {
          closure_136_6 = value;
          let obj12 = closure_137_0(closure_137_2[6]);
          closure_136_7 = obj12.serverGuildRoomToClient(closure_136_6.body);
          let obj14 = closure_137_1(closure_137_2[7]);
          obj5 = { type: "GUILD_ROOM_CONNECT", room: null, guildId: null, pendingPosition: null, pendingSeat: null };
          obj5.room = closure_136_7;
          obj5.guildId = closure_136_0;
          obj5.pendingPosition = closure_136_4;
          obj5.pendingSeat = closure_136_5;
          let dispatchResult1 = obj14.dispatch(obj5);
          if (closure_136_1 !== closure_136_0) {
            let obj16 = closure_137_0(closure_137_2[8]);
            let obj6 = { guildId: null, channelId: null };
            obj6.guildId = closure_136_0;
            obj6.channelId = closure_136_1;
            let result = obj16.trackGuildRoomUserConnected(obj6);
            let obj18 = closure_137_0(closure_137_2[9]);
            let fireSurveyActionResult = obj18.fireSurveyAction(
              closure_137_0(closure_137_2[10]).SurveyActionTypes.GUILD_ROOM_JOINED,
            );
            let users = closure_136_7.users;
            closure_136_8 = users.get(closure_137_4.getId());
            if (null != closure_136_8) {
              let obj7 = { updateType: "position", updateReason: "default", position: null };
              obj7.position = closure_136_8.position;
              let items = [obj7, , ,];
              let obj8 = { updateType: "seat", updateReason: "default", seat: null };
              obj8.seat = closure_136_8.seat;
              items[1] = obj8;
              let obj9 = { updateType: "status_id", updateReason: "default", statusId: null };
              obj9.statusId = closure_136_8.statusId;
              items[2] = obj9;
              let obj10 = { updateType: "status_text", updateReason: "default", statusText: null };
              obj10.statusText = closure_136_8.statusText;
              items[3] = obj10;
              closure_136_9 = items;
              closure_7 = closure_136_9;
              Endpoints = closure_136_9[Symbol.iterator]();
              while (Endpoints !== undefined) {
                closure_136_10 = tmp10;
                obj = closure_137_0(closure_137_2[8]);
                let obj11 = { channelId: null, update: null };
                obj11.channelId = closure_136_1;
                obj11.update = closure_136_10;
                let result1 = obj.trackGuildRoomUserUpdated(obj11);
                c11 = 1;
                continue;
              }
              obj2 = closure_137_0(closure_137_2[8]);
              obj12 = {
                guildId: null,
                channelId: null,
                actualSeatPosition: null,
                targetSeatPosition: null,
                actualSeatId: null,
                targetSeatId: null,
              };
              obj12.guildId = closure_136_0;
              obj12.channelId = closure_136_1;
              obj12.actualSeatPosition = closure_136_8.position;
              obj12.targetSeatPosition = closure_136_2;
              obj12.actualSeatId = closure_136_8.seat;
              obj12.targetSeatId = closure_136_3;
              let result2 = obj2.trackGuildRoomSeatSelected(obj12);
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
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
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
            const obj1 = { type: "GUILD_ROOM_LOCAL_UPDATE", roomId };
            let background;
            if (body != null) {
              background = body.background;
            }
            if (null != background) {
              obj1.background = body.background;
            }
            let user_position;
            if (body != null) {
              user_position = body.user_position;
            }
            if (null != user_position) {
              obj1.position = body.user_position;
            }
            let user_seat;
            if (body != null) {
              user_seat = body.user_seat;
            }
            if (null != user_seat) {
              obj1.seat = body.user_seat;
            }
            let user_status_id;
            if (body != null) {
              user_status_id = body.user_status_id;
            }
            if (null != user_status_id) {
              obj1.statusId = body.user_status_id;
            }
            let user_status_text;
            if (body != null) {
              user_status_text = body.user_status_text;
            }
            if (null != user_status_text) {
              obj1.statusText = body.user_status_text;
            }
            DispatcherDefault.dispatch(obj1);
            const HTTP = HTTPUtils.HTTP;
            const request = { url: Endpoints.GUILD_ROOM_UPDATE(closure_0, roomId), body, rejectWithError: true };
            c7 = 2;
            c8 = 1;
            const obj2 = { value: HTTP.post(request), done: false };
            return obj2;
          }
        } else if (1 === tmp8) {
          c6 = 0;
          closure_131_9 = closure_5;
          let obj3 = {
            type: "GUILD_ROOM_UPDATE_FAILURE",
            originalRoom: room,
            originalRoomUsers: roomUsers,
            originalRoomObjects: roomObjects,
            guildId: closure_131_0,
          };
          closure_132_1(closure_132_2[7]).dispatch(obj3);
          throw closure_131_9;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_131_6 = value;
          closure_131_7 = closure_132_0(closure_132_2[6]).serverGuildRoomToClient(closure_131_6.body);
          if (closure_131_0 !== closure_131_1) {
            let user_position1;
            if (closure_131_2 != null) {
              user_position1 = closure_131_2.user_position;
            }
            if (null != user_position1) {
              obj = closure_132_0(closure_132_2[8]);
              const obj5 = { channelId: closure_131_1, update: null };
              let obj6 = {
                updateType: "position",
                updateReason: "user_selected",
                position: closure_131_2.user_position,
              };
              obj5.update = obj6;
              const result = obj.trackGuildRoomUserUpdated(obj5);
            }
            let user_status_id1;
            if (closure_131_2 != null) {
              user_status_id1 = closure_131_2.user_status_id;
            }
            if (null != user_status_id1) {
              obj3 = closure_132_0(closure_132_2[8]);
              const obj7 = { channelId: closure_131_1, update: null };
              const obj8 = {
                updateType: "status_id",
                updateReason: "user_selected",
                statusId: closure_131_2.user_status_id,
              };
              obj7.update = obj8;
              const result1 = obj3.trackGuildRoomUserUpdated(obj7);
            }
            let user_status_text1;
            if (closure_131_2 != null) {
              user_status_text1 = closure_131_2.user_status_text;
            }
            if (null != user_status_text1) {
              obj6 = closure_132_0(closure_132_2[8]);
              let obj9 = { channelId: closure_131_1, update: null };
              const obj10 = {
                updateType: "status_text",
                updateReason: "user_selected",
                statusText: closure_131_2.user_status_text,
              };
              obj9.update = obj10;
              const result2 = obj6.trackGuildRoomUserUpdated(obj9);
            }
            let user_position2;
            if (closure_131_2 != null) {
              user_position2 = closure_131_2.user_position;
            }
            if (null != user_position2) {
              const users = closure_131_7.users;
              closure_131_8 = users.get(closure_132_4.getId());
              if (null != closure_131_8) {
                obj9 = closure_132_0(closure_132_2[8]);
                let obj11 = {
                  guildId: closure_131_0,
                  channelId: closure_131_1,
                  actualSeatPosition: closure_131_8.position,
                  targetSeatPosition: closure_131_2.user_position,
                  actualSeatId: closure_131_8.seat,
                  targetSeatId: closure_131_2.user_seat,
                };
                const result3 = obj9.trackGuildRoomSeatSelected(obj11);
              }
            }
            let background1;
            if (closure_131_2 != null) {
              background1 = closure_131_2.background;
            }
            if (null != background1) {
              obj11 = closure_132_0(closure_132_2[8]);
              const obj12 = { guildId: closure_131_0, channelId: closure_131_1, update: null };
              const obj13 = { updateType: "background", background: closure_131_2.background };
              obj12.update = obj13;
              const result4 = obj11.trackGuildRoomUpdated(obj12);
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
    const request = {
      url: Endpoints.GUILD_ROOM_OBJECT_UPDATE(closure_0, closure_1, closure_2),
      body,
      rejectWithError: true,
    };
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
    const request = {
      url: Endpoints.GUILD_ROOM_OBJECT_DELETE(closure_0, closure_1, closure_2),
      body,
      rejectWithError: true,
    };
    await HTTP.del(request);
    return value;
  })();
};
function deletePendingGuildRoomNote(roomId) {
  const obj = { type: "GUILD_ROOM_PENDING_NOTE_DELETE", roomId };
  obj.dispatch(obj);
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
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_5 = tmp3;
            closure_4 = tmp7;
            closure_132_0 = closure_0;
            closure_132_1 = roomId;
            closure_132_2 = undefined;
            const _Date = Date;
            const fromTimestampResult = SnowflakeUtilsDefault.fromTimestamp(Date.now());
            closure_132_2 = fromTimestampResult;
            const obj1 = { type: "GUILD_ROOM_NOTE_CREATE_START", roomId, localId: fromTimestampResult, position };
            DispatcherDefault.dispatch(obj1);
            deletePendingGuildRoomNote(roomId);
            c7 = 1;
            const obj2 = { object_type: GuildRoomTypes.GuildRoomObjectTypes.NOTE, content, position };
            c8 = 2;
            c9 = 1;
            let obj3 = { value: guildRoomObjectCreate(closure_0, roomId, obj2), done: false };
            return obj3;
          }
        } else if (1 === tmp7) {
          c7 = 0;
          closure_132_3 = closure_6;
          obj3 = closure_133_1(closure_133_2[7]);
          const obj4 = { type: "GUILD_ROOM_NOTE_CREATE_FAILURE", roomId: closure_132_1, localId: closure_132_2 };
          obj3.dispatch(obj4);
          throw closure_132_3;
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 0;
          c9 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          if (closure_132_1 !== closure_132_0) {
            obj = closure_133_0(closure_133_2[8]);
            const obj6 = { interactionType: "note_created", guildId: closure_132_0, channelId: closure_132_1 };
            const result = obj.trackGuildRoomObjectInteracted(obj6);
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
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          const obj1 = { object_type: GuildRoomTypes.GuildRoomObjectTypes.NOTE };
          c5 = 1;
          c6 = 1;
          const obj2 = { value: guildRoomObjectDelete(closure_0, closure_1, closure_2, obj1), done: false };
          return obj2;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        if (closure_131_1 !== closure_131_0) {
          obj = closure_132_0(closure_132_2[8]);
          const obj4 = { interactionType: "note_deleted", guildId: closure_131_0, channelId: closure_131_1 };
          const result = obj.trackGuildRoomObjectInteracted(obj4);
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
  let obj1 = { url: Endpoints.GUILD_ROOM(closure_0, closure_1), rejectWithError: true };
  await HTTP.get(obj1);
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
    obj1 = closure_131_1(closure_131_2[7]);
    obj1.dispatch({ type: "GUILD_ROOM_FETCH_SUCCESS", guildId: closure_130_0, room: closure_130_2 });
    c5 = 0;
    closure_131_0(closure_131_2[6]);
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
  let obj = { type: "GUILD_ROOM_DISCONNECT", userId: AuthenticationStore.getId(), roomId: channelId };
  obj.dispatch(obj);
  if (channelId !== guildId) {
    obj = { guildId, channelId };
    const result = GuildRoomAnalytics.trackGuildRoomUserDisconnected(obj);
  }
};
export const guildRoomLocalDisconnect = function guildRoomLocalDisconnect(userId, oldChannelId) {
  const obj = { type: "GUILD_ROOM_DISCONNECT", userId, roomId: oldChannelId };
  obj.dispatch(obj);
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
  const obj = { type: "GUILD_ROOM_LOCAL_POSITION_REQUESTED", position, seat };
  obj.dispatch(obj);
};
export const guildRoomToggleLayout = function guildRoomToggleLayout(roomId) {
  const obj = { type: "GUILD_ROOM_TOGGLE_LAYOUT", roomId };
  obj.dispatch(obj);
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
  const obj = { type: "GUILD_ROOM_PENDING_NOTE_START", roomId };
  obj.dispatch(obj);
};
export const placePendingGuildRoomNote = function placePendingGuildRoomNote(roomId, position) {
  const obj = { type: "GUILD_ROOM_PENDING_NOTE_PLACE", roomId, position };
  obj.dispatch(obj);
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
  let obj = { type: "GUILD_ROOM_SET_VIDEO_OVERLAY_VISIBILITY", value };
  obj.dispatch(obj);
  if (value !== videoOverlayVisibility) {
    let str = "video_overlay_closed";
    if (value) {
      str = "video_overlay_opened";
    }
    obj = { interactionType: str, channelId };
    const result = GuildRoomAnalytics.trackGuildRoomInteracted(obj);
  }
};
export const maybeSetGuildRoomVideoOverlay = function maybeSetGuildRoomVideoOverlay(value, guildId, channelId) {
  let obj = { guildId, location: "maybeSetGuildRoomVideoOverlay" };
  if (obj.getGuildRoomsConfig(obj, { autoTrackExposure: false }).enabled) {
    const videoOverlayVisibility = GuildRoomStore.getVideoOverlayVisibility();
    obj = { type: "GUILD_ROOM_SET_VIDEO_OVERLAY_VISIBILITY", value };
    DispatcherDefault.dispatch(obj);
    if (value !== videoOverlayVisibility) {
      let str = "video_overlay_closed";
      if (value) {
        str = "video_overlay_opened";
      }
      const obj1 = { interactionType: str, channelId };
      const result = GuildRoomAnalytics.trackGuildRoomInteracted(obj1);
      const tmpResult = GuildRoomAnalytics;
    }
  }
};
export const setGuildRoomRememberVideoOverlayVisibility = function setGuildRoomRememberVideoOverlayVisibility(
  rememberVideoOverlayVisibility,
) {
  let obj = { type: "GUILD_ROOM_SET_REMEMBER_VIDEO_OVERLAY_VISIBILITY", rememberVideoOverlayVisibility };
  obj.dispatch(obj);
  obj = { rememberVideoOverlayVisibility };
  const result = GuildRoomAnalytics.trackGuildRoomSettingsUpdate(obj);
};
