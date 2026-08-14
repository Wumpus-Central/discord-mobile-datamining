// discord_app/modules/guild_rooms/GuildRoomActionCreators.shared.tsx
import serverGuildRoomObjectToClient from "serverGuildRoomObjectToClient";
import fetchFingerprint from "fetchFingerprint";
import handleSelectedChannelStoreChange from "handleSelectedChannelStoreChange";
import { Endpoints } from "ME";
import { dispatcher } from "../../Dispatcher.tsx";
import { getBaseProperties } from "GuildRoomAnalytics.tsx";
import { experiment } from "GuildRoomsExperiment.tsx";

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
              let tmp83 = dependencyMap;
              let serverGuildRoomObjectToClient;
              let fetchFingerprint;
              let users;
              closure_6 = undefined;
              items = undefined;
              let c8;
              let c9 = 1;
              serverGuildRoomObjectToClient = dependencyMap;
              let tmp81 = callback;
              let tmp82 = callback2;
              if (dependencyMap == null) {
                let tmp37 = outer1_7;
                serverGuildRoomObjectToClient = outer1_7;
              }
              let tmp38 = serverGuildRoomObjectToClient;
              let tmp39 = callback;
              let tmp40 = dependencyMap;
              let HTTP = callback(530).HTTP;
              let obj1 = { url: null, body: null, rejectWithError: true };
              let tmp41 = outer1_6;
              obj1[0] = outer1_6.GUILD_ROOM_CONNECT(tmp81, tmp82);
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
          } else if (1 === tmp4) {
            let tmp27 = closure_6;
            let tmp28 = items;
            let tmp29 = c8;
            let tmp30 = c8;
            c9 = 0;
            c9 = c8;
            let tmp31 = callback2;
            let tmp32 = dependencyMap;
            let obj5 = callback2(709);
            let obj4 = { type: "GUILD_ROOM_CONNECT_FAILURE", guildId: null, roomId: null };
            let tmp33 = callback;
            obj4[1] = callback;
            let tmp34 = callback2;
            obj4[2] = callback2;
            let dispatchResult = obj5.dispatch(obj4);
            let tmp36 = c9;
            throw c9;
          } else if (2 === tmp4) {
            if (arg0 === 1) {
              let num4 = 3;
              c11 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c9 = 0;
              let num3 = 3;
              c11 = 3;
              obj5 = { value: null, done: true };
              obj5[0] = arg1;
              return obj5;
            } else {
              let tmp47 = closure_6;
              let tmp48 = items;
              fetchFingerprint = arg1;
              let tmp49 = callback;
              let tmp50 = dependencyMap;
              let obj12 = callback(4542);
              let tmp51 = fetchFingerprint;
              users = obj12.serverGuildRoomToClient(fetchFingerprint.body);
              let tmp52 = callback2;
              let tmp53 = dependencyMap;
              let obj14 = callback2(709);
              let obj6 = { type: "GUILD_ROOM_CONNECT", room: null, guildId: null, pendingPosition: null };
              let tmp54 = users;
              obj6[1] = users;
              let tmp55 = callback;
              obj6[2] = callback;
              let tmp56 = serverGuildRoomObjectToClient;
              obj6[3] = serverGuildRoomObjectToClient;
              let dispatchResult1 = obj14.dispatch(obj6);
              let tmp58 = callback2;
              let tmp59 = callback;
              if (callback2 !== callback) {
                let tmp60 = closure_6;
                let tmp61 = items;
                let tmp62 = callback;
                let tmp63 = dependencyMap;
                let obj16 = callback(4548);
                let obj7 = { guildId: null, channelId: null };
                let tmp64 = callback;
                obj7[0] = callback;
                let tmp65 = callback2;
                obj7[1] = callback2;
                let result = obj16.trackGuildRoomUserConnected(obj7);
                let tmp67 = callback;
                let tmp68 = dependencyMap;
                let obj18 = callback(4559);
                let tmp69 = callback;
                let tmp70 = dependencyMap;
                let fireSurveyActionResult = obj18.fireSurveyAction(callback(4567).SurveyActionTypes.GUILD_ROOM_JOINED);
                let tmp72 = users;
                users = users.users;
                let tmp73 = fetchFingerprint;
                closure_6 = users.get(fetchFingerprint.getId());
                let tmp74 = closure_6;
                if (null != closure_6) {
                  let tmp75 = closure_6;
                  let obj8 = { updateType: "position", updateReason: "default", position: null };
                  let tmp76 = closure_6;
                  obj8[2] = closure_6.position;
                  items = [obj8, , ];
                  let obj9 = { updateType: "status_id", updateReason: "default", statusId: null };
                  let tmp77 = closure_6;
                  obj9[2] = closure_6.statusId;
                  items[1] = obj9;
                  let obj10 = { updateType: "status_text", updateReason: "default", statusText: null };
                  let tmp78 = closure_6;
                  obj10[2] = closure_6.statusText;
                  items[2] = obj10;
                  let tmp79 = items;
                  users = items;
                  let tmp80 = items;
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
                    obj = callback(4548);
                    let obj11 = { channelId: null, update: null };
                    let tmp15 = callback2;
                    obj11[0] = callback2;
                    let tmp16 = c8;
                    obj11[1] = c8;
                    let result1 = obj.trackGuildRoomUserUpdated(obj11);
                    c9 = 1;
                    continue;
                  }
                  let tmp18 = closure_6;
                  let tmp19 = items;
                  let tmp20 = callback;
                  let tmp21 = dependencyMap;
                  obj2 = callback(4548);
                  obj12 = { guildId: null, channelId: null, actualSeatPosition: null, targetSeatPosition: null };
                  let tmp22 = callback;
                  obj12[0] = callback;
                  let tmp23 = callback2;
                  obj12[1] = callback2;
                  let tmp24 = closure_6;
                  obj12[2] = closure_6.position;
                  let tmp25 = dependencyMap;
                  obj12[3] = dependencyMap;
                  let result2 = obj2.trackGuildRoomSeatSelected(obj12);
                }
              }
              c9 = 0;
              let num2 = 3;
              c11 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else {
            let tmp5 = c8;
            let tmp6 = c8;
            c9 = 1;
            let tmp7 = fetchFingerprint;
            fetchFingerprint.return();
            throw c8;
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
      if (position === 2) {
        position = 3;
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
          position = 2;
          if (0 === users) {
            if (arg0 === 1) {
              position = 3;
              throw arg1;
            } else if (arg0 === 2) {
              position = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let id = tmp3;
              let room = tmp5;
              room = undefined;
              id = undefined;
              let roomObjects;
              let c6;
              users = undefined;
              position = undefined;
              room = outer1_5.getRoom(callback2);
              id = outer1_5.getRoomUsers(callback2);
              roomObjects = outer1_5.getRoomObjects(callback2);
              c6 = 1;
              const obj1 = { type: "GUILD_ROOM_LOCAL_UPDATE", roomId: null };
              obj1[1] = callback2;
              let background;
              if (closure_2 != null) {
                background = tmp92.background;
              }
              if (null != background) {
                obj1.background = tmp92.background;
              }
              let user_position;
              if (closure_2 != null) {
                user_position = tmp92.user_position;
              }
              if (null != user_position) {
                obj1.position = tmp92.user_position;
              }
              let user_status_id;
              if (closure_2 != null) {
                user_status_id = tmp92.user_status_id;
              }
              if (null != user_status_id) {
                obj1.statusId = tmp92.user_status_id;
              }
              let user_status_text;
              if (closure_2 != null) {
                user_status_text = tmp92.user_status_text;
              }
              if (null != user_status_text) {
                obj1.statusText = tmp92.user_status_text;
              }
              callback2(closure_2[6]).dispatch(obj1);
              const HTTP = callback(closure_2[4]).HTTP;
              const obj2 = { url: null, body: null, rejectWithError: true };
              obj2[0] = c6.GUILD_ROOM_UPDATE(callback, callback2);
              obj2[1] = closure_2;
              users = 2;
              position = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = HTTP.post(obj2);
              return obj3;
            }
          } else if (1 === tmp8) {
            c6 = 0;
            let closure_9 = roomObjects;
            let obj12 = callback2(closure_2[6]);
            const obj4 = { type: "GUILD_ROOM_UPDATE_FAILURE", originalRoom: null, originalRoomUsers: null, originalRoomObjects: null, guildId: null };
            obj4[1] = room;
            obj4[2] = id;
            obj4[3] = roomObjects;
            obj4[4] = callback;
            obj12.dispatch(obj4);
            throw closure_9;
          } else if (arg0 === 1) {
            position = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            position = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            c6 = arg1;
            users = callback(closure_2[5]).serverGuildRoomToClient(c6.body);
            if (callback !== callback2) {
              let user_position1;
              if (closure_2 != null) {
                user_position1 = closure_2.user_position;
              }
              if (null != user_position1) {
                obj = callback(closure_2[7]);
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
                obj3 = callback(closure_2[7]);
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
                obj6 = callback(closure_2[7]);
                const obj10 = { channelId: null, update: null };
                obj10[0] = callback2;
                const obj11 = { updateType: "status_text", updateReason: "user_selected", statusText: null };
                obj11[2] = closure_2.user_status_text;
                obj10[1] = obj11;
                const result2 = obj6.trackGuildRoomUserUpdated(obj10);
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
                  obj12 = { guildId: null, channelId: null, actualSeatPosition: null, targetSeatPosition: null };
                  obj12[0] = callback;
                  obj12[1] = callback2;
                  obj12[2] = position.position;
                  obj12[3] = closure_2.user_position;
                  const result3 = obj9.trackGuildRoomSeatSelected(obj12);
                }
              }
            }
            c6 = 0;
            position = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp68) {
          roomObjects = tmp68;
          if (tmp4 === c6) {
            position = tmp2;
            throw tmp68;
          } else {
            users = tmp;
          }
        }
      }
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
              let handleSelectedChannelStoreChange = tmp3;
              let fetchFingerprint = tmp7;
              outer1_15(callback2);
              let c7 = 1;
              const obj1 = { object_type: null, content: null, position: null };
              obj1[0] = callback(4541).GuildRoomObjectTypes.NOTE;
              obj1[1] = dependencyMap;
              obj1[2] = serverGuildRoomObjectToClient;
              c8 = 2;
              c9 = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = outer1_10(callback, callback2, obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            c7 = 0;
            dependencyMap = closure_6;
            let obj5 = callback2(709);
            const obj3 = { type: "GUILD_ROOM_NOTE_CREATE_COMPLETE", roomId: null };
            obj3[1] = callback2;
            obj5.dispatch(obj3);
            throw dependencyMap;
          } else if (arg0 === 1) {
            c9 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            if (callback2 !== callback) {
              obj = callback(4548);
              obj5 = { interactionType: "note_created", guildId: null, channelId: null };
              obj5[1] = callback;
              obj5[2] = callback2;
              const result = obj.trackGuildRoomObjectInteracted(obj5);
            }
            obj2 = callback2(709);
            const obj6 = { type: "GUILD_ROOM_NOTE_CREATE_COMPLETE", roomId: null };
            obj6[1] = callback2;
            obj2.dispatch(obj6);
            c7 = 0;
            c9 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp29) {
          closure_6 = tmp29;
          if (tmp4 === c7) {
            c9 = tmp2;
            throw tmp29;
          } else {
            c8 = tmp;
          }
        }
      }
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
              obj1[0] = callback(4541).GuildRoomObjectTypes.NOTE;
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
              obj = callback(4548);
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
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      let serverGuildRoomObjectToClient = tmp3;
      let c5 = 1;
      const HTTP = callback(outer1_2[4]).HTTP;
      let obj1 = { url: null, rejectWithError: true };
      obj1[0] = c6.GUILD_ROOM(callback, lib);
      yield HTTP.get(obj1);
      if (1 === tmp7) {
        c5 = 0;
        const obj4 = callback(4568);
        obj4.handleGuildRoomError({ silent: true });
        let c7 = 3;
      } else if (arg0 === 1) {
        c7 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        lib = arg1;
        const obj = callback(4542);
        const dependencyMap = obj.serverGuildRoomToClient(lib.body);
        obj1 = lib(709);
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
    const result = getBaseProperties.trackGuildRoomUserDisconnected(obj);
    const obj3 = getBaseProperties;
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
export const clearGuildRoomPendingPosition = function clearGuildRoomPendingPosition() {
  dispatcher.dispatch({ type: "GUILD_ROOM_LOCAL_POSITION_CLEARED" });
};
export const selectGuildRoomLocalPosition = function selectGuildRoomLocalPosition(position) {
  let obj = dispatcher;
  obj = { type: "GUILD_ROOM_LOCAL_POSITION_REQUESTED", position };
  obj.dispatch(obj);
};
export const guildRoomToggleLayout = function guildRoomToggleLayout(roomId) {
  let obj = dispatcher;
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
export const fetchGuildRoom = function fetchGuildRoom(c6, c5) {
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
  let obj = dispatcher;
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
  let obj = experiment;
  obj = { guildId, location: "maybeSetGuildRoomVideoOverlay" };
  if (obj.getCurrentConfig(obj, { autoTrackExposure: false }).enabled) {
    const videoOverlayVisibility = store.getVideoOverlayVisibility();
    obj = { type: "GUILD_ROOM_SET_VIDEO_OVERLAY_VISIBILITY", value: null };
    obj[1] = arg0;
    dispatcher.dispatch(obj);
    if (arg0 !== videoOverlayVisibility) {
      let str = "video_overlay_closed";
      if (arg0) {
        str = "video_overlay_opened";
      }
      const obj1 = { interactionType: null, channelId: null };
      obj1[0] = str;
      obj1[1] = channelId;
      const result = getBaseProperties.trackGuildRoomInteracted(obj1);
      const obj5 = getBaseProperties;
    }
    const tmpResult = dispatcher;
  }
};
export const setGuildRoomRememberVideoOverlayVisibility = function setGuildRoomRememberVideoOverlayVisibility(rememberVideoOverlayVisibility) {
  let obj = dispatcher;
  obj = { type: "GUILD_ROOM_SET_REMEMBER_VIDEO_OVERLAY_VISIBILITY", rememberVideoOverlayVisibility };
  obj.dispatch(obj);
  obj = { rememberVideoOverlayVisibility };
  const result = getBaseProperties.trackGuildRoomSettingsUpdate(obj);
};