// === Module 9811: createStageChannelForEvent ===

// Module 9811 (createStageChannelForEvent)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { createChannelRecordFromServer as closure_4 } from "createChannelRecord" /* 1961 */;
import closure_5 from "ensureGuildLoaded" /* 1957 */;
import closure_6 from "createGuildRecordFromRust" /* 1979 */;
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH" /* 1963 */;
import { ChannelTypes } from "ME" /* 1074 */;

const require = arg1;
function createStageChannelForEvent(guild, name, arg2) {
  const self = this;
  const apply = _createStageChannelForEvent.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _createStageChannelForEvent() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c6 = 0;
    const iter = (function*(arg0, arg1) {
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
              let lib2 = tmp5;
              let navigation = tmp2;
              let items;
              if (items === undefined) {
                items = [];
              }
              navigation = undefined;
              lib2 = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "PX_16", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              navigation = [];
              const push = navigation.push;
              const items1 = [];
              HermesBuiltin.arraySpread(items, 0);
              HermesBuiltin.apply(items1, navigation);
              const obj2 = { guildId: null, type: null, name: null, permissionOverwrites: null };
              obj2[0] = id.id;
              obj2[1] = constants.GUILD_STAGE_VOICE;
              obj2[2] = lib.substring(0, 100);
              obj2[3] = navigation;
              c5 = 2;
              c6 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = lib(items[6]).createChannel(obj2);
              return obj3;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            lib2 = arg1;
            if (null != lib2) {
              if (201 === lib2.status) {
                c6 = 3;
                obj = { value: null, done: true };
                obj[0] = lib2(lib2.body);
                return obj;
              }
            }
            const _Error = Error;
            error = new Error("Can't create channel for event");
            throw error;
          }
        } catch (tmp22) {
          c6 = tmp;
          throw tmp22;
        }
      }
    })();
    iter.next();
    return iter;
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
function findOrCreateEventChannel(guild_id) {
  guild = guild.getGuild(guild_id.guild_id);
  if (null == guild) {
    return Promise.resolve(null);
  } else {
    channel = channel.getChannel(guild_id.channel_id);
    if (null == channel) {
      let resolved = createStageChannelForEvent(guild, guild_id.name, arg1);
    } else {
      resolved = Promise.resolve(channel);
    }
    return resolved;
  }
}
function _preStartEventActions() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
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
              closure_3 = tmp5;
              const table = tmp2;
              let entity_type;
              if (entity_type.entity_type === closure_1_7.STAGE_INSTANCE) {
                c4 = 1;
                c5 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_12(tmp13, tmp14);
                return obj1;
              } else {
                c5 = 3;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            entity_type = arg1;
            callback(table[7])(null != entity_type, "could not find or create channel");
          }
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp17) {
          c5 = tmp;
          throw tmp17;
        }
      }
    })();
  });
  closure_13 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _setEventAsActive() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    const iter = (function*(arg0) {
      if (id === 2) {
        id = 3;
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
          id = 2;
          if (0 === name) {
            if (arg0 === 1) {
              id = 3;
              throw arg1;
            } else if (arg0 === 2) {
              id = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let entity_type = tmp5;
              let channel_id = tmp2;
              let flag;
              if (flag === undefined) {
                flag = false;
              }
              channel_id = undefined;
              entity_type = undefined;
              name = undefined;
              id = undefined;
              let guild_id;
              name = 1;
              id = 1;
              return { value: "PX_16", done: true };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                id = 3;
                throw arg1;
              } else if (arg0 === 2) {
                id = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                channel_id = lib.channel_id;
                entity_type = lib.entity_type;
                name = lib.name;
                id = lib.id;
                guild_id = lib.guild_id;
                if (constants.STAGE_INSTANCE === entity_type) {
                  flag(channel_id[7])(null != channel_id, "channel_id is required");
                  const obj8 = lib(channel_id[8]);
                  name = 2;
                  id = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = obj8.startStageInstance(channel_id, name, constants2.GUILD_ONLY, flag, id);
                  return obj2;
                } else if (constants.VOICE === tmp54) {
                  flag(channel_id[7])(null != channel_id, "channel_id is required");
                  let obj5 = flag(channel_id[9]);
                  name = 3;
                  id = 1;
                  let obj3 = { value: null, done: false };
                  obj3[0] = obj5.startEvent(id, guild_id);
                  return obj3;
                } else if (constants.EXTERNAL === tmp54) {
                  obj3 = flag(channel_id[9]);
                  name = 4;
                  id = 1;
                  const obj4 = { value: null, done: false };
                  obj4[0] = obj3.startEvent(id, guild_id);
                  return obj4;
                }
              }
            } else if (2 === tmp5) {
              if (arg0 === 1) {
                id = 3;
                throw arg1;
              } else if (arg0 === 2) {
                id = 3;
                obj5 = { value: null, done: true };
                obj5[0] = arg1;
                return obj5;
              }
            } else if (3 === tmp5) {
              if (arg0 === 1) {
                id = 3;
                throw arg1;
              } else if (arg0 === 2) {
                id = 3;
                const obj6 = { value: null, done: true };
                obj6[0] = arg1;
                return obj6;
              }
            } else if (arg0 === 1) {
              id = 3;
              throw arg1;
            } else if (arg0 === 2) {
              id = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            id = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp41) {
          id = tmp;
          throw tmp41;
        }
      }
    })();
    iter.next();
    return iter;
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
({ GuildScheduledEventEntityTypes: error, GuildScheduledEventPrivacyLevel: closure_8 } = GUILD_EVENT_MAX_NAME_LENGTH);
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/StartEventUtils.tsx");

export { createStageChannelForEvent };
export { findOrCreateEventChannel };
export const preStartEventActions = function preStartEventActions(closure_0, permissionOverwrites) {
  const self = this;
  const apply = _preStartEventActions.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setEventAsActive = function setEventAsActive(closure_0, closure_1) {
  const self = this;
  const apply = _setEventAsActive.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};