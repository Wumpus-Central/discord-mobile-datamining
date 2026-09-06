// === Module 7186: RoleIconUtils ===

// Module 7186 (RoleIconUtils)
import util from "util" /* 1114 */;
import guild_boosting_RoleIconUtils from "guild_boosting/RoleIconUtils" /* 7187 */;
import RoleIconDefault from "RoleIcon" /* 7188 */;
import noop from "module_19" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_boosting/native/RoleIconUtils.tsx");

export const useRoleIcon = function useRoleIcon(guildId) {
  guildId = guildId.guildId;
  const roleId = guildId.roleId;
  let num = guildId.size;
  if (num === undefined) {
    num = 20;
  }
  let role;
  const items = [GuildStore, role];
  const items1 = [guildId, roleId];
  const stateFromStoresObject = guildId(num[4]).useStateFromStoresObject(items, () => {
    const obj = { guild: GuildStore.getGuild(guildId), role: null };
    role = undefined;
    if (null != guildId) {
      if (null != roleId) {
        role = GuildRoleStore.getRole(guildId, tmp3);
      }
    }
    obj.role = role;
    return obj;
  }, items1);
  const guild = stateFromStoresObject.guild;
  role = stateFromStoresObject.role;
  const items2 = [guild, role, roleId, num];
  return guild.useMemo(() => {
    if (null != guild) {
      if (null != roleId) {
        let obj = guild_boosting_RoleIconUtils;
        if (obj.canGuildUseRoleIcons(tmp, role)) {
          let roleIconData = guild_boosting_RoleIconUtils.getRoleIconData(role);
          if (roleIconData == null) {
            roleIconData = {};
          }
          ({ customIconSrc, unicodeEmoji } = roleIconData);
          let tmp6;
          if (null != customIconSrc) {
            obj = { uri: customIconSrc };
            tmp6 = obj;
          }
          obj = { source: tmp6, unicodeEmoji, name: null, size: null };
          let str;
          const tmp3Result = guild_boosting_RoleIconUtils;
          if (role != null) {
            str = role.name;
          }
          if (str == null) {
            str = "";
          }
          obj.name = str;
          obj.size = num;
          return jsx(RoleIconDefault, { source: tmp6, unicodeEmoji, name: null, size: null });
        }
      }
    }
  }, items2);
};
export const getRoleIcon = function getRoleIcon(roleId) {
  roleId = roleId.roleId;
  const guild = GuildStore.getGuild(roleId.guildId);
  if (null != guild) {
    if (null != roleId) {
      const role = GuildRoleStore.getRole(guild.id, roleId);
      if (null != role) {
        let obj = guild_boosting_RoleIconUtils;
        if (obj.canGuildUseRoleIcons(guild, role)) {
          let roleIconData = guild_boosting_RoleIconUtils.getRoleIconData(role);
          if (roleIconData == null) {
            roleIconData = {};
          }
          ({ customIconSrc, unicodeEmoji } = roleIconData);
          if (null == customIconSrc) {
            let surrogates;
            if (unicodeEmoji != null) {
              surrogates = unicodeEmoji.surrogates;
            }
          }
          obj = { source: customIconSrc, name: role.name, size: roleId.size, unicodeEmoji: null, alt: null };
          let surrogates1;
          if (unicodeEmoji != null) {
            surrogates1 = unicodeEmoji.surrogates;
          }
          obj.unicodeEmoji = surrogates1;
          const intl = util.intl;
          obj = { name: role.name };
          obj.alt = intl.formatToPlainString(util.t["9+YWrE"], obj);
          return obj;
        }
      }
    }
  }
};