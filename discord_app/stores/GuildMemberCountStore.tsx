// discord_app/stores/GuildMemberCountStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";

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
let obj = {};
const dependencyMap = {};
const Store = initializeDefault.Store;
class GuildMemberCountStore extends Store {}
const prototype = GuildMemberCountStore.prototype;
prototype["getMemberCounts"] = function getMemberCounts() {
  return obj;
};
prototype["getMemberCount"] = function getMemberCount(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = obj[arg0];
  }
  return tmp;
};
prototype["getOnlineCount"] = function getOnlineCount(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = dependencyMap[arg0];
  }
  return tmp;
};
GuildMemberCountStore.displayName = "GuildMemberCountStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    guilds = guilds.guilds;
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
      if (null == dependencyMap[guild.id]) {
        return false;
      }
    }
    delete tmp4[tmp3];
    delete tmp2[tmp];
  },
  GUILD_MEMBER_LIST_UPDATE: function handleGuildMemberListUpdate(arg0) {
    ({ guildId, memberCount, onlineCount } = arg0);
    let flag = false;
    if (obj[guildId] !== memberCount) {
      obj[guildId] = memberCount;
      flag = true;
    }
    if (dependencyMap[guildId] !== onlineCount) {
      dependencyMap[guildId] = onlineCount;
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
  },
};
const guildMemberCountStore = new GuildMemberCountStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("stores/GuildMemberCountStore.tsx");

export default guildMemberCountStore;
