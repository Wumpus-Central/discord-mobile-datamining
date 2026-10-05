// === Module 5692: ActiveThreadsStore ===

// Module 5692 (ActiveThreadsStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import size from "module_2" /* 2 */;

let closure_5, importDefault;

let c2;
let c3;
const f90762 = (type) => set.has(type.type);
function handleThreadCreateOrUpdate(channel) {
  channel = channel.channel;
  if (set.has(channel.type)) {
    const threadMetadata = channel.threadMetadata;
    let archived;
    if (threadMetadata != null) {
      archived = threadMetadata.archived;
    }
    if (true === archived) {
      return deleteThread(channel);
    } else {
      let obj = closure_5[channel.guild_id];
      if (obj == null) {
        obj = {};
      }
      const obj2 = {};
      const guild_id = channel.guild_id;
      const merged = Object.assign(obj);
      const obj3 = {};
      const parent_id = channel.parent_id;
      const merged1 = Object.assign(obj[channel.parent_id]);
      const obj7 = { id: null, parentId: null };
      ({ id: obj4.id, parent_id: obj4.parentId } = channel);
      obj3[channel.id] = obj7;
      obj2[parent_id] = obj3;
      closure_5[guild_id] = obj2;
    }
  } else {
    return false;
  }
}
function deleteThread(channel) {
  let guild_id;
  let id;
  let parent_id;
  ({ guild_id, parent_id, id } = channel);
  let tmp = null != guild_id && null != parent_id;
  if (tmp) {
    let tmp3 = guild_id in closure_5;
    if (tmp3) {
      let tmp5 = parent_id in closure_5[guild_id];
      if (tmp5) {
        if (id in closure_5[guild_id][parent_id]) {
          const obj = {};
          const merged = Object.assign(closure_5[guild_id]);
          const obj2 = {};
          const merged1 = Object.assign(closure_5[guild_id][parent_id]);
          obj[parent_id] = obj2;
          closure_5[guild_id] = obj;
          delete closure_5[guild_id][parent_id][id];
          const obj3 = _modDef12;
          if (obj3.isEmpty(closure_5[guild_id][parent_id])) {
            delete closure_5[guild_id][parent_id];
          }
        }
        tmp5 = tmp7;
      }
      tmp3 = tmp5;
    }
    tmp = tmp3;
  }
  return tmp;
}
({ ALL_CHANNEL_TYPES: c2, THREAD_CHANNEL_TYPES: c3 } = ChannelRecord);
const hasOwnProperty = {};
const set = new Set();
let closure_8 = {};
const Store = get_initializedDefault.Store;
class ActiveThreadsStore extends Store {
  initialize() {
    this.waitFor(ChannelStore);
  }
  isActive(guild_id, id, arg2) {
    let tmp = null != guild_id;
    if (tmp) {
      const self = this;
      tmp = null != this.getThreadsForParent(guild_id, id)[arg2];
    }
    return tmp;
  }
  getThreadsForGuild(guildId) {
    let tmp = closure_5[guildId];
    if (tmp == null) {
      tmp = closure_8;
    }
    return tmp;
  }
  getThreadsForParent(guild_id, id) {
    let tmp = this.getThreadsForGuild(guild_id)[id];
    if (tmp == null) {
      tmp = closure_8;
    }
    return tmp;
  }
  hasThreadsForChannel(guild_id, id) {
    const obj = _modDef12;
    return !obj.isEmpty(this.getThreadsForParent(guild_id, id));
  }
  forEachGuild(arg0) {
    let closure_0;
    importDefault = arg0;
    const obj = SnowflakeUtilsDefault;
    const keys = obj.keys(closure_5);
    const item = keys.forEach((item) => {
      closure_0(item, closure_5[item]);
    });
  }
  hasLoaded(arg0) {
    return set.has(arg0);
  }
}
const prototype = ActiveThreadsStore.prototype;
ActiveThreadsStore.displayName = "ActiveThreadsStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    closure_5 = {};
    set.clear();
    guilds = guilds.guilds;
    let item = guilds.forEach((threads) => {
      const tmp = null != threads.threads && threads.threads.length > 0;
      if (tmp) {
        closure_5[threads.id] = {};
        threads = threads.threads;
        const found = threads.filter(f90762);
        const item = found.forEach((id) => {
          id = threads.id;
          const parent_id = id.parent_id;
          if (!(parent_id in closure_2_5[id])) {
            closure_2_5[id][parent_id] = {};
          }
          closure_2_5[id][parent_id][id.id] = { id: id.id, parentId: id.parent_id };
        });
      }
      if (threads.hasThreadsSubscription) {
        set.add(threads.id);
      }
    });
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(channels) {
    closure_5 = {};
    const arr = _modDef12(channels.channels);
    const found = arr.filter((type) => set.has(type.type));
    const groupByResult = found.groupBy("guild_id");
    let item = groupByResult.forEach((arr, index) => {
      let closure_0 = index;
      closure_5[index] = {};
      const item = arr.forEach((id) => {
        const parent_id = id.parent_id;
        if (!(parent_id in closure_2_5[index])) {
          closure_2_5[index][parent_id] = {};
        }
        closure_2_5[index][parent_id][id.id] = { id: id.id, parentId: id.parent_id };
      });
    });
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    const id = guild.id;
    if (id in closure_5) {
      delete closure_5[id];
    }
    const tmp = null != guild.threads && guild.threads.length > 0;
    if (tmp) {
      closure_5[guild.id] = {};
      const threads = guild.threads;
      const found = threads.filter(f90762);
      const item = found.forEach((id) => {
        id = threads.id;
        const parent_id = id.parent_id;
        if (!(parent_id in closure_2_5[id])) {
          closure_2_5[id][parent_id] = {};
        }
        closure_2_5[id][parent_id][id.id] = { id: id.id, parentId: id.parent_id };
      });
    }
    if (guild.hasThreadsSubscription) {
      set.add(guild.id);
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    const id = guild.guild.id;
    if (id in closure_5) {
      delete closure_5[id];
    }
  },
  THREAD_CREATE: handleThreadCreateOrUpdate,
  THREAD_UPDATE: handleThreadCreateOrUpdate,
  THREAD_LIST_SYNC: function handleThreadListSync(guildId) {
    guildId = guildId.guildId;
    const threads = guildId.threads;
    if (null == guildId.channelIds) {
      set.add(guildId);
    }
    const obj = {};
    const merged = Object.assign(closure_5[guildId]);
    closure_5[guildId] = obj;
    for (const key10016 in closure_5[guildId]) {
      let obj2 = {};
      let tmp7 = closure_5[guildId];
      let merged1 = Object.assign(closure_5[guildId][key10016]);
      tmp7[key10016] = obj2;
      continue;
    }
    const item = threads.forEach((id) => {
      const parent_id = id.parent_id;
      if (!(parent_id in closure_5[guildId])) {
        closure_5[guildId][parent_id] = {};
      }
      closure_5[guildId][parent_id][id.id] = { id: id.id, parentId: id.parent_id };
    });
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    return deleteThread(channel.channel);
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    if (null != channel.guild_id) {
      if (channel.guild_id in closure_5) {
        const guild_id = channel.guild_id;
        const obj = {};
        const merged = Object.assign(closure_5[channel.guild_id]);
        closure_5[guild_id] = obj;
        delete closure_5[channel.guild_id][channel.id];
      }
    }
    return false;
  }
};
const activeThreadsStore = new ActiveThreadsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/threads/ActiveThreadsStore.tsx");

export default activeThreadsStore;