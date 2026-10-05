// === Module 12131: GuildProgressStore ===

// Module 12131 (GuildProgressStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import GuildProgressConstants from "GuildProgressConstants" /* 12125 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import size from "module_2" /* 2 */;

let closure_6, importDefault, set;

function completeStep(guild_id, CHANNEL) {
  let tmp = null != obj;
  if (tmp) {
    const hasItem = obj.has(CHANNEL);
    let flag = !hasItem;
    if (flag) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      closure_6[guild_id] = new Set(closure_6[guild_id].add(CHANNEL));
      flag = true;
      set = new Set(closure_6[guild_id].add(CHANNEL));
    }
    tmp = flag;
  }
  return tmp;
}
const Steps = GuildProgressConstants.Steps;
const metroRequire = {};
const PersistedStore = get_initializedDefault.PersistedStore;
class GuildProgressStore extends PersistedStore {
  initialize(arg0) {
    let closure_0;
    importDefault = arg0;
    this.waitFor(AuthenticationStore, ChannelStore, GuildStore);
    closure_6 = {};
    if (null != arg0) {
      let tmp2 = importDefault;
      const obj = SnowflakeUtilsDefault;
      const keys = obj.keys(arg0);
      const item = keys.forEach(function(item) {
        let tmp2 = null != tmp;
        if (tmp2) {
          const _Symbol = Symbol;
          tmp2 = typeof tmp[Symbol.iterator] === "function";
        }
        if (tmp2) {
          const _Set = Set;
          const self = this;
          const self2 = this;
          closure_6[item] = new Set(closure_0[item]);
          set = new Set(closure_0[item]);
        }
      });
    }
  }
  getProgress(arg0) {
    return closure_6[arg0];
  }
  hasProgress(id) {
    const tmp = null != obj && !obj.has(Steps.DISMISSED);
    return tmp;
  }
  getState() {
    return closure_6;
  }
}
const prototype = GuildProgressStore.prototype;
GuildProgressStore.displayName = "GuildProgressStore";
GuildProgressStore.persistKey = "GuildProgressStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    const items = [];
    let obj = items(11);
    const keys = obj.keys(closure_6);
    const item = keys.forEach((item) => {
      const obj = closure_6[item];
      if (obj.has(Steps.COMPLETED)) {
        items.push(item);
      }
    });
    const item1 = items.forEach(function(item) {
      const DISMISSED = constants.DISMISSED;
      let tmp = null != obj;
      if (tmp) {
        const hasItem = obj.has(DISMISSED);
        let flag = !hasItem;
        if (flag) {
          const _Set = Set;
          const self = this;
          const self2 = this;
          closure_1_6[item] = new Set(closure_1_6[item].add(DISMISSED));
          flag = true;
          set = new Set(closure_1_6[item].add(DISMISSED));
        }
        tmp = flag;
      }
      return tmp;
    });
  },
  GUILD_PROGRESS_INITIALIZE: function handleInitialize(guildId) {
    guildId = guildId.guildId;
    if (null == closure_6[guildId]) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      closure_6[guildId] = new Set();
      set = new Set();
    }
    const obj = closure_6[guildId];
    if (!obj.has(Steps.COMPLETED)) {
      const obj2 = closure_6[guildId];
      obj2.delete(Steps.DISMISSED);
    }
  },
  GUILD_PROGRESS_COMPLETED_SEEN: function handleCompletedSeen(guildId) {
    guildId = guildId.guildId;
    if (null == closure_6[guildId]) {
      return false;
    } else {
      const _Set = Set;
      const self = this;
      const self2 = this;
      const obj = closure_6[guildId];
      closure_6[guildId] = new Set(obj.add(Steps.COMPLETED));
      set = new Set(obj.add(Steps.COMPLETED));
    }
  },
  GUILD_PROGRESS_DISMISS: function handleGuildProgressDismiss(guildId) {
    guildId = guildId.guildId;
    const DISMISSED = Steps.DISMISSED;
    let tmp = null != obj;
    if (tmp) {
      const hasItem = obj.has(DISMISSED);
      let flag = !hasItem;
      if (flag) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        closure_6[guildId] = new Set(closure_6[guildId].add(DISMISSED));
        flag = true;
        set = new Set(closure_6[guildId].add(DISMISSED));
      }
      tmp = flag;
    }
    return tmp;
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    const member_count = guild.member_count;
    const guild1 = GuildStore.getGuild(guild.id);
    if (null == guild1) {
      return false;
    } else {
      const tmp3 = guild1.ownerId === AuthenticationStore.getId() && null != closure_6[guild1.id];
      if (tmp3) {
        if (null != guild1.icon) {
          const obj = closure_6[guild1.id];
          obj.add(Steps.AVATAR);
        }
        if (member_count > 1) {
          const obj2 = closure_6[guild1.id];
          obj2.add(Steps.INVITE);
        }
      }
    }
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    let tmp = null != channel && null != channel.guild_id && null != closure_6[channel.guild_id];
    if (tmp) {
      const guild_id = channel.guild_id;
      const CHANNEL = Steps.CHANNEL;
      let tmp5 = null != obj;
      if (tmp5) {
        const hasItem = obj.has(CHANNEL);
        let flag = !hasItem;
        if (flag) {
          const _Set = Set;
          const self = this;
          const self2 = this;
          closure_6[guild_id] = new Set(closure_6[guild_id].add(CHANNEL));
          flag = true;
          set = new Set(closure_6[guild_id].add(CHANNEL));
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
        tmp3 = null != closure_6[tmp2.guild_id];
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
      let tmp2 = null != guild.id && null != closure_6[guild.id] && null != guild.icon;
      if (tmp2) {
        const id = guild.id;
        const AVATAR = Steps.AVATAR;
        let tmp6 = null != obj;
        if (tmp6) {
          const hasItem = obj.has(AVATAR);
          let flag = !hasItem;
          if (flag) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            closure_6[id] = new Set(closure_6[id].add(AVATAR));
            flag = true;
            set = new Set(closure_6[id].add(AVATAR));
          }
          tmp6 = flag;
        }
        tmp2 = tmp6;
      }
      tmp = tmp2;
    }
    return tmp;
  },
  MESSAGE_CREATE: function handleMessage(message) {
    message = message.message;
    const channel = ChannelStore.getChannel(message.channelId);
    const author = message.author;
    let id;
    if (author != null) {
      id = author.id;
    }
    let tmp3 = id === AuthenticationStore.getId() && null != channel && null != closure_6[channel.guild_id];
    if (tmp3) {
      const guild_id = channel.guild_id;
      const MESSAGE = Steps.MESSAGE;
      let tmp7 = null != obj;
      if (tmp7) {
        const hasItem = obj.has(MESSAGE);
        let flag = !hasItem;
        if (flag) {
          const _Set = Set;
          const self = this;
          const self2 = this;
          closure_6[guild_id] = new Set(closure_6[guild_id].add(MESSAGE));
          flag = true;
          set = new Set(closure_6[guild_id].add(MESSAGE));
        }
        tmp7 = flag;
      }
      tmp3 = tmp7;
    }
    return tmp3;
  },
  GUILD_MEMBER_LIST_UPDATE: function handleGuildMember(guildId) {
    guildId = guildId.guildId;
    let tmp2 = null != closure_6[guildId] && tmp > 1;
    if (tmp2) {
      const INVITE = Steps.INVITE;
      let tmp5 = null != obj;
      if (tmp5) {
        const hasItem = obj.has(INVITE);
        let flag = !hasItem;
        if (flag) {
          const _Set = Set;
          const self = this;
          const self2 = this;
          closure_6[guildId] = new Set(closure_6[guildId].add(INVITE));
          flag = true;
          set = new Set(closure_6[guildId].add(INVITE));
        }
        tmp5 = flag;
      }
      tmp2 = tmp5;
    }
    return tmp2;
  }
};
const guildProgressStore = new GuildProgressStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/guild_progress/GuildProgressStore.tsx");

export default guildProgressStore;