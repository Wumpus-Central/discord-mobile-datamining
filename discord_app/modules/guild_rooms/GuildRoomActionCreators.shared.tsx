// discord_app/modules/guild_rooms/GuildRoomActionCreators.shared.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import GuildRoomTypes from "GuildRoomTypes.tsx";
import GuildRoomSeats from "../../../discord_common/js/shared/shared-constants/GuildRoomSeats.tsx";
import GuildRoomAnalytics from "GuildRoomAnalytics.tsx";
import GuildRoomsExperiment from "GuildRoomsExperiment.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import GuildRoomStore from "GuildRoomStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_3,
  closure_4,
  closure_5,
  closure_6,
  closure_8,
  originalRoom,
  originalRoomObjects,
  originalRoomUsers,
  pendingPosition,
  pendingSeat,
  room,
  update;

let obj = function _guildRoomConnect() {
  obj = _asyncToGenerator(async (guildId, arg1, targetSeatPosition, targetSeatId) => {
    let closure_1 = arg1;
    let c12 = 0;
    let c13 = 0;
    let c11 = 0;
    return (async (arg0, value, arg2, arg3) => {
      let obj5;
      if (c13 === 2) {
        c13 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        while (true) {
          let items;
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
              pendingSeat = undefined;
              closure_6 = undefined;
              room = undefined;
              closure_8 = undefined;
              items = undefined;
              update = undefined;
              c11 = 1;
              pendingPosition = targetSeatPosition;
              if (targetSeatPosition == null) {
                pendingPosition = closure_2_7;
              }
              let UNSET = targetSeatId;
              let tmp40 = pendingPosition;
              if (targetSeatId == null) {
                UNSET = GuildRoomSeats.GuildRoomSeats.UNSET;
              }
              pendingSeat = UNSET;
              let HTTP = HTTPUtils.HTTP;
              let request = {
                url: Endpoints.GUILD_ROOM_CONNECT(guildId, channelId),
                body: obj5,
                rejectWithError: true,
              };
              let post = HTTP.post;
              obj5 = { position: tmp40, seat: UNSET };
              c12 = 2;
              c13 = 1;
              let obj7 = { value: post(request), done: false };
              return obj7;
            }
          } else if (1 === tmp4) {
            c11 = 0;
            let closure_11 = closure_1_10;
            let obj6 = closure_137_1(closure_137_2[7]);
            let obj8 = { type: "GUILD_ROOM_CONNECT_FAILURE", guildId, roomId: channelId };
            let dispatchResult = obj6.dispatch(obj8);
            throw closure_11;
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
              closure_6 = value;
              let obj13 = closure_137_0(closure_137_2[6]);
              room = obj13.serverGuildRoomToClient(closure_6.body);
              let obj14 = closure_137_1(closure_137_2[7]);
              let obj10 = { type: "GUILD_ROOM_CONNECT", room, guildId, pendingPosition, pendingSeat };
              let dispatchResult1 = obj14.dispatch(obj10);
              if (channelId !== guildId) {
                let obj16 = closure_137_0(closure_137_2[8]);
                let obj11 = { guildId, channelId };
                let result = obj16.trackGuildRoomUserConnected(obj11);
                let obj18 = closure_137_0(closure_137_2[9]);
                let fireSurveyActionResult = obj18.fireSurveyAction(
                  closure_137_0(closure_137_2[10]).SurveyActionTypes.GUILD_ROOM_JOINED,
                );
                let users = room.users;
                closure_8 = users.get(closure_137_4.getId());
                if (null != closure_8) {
                  let obj12 = { updateType: "position", updateReason: "default", position: closure_8.position };
                  items = [obj12, , ,];
                  let obj15 = { updateType: "seat", updateReason: "default", seat: closure_8.seat };
                  items[1] = obj15;
                  let obj17 = { updateType: "status_id", updateReason: "default", statusId: closure_8.statusId };
                  items[2] = obj17;
                  let obj19 = { updateType: "status_text", updateReason: "default", statusText: closure_8.statusText };
                  items[3] = obj19;
                  room = items;
                  closure_6 = items[Symbol.iterator]();
                  while (closure_6 !== undefined) {
                    update = tmp10;
                    obj = closure_137_0(closure_137_2[8]);
                    let obj20 = { channelId, update };
                    let result1 = obj.trackGuildRoomUserUpdated(obj20);
                    c11 = 1;
                    continue;
                  }
                  let obj3 = closure_137_0(closure_137_2[8]);
                  let obj21 = {
                    guildId,
                    channelId,
                    actualSeatPosition: closure_8.position,
                    targetSeatPosition,
                    actualSeatId: closure_8.seat,
                    targetSeatId,
                  };
                  let result2 = obj3.trackGuildRoomSeatSelected(obj21);
                }
              }
              c11 = 0;
              c13 = 3;
              return { value: "IconComponent", done: null };
            }
          } else {
            c11 = 1;
            closure_6.return();
            throw closure_1_10;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _guildRoomUpdate() {
  obj = _asyncToGenerator(async (guildId, arg1, body) => {
    let closure_1 = arg1;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let obj13;
      let obj15;
      let obj19;
      let obj22;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c6;
        try {
          let postResult;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              body = undefined;
              users = undefined;
              c8 = undefined;
              originalRoom = authStore.getRoom(channelId);
              originalRoomUsers = authStore.getRoomUsers(channelId);
              originalRoomObjects = authStore.getRoomObjects(channelId);
              c6 = 1;
              const obj5 = { type: "GUILD_ROOM_LOCAL_UPDATE", roomId: channelId };
              postResult = body == null;
              let background;
              if (!postResult) {
                background = body.background;
              }
              if (null != background) {
                obj5.background = body.background;
              }
              postResult = body == null;
              let user_position;
              if (!postResult) {
                user_position = body.user_position;
              }
              if (null != user_position) {
                obj5.position = body.user_position;
              }
              postResult = body == null;
              let user_seat;
              if (!postResult) {
                user_seat = body.user_seat;
              }
              if (null != user_seat) {
                obj5.seat = body.user_seat;
              }
              postResult = body == null;
              let user_status_id;
              if (!postResult) {
                user_status_id = body.user_status_id;
              }
              if (null != user_status_id) {
                obj5.statusId = body.user_status_id;
              }
              postResult = body == null;
              let user_status_text;
              if (!postResult) {
                user_status_text = body.user_status_text;
              }
              if (null != user_status_text) {
                obj5.statusText = body.user_status_text;
              }
              const obj18 = DispatcherDefault;
              obj18.dispatch(obj5);
              const HTTP = HTTPUtils.HTTP;
              const request = { url: Endpoints.GUILD_ROOM_UPDATE(guildId, channelId), body, rejectWithError: true };
              const post = HTTP.post;
              postResult = post(request);
              c7 = 2;
              c8 = 1;
              return { value: postResult, done: false };
            }
          } else if (1 === tmp4) {
            c6 = 0;
            let closure_9 = originalRoomObjects;
            const obj8 = {
              type: "GUILD_ROOM_UPDATE_FAILURE",
              originalRoom,
              originalRoomUsers,
              originalRoomObjects,
              guildId,
            };
            const obj16 = closure_132_1(closure_132_2[7]);
            postResult = obj16.dispatch(obj8);
            throw closure_9;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          } else {
            body = value;
            const obj23 = closure_132_0(closure_132_2[6]);
            users = obj23.serverGuildRoomToClient(body.body);
            postResult = guildId;
            if (guildId !== channelId) {
              postResult = body;
              let user_position1;
              if (body != null) {
                user_position1 = postResult.user_position;
              }
              if (null != user_position1) {
                const obj11 = { channelId, update: obj13 };
                obj13 = { updateType: "position", updateReason: "user_selected", position: body.user_position };
                obj = closure_132_0(closure_132_2[8]);
                const result = obj.trackGuildRoomUserUpdated(obj11);
              }
              postResult = body;
              let user_status_id1;
              if (body != null) {
                user_status_id1 = postResult.user_status_id;
              }
              if (null != user_status_id1) {
                const obj14 = { channelId, update: obj15 };
                obj15 = { updateType: "status_id", updateReason: "user_selected", statusId: body.user_status_id };
                const obj4 = closure_132_0(closure_132_2[8]);
                const result1 = obj4.trackGuildRoomUserUpdated(obj14);
              }
              postResult = body;
              let user_status_text1;
              if (body != null) {
                user_status_text1 = postResult.user_status_text;
              }
              if (null != user_status_text1) {
                const obj17 = { channelId, update: obj19 };
                obj19 = { updateType: "status_text", updateReason: "user_selected", statusText: body.user_status_text };
                const obj7 = closure_132_0(closure_132_2[8]);
                const result2 = obj7.trackGuildRoomUserUpdated(obj17);
              }
              postResult = body;
              let user_position2;
              if (body != null) {
                user_position2 = postResult.user_position;
              }
              if (null != user_position2) {
                users = users.users;
                postResult = users.get(closure_132_4.getId());
                c8 = postResult;
                if (null != c8) {
                  const obj20 = {
                    guildId,
                    channelId,
                    actualSeatPosition: c8.position,
                    targetSeatPosition: body.user_position,
                    actualSeatId: c8.seat,
                    targetSeatId: body.user_seat,
                  };
                  const obj10 = closure_132_0(closure_132_2[8]);
                  const result3 = obj10.trackGuildRoomSeatSelected(obj20);
                }
              }
              postResult = body;
              let background1;
              if (body != null) {
                background1 = postResult.background;
              }
              if (null != background1) {
                const obj21 = { guildId, channelId, update: obj22 };
                obj22 = { updateType: "background", background: body.background };
                const obj12 = closure_132_0(closure_132_2[8]);
                const result4 = obj12.trackGuildRoomUpdated(obj21);
              }
            }
            c6 = 0;
            c8 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp77) {
          originalRoomObjects = tmp77;
          if (0 === c6) {
            c8 = 3;
            throw tmp77;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function guildRoomObjectCreate() {
  return obj(...arguments);
}
obj = function _guildRoomObjectCreate() {
  obj = _asyncToGenerator(async (arg0, arg1, body) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c3 = 0;
    return (async (arg0, value, arg2) => {
      const HTTP = HTTPUtils.HTTP;
      const request = { url: Endpoints.GUILD_ROOM_OBJECT_CREATE(closure_0, closure_1), body, rejectWithError: true };
      const post = HTTP.post;
      await post(request);
      return value;
    })();
  });
  return obj(...arguments);
};
obj = function _guildRoomObjectUpdate() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2, body) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c4 = 0;
    return (async (arg0, value, arg2, arg3) => {
      const HTTP = HTTPUtils.HTTP;
      const request = {
        url: Endpoints.GUILD_ROOM_OBJECT_UPDATE(closure_0, closure_1, closure_2),
        body,
        rejectWithError: true,
      };
      const post = HTTP.post;
      await post(request);
      return value;
    })();
  });
  return obj(...arguments);
};
function guildRoomObjectDelete() {
  return obj(...arguments);
}
obj = function _guildRoomObjectDelete() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2, body) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c4 = 0;
    return (async (arg0, value, arg2, arg3) => {
      const HTTP = HTTPUtils.HTTP;
      const request = {
        url: Endpoints.GUILD_ROOM_OBJECT_DELETE(closure_0, closure_1, closure_2),
        body,
        rejectWithError: true,
      };
      const del = HTTP.del;
      await del(request);
      return value;
    })();
  });
  return obj(...arguments);
};
function deletePendingGuildRoomNote(roomId) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_ROOM_PENDING_NOTE_DELETE", roomId };
  obj.dispatch(obj2);
}
obj = function _createGuildRoomNote() {
  obj = _asyncToGenerator(async (guildId, arg1, arg2, position) => {
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (async (arg0, value, arg2, arg3) => {
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let localId;
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp;
              closure_4 = tmp4;
              const _Date = Date;
              const obj9 = SnowflakeUtilsDefault;
              const fromTimestampResult = obj9.fromTimestamp(Date.now());
              localId = fromTimestampResult;
              const obj5 = {
                type: "GUILD_ROOM_NOTE_CREATE_START",
                roomId: channelId,
                localId: fromTimestampResult,
                position,
              };
              const obj10 = DispatcherDefault;
              obj10.dispatch(obj5);
              deletePendingGuildRoomNote(channelId);
              c7 = 1;
              c8 = 2;
              c9 = 1;
              const obj6 = { object_type: GuildRoomTypes.GuildRoomObjectTypes.NOTE, content, position };
              const obj7 = { value: guildRoomObjectCreate(guildId, channelId, obj6), done: false };
              return obj7;
            }
          } else if (1 === c8) {
            c7 = 0;
            position = closure_6;
            const obj8 = { type: "GUILD_ROOM_NOTE_CREATE_FAILURE", roomId: channelId, localId };
            const obj4 = closure_133_1(closure_133_2[7]);
            obj4.dispatch(obj8);
            throw position;
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            return { value, done: true };
          } else {
            if (channelId !== guildId) {
              const obj12 = { interactionType: "note_created", guildId, channelId };
              obj = closure_133_0(closure_133_2[8]);
              const result = obj.trackGuildRoomObjectInteracted(obj12);
            }
            c7 = 0;
            c9 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp24) {
          closure_6 = tmp24;
          if (0 === c7) {
            c9 = 3;
            throw tmp24;
          } else {
            c8 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _deleteGuildRoomNote() {
  obj = _asyncToGenerator(async (guildId, channelId, arg2) => {
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_4 = tmp4;
              closure_3 = tmp;
              c5 = 1;
              c6 = 1;
              const obj4 = { object_type: GuildRoomTypes.GuildRoomObjectTypes.NOTE };
              const obj5 = { value: guildRoomObjectDelete(guildId, channelId, closure_2, obj4), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            if (channelId !== guildId) {
              const obj7 = { interactionType: "note_deleted", guildId, channelId };
              obj = closure_132_0(closure_132_2[8]);
              const result = obj.trackGuildRoomObjectInteracted(obj7);
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp14) {
          c6 = 3;
          throw tmp14;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchGuildRoom() {
  obj = _asyncToGenerator(async (guildId, arg1) => {
    let body = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              body = undefined;
              room = undefined;
              c5 = 1;
              const HTTP = HTTPUtils.HTTP;
              const get = HTTP.get;
              c6 = 2;
              c7 = 1;
              const obj6 = { url: Endpoints.GUILD_ROOM(guildId, body), rejectWithError: true };
              const obj7 = { value: get(obj6), done: false };
              return obj7;
            }
          } else {
            if (1 === c6) {
              c5 = 0;
              const obj5 = closure_131_0(closure_131_2[13]);
              obj5.handleGuildRoomError({ silent: true });
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              return { value, done: true };
            } else {
              body = value;
              obj = closure_131_0(closure_131_2[6]);
              room = obj.serverGuildRoomToClient(body.body);
              const obj9 = { type: "GUILD_ROOM_FETCH_SUCCESS", guildId, room };
              const obj2 = closure_131_1(closure_131_2[7]);
              obj2.dispatch(obj9);
              c5 = 0;
            }
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp20) {
          closure_4 = tmp20;
          if (0 === c5) {
            c7 = 3;
            throw tmp20;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
let closure_7 = { x: 0, y: 0 };
let result = size.fileFinishedImporting("modules/guild_rooms/GuildRoomActionCreators.shared.tsx");

export const guildRoomConnect = function guildRoomConnect() {
  return obj(...arguments);
};
export const guildRoomDisconnect = function guildRoomDisconnect(guildId, channelId) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_ROOM_DISCONNECT", userId: AuthenticationStore.getId(), roomId: channelId };
  obj.dispatch(obj2);
  if (channelId !== guildId) {
    const obj4 = { guildId, channelId };
    const obj3 = GuildRoomAnalytics;
    const result = obj3.trackGuildRoomUserDisconnected(obj4);
  }
};
export const guildRoomLocalDisconnect = function guildRoomLocalDisconnect(userId, oldChannelId) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_ROOM_DISCONNECT", userId, roomId: oldChannelId };
  obj.dispatch(obj2);
};
export const guildRoomUpdate = function guildRoomUpdate() {
  return obj(...arguments);
};
export const clearGuildRoomPendingPosition = function clearGuildRoomPendingPosition() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "GUILD_ROOM_LOCAL_POSITION_CLEARED" });
};
export const selectGuildRoomLocalPosition = function selectGuildRoomLocalPosition(position, seat) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_ROOM_LOCAL_POSITION_REQUESTED", position, seat };
  obj.dispatch(obj2);
};
export const guildRoomToggleLayout = function guildRoomToggleLayout(roomId) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_ROOM_TOGGLE_LAYOUT", roomId };
  obj.dispatch(obj2);
};
export { guildRoomObjectCreate };
export const guildRoomObjectUpdate = function guildRoomObjectUpdate() {
  return obj(...arguments);
};
export { guildRoomObjectDelete };
export const startPendingGuildRoomNote = function startPendingGuildRoomNote(roomId) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_ROOM_PENDING_NOTE_START", roomId };
  obj.dispatch(obj2);
};
export const placePendingGuildRoomNote = function placePendingGuildRoomNote(roomId, position) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_ROOM_PENDING_NOTE_PLACE", roomId, position };
  obj.dispatch(obj2);
};
export { deletePendingGuildRoomNote };
export const createGuildRoomNote = function createGuildRoomNote() {
  return obj(...arguments);
};
export const deleteGuildRoomNote = function deleteGuildRoomNote() {
  return obj(...arguments);
};
export const fetchGuildRoom = function fetchGuildRoom() {
  return obj(...arguments);
};
export const setGuildRoomVideoOverlayVisibility = function setGuildRoomVideoOverlayVisibility(value, channelId) {
  const videoOverlayVisibility = GuildRoomStore.getVideoOverlayVisibility();
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_ROOM_SET_VIDEO_OVERLAY_VISIBILITY", value };
  obj.dispatch(obj2);
  if (value !== videoOverlayVisibility) {
    let str = "video_overlay_closed";
    const trackGuildRoomInteracted = GuildRoomAnalytics.trackGuildRoomInteracted;
    GuildRoomAnalytics;
    if (value) {
      str = "video_overlay_opened";
    }
    const obj3 = { interactionType: str, channelId };
    const result = trackGuildRoomInteracted(obj3);
  }
};
export const maybeSetGuildRoomVideoOverlay = function maybeSetGuildRoomVideoOverlay(value, guildId, channelId) {
  obj = GuildRoomsExperiment;
  const obj2 = { guildId, location: "maybeSetGuildRoomVideoOverlay" };
  if (obj.getGuildRoomsConfig(obj2, { autoTrackExposure: false }).enabled) {
    const videoOverlayVisibility = GuildRoomStore.getVideoOverlayVisibility();
    const obj4 = { type: "GUILD_ROOM_SET_VIDEO_OVERLAY_VISIBILITY", value };
    const obj3 = DispatcherDefault;
    obj3.dispatch(obj4);
    if (value !== videoOverlayVisibility) {
      let str = "video_overlay_closed";
      const trackGuildRoomInteracted = GuildRoomAnalytics.trackGuildRoomInteracted;
      GuildRoomAnalytics;
      if (value) {
        str = "video_overlay_opened";
      }
      const obj5 = { interactionType: str, channelId };
      const result = trackGuildRoomInteracted(obj5);
    }
  }
};
export const setGuildRoomRememberVideoOverlayVisibility = function setGuildRoomRememberVideoOverlayVisibility(
  rememberVideoOverlayVisibility,
) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_ROOM_SET_REMEMBER_VIDEO_OVERLAY_VISIBILITY", rememberVideoOverlayVisibility };
  obj.dispatch(obj2);
  const obj3 = GuildRoomAnalytics;
  const obj4 = { rememberVideoOverlayVisibility };
  const result = obj3.trackGuildRoomSettingsUpdate(obj4);
};
