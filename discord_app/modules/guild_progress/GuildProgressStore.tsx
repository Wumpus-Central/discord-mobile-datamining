// discord_app/modules/guild_progress/GuildProgressStore.tsx
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { Steps } from "Steps";
import { PersistedStore } from "initialize";
import { DISCORD_EPOCH } from "../../utils/SnowflakeUtils.tsx";

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
let closure_6 = {};
class GuildProgressStore extends PersistedStore {
}
const prototype = GuildProgressStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  const importDefault = arg0;
  this.waitFor(fetchFingerprint, ensureGuildLoaded, createGuildRecordFromRust);
  let closure_6 = {};
  if (null != arg0) {
    const keys = DISCORD_EPOCH.keys(arg0);
    const item = keys.forEach((arg0) => {
      let tmp2 = null != tmp;
      if (tmp2) {
        const _Symbol = Symbol;
        tmp2 = typeof tmp[Symbol.iterator] === "function";
      }
      if (tmp2) {
        const _Set = Set;
        const set = new Set(tmp);
        closure_6[arg0] = set;
      }
    });
    const obj = DISCORD_EPOCH;
  }
};
prototype["getProgress"] = function getProgress(arg0) {
  return dependencyMap[arg0];
};
prototype["hasProgress"] = function hasProgress(hasAlreadyLinked) {
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
const guildProgressStore = new GuildProgressStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    const items = [];
    const keys = items(11).keys(closure_6);
    const item = keys.forEach((arg0) => {
      if (obj.has(outer1_5.COMPLETED)) {
        items.push(arg0);
      }
    });
    const item1 = items.forEach((arg0) => {
      const DISMISSED = constants.DISMISSED;
      let tmp = null != obj;
      if (tmp) {
        const hasItem = obj.has(DISMISSED);
        let flag = !hasItem;
        if (!hasItem) {
          const _Set = Set;
          const set = new Set(obj.add(DISMISSED));
          table[arg0] = set;
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
      const obj2 = dependencyMap[guildId];
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
    guild = guild.getGuild(guild.id);
    if (null == guild) {
      return false;
    } else {
      let tmp3 = guild.ownerId === store.getId();
      if (tmp3) {
        tmp3 = null != dependencyMap[guild.id];
      }
      if (tmp3) {
        if (null != guild.icon) {
          dependencyMap[guild.id].add(Steps.AVATAR);
          const obj = dependencyMap[guild.id];
        }
        if (guild.member_count > 1) {
          dependencyMap[guild.id].add(Steps.INVITE);
          const obj2 = dependencyMap[guild.id];
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
        let tmp4 = nextResult;
        tmp3 = null != tmp2.guild_id;
      }
      if (tmp3) {
        let tmp5 = dependencyMap;
        let tmp6 = nextResult;
        tmp3 = null != dependencyMap[tmp2.guild_id];
      }
      if (tmp3) {
        let tmp7 = completeStep;
        let tmp8 = nextResult;
        let tmp9 = Steps;
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
    channel = channel.getChannel(channelId.channelId);
    const author = channelId.message.author;
    let id;
    if (author != null) {
      id = author.id;
    }
    let tmp3 = id === store.getId() && null != channel;
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
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/guild_progress/GuildProgressStore.tsx");

export default guildProgressStore;