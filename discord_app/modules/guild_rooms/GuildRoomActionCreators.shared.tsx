// discord_app/modules/guild_rooms/GuildRoomActionCreators.shared.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import getBaseProperties from "GuildRoomAnalytics.tsx";
import GUILD_ROOMS_EXPERIMENT_ID from "GuildRoomsExperiment.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../stores/AuthenticationStore.tsx";
import closure_5 from "GuildRoomStore.tsx";
import { Endpoints } from "../../Constants.tsx";

require = arg1;
function _guildRoomConnect() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    c12 = 0;
    c13 = 0;
    c11 = 0;
    return (function* (arg0, arg1, arg2, arg3) {
      if (c13 === 2) {
        c13 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        while (true) {
          let num = 2;
          c13 = 2;
          let tmp4 = c12;
          if (0 === c12) {
            if (arg0 === 1) {
              let num7 = 3;
              c13 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              let num6 = 3;
              c13 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let items = tmp;
              closure_8 = tmp4;
              let tmp90 = dependencyMap;
              let tmp91 = closure_3;
              let id;
              let UNSET;
              closure_6 = undefined;
              let users;
              closure_8 = undefined;
              items = undefined;
              c10 = undefined;
              c11 = 1;
              id = dependencyMap;
              let tmp88 = callback;
              let tmp89 = callback2;
              if (dependencyMap == null) {
                let tmp39 = closure_1_7;
                id = closure_1_7;
              }
              UNSET = tmp91;
              let tmp40 = id;
              if (tmp91 == null) {
                let tmp41 = callback;
                let tmp42 = dependencyMap;
                UNSET = callback(4720).GuildRoomSeats.UNSET;
              }
              let tmp43 = UNSET;
              let tmp44 = callback;
              let tmp45 = dependencyMap;
              let HTTP = callback(1272).HTTP;
              obj1 = { url: null, body: null, rejectWithError: true };
              let tmp46 = closure_1_6;
              obj1[0] = closure_1_6.GUILD_ROOM_CONNECT(tmp88, tmp89);
              let obj2 = { position: null, seat: null };
              obj2[0] = tmp40;
              obj2[1] = UNSET;
              obj1[1] = obj2;
              c12 = 2;
              let num5 = 1;
              c13 = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = HTTP.post(obj1);
              return obj3;
            }
          } else if (1 === tmp4) {
            let tmp29 = closure_8;
            let tmp30 = items;
            let tmp31 = c10;
            let tmp32 = c10;
            c11 = 0;
            c11 = c10;
            let tmp33 = callback2;
            let tmp34 = dependencyMap;
            let obj5 = callback2(573);
            let obj4 = { type: "GUILD_ROOM_CONNECT_FAILURE", guildId: null, roomId: null };
            let tmp35 = callback;
            obj4[1] = callback;
            let tmp36 = callback2;
            obj4[2] = callback2;
            let dispatchResult = obj5.dispatch(obj4);
            let tmp38 = c11;
            throw c11;
          } else if (2 === tmp4) {
            if (arg0 === 1) {
              let num4 = 3;
              c13 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c11 = 0;
              let num3 = 3;
              c13 = 3;
              obj5 = { value: null, done: true };
              obj5[0] = arg1;
              return obj5;
            } else {
              let tmp52 = closure_8;
              let tmp53 = items;
              closure_6 = arg1;
              let tmp54 = callback;
              let tmp55 = dependencyMap;
              let obj12 = callback(4721);
              let tmp56 = closure_6;
              users = obj12.serverGuildRoomToClient(closure_6.body);
              let tmp57 = callback2;
              let tmp58 = dependencyMap;
              let obj13 = callback2(573);
              let obj6 = {
                type: "GUILD_ROOM_CONNECT",
                room: null,
                guildId: null,
                pendingPosition: null,
                pendingSeat: null,
              };
              let tmp59 = users;
              obj6[1] = users;
              let tmp60 = callback;
              obj6[2] = callback;
              let tmp61 = id;
              obj6[3] = id;
              let tmp62 = UNSET;
              obj6[4] = UNSET;
              let dispatchResult1 = obj13.dispatch(obj6);
              let tmp64 = callback2;
              let tmp65 = callback;
              if (callback2 !== callback) {
                let tmp66 = closure_8;
                let tmp67 = items;
                let tmp68 = callback;
                let tmp69 = dependencyMap;
                let obj16 = callback(4739);
                let obj7 = { guildId: null, channelId: null };
                let tmp70 = callback;
                obj7[0] = callback;
                let tmp71 = callback2;
                obj7[1] = callback2;
                let result = obj16.trackGuildRoomUserConnected(obj7);
                let tmp73 = callback;
                let tmp74 = dependencyMap;
                let obj18 = callback(4750);
                let tmp75 = callback;
                let tmp76 = dependencyMap;
                let fireSurveyActionResult = obj18.fireSurveyAction(callback(4758).SurveyActionTypes.GUILD_ROOM_JOINED);
                let tmp78 = users;
                users = users.users;
                let tmp79 = id;
                closure_8 = users.get(id.getId());
                let tmp80 = closure_8;
                if (null != closure_8) {
                  let tmp81 = closure_8;
                  let obj8 = { updateType: "position", updateReason: "default", position: null };
                  let tmp82 = closure_8;
                  obj8[2] = closure_8.position;
                  items = [obj8, , ,];
                  let obj9 = { updateType: "seat", updateReason: "default", seat: null };
                  let tmp83 = closure_8;
                  obj9[2] = closure_8.seat;
                  items[1] = obj9;
                  let obj10 = { updateType: "status_id", updateReason: "default", statusId: null };
                  let tmp84 = closure_8;
                  obj10[2] = closure_8.statusId;
                  items[2] = obj10;
                  let obj11 = { updateType: "status_text", updateReason: "default", statusText: null };
                  let tmp85 = closure_8;
                  obj11[2] = closure_8.statusText;
                  items[3] = obj11;
                  let tmp86 = items;
                  users = items;
                  let tmp87 = items;
                  users = items;
                  closure_6 = items[Symbol.iterator]();
                  let tmp8 = users;
                  let tmp9 = closure_6;
                  while (closure_6 !== undefined) {
                    let tmp11 = closure_8;
                    let tmp12 = items;
                    c11 = 2;
                    c10 = tmp10;
                    let tmp13 = callback;
                    let tmp14 = dependencyMap;
                    obj = callback(4739);
                    obj12 = { channelId: null, update: null };
                    let tmp15 = callback2;
                    obj12[0] = callback2;
                    let tmp16 = c10;
                    obj12[1] = c10;
                    let result1 = obj.trackGuildRoomUserUpdated(obj12);
                    c11 = 1;
                    continue;
                  }
                  let tmp18 = closure_8;
                  let tmp19 = items;
                  let tmp20 = callback;
                  let tmp21 = dependencyMap;
                  obj2 = callback(4739);
                  obj13 = {
                    guildId: null,
                    channelId: null,
                    actualSeatPosition: null,
                    targetSeatPosition: null,
                    actualSeatId: null,
                    targetSeatId: null,
                  };
                  let tmp22 = callback;
                  obj13[0] = callback;
                  let tmp23 = callback2;
                  obj13[1] = callback2;
                  let tmp24 = closure_8;
                  obj13[2] = closure_8.position;
                  let tmp25 = dependencyMap;
                  obj13[3] = dependencyMap;
                  let tmp26 = closure_8;
                  obj13[4] = closure_8.seat;
                  let tmp27 = closure_3;
                  obj13[5] = closure_3;
                  let result2 = obj2.trackGuildRoomSeatSelected(obj13);
                }
              }
              c11 = 0;
              let num2 = 3;
              c13 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else {
            let tmp5 = c10;
            let tmp6 = c10;
            c11 = 1;
            let tmp7 = closure_6;
            closure_6.return();
            throw c10;
          }
        }
      }
    })();
  });
  closure_8 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _guildRoomUpdate() {
  const self = this;
  let tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function* (arg0, arg1, arg2) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === users) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let id = tmp3;
              let room = tmp5;
              let tmp = closure_2;
              room = undefined;
              id = undefined;
              let roomObjects;
              c6 = undefined;
              users = undefined;
              c8 = undefined;
              tmp = closure_1_5;
              tmp = callback;
              tmp = callback2;
              room = closure_1_5.getRoom(callback2);
              id = closure_1_5.getRoomUsers(callback2);
              roomObjects = closure_1_5.getRoomObjects(callback2);
              c6 = 1;
              obj1 = { type: "GUILD_ROOM_LOCAL_UPDATE", roomId: null };
              obj1[1] = callback2;
              let background;
              if (closure_2 != null) {
                background = tmp.background;
              }
              if (null != background) {
                obj1.background = tmp.background;
              }
              let user_position;
              if (tmp != null) {
                user_position = tmp.user_position;
              }
              if (null != user_position) {
                obj1.position = tmp.user_position;
              }
              let user_seat;
              if (tmp != null) {
                user_seat = tmp.user_seat;
              }
              if (null != user_seat) {
                obj1.seat = tmp.user_seat;
              }
              let user_status_id;
              if (tmp != null) {
                user_status_id = tmp.user_status_id;
              }
              if (null != user_status_id) {
                obj1.statusId = tmp.user_status_id;
              }
              let user_status_text;
              if (tmp != null) {
                user_status_text = tmp.user_status_text;
              }
              if (null != user_status_text) {
                obj1.statusText = tmp.user_status_text;
              }
              callback2(closure_2[7]).dispatch(obj1);
              const HTTP = callback(closure_2[5]).HTTP;
              const obj2 = { url: null, body: null, rejectWithError: true };
              obj2[0] = c6.GUILD_ROOM_UPDATE(tmp, tmp);
              obj2[1] = tmp;
              users = 2;
              c8 = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = HTTP.post(obj2);
              return obj3;
            }
          } else if (1 === tmp8) {
            c6 = 0;
            closure_9 = roomObjects;
            const obj4 = {
              type: "GUILD_ROOM_UPDATE_FAILURE",
              originalRoom: null,
              originalRoomUsers: null,
              originalRoomObjects: null,
              guildId: null,
            };
            obj4[1] = room;
            obj4[2] = id;
            obj4[3] = roomObjects;
            obj4[4] = callback;
            callback2(closure_2[7]).dispatch(obj4);
            throw closure_9;
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            c6 = arg1;
            users = callback(closure_2[6]).serverGuildRoomToClient(c6.body);
            if (callback !== callback2) {
              let user_position1;
              if (closure_2 != null) {
                user_position1 = closure_2.user_position;
              }
              if (null != user_position1) {
                obj = callback(closure_2[8]);
                let obj6 = { channelId: null, update: null };
                obj6[0] = callback2;
                const obj7 = { updateType: "position", updateReason: "user_selected", position: null };
                obj7[2] = closure_2.user_position;
                obj6[1] = obj7;
                const result = obj.trackGuildRoomUserUpdated(obj6);
              }
              let user_status_id1;
              if (closure_2 != null) {
                user_status_id1 = closure_2.user_status_id;
              }
              if (null != user_status_id1) {
                obj3 = callback(closure_2[8]);
                const obj8 = { channelId: null, update: null };
                obj8[0] = callback2;
                let obj9 = { updateType: "status_id", updateReason: "user_selected", statusId: null };
                obj9[2] = closure_2.user_status_id;
                obj8[1] = obj9;
                const result1 = obj3.trackGuildRoomUserUpdated(obj8);
              }
              let user_status_text1;
              if (closure_2 != null) {
                user_status_text1 = closure_2.user_status_text;
              }
              if (null != user_status_text1) {
                obj6 = callback(closure_2[8]);
                const obj10 = { channelId: null, update: null };
                obj10[0] = callback2;
                let obj11 = { updateType: "status_text", updateReason: "user_selected", statusText: null };
                obj11[2] = closure_2.user_status_text;
                obj10[1] = obj11;
                const result2 = obj6.trackGuildRoomUserUpdated(obj10);
              }
              let user_position2;
              if (closure_2 != null) {
                user_position2 = closure_2.user_position;
              }
              if (null != user_position2) {
                tmp = users;
                users = users.users;
                tmp = id;
                c8 = users.get(id.getId());
                tmp = c8;
                if (null != c8) {
                  obj9 = callback(closure_2[8]);
                  const obj12 = {
                    guildId: null,
                    channelId: null,
                    actualSeatPosition: null,
                    targetSeatPosition: null,
                    actualSeatId: null,
                    targetSeatId: null,
                  };
                  obj12[0] = callback;
                  obj12[1] = callback2;
                  obj12[2] = c8.position;
                  obj12[3] = closure_2.user_position;
                  obj12[4] = c8.seat;
                  obj12[5] = closure_2.user_seat;
                  const result3 = obj9.trackGuildRoomSeatSelected(obj12);
                }
              }
              let background1;
              if (closure_2 != null) {
                background1 = closure_2.background;
              }
              if (null != background1) {
                obj11 = callback(closure_2[8]);
                const obj13 = { guildId: null, channelId: null, update: null };
                obj13[0] = callback;
                obj13[1] = callback2;
                const obj14 = { updateType: "background", background: null };
                obj14[1] = closure_2.background;
                obj13[2] = obj14;
                const result4 = obj11.trackGuildRoomUpdated(obj13);
              }
            }
            c6 = 0;
            c8 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp81) {
          roomObjects = tmp81;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp81;
          } else {
            users = tmp;
          }
        }
      }
    })();
  });
  closure_9 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function guildRoomObjectCreate() {
  const self = this;
  const apply = _guildRoomObjectCreate.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _guildRoomObjectCreate() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c4 = 0;
    c3 = 0;
    return (function* (arg0, arg1, arg2) {
      const HTTP = callback(table[5]).HTTP;
      obj1 = { url: null, body: null, rejectWithError: true };
      obj1[0] = closure_1_6.GUILD_ROOM_OBJECT_CREATE(callback, closure_1);
      obj1[1] = table;
      yield HTTP.post(obj1);
      return arg1;
    })();
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _guildRoomObjectUpdate() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    c5 = 0;
    c4 = 0;
    return (function* (arg0, arg1, arg2, arg3) {
      const HTTP = callback(table[5]).HTTP;
      obj1 = { url: null, body: null, rejectWithError: true };
      obj1[0] = closure_1_6.GUILD_ROOM_OBJECT_UPDATE(callback, closure_1, table);
      obj1[1] = closure_3;
      yield HTTP.post(obj1);
      return arg1;
    })();
  });
  closure_12 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function guildRoomObjectDelete() {
  const self = this;
  const apply = _guildRoomObjectDelete.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _guildRoomObjectDelete() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    c5 = 0;
    c4 = 0;
    return (function* (arg0, arg1, arg2, arg3) {
      const HTTP = callback(table[5]).HTTP;
      obj1 = { url: null, body: null, rejectWithError: true };
      obj1[0] = closure_1_6.GUILD_ROOM_OBJECT_DELETE(callback, closure_1, table);
      obj1[1] = closure_3;
      yield HTTP.del(obj1);
      return arg1;
    })();
  });
  closure_14 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function deletePendingGuildRoomNote(roomId) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_ROOM_PENDING_NOTE_DELETE", roomId };
  obj.dispatch(obj);
}
function _createGuildRoomNote() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    c8 = 0;
    c9 = 0;
    c7 = 0;
    return (function* (arg0, arg1, arg2, arg3) {
      if (c9 === 2) {
        c9 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c9 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_5 = tmp3;
              closure_4 = tmp7;
              dependencyMap = undefined;
              const _Date = Date;
              const fromTimestampResult = callback2(11).fromTimestamp(Date.now());
              dependencyMap = fromTimestampResult;
              const obj9 = callback2(11);
              obj1 = { type: "GUILD_ROOM_NOTE_CREATE_START", roomId: null, localId: null, position: null };
              obj1[1] = callback2;
              obj1[2] = fromTimestampResult;
              obj1[3] = closure_3;
              callback2(573).dispatch(obj1);
              closure_1_15(callback2);
              c7 = 1;
              const obj2 = { object_type: null, content: null, position: null };
              obj2[0] = callback(4719).GuildRoomObjectTypes.NOTE;
              obj2[1] = dependencyMap;
              obj2[2] = closure_3;
              c8 = 2;
              c9 = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = closure_1_10(callback, callback2, obj2);
              return obj3;
            }
          } else if (1 === tmp7) {
            c7 = 0;
            closure_3 = closure_6;
            obj3 = callback2(573);
            const obj4 = { type: "GUILD_ROOM_NOTE_CREATE_FAILURE", roomId: null, localId: null };
            obj4[1] = callback2;
            obj4[2] = dependencyMap;
            obj3.dispatch(obj4);
            throw closure_3;
          } else if (arg0 === 1) {
            c9 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            if (callback2 !== callback) {
              obj = callback(4739);
              const obj6 = { interactionType: "note_created", guildId: null, channelId: null };
              obj6[1] = callback;
              obj6[2] = callback2;
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
  });
  closure_16 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _deleteGuildRoomNote() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c6 = 0;
    return (function* (arg0, arg1, arg2) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp5;
              closure_3 = tmp2;
              obj1 = { object_type: null };
              obj1[0] = callback(4719).GuildRoomObjectTypes.NOTE;
              c5 = 1;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = closure_1_13(callback, closure_1, dependencyMap, obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            if (closure_1 !== callback) {
              obj = callback(4739);
              const obj4 = { interactionType: "note_deleted", guildId: null, channelId: null };
              obj4[1] = callback;
              obj4[2] = closure_1;
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
    })();
  });
  closure_17 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchGuildRoom() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function* (arg0, arg1) {
      closure_3 = tmp3;
      c5 = 1;
      const HTTP = callback(closure_1_2[5]).HTTP;
      obj1 = { url: null, rejectWithError: true };
      obj1[0] = c6.GUILD_ROOM(callback, lib);
      yield HTTP.get(obj1);
      if (1 === tmp7) {
        c5 = 0;
        const obj4 = callback(4759);
        obj4.handleGuildRoomError({ silent: true });
        c7 = 3;
      } else if (arg0 === 1) {
        c7 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        lib = arg1;
        const obj = callback(4721);
        dependencyMap = obj.serverGuildRoomToClient(lib.body);
        obj1 = lib(573);
        const obj3 = { type: "GUILD_ROOM_FETCH_SUCCESS", guildId: null, room: null };
        obj3[1] = callback;
        obj3[2] = dependencyMap;
        obj1.dispatch(obj3);
        c5 = 0;
      }
      c5 = 0;
      return arg1;
    })();
  });
  closure_18 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_7 = { x: 0, y: 0 };
let result = require("set").fileFinishedImporting("modules/guild_rooms/GuildRoomActionCreators.shared.tsx");

export const guildRoomConnect = function guildRoomConnect() {
  const self = this;
  const apply = _guildRoomConnect.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const guildRoomDisconnect = function guildRoomDisconnect(guildId, channelId) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_ROOM_DISCONNECT", userId: id.getId(), roomId: channelId };
  obj.dispatch(obj);
  if (channelId !== guildId) {
    obj = { guildId: null, channelId: null };
    obj[0] = guildId;
    obj[1] = channelId;
    const result = getBaseProperties.trackGuildRoomUserDisconnected(obj);
    const obj3 = getBaseProperties;
  }
};
export const guildRoomLocalDisconnect = function guildRoomLocalDisconnect(userId, oldChannelId) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_ROOM_DISCONNECT", userId, roomId: oldChannelId };
  obj.dispatch(obj);
};
export const guildRoomUpdate = function guildRoomUpdate() {
  const self = this;
  const apply = _guildRoomUpdate.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const clearGuildRoomPendingPosition = function clearGuildRoomPendingPosition() {
  dispatcherDefault.dispatch({ type: "GUILD_ROOM_LOCAL_POSITION_CLEARED" });
};
export const selectGuildRoomLocalPosition = function selectGuildRoomLocalPosition(position, seat) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_ROOM_LOCAL_POSITION_REQUESTED", position, seat };
  obj.dispatch(obj);
};
export const guildRoomToggleLayout = function guildRoomToggleLayout(roomId) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_ROOM_TOGGLE_LAYOUT", roomId };
  obj.dispatch(obj);
};
export { guildRoomObjectCreate };
export const guildRoomObjectUpdate = function guildRoomObjectUpdate() {
  const self = this;
  const apply = _guildRoomObjectUpdate.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { guildRoomObjectDelete };
export const startPendingGuildRoomNote = function startPendingGuildRoomNote(roomId) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_ROOM_PENDING_NOTE_START", roomId };
  obj.dispatch(obj);
};
export const placePendingGuildRoomNote = function placePendingGuildRoomNote(roomId, position) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_ROOM_PENDING_NOTE_PLACE", roomId, position };
  obj.dispatch(obj);
};
export { deletePendingGuildRoomNote };
export const createGuildRoomNote = function createGuildRoomNote() {
  const self = this;
  const apply = _createGuildRoomNote.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteGuildRoomNote = function deleteGuildRoomNote() {
  const self = this;
  const apply = _deleteGuildRoomNote.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchGuildRoom = function fetchGuildRoom(c5, c4) {
  const self = this;
  const apply = _fetchGuildRoom.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setGuildRoomVideoOverlayVisibility = function setGuildRoomVideoOverlayVisibility(value) {
  const videoOverlayVisibility = store.getVideoOverlayVisibility();
  let obj = dispatcherDefault;
  obj = { type: "GUILD_ROOM_SET_VIDEO_OVERLAY_VISIBILITY", value };
  obj.dispatch(obj);
  if (value !== videoOverlayVisibility) {
    let str = "video_overlay_closed";
    if (value) {
      str = "video_overlay_opened";
    }
    obj = { interactionType: null, channelId: null };
    obj[0] = str;
    obj[1] = arg1;
    const result = getBaseProperties.trackGuildRoomInteracted(obj);
    const obj3 = getBaseProperties;
  }
};
export const maybeSetGuildRoomVideoOverlay = function maybeSetGuildRoomVideoOverlay(arg0, guildId, channelId) {
  let obj = GUILD_ROOMS_EXPERIMENT_ID;
  obj = { guildId, location: "maybeSetGuildRoomVideoOverlay" };
  if (obj.getGuildRoomsConfig(obj, { autoTrackExposure: false }).enabled) {
    const videoOverlayVisibility = store.getVideoOverlayVisibility();
    obj = { type: "GUILD_ROOM_SET_VIDEO_OVERLAY_VISIBILITY", value: null };
    obj[1] = arg0;
    dispatcherDefault.dispatch(obj);
    if (arg0 !== videoOverlayVisibility) {
      let str = "video_overlay_closed";
      if (arg0) {
        str = "video_overlay_opened";
      }
      obj1 = { interactionType: null, channelId: null };
      obj1[0] = str;
      obj1[1] = channelId;
      const result = getBaseProperties.trackGuildRoomInteracted(obj1);
      const tmpResult = getBaseProperties;
    }
    const obj3 = dispatcherDefault;
  }
};
export const setGuildRoomRememberVideoOverlayVisibility = function setGuildRoomRememberVideoOverlayVisibility(
  rememberVideoOverlayVisibility,
) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_ROOM_SET_REMEMBER_VIDEO_OVERLAY_VISIBILITY", rememberVideoOverlayVisibility };
  obj.dispatch(obj);
  obj = { rememberVideoOverlayVisibility };
  const result = getBaseProperties.trackGuildRoomSettingsUpdate(obj);
};
