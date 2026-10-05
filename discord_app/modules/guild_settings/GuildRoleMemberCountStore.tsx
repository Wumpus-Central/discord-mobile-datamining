// discord_app/modules/guild_settings/GuildRoleMemberCountStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const React = {};
const Store = get_initializedDefault.Store;
class GuildRoleMemberCountStore extends Store {
  getRoleMemberCount(id) {
    let tmp = null;
    if (null != id) {
      tmp = closure_0[id];
    }
    return tmp;
  }
  shouldFetch(arg0) {
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
  }
}
const prototype = GuildRoleMemberCountStore.prototype;
GuildRoleMemberCountStore.displayName = "GuildRoleMemberCountStore";
const obj = {
  GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function handleGuildRoleMemberCountFetchSuccess(guildId) {
    guildId = guildId.guildId;
    closure_0[guildId] = guildId.roleMemberCount;
    closure_1[guildId] = Date.now();
  },
  GUILD_ROLE_MEMBER_COUNT_UPDATE: function handleGuildRoleMemberCountUpdate(arg0) {
    if (null == closure_0[arg0.guildId]) {
      return false;
    } else {
      closure_0[arg0.guildId][tmp] = tmp2;
    }
  },
  GUILD_ROLE_MEMBER_BULK_ADD: function handleGuildRoleMemberBulkAdd(roleId) {
    roleId = roleId.roleId;
    if (null == closure_0[roleId.guildId]) {
      return false;
    } else if (null == closure_0[roleId.guildId][roleId]) {
      return false;
    } else {
      const _Object = Object;
      closure_0[roleId.guildId][roleId] = closure_0[roleId.guildId][roleId] + Object.keys(tmp).length;
    }
  },
  GUILD_ROLE_MEMBER_ADD: function handleGuildRoleMemberAdd(roleId) {
    roleId = roleId.roleId;
    let tmp2 = null != tmp;
    if (tmp2) {
      if (null != closure_0[roleId.guildId][roleId]) {
        closure_0[roleId.guildId][roleId] = closure_0[roleId.guildId][roleId] + 1;
      }
      tmp2 = tmp3;
    }
    return tmp2;
  },
  GUILD_ROLE_MEMBER_REMOVE: function handleGuildRoleMemberRemove(roleId) {
    roleId = roleId.roleId;
    let tmp2 = null != tmp;
    if (tmp2) {
      if (null != closure_0[roleId.guildId][roleId]) {
        const _Math = Math;
        closure_0[roleId.guildId][roleId] = Math.max(closure_0[roleId.guildId][roleId] - 1, 0);
      }
      tmp2 = tmp3;
    }
    return tmp2;
  },
  GUILD_ROLE_CREATE: function handleGuildRoleCreate(guildId) {
    guildId = guildId.guildId;
    const role = guildId.role;
    if (null == closure_0[guildId]) {
      closure_0[guildId] = {};
    }
    closure_0[guildId][role.id] = 0;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    delete closure_0[guild.id];
    delete closure_1[guild.id];
  },
};
const guildRoleMemberCountStore = new GuildRoleMemberCountStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/guild_settings/GuildRoleMemberCountStore.tsx");

export default guildRoleMemberCountStore;
