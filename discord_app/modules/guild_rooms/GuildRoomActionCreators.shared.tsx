// === Module 4643: _guildRoomConnect ===

// Module 4643 (_guildRoomConnect)
import dispatcherDefault from "dispatcher" /* 709 */;
import getBaseProperties from "getBaseProperties" /* 4652 */;
import experimentDefault from "experiment" /* 4673 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "fetchFingerprint" /* 1218 */;
import closure_5 from "resolveCreatingNotes" /* 4644 */;
import { Endpoints } from "ME" /* 676 */;

require = arg1;
function _guildRoomConnect() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c10 = 0;
    c11 = 0;
    c9 = 0;
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
              closure_6 = tmp4;
              let tmp83 = dependencyMap;
              closure_3 = undefined;
              closure_4 = undefined;
              let users;
              closure_6 = undefined;
              items = undefined;
              c8 = undefined;
              c9 = 1;
              closure_3 = dependencyMap;
              let tmp81 = callback;
              let tmp82 = callback2;
              if (dependencyMap == null) {
                let tmp37 = closure_1_7;
                closure_3 = closure_1_7;
              }
              let tmp38 = closure_3;
              let tmp39 = callback;
              let tmp40 = dependencyMap;
              let HTTP = callback(530).HTTP;
              obj1 = { url: null, body: null, rejectWithError: true };
              let tmp41 = closure_1_6;
              obj1[0] = closure_1_6.GUILD_ROOM_CONNECT(tmp81, tmp82);
              let obj2 = { position: null };
              obj2[0] = closure_3;
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
              closure_4 = arg1;
              let tmp49 = callback;
              let tmp50 = dependencyMap;
              let obj12 = callback(4646);
              let tmp51 = closure_4;
              users = obj12.serverGuildRoomToClient(closure_4.body);
              let tmp52 = callback2;
              let tmp53 = dependencyMap;
              let obj14 = callback2(709);
              let obj6 = { type: "GUILD_ROOM_CONNECT", room: null, guildId: null, pendingPosition: null };
              let tmp54 = users;
              obj6[1] = users;
              let tmp55 = callback;
              obj6[2] = callback;
              let tmp56 = closure_3;
              obj6[3] = closure_3;
              let dispatchResult1 = obj14.dispatch(obj6);
              let tmp58 = callback2;
              let tmp59 = callback;
              if (callback2 !== callback) {
                let tmp60 = closure_6;
                let tmp61 = items;
                let tmp62 = callback;
                let tmp63 = dependencyMap;
                let obj16 = callback(4652);
                let obj7 = { guildId: null, channelId: null };
                let tmp64 = callback;
                obj7[0] = callback;
                let tmp65 = callback2;
                obj7[1] = callback2;
                let result = obj16.trackGuildRoomUserConnected(obj7);
                let tmp67 = callback;
                let tmp68 = dependencyMap;
                let obj18 = callback(4663);
                let tmp69 = callback;
                let tmp70 = dependencyMap;
                let fireSurveyActionResult = obj18.fireSurveyAction(callback(4671).SurveyActionTypes.GUILD_ROOM_JOINED);
                let tmp72 = users;
                users = users.users;
                let tmp73 = closure_4;
                closure_6 = users.get(closure_4.getId());
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
                  closure_4 = items[Symbol.iterator]();
                  let tmp8 = users;
                  let tmp9 = closure_4;
                  while (closure_4 !== undefined) {
                    let tmp11 = closure_6;
                    let tmp12 = items;
                    c9 = 2;
                    c8 = tmp10;
                    let tmp13 = callback;
                    let tmp14 = dependencyMap;
                    obj = callback(4652);
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
                  obj2 = callback(4652);
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
            let tmp7 = closure_4;
            closure_4.return();
            throw c8;
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
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c7 = 0;
    c8 = 0;
    c6 = 0;
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
              c6 = undefined;
              users = undefined;
              position = undefined;
              room = closure_1_5.getRoom(callback2);
              id = closure_1_5.getRoomUsers(callback2);
              roomObjects = closure_1_5.getRoomObjects(callback2);
              c6 = 1;
              obj1 = { type: "GUILD_ROOM_LOCAL_UPDATE", roomId: null };
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
            closure_9 = roomObjects;
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
    return (function*(arg0, arg1, arg2) {
      const HTTP = callback(table[4]).HTTP;
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
    return (function*(arg0, arg1, arg2, arg3) {
      const HTTP = callback(table[4]).HTTP;
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
    return (function*(arg0, arg1, arg2, arg3) {
      const HTTP = callback(table[4]).HTTP;
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
              callback2(709).dispatch(obj1);
              closure_1_15(callback2);
              c7 = 1;
              const obj2 = { object_type: null, content: null, position: null };
              obj2[0] = callback(4645).GuildRoomObjectTypes.NOTE;
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
            obj3 = callback2(709);
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
              obj = callback(4652);
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
              closure_4 = tmp5;
              closure_3 = tmp2;
              obj1 = { object_type: null };
              obj1[0] = callback(4645).GuildRoomObjectTypes.NOTE;
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
              obj = callback(4652);
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
    return (function*(arg0, arg1) {
      closure_3 = tmp3;
      c5 = 1;
      const HTTP = callback(closure_1_2[4]).HTTP;
      obj1 = { url: null, rejectWithError: true };
      obj1[0] = c6.GUILD_ROOM(callback, lib);
      yield HTTP.get(obj1);
      if (1 === tmp7) {
        c5 = 0;
        const obj4 = callback(4672);
        obj4.handleGuildRoomError({ silent: true });
        c7 = 3;
      } else if (arg0 === 1) {
        c7 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        lib = arg1;
        const obj = callback(4646);
        dependencyMap = obj.serverGuildRoomToClient(lib.body);
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
export const selectGuildRoomLocalPosition = function selectGuildRoomLocalPosition(position) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_ROOM_LOCAL_POSITION_REQUESTED", position };
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
  let obj = experimentDefault;
  obj = { guildId, location: "maybeSetGuildRoomVideoOverlay" };
  if (obj.getCurrentConfig(obj, { autoTrackExposure: false }).enabled) {
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
      const obj5 = getBaseProperties;
    }
    const tmpResult = dispatcherDefault;
  }
};
export const setGuildRoomRememberVideoOverlayVisibility = function setGuildRoomRememberVideoOverlayVisibility(rememberVideoOverlayVisibility) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_ROOM_SET_REMEMBER_VIDEO_OVERLAY_VISIBILITY", rememberVideoOverlayVisibility };
  obj.dispatch(obj);
  obj = { rememberVideoOverlayVisibility };
  const result = getBaseProperties.trackGuildRoomSettingsUpdate(obj);
};