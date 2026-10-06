// === Module 9485: StartEventUtils ===

// Module 9485 (StartEventUtils)
import Constants from "Constants" /* 1085 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2057 */;
import size from "module_2" /* 2 */;

let permissionOverwrites;

let metroImportAll;
let metroImportDefault;
function createStageChannelForEvent() {
  return obj(...arguments);
}
let obj = function _createStageChannelForEvent() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    const id = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    const iter = (async function(arg0, value) {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let items;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp5;
              permissionOverwrites = tmp;
              items = closure_2;
              if (closure_2 === undefined) {
                items = [];
              }
              permissionOverwrites = undefined;
              closure_4 = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "Reflect", done: true };
            }
          } else if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              permissionOverwrites = [];
              const push = permissionOverwrites.push;
              const items1 = [];
              HermesBuiltin.arraySpread(items1, items, 0);
              HermesBuiltin.apply(push, items1, permissionOverwrites);
              const obj5 = { guildId: id.id, type: closure_132_9.GUILD_STAGE_VOICE, name: closure_1.substring(0, 100), permissionOverwrites };
              const createChannel = closure_132_1(closure_132_2[6]).createChannel;
              closure_132_1(closure_132_2[6]);
              c5 = 2;
              c6 = 1;
              const obj6 = { value: createChannel(obj5), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            closure_4 = value;
            if (null != closure_4) {
              if (201 === closure_4.status) {
                c6 = 3;
                obj = { value: closure_132_4(closure_4.body), done: true };
                return obj;
              }
            }
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("Can't create channel for event");
            throw error;
          }
        } catch (tmp20) {
          c6 = 3;
          throw tmp20;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
function findOrCreateEventChannel(channel_id, arg1) {
  channel_id = channel_id.channel_id;
  const guild = GuildStore.getGuild(channel_id.guild_id);
  if (null == guild) {
    return Promise.resolve(null);
  } else {
    let resolved;
    const channel = ChannelStore.getChannel(channel_id);
    if (null == channel) {
      resolved = createStageChannelForEvent(guild, channel_id.name, arg1);
    } else {
      resolved = Promise.resolve(channel);
    }
    return resolved;
  }
}
obj = function _preStartEventActions() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let entity_type = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      if (c5 === 2) {
        c5 = 3;
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp4;
              closure_2 = tmp;
              entity_type = undefined;
              if (entity_type.entity_type === constants.STAGE_INSTANCE) {
                c4 = 1;
                c5 = 1;
                const obj4 = { value: findOrCreateEventChannel(tmp12, tmp13), done: false };
                return obj4;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            entity_type = value;
            closure_131_1(closure_131_2[7])(null != entity_type, "could not find or create channel");
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp16) {
          c5 = 3;
          throw tmp16;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _setEventAsActive() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_2;
    let closure_3;
    const user = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    const iter = (async (arg0) => {
      let flag;
      let obj4;
      let obj6;
      if (1 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          return { value, done: true };
        } else {
          const channel_id = user.channel_id;
          const entity_type = user.entity_type;
          const name = user.name;
          const id = user.id;
          const guild_id = user.guild_id;
          if (closure_131_7.STAGE_INSTANCE === entity_type) {
            closure_131_1(closure_131_2[7])(null != channel_id, "channel_id is required");
            c4 = 2;
            c5 = 1;
            const obj8 = closure_131_0(closure_131_2[8]);
            const obj7 = { value: obj8.startStageInstance(channel_id, name, closure_131_8.GUILD_ONLY, flag, id), done: false };
            return obj7;
          } else if (closure_131_7.VOICE === entity_type) {
            closure_131_1(closure_131_2[7])(null != channel_id, "channel_id is required");
            c4 = 3;
            c5 = 1;
            const obj9 = { value: obj6.startEvent(id, guild_id), done: false };
            obj6 = closure_131_1(closure_131_2[9]);
            return obj9;
          } else if (closure_131_7.EXTERNAL === entity_type) {
            c4 = 4;
            c5 = 1;
            const obj10 = { value: obj4.startEvent(id, guild_id), done: false };
            obj4 = closure_131_1(closure_131_2[9]);
            return obj10;
          }
        }
      } else if (2 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          return { value, done: true };
        }
      } else if (3 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          return { value, done: true };
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        return { value, done: true };
      }
      await "IconComponent";
      flag = closure_1;
      if (closure_1 === undefined) {
        flag = false;
      }
      return "Reflect";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
let closure_4 = ChannelRecord.createChannelRecordFromServer;
({ GuildScheduledEventEntityTypes: metroImportDefault, GuildScheduledEventPrivacyLevel: metroImportAll } = GuildScheduledEventsConstants);
const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/guild_scheduled_events/StartEventUtils.tsx");

export { createStageChannelForEvent };
export { findOrCreateEventChannel };
export const preStartEventActions = function preStartEventActions() {
  return obj(...arguments);
};
export const setEventAsActive = function setEventAsActive() {
  return obj(...arguments);
};