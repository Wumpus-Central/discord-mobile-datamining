// === Module 4969: handleThreadCreateOrUpdate ===

// Module 4969 (handleThreadCreateOrUpdate)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import set from "set" /* 2 */;

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
      let obj = dependencyMap[channel.guild_id];
      if (obj == null) {
        obj = {};
      }
      obj = {};
      const merged = Object.assign(obj);
      obj = {};
      const merged1 = Object.assign(obj[channel.parent_id]);
      ({ id: obj4[0], parent_id: obj4[1] } = channel);
      obj[channel.id] = { id: null, parentId: null };
      obj[channel.parent_id] = obj;
      dependencyMap[channel.guild_id] = obj;
    }
  } else {
    return false;
  }
}
function deleteThread(channel) {
  ({ guild_id, parent_id } = channel);
  let tmp5 = null != guild_id;
  if (tmp5) {
    tmp5 = null != parent_id;
  }
  if (tmp5) {
    let tmp7 = guild_id in dependencyMap;
    if (tmp7) {
      let tmp9 = parent_id in dependencyMap[guild_id];
      if (tmp9) {
        if (channel.id in dependencyMap[guild_id][parent_id]) {
          let obj = {};
          const merged = Object.assign(dependencyMap[guild_id]);
          obj = {};
          const merged1 = Object.assign(dependencyMap[guild_id][parent_id]);
          obj[parent_id] = obj;
          dependencyMap[guild_id] = obj;
          delete tmp[tmp4];
          if (obj3.isEmpty(dependencyMap[guild_id][parent_id])) {
            delete tmp2[tmp3];
          }
          obj3 = applyDefault;
        }
        tmp9 = tmp11;
      }
      tmp7 = tmp9;
    }
    tmp5 = tmp7;
  }
  return tmp5;
}
({ ALL_CHANNEL_TYPES: obj1, THREAD_CHANNEL_TYPES: c3 } = createChannelRecord);
let closure_5 = {};
let set = new Set();
let closure_8 = {};
const Store = initializeDefault.Store;
class ActiveThreadsStore extends Store {
}
const prototype = ActiveThreadsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_4);
};
prototype["isActive"] = function isActive(guild_id, id) {
  let tmp = null != guild_id;
  if (tmp) {
    const self = this;
    tmp = null != this.getThreadsForParent(guild_id, id)[arg2];
  }
  return tmp;
};
prototype["getThreadsForGuild"] = function getThreadsForGuild(closure_0) {
  let tmp = dependencyMap[closure_0];
  if (tmp == null) {
    tmp = closure_8;
  }
  return tmp;
};
prototype["getThreadsForParent"] = function getThreadsForParent(guild_id, id) {
  let tmp = this.getThreadsForGuild(guild_id)[id];
  if (tmp == null) {
    tmp = closure_8;
  }
  return tmp;
};
prototype["hasThreadsForChannel"] = function hasThreadsForChannel(guild_id, id) {
  return !applyDefault.isEmpty(this.getThreadsForParent(guild_id, id));
};
prototype["forEachGuild"] = function forEachGuild(arg0) {
  importDefault = arg0;
  const keys = DISCORD_EPOCHDefault.keys(closure_5);
  const item = keys.forEach((arg0) => {
    callback(arg0, closure_1_5[arg0]);
  });
};
prototype["hasLoaded"] = function hasLoaded(arg0) {
  return set.has(arg0);
};
ActiveThreadsStore.displayName = "ActiveThreadsStore";
const activeThreadsStore = new ActiveThreadsStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    closure_5 = {};
    set.clear();
    guilds = guilds.guilds;
    let item = guilds.forEach((threads) => {
      closure_0 = threads;
      let tmp = null != threads.threads;
      if (tmp) {
        tmp = threads.threads.length > 0;
      }
      if (tmp) {
        closure_5[threads.id] = {};
        threads = threads.threads;
        const found = threads.filter((type) => set.has(type.type));
        const item = found.forEach((id) => {
          id = threads.id;
          const parent_id = id.parent_id;
          if (!(parent_id in closure_1_5[id])) {
            tmp[parent_id] = {};
          }
          closure_1_5[id][parent_id][id.id] = { id: id.id, parentId: id.parent_id };
        });
      }
      if (threads.hasThreadsSubscription) {
        set.add(threads.id);
      }
    });
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(channels) {
    closure_5 = {};
    const found = applyDefault(channels.channels).filter((type) => set.has(type.type));
    const arr = applyDefault(channels.channels);
    let item = found.groupBy("guild_id").forEach((arr) => {
      closure_0 = arg1;
      closure_5[arg1] = {};
      const item = arr.forEach((id) => {
        const parent_id = id.parent_id;
        if (!(parent_id in closure_1_5[closure_0])) {
          tmp2[parent_id] = {};
        }
        closure_1_5[closure_0][parent_id][id.id] = { id: id.id, parentId: id.parent_id };
      });
    });
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    if (guild.id in closure_5) {
      delete tmp[tmp2];
    }
    let tmp4 = null != guild.threads;
    if (tmp4) {
      tmp4 = guild.threads.length > 0;
    }
    if (tmp4) {
      closure_5[guild.id] = {};
      const threads = guild.threads;
      const found = threads.filter((type) => set.has(type.type));
      const item = found.forEach((id) => {
        id = threads.id;
        const parent_id = id.parent_id;
        if (!(parent_id in closure_1_5[id])) {
          tmp[parent_id] = {};
        }
        closure_1_5[id][parent_id][id.id] = { id: id.id, parentId: id.parent_id };
      });
    }
    if (guild.hasThreadsSubscription) {
      set.add(guild.id);
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    if (guild.guild.id in closure_5) {
      delete tmp[tmp2];
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
    let obj = {};
    const merged = Object.assign(dependencyMap[guildId]);
    dependencyMap[guildId] = obj;
    for (const key10016 in closure_5[guildId]) {
      let tmp5 = key10016;
      let tmp6 = dependencyMap;
      obj = {};
      let tmp7 = dependencyMap;
      let tmp8 = obj;
      let merged1 = Object.assign(dependencyMap[guildId][key10016]);
      dependencyMap[guildId][key10016] = obj;
      continue;
    }
    const item = threads.forEach((id) => {
      const parent_id = id.parent_id;
      if (!(parent_id in closure_1_5[guildId])) {
        tmp2[parent_id] = {};
      }
      closure_1_5[guildId][parent_id][id.id] = { id: id.id, parentId: id.parent_id };
    });
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    return deleteThread(channel.channel);
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    if (null != channel.guild_id) {
      if (channel.guild_id in dependencyMap) {
        const obj = {};
        const merged = Object.assign(dependencyMap[channel.guild_id]);
        dependencyMap[channel.guild_id] = obj;
        const id = channel.id;
        delete tmp2[tmp];
      }
    }
    return false;
  }
});
const result = set.fileFinishedImporting("modules/threads/ActiveThreadsStore.tsx");

export default activeThreadsStore;