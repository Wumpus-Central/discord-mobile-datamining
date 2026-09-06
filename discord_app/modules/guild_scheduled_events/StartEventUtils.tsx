// discord_app/modules/guild_scheduled_events/StartEventUtils.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";

const require = fn;
function createStageChannelForEvent() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _createStageChannelForEvent(arg0, value) {
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
          closure_131_2 = undefined;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          let items = closure_2;
          if (closure_2 === undefined) {
            items = [];
          }
          closure_131_2 = items;
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          closure_131_3 = [];
          const push = closure_131_3.push;
          const items1 = [];
          HermesBuiltin.arraySpread(closure_131_2, 0);
          HermesBuiltin.apply(items1, closure_131_3);
          const obj2 = {
            guildId: closure_131_0.id,
            type: closure_132_9.GUILD_STAGE_VOICE,
            name: closure_131_1.substring(0, 100),
            permissionOverwrites: closure_131_3,
          };
          c5 = 2;
          c6 = 1;
          const obj3 = { value: closure_132_1(closure_132_2[6]).createChannel(obj2), done: false };
          return obj3;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        closure_131_4 = value;
        if (null != closure_131_4) {
          if (201 === closure_131_4.status) {
            c6 = 3;
            obj = { value: closure_132_4(closure_131_4.body), done: true };
            return obj;
          }
        }
        const _Error = Error;
        const error = new Error("Can't create channel for event");
        throw error;
      }
    } catch (tmp22) {
      c6 = tmp;
      throw tmp22;
    }
  }
};
function findOrCreateEventChannel(guild_id, arg1) {
  const guild = GuildStore.getGuild(guild_id.guild_id);
  if (null == guild) {
    return Promise.resolve(null);
  } else {
    const channel = ChannelStore.getChannel(guild_id.channel_id);
    if (null == channel) {
      let resolved = createStageChannelForEvent(guild, guild_id.name, arg1);
    } else {
      resolved = Promise.resolve(channel);
    }
    return resolved;
  }
}
let closure_13 = async function _preStartEventActions(arg0, arg1) {
  let entity_type = arg0;
  closure_1 = arg1;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp5;
            closure_2 = tmp2;
            closure_130_0 = undefined;
            if (entity_type.entity_type === constants.STAGE_INSTANCE) {
              c4 = 1;
              c5 = 1;
              const obj1 = { value: findOrCreateEventChannel(tmp13, tmp14), done: false };
              return obj1;
            } else {
              c5 = 3;
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_130_0 = value;
          closure_131_1(closure_131_2[7])(null != closure_130_0, "could not find or create channel");
        }
        c5 = 3;
        obj = { value, done: true };
        return obj;
      } catch (tmp17) {
        c5 = tmp;
        throw tmp17;
      }
    }
  })();
};
let closure_14 = async function _setEventAsActive(arg0, value) {
  if (1 === tmp5) {
    if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 3;
      return { value, done: true };
    } else {
      const channel_id = closure_130_0.channel_id;
      const entity_type = closure_130_0.entity_type;
      const name = closure_130_0.name;
      const id = closure_130_0.id;
      const guild_id = closure_130_0.guild_id;
      if (closure_131_7.STAGE_INSTANCE === entity_type) {
        closure_131_1(closure_131_2[7])(null != channel_id, "channel_id is required");
        c4 = 2;
        c5 = 1;
        closure_131_0(closure_131_2[8]);
        return {
          value: closure_131_0(closure_131_2[8]).startStageInstance(
            channel_id,
            name,
            closure_131_8.GUILD_ONLY,
            closure_130_1,
            id,
          ),
          done: false,
        };
      } else if (closure_131_7.VOICE === tmp53) {
        closure_131_1(closure_131_2[7])(null != channel_id, "channel_id is required");
        let obj5 = closure_131_1(closure_131_2[9]);
        c4 = 3;
        c5 = 1;
        let obj3 = { value: obj5.startEvent(id, guild_id), done: false };
        return obj3;
      } else if (closure_131_7.EXTERNAL === tmp53) {
        obj3 = closure_131_1(closure_131_2[9]);
        c4 = 4;
        c5 = 1;
        return { value: obj3.startEvent(id, guild_id), done: false };
      }
    }
  } else if (2 === tmp5) {
    if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 3;
      obj5 = { value, done: true };
      return obj5;
    }
  } else if (3 === tmp5) {
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
  await "HermesInternal";
  closure_2 = tmp2;
  closure_130_0 = closure_0;
  let flag = closure_1;
  if (closure_1 === undefined) {
    flag = false;
  }
  closure_130_1 = flag;
  return "PX_16";
};
let closure_4 = fn(1961).createChannelRecordFromServer;
const GuildScheduledEventsConstants = fn(1963);
({ GuildScheduledEventEntityTypes: closure_7, GuildScheduledEventPrivacyLevel: closure_8 } =
  GuildScheduledEventsConstants);
const ChannelTypes = fn(1074).ChannelTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/StartEventUtils.tsx");

export { createStageChannelForEvent };
export { findOrCreateEventChannel };
export const preStartEventActions = function preStartEventActions() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setEventAsActive = function setEventAsActive() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
