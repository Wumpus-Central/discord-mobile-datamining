// === Module 4398: handleInviteData ===

// Module 4398 (handleInviteData)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

function handleInviteData(invite) {
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
let closure_0 = {};
let closure_1 = {};
const Store = initializeDefault.Store;
class GuildMemberCountStore extends Store {
}
const prototype = GuildMemberCountStore.prototype;
prototype["getMemberCounts"] = function getMemberCounts() {
  return closure_0;
};
prototype["getMemberCount"] = function getMemberCount(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = dependencyMap[arg0];
  }
  return tmp;
};
prototype["getOnlineCount"] = function getOnlineCount(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = dependencyMap2[arg0];
  }
  return tmp;
};
GuildMemberCountStore.displayName = "GuildMemberCountStore";
const guildMemberCountStore = new GuildMemberCountStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    guilds = guilds.guilds;
    closure_0 = {};
    const item = guilds.forEach((id) => {
      closure_0[id.id] = id.member_count;
    });
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(guildMemberCounts) {
    const obj = {};
    const merged = Object.assign(guildMemberCounts.guildMemberCounts);
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    closure_0[guild.id] = guild.member_count;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    if (null == dependencyMap[guild.id]) {
      if (null == dependencyMap2[guild.id]) {
        return false;
      }
    }
    delete tmp4[tmp3];
    delete tmp2[tmp];
  },
  GUILD_MEMBER_LIST_UPDATE: function handleGuildMemberListUpdate(arg0) {
    ({ guildId, memberCount, onlineCount } = arg0);
    let flag = false;
    if (dependencyMap[guildId] !== memberCount) {
      dependencyMap[guildId] = memberCount;
      flag = true;
    }
    if (dependencyMap2[guildId] !== onlineCount) {
      dependencyMap2[guildId] = onlineCount;
      flag = true;
    }
    return flag;
  },
  INVITE_ACCEPT_SUCCESS: handleInviteData,
  INVITE_RESOLVE_SUCCESS: handleInviteData,
  ONLINE_GUILD_MEMBER_COUNT_UPDATE: function handleOnlineCountUpdate(arg0) {
    ({ guildId, count } = arg0);
    if (null != guildId) {
      if (null != count) {
        closure_1[guildId] = count;
      }
    }
    return false;
  }
});
const result = require("set").fileFinishedImporting("stores/GuildMemberCountStore.tsx");

export default guildMemberCountStore;