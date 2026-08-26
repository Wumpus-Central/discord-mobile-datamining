// === Module 5530: getRoleMemberCount ===

// Module 5530 (getRoleMemberCount)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let closure_0 = {};
let closure_1 = {};
const Store = initializeDefault.Store;
class GuildRoleMemberCountStore extends Store {
}
const prototype = GuildRoleMemberCountStore.prototype;
prototype["getRoleMemberCount"] = function getRoleMemberCount(id) {
  let tmp = null;
  if (null != id) {
    tmp = dependencyMap[id];
  }
  return tmp;
};
prototype["shouldFetch"] = function shouldFetch(arg0) {
  if (null == arg0) {
    return false;
  } else {
    let tmp3 = null == tmp2;
    if (!tmp3) {
      const _Date = Date;
      tmp3 = Date.now() - tmp2 > 120000;
    }
    return tmp3;
  }
};
GuildRoleMemberCountStore.displayName = "GuildRoleMemberCountStore";
const guildRoleMemberCountStore = new GuildRoleMemberCountStore(dispatcherDefault, {
  GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function handleGuildRoleMemberCountFetchSuccess(guildId) {
    guildId = guildId.guildId;
    closure_0[guildId] = guildId.roleMemberCount;
    closure_1[guildId] = Date.now();
  },
  GUILD_ROLE_MEMBER_COUNT_UPDATE: function handleGuildRoleMemberCountUpdate(arg0) {
    if (null == dependencyMap[arg0.guildId]) {
      return false;
    } else {
      tmp3[tmp] = tmp2;
    }
  },
  GUILD_ROLE_MEMBER_BULK_ADD: function handleGuildRoleMemberBulkAdd(roleId) {
    roleId = roleId.roleId;
    if (null == dependencyMap[roleId.guildId]) {
      return false;
    } else if (null == tmp2[roleId]) {
      return false;
    } else {
      const _Object = Object;
      tmp2[roleId] = tmp2[roleId] + Object.keys(tmp).length;
    }
  },
  GUILD_ROLE_MEMBER_ADD: function handleGuildRoleMemberAdd(roleId) {
    roleId = roleId.roleId;
    let tmp2 = null != tmp;
    if (tmp2) {
      if (null != tmp[roleId]) {
        tmp[roleId] = tmp[roleId] + 1;
      }
      tmp2 = tmp3;
    }
    return tmp2;
  },
  GUILD_ROLE_MEMBER_REMOVE: function handleGuildRoleMemberRemove(roleId) {
    roleId = roleId.roleId;
    let tmp2 = null != tmp;
    if (tmp2) {
      if (null != tmp[roleId]) {
        const _Math = Math;
        tmp[roleId] = Math.max(tmp[roleId] - 1, 0);
      }
      tmp2 = tmp3;
    }
    return tmp2;
  },
  GUILD_ROLE_CREATE: function handleGuildRoleCreate(guildId) {
    guildId = guildId.guildId;
    if (null == dependencyMap[guildId]) {
      tmp[guildId] = {};
    }
    dependencyMap[guildId][guildId.role.id] = 0;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    delete tmp4[tmp3];
    delete tmp2[tmp];
  }
});
const result = require("set").fileFinishedImporting("modules/guild_settings/GuildRoleMemberCountStore.tsx");

export default guildRoleMemberCountStore;