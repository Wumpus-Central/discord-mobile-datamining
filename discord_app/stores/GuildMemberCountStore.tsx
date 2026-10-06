// === Module 4786: GuildMemberCountStore ===

// Module 4786 (GuildMemberCountStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

function handleInviteData(invite) {
  let approximate_presence_count;
  let guild;
  ({ guild, approximate_presence_count } = invite.invite);
  let id;
  if (guild != null) {
    id = guild.id;
  }
  if (null != id) {
    if (null != approximate_presence_count) {
      closure_1[guild.id] = approximate_presence_count;
    }
  }
  return false;
}
let obj = {};
const Store = get_initializedDefault.Store;
class GuildMemberCountStore extends Store {
  getMemberCounts() {
    return obj;
  }
  getMemberCount(arg0) {
    let tmp = null;
    if (null != arg0) {
      tmp = obj[arg0];
    }
    return tmp;
  }
  getOnlineCount(arg0) {
    let tmp = null;
    if (null != arg0) {
      tmp = closure_1[arg0];
    }
    return tmp;
  }
}
const prototype = GuildMemberCountStore.prototype;
GuildMemberCountStore.displayName = "GuildMemberCountStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    guilds = guilds.guilds;
    obj = {};
    const item = guilds.forEach((id) => {
      obj[id.id] = id.member_count;
    });
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(guildMemberCounts) {
    obj = {};
    const merged = Object.assign(guildMemberCounts.guildMemberCounts);
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    obj[guild.id] = guild.member_count;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    if (null == obj[guild.id]) {
      if (null == closure_1[guild.id]) {
        return false;
      }
    }
    delete obj[guild.id];
    delete closure_1[guild.id];
  },
  GUILD_MEMBER_LIST_UPDATE: function handleGuildMemberListUpdate(arg0) {
    let guildId;
    let memberCount;
    let onlineCount;
    ({ guildId, memberCount, onlineCount } = arg0);
    let flag = false;
    if (obj[guildId] !== memberCount) {
      obj[guildId] = memberCount;
      flag = true;
    }
    if (closure_1[guildId] !== onlineCount) {
      closure_1[guildId] = onlineCount;
      flag = true;
    }
    return flag;
  },
  INVITE_ACCEPT_SUCCESS: handleInviteData,
  INVITE_RESOLVE_SUCCESS: handleInviteData,
  ONLINE_GUILD_MEMBER_COUNT_UPDATE: function handleOnlineCountUpdate(arg0) {
    let count;
    let guildId;
    ({ guildId, count } = arg0);
    if (null != guildId) {
      if (null != count) {
        closure_1[guildId] = count;
      }
    }
    return false;
  }
};
const guildMemberCountStore = new GuildMemberCountStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/GuildMemberCountStore.tsx");

export default guildMemberCountStore;