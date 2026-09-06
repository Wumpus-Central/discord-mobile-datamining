// === Module 12475: GuildProgressStore ===

// Module 12475 (GuildProgressStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;

function completeStep(guild_id, CHANNEL) {
  let tmp = null != obj;
  if (tmp) {
    const hasItem = obj.has(CHANNEL);
    let flag = !hasItem;
    if (!hasItem) {
      const _Set = Set;
      const set = new Set(obj.add(CHANNEL));
      dependencyMap[guild_id] = set;
      flag = true;
    }
    tmp = flag;
  }
  return tmp;
}
const Steps = fn(12469).Steps;
const dependencyMap = {};
const PersistedStore = initializeDefault.PersistedStore;
class GuildProgressStore extends PersistedStore {
}
const prototype = GuildProgressStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  importDefault = arg0;
  this.waitFor(AuthenticationStore, ChannelStore, GuildStore);
  closure_6 = {};
  if (null != arg0) {
    const keys = SnowflakeUtilsDefault.keys(arg0);
    const item = keys.forEach((item) => {
      let tmp2 = null != tmp;
      if (tmp2) {
        const _Symbol = Symbol;
        tmp2 = typeof tmp[Symbol.iterator] === "function";
      }
      if (tmp2) {
        const _Set = Set;
        const set = new Set(tmp);
        closure_6[item] = set;
      }
    });
  }
};
prototype["getProgress"] = function getProgress(arg0) {
  return dependencyMap[arg0];
};
prototype["hasProgress"] = function hasProgress(id) {
  let tmp = null != obj;
  if (tmp) {
    tmp = !obj.has(Steps.DISMISSED);
  }
  return tmp;
};
prototype["getState"] = function getState() {
  return closure_6;
};
GuildProgressStore.displayName = "GuildProgressStore";
GuildProgressStore.persistKey = "GuildProgressStore";
const guildProgressStore = new GuildProgressStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    const items = [];
    const keys = items(11).keys(dependencyMap);
    const item = keys.forEach((item) => {
      if (obj.has(Steps.COMPLETED)) {
        items.push(item);
      }
    });
    const item1 = items.forEach((item) => {
      const DISMISSED = constants.DISMISSED;
      let tmp = null != obj;
      if (tmp) {
        const hasItem = obj.has(DISMISSED);
        let flag = !hasItem;
        if (!hasItem) {
          const _Set = Set;
          const set = new Set(obj.add(DISMISSED));
          dependencyMap[item] = set;
          flag = true;
        }
        tmp = flag;
      }
      return tmp;
    });
  },
  GUILD_PROGRESS_INITIALIZE: function handleInitialize(guildId) {
    guildId = guildId.guildId;
    if (null == dependencyMap[guildId]) {
      const _Set = Set;
      const set = new Set();
      dependencyMap[guildId] = set;
    }
    if (!obj.has(Steps.COMPLETED)) {
      dependencyMap[guildId].delete(Steps.DISMISSED);
    }
  },
  GUILD_PROGRESS_COMPLETED_SEEN: function handleCompletedSeen(guildId) {
    guildId = guildId.guildId;
    if (null == dependencyMap[guildId]) {
      return false;
    } else {
      const _Set = Set;
      const set = new Set(dependencyMap[guildId].add(Steps.COMPLETED));
      dependencyMap[guildId] = set;
    }
  },
  GUILD_PROGRESS_DISMISS: function handleGuildProgressDismiss(guildId) {
    guildId = guildId.guildId;
    const DISMISSED = Steps.DISMISSED;
    let tmp = null != obj;
    if (tmp) {
      const hasItem = obj.has(DISMISSED);
      let flag = !hasItem;
      if (!hasItem) {
        const _Set = Set;
        const set = new Set(obj.add(DISMISSED));
        dependencyMap[guildId] = set;
        flag = true;
      }
      tmp = flag;
    }
    return tmp;
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    guild = GuildStore.getGuild(guild.id);
    if (null == guild) {
      return false;
    } else {
      let tmp3 = guild.ownerId === AuthenticationStore.getId();
      if (tmp3) {
        tmp3 = null != dependencyMap[guild.id];
      }
      if (tmp3) {
        if (null != guild.icon) {
          dependencyMap[guild.id].add(Steps.AVATAR);
        }
        if (guild.member_count > 1) {
          dependencyMap[guild.id].add(Steps.INVITE);
        }
      }
    }
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    let tmp = null != channel && null != channel.guild_id;
    if (tmp) {
      tmp = null != dependencyMap[channel.guild_id];
    }
    if (tmp) {
      const guild_id = channel.guild_id;
      const CHANNEL = Steps.CHANNEL;
      let tmp5 = null != obj;
      if (tmp5) {
        const hasItem = obj.has(CHANNEL);
        let flag = !hasItem;
        if (!hasItem) {
          const _Set = Set;
          const set = new Set(obj.add(CHANNEL));
          dependencyMap[guild_id] = set;
          flag = true;
        }
        tmp5 = flag;
      }
      tmp = tmp5;
    }
    return tmp;
  },
  CHANNEL_UPDATES: function handleChannelUpdates(arg0) {
    let flag = false;
    const iter = arg0.channels[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let tmp3 = null != nextResult;
      if (tmp3) {
        tmp3 = null != tmp2.guild_id;
      }
      if (tmp3) {
        tmp3 = null != dependencyMap[tmp2.guild_id];
      }
      if (tmp3) {
        tmp3 = false !== completeStep(tmp2.guild_id, Steps.CHANNEL);
      }
      if (tmp3) {
        flag = true;
      }
      continue;
    }
    return flag;
  },
  GUILD_SETTINGS_SUBMIT_SUCCESS: function handleGuildSettings(guild) {
    guild = guild.guild;
    let tmp = null != guild;
    if (tmp) {
      let tmp2 = null != guild.id;
      if (tmp2) {
        tmp2 = null != dependencyMap[guild.id];
      }
      if (tmp2) {
        tmp2 = null != guild.icon;
      }
      if (tmp2) {
        const id = guild.id;
        const AVATAR = Steps.AVATAR;
        let tmp6 = null != obj;
        if (tmp6) {
          const hasItem = obj.has(AVATAR);
          let flag = !hasItem;
          if (!hasItem) {
            const _Set = Set;
            const set = new Set(obj.add(AVATAR));
            dependencyMap[id] = set;
            flag = true;
          }
          tmp6 = flag;
        }
        tmp2 = tmp6;
      }
      tmp = tmp2;
    }
    return tmp;
  },
  MESSAGE_CREATE: function handleMessage(channelId) {
    const channel = ChannelStore.getChannel(channelId.channelId);
    const author = channelId.message.author;
    let id;
    if (author != null) {
      id = author.id;
    }
    let tmp3 = id === AuthenticationStore.getId() && null != channel;
    if (tmp3) {
      tmp3 = null != dependencyMap[channel.guild_id];
    }
    if (tmp3) {
      const guild_id = channel.guild_id;
      const MESSAGE = Steps.MESSAGE;
      let tmp7 = null != obj;
      if (tmp7) {
        const hasItem = obj.has(MESSAGE);
        let flag = !hasItem;
        if (!hasItem) {
          const _Set = Set;
          const set = new Set(obj.add(MESSAGE));
          dependencyMap[guild_id] = set;
          flag = true;
        }
        tmp7 = flag;
      }
      tmp3 = tmp7;
    }
    return tmp3;
  },
  GUILD_MEMBER_LIST_UPDATE: function handleGuildMember(guildId) {
    guildId = guildId.guildId;
    let tmp2 = null != dependencyMap[guildId];
    if (tmp2) {
      tmp2 = tmp > 1;
    }
    if (tmp2) {
      const INVITE = Steps.INVITE;
      let tmp5 = null != obj;
      if (tmp5) {
        const hasItem = obj.has(INVITE);
        let flag = !hasItem;
        if (!hasItem) {
          const _Set = Set;
          const set = new Set(obj.add(INVITE));
          dependencyMap[guildId] = set;
          flag = true;
        }
        tmp5 = flag;
      }
      tmp2 = tmp5;
    }
    return tmp2;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_progress/GuildProgressStore.tsx");

export default guildProgressStore;