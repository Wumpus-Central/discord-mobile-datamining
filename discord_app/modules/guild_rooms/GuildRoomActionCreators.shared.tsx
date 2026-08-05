import { dispatcher } from "../../Dispatcher.tsx";
import { trackGuildRoomObjectInteracted } from "GuildRoomAnalytics.tsx";
// discord_app/modules/guild_rooms/GuildRoomActionCreators.shared.tsx
import serverGuildRoomObjectToClient from "serverGuildRoomObjectToClient";
import fetchFingerprint from "fetchFingerprint";
import handleSelectedChannelStoreChange from "handleSelectedChannelStoreChange";
import { Endpoints } from "ME";

const require = arg1;
function _guildRoomConnect() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c10 = 0;
    let c11 = 0;
    let c9 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c11 === 2) {
        c11 = 3;
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
          c11 = 2;
          let tmp4 = c10;
          if (0 === c10) {
            if (arg0 === 1) {
              let num7 = 3;
              c11 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              let num6 = 3;
              c11 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let items = tmp;
              let closure_6 = tmp4;
              let tmp81 = dependencyMap;
              let serverGuildRoomObjectToClient;
              let fetchFingerprint;
              let users;
              closure_6 = undefined;
              items = undefined;
              let c8;
              let c9 = 1;
              serverGuildRoomObjectToClient = dependencyMap;
              let tmp79 = callback;
              let tmp80 = callback2;
              if (dependencyMap == null) {
                let tmp35 = outer1_7;
                serverGuildRoomObjectToClient = outer1_7;
              }
              let tmp36 = serverGuildRoomObjectToClient;
              let tmp37 = callback;
              let tmp38 = dependencyMap;
              let HTTP = callback(530).HTTP;
              let obj1 = { url: null, body: null, rejectWithError: true };
              let tmp39 = outer1_6;
              obj1[0] = outer1_6.GUILD_ROOM_CONNECT(tmp79, tmp80);
              let obj2 = { position: null };
              obj2[0] = serverGuildRoomObjectToClient;
              obj1[1] = obj2;
              c10 = 2;
              let num5 = 1;
              c11 = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = HTTP.post(obj1);
              return obj3;
            }
          } else {
            if (1 === tmp4) {
              let tmp27 = closure_6;
              let tmp28 = items;
              let tmp29 = c8;
              c9 = 0;
              let tmp30 = callback2;
              let tmp31 = dependencyMap;
              let obj5 = callback2(709);
              let obj4 = { type: "GUILD_ROOM_CONNECT_FAILURE", guildId: null, roomId: null };
              let tmp32 = callback;
              obj4[1] = callback;
              let tmp33 = callback2;
              obj4[2] = callback2;
              let dispatchResult = obj5.dispatch(obj4);
              let num4 = 3;
              c11 = 3;
            } else if (2 === tmp4) {
              if (arg0 === 1) {
                let num3 = 3;
                c11 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                let tmp45 = closure_6;
                let tmp46 = items;
                fetchFingerprint = arg1;
                let tmp47 = callback;
                let tmp48 = dependencyMap;
                let obj12 = callback(12929);
                let tmp49 = fetchFingerprint;
                users = obj12.serverGuildRoomToClient(fetchFingerprint.body);
                let tmp50 = callback2;
                let tmp51 = dependencyMap;
                let obj14 = callback2(709);
                obj5 = { type: "GUILD_ROOM_CONNECT", room: null, guildId: null, pendingPosition: null };
                let tmp52 = users;
                obj5[1] = users;
                let tmp53 = callback;
                obj5[2] = callback;
                let tmp54 = serverGuildRoomObjectToClient;
                obj5[3] = serverGuildRoomObjectToClient;
                let dispatchResult1 = obj14.dispatch(obj5);
                let tmp56 = callback2;
                let tmp57 = callback;
                if (callback2 !== callback) {
                  let tmp58 = closure_6;
                  let tmp59 = items;
                  let tmp60 = callback;
                  let tmp61 = dependencyMap;
                  let obj16 = callback(16315);
                  let obj6 = { guildId: null, channelId: null };
                  let tmp62 = callback;
                  obj6[0] = callback;
                  let tmp63 = callback2;
                  obj6[1] = callback2;
                  let result = obj16.trackGuildRoomUserConnected(obj6);
                  let tmp65 = callback;
                  let tmp66 = dependencyMap;
                  let obj18 = callback(8370);
                  let tmp67 = callback;
                  let tmp68 = dependencyMap;
                  let fireSurveyActionResult = obj18.fireSurveyAction(callback(8377).SurveyActionTypes.GUILD_ROOM_JOINED);
                  let tmp70 = users;
                  users = users.users;
                  let tmp71 = fetchFingerprint;
                  closure_6 = users.get(fetchFingerprint.getId());
                  let tmp72 = closure_6;
                  if (null != closure_6) {
                    let tmp73 = closure_6;
                    let obj7 = { updateType: "position", updateReason: "default", position: null };
                    let tmp74 = closure_6;
                    obj7[2] = closure_6.position;
                    items = [obj7, , ];
                    let obj8 = { updateType: "status_id", updateReason: "default", statusId: null };
                    let tmp75 = closure_6;
                    obj8[2] = closure_6.statusId;
                    items[1] = obj8;
                    let obj9 = { updateType: "status_text", updateReason: "default", statusText: null };
                    let tmp76 = closure_6;
                    obj9[2] = closure_6.statusText;
                    items[2] = obj9;
                    let tmp77 = items;
                    users = items;
                    let tmp78 = items;
                    users = items;
                    fetchFingerprint = items[Symbol.iterator]();
                    let tmp8 = users;
                    let tmp9 = fetchFingerprint;
                    while (fetchFingerprint !== undefined) {
                      let tmp11 = closure_6;
                      let tmp12 = items;
                      c9 = 2;
                      c8 = tmp10;
                      let tmp13 = callback;
                      let tmp14 = dependencyMap;
                      obj = callback(16315);
                      let obj10 = { channelId: null, update: null };
                      let tmp15 = callback2;
                      obj10[0] = callback2;
                      let tmp16 = c8;
                      obj10[1] = c8;
                      let result1 = obj.trackGuildRoomUserUpdated(obj10);
                      c9 = 1;
                      continue;
                    }
                    let tmp18 = closure_6;
                    let tmp19 = items;
                    let tmp20 = callback;
                    let tmp21 = dependencyMap;
                    obj2 = callback(16315);
                    let obj11 = { guildId: null, channelId: null, actualSeatPosition: null, targetSeatPosition: null };
                    let tmp22 = callback;
                    obj11[0] = callback;
                    let tmp23 = callback2;
                    obj11[1] = callback2;
                    let tmp24 = closure_6;
                    obj11[2] = closure_6.position;
                    let tmp25 = dependencyMap;
                    obj11[3] = dependencyMap;
                    let result2 = obj2.trackGuildRoomSeatSelected(obj11);
                  }
                }
                c9 = 0;
              }
            } else {
              let tmp5 = c8;
              let tmp6 = c8;
              c9 = 1;
              let tmp7 = fetchFingerprint;
              fetchFingerprint.return();
              throw c8;
            }
            c9 = 0;
            let num2 = 3;
            c11 = 3;
            obj12 = { value: null, done: true };
            obj12[0] = arg1;
            return obj12;
          }
        }
      }
    })();
  });
  const _guildRoomConnect = tmp;
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
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (function*(arg0, arg1, arg2) {
      let id = tmp3;
      let room = tmp5;
      room = outer1_5.getRoom(callback2);
      id = outer1_5.getRoomUsers(callback2);
      const roomObjects = outer1_5.getRoomObjects(callback2);
      let c6 = 1;
      const obj1 = { type: "GUILD_ROOM_LOCAL_UPDATE", roomId: null };
      obj1[1] = callback2;
      if (closure_2 != null) {
        const background = tmp90.background;
      }
      if (null != background) {
        obj1.background = tmp90.background;
      }
      if (closure_2 != null) {
        const user_position = tmp90.user_position;
      }
      if (null != user_position) {
        obj1.position = tmp90.user_position;
      }
      if (closure_2 != null) {
        const user_status_id = tmp90.user_status_id;
      }
      if (null != user_status_id) {
        obj1.statusId = tmp90.user_status_id;
      }
      if (closure_2 != null) {
        const user_status_text = tmp90.user_status_text;
      }
      if (null != user_status_text) {
        obj1.statusText = tmp90.user_status_text;
      }
      callback2(closure_2[6]).dispatch(obj1);
      const HTTP = callback(closure_2[4]).HTTP;
      const obj2 = { url: null, body: null, rejectWithError: true };
      obj2[0] = c6.GUILD_ROOM_UPDATE(callback, callback2);
      obj2[1] = closure_2;
      yield HTTP.post(obj2);
      if (1 === tmp8) {
        c6 = 0;
        const obj12 = callback2(closure_2[6]);
        const obj4 = { type: "GUILD_ROOM_UPDATE_FAILURE", originalRoom: null, originalRoomUsers: null, originalRoomObjects: null, guildId: null };
        obj4[1] = room;
        obj4[2] = id;
        obj4[3] = roomObjects;
        obj4[4] = callback;
        obj12.dispatch(obj4);
        let position = 3;
      } else if (arg0 === 1) {
        position = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        c6 = arg1;
        let users = callback(closure_2[5]).serverGuildRoomToClient(c6.body);
        if (callback !== callback2) {
          let user_position1;
          if (closure_2 != null) {
            user_position1 = closure_2.user_position;
          }
          if (null != user_position1) {
            const obj = callback(closure_2[7]);
            const obj5 = { channelId: null, update: null };
            obj5[0] = callback2;
            let obj6 = { updateType: "position", updateReason: "user_selected", position: null };
            obj6[2] = closure_2.user_position;
            obj5[1] = obj6;
            const result = obj.trackGuildRoomUserUpdated(obj5);
          }
          let user_status_id1;
          if (closure_2 != null) {
            user_status_id1 = closure_2.user_status_id;
          }
          if (null != user_status_id1) {
            const obj3 = callback(closure_2[7]);
            const obj7 = { channelId: null, update: null };
            obj7[0] = callback2;
            const obj8 = { updateType: "status_id", updateReason: "user_selected", statusId: null };
            obj8[2] = closure_2.user_status_id;
            obj7[1] = obj8;
            const result1 = obj3.trackGuildRoomUserUpdated(obj7);
          }
          let user_status_text1;
          if (closure_2 != null) {
            user_status_text1 = closure_2.user_status_text;
          }
          if (null != user_status_text1) {
            obj6 = callback(closure_2[7]);
            let obj9 = { channelId: null, update: null };
            obj9[0] = callback2;
            const obj10 = { updateType: "status_text", updateReason: "user_selected", statusText: null };
            obj10[2] = closure_2.user_status_text;
            obj9[1] = obj10;
            const result2 = obj6.trackGuildRoomUserUpdated(obj9);
          }
          let user_position2;
          if (closure_2 != null) {
            user_position2 = closure_2.user_position;
          }
          if (null != user_position2) {
            users = users.users;
            position = users.get(id.getId());
            if (null != position) {
              obj9 = callback(closure_2[7]);
              const obj11 = { guildId: null, channelId: null, actualSeatPosition: null, targetSeatPosition: null };
              obj11[0] = callback;
              obj11[1] = callback2;
              obj11[2] = position.position;
              obj11[3] = closure_2.user_position;
              const result3 = obj9.trackGuildRoomSeatSelected(obj11);
            }
          }
        }
        c6 = 0;
        const obj20 = callback(closure_2[5]);
      }
      c6 = 0;
      return arg1;
    })();
  });
  const _guildRoomUpdate = tmp;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c4 = 0;
    let c3 = 0;
    return (function*(arg0, arg1, arg2) {
      const HTTP = callback(table[4]).HTTP;
      const obj1 = { url: null, body: null, rejectWithError: true };
      obj1[0] = outer1_6.GUILD_ROOM_OBJECT_CREATE(callback, closure_1);
      obj1[1] = table;
      yield HTTP.post(obj1);
      return arg1;
    })();
  });
  const _guildRoomObjectCreate = tmp;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let serverGuildRoomObjectToClient = arg3;
    let c5 = 0;
    let c4 = 0;
    return (function*(arg0, arg1, arg2, arg3) {
      const HTTP = callback(table[4]).HTTP;
      const obj1 = { url: null, body: null, rejectWithError: true };
      obj1[0] = outer1_6.GUILD_ROOM_OBJECT_UPDATE(callback, closure_1, table);
      obj1[1] = serverGuildRoomObjectToClient;
      yield HTTP.post(obj1);
      return arg1;
    })();
  });
  const _guildRoomObjectUpdate = tmp;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let serverGuildRoomObjectToClient = arg3;
    let c5 = 0;
    let c4 = 0;
    return (function*(arg0, arg1, arg2, arg3) {
      const HTTP = callback(table[4]).HTTP;
      const obj1 = { url: null, body: null, rejectWithError: true };
      obj1[0] = outer1_6.GUILD_ROOM_OBJECT_DELETE(callback, closure_1, table);
      obj1[1] = serverGuildRoomObjectToClient;
      yield HTTP.del(obj1);
      return arg1;
    })();
  });
  const _guildRoomObjectDelete = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function deletePendingGuildRoomNote(roomId) {
  let obj = dispatcher;
  obj = { type: "GUILD_ROOM_PENDING_NOTE_DELETE", roomId };
  obj.dispatch(obj);
}
function _createGuildRoomNote() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let serverGuildRoomObjectToClient = arg3;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (function*(arg0, arg1, arg2, arg3) {
      let handleSelectedChannelStoreChange = tmp3;
      outer1_15(callback2);
      let c7 = 1;
      const obj1 = { object_type: null, content: null, position: null };
      obj1[0] = callback(12930).GuildRoomObjectTypes.NOTE;
      obj1[1] = dependencyMap;
      obj1[2] = serverGuildRoomObjectToClient;
      yield outer1_10(callback, callback2, obj1);
      if (1 === tmp7) {
        c7 = 0;
        let obj5 = callback2(709);
        const obj3 = { type: "GUILD_ROOM_NOTE_CREATE_COMPLETE", roomId: null };
        obj3[1] = callback2;
        obj5.dispatch(obj3);
        let c9 = 3;
      } else if (arg0 === 1) {
        c9 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        if (callback2 !== callback) {
          const obj = callback(16315);
          const obj4 = { interactionType: "note_created", guildId: null, channelId: null };
          obj4[1] = callback;
          obj4[2] = callback2;
          const result = obj.trackGuildRoomObjectInteracted(obj4);
        }
        const obj2 = callback2(709);
        obj5 = { type: "GUILD_ROOM_NOTE_CREATE_COMPLETE", roomId: null };
        obj5[1] = callback2;
        obj2.dispatch(obj5);
        c7 = 0;
      }
      c7 = 0;
      return arg1;
    })();
  });
  const _createGuildRoomNote = tmp;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    return (function*(arg0, arg1, arg2) {
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
              let fetchFingerprint = tmp5;
              let serverGuildRoomObjectToClient = tmp2;
              const obj1 = { object_type: null };
              obj1[0] = callback(12930).GuildRoomObjectTypes.NOTE;
              c5 = 1;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = outer1_13(callback, closure_1, dependencyMap, obj1);
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
              obj = callback(16315);
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
  const _deleteGuildRoomNote = tmp;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let serverGuildRoomObjectToClient = tmp2;
              let dependencyMap = tmp5;
              let lib;
              dependencyMap = undefined;
              const HTTP = callback(outer1_2[4]).HTTP;
              const obj1 = { url: null, rejectWithError: true };
              obj1[0] = outer1_6.GUILD_ROOM(callback, lib);
              c4 = 1;
              c5 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            lib = arg1;
            dependencyMap = callback(12929).serverGuildRoomToClient(lib.body);
            const obj5 = callback(12929);
            const obj3 = { type: "GUILD_ROOM_FETCH_SUCCESS", guildId: null, room: null };
            obj3[1] = callback;
            obj3[2] = dependencyMap;
            lib(709).dispatch(obj3);
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp6) {
          c5 = tmp;
          throw tmp6;
        }
      }
    })();
  });
  const _fetchGuildRoom = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_7 = { x: 0, y: 0 };
let result = require("handleSelectedChannelStoreChange").fileFinishedImporting("modules/guild_rooms/GuildRoomActionCreators.shared.tsx");

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
  let obj = dispatcher;
  obj = { type: "GUILD_ROOM_DISCONNECT", userId: id.getId(), roomId: channelId };
  obj.dispatch(obj);
  if (channelId !== guildId) {
    obj = { guildId: null, channelId: null };
    obj[0] = guildId;
    obj[1] = channelId;
    const result = trackGuildRoomObjectInteracted /* trackGuildRoomObjectInteracted */.trackGuildRoomUserDisconnected(obj);
    const obj3 = trackGuildRoomObjectInteracted /* trackGuildRoomObjectInteracted */;
  }
};
export const guildRoomLocalDisconnect = function guildRoomLocalDisconnect(userId, oldChannelId) {
  let obj = dispatcher;
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
export const selectGuildRoomLocalPosition = function selectGuildRoomLocalPosition(position) {
  let obj = dispatcher;
  obj = { type: "GUILD_ROOM_LOCAL_POSITION_REQUESTED", position };
  obj.dispatch(obj);
};
export const guildRoomToggleLayout = function guildRoomToggleLayout(channelId, clearLayout) {
  let obj = dispatcher;
  obj = { type: "GUILD_ROOM_TOGGLE_LAYOUT", roomId: channelId, clearLayout };
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
  let obj = dispatcher;
  obj = { type: "GUILD_ROOM_PENDING_NOTE_START", roomId };
  obj.dispatch(obj);
};
export const placePendingGuildRoomNote = function placePendingGuildRoomNote(roomId, position) {
  let obj = dispatcher;
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
export const fetchGuildRoom = function fetchGuildRoom() {
  const self = this;
  const apply = _fetchGuildRoom.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};