// === Module 5858: useRoleIcon ===

// Module 5858 (useRoleIcon)
import getRoleIconData from "getRoleIconData" /* 5859 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "createGuildRoleRecordFromRust" /* 1985 */;
import closure_5 from "createGuildRecordFromRust" /* 1910 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_boosting/native/RoleIconUtils.tsx");

export const useRoleIcon = function useRoleIcon(guildId) {
  guildId = guildId.guildId;
  const roleId = guildId.roleId;
  let num = guildId.size;
  if (num === undefined) {
    num = 20;
  }
  let guild;
  let role;
  const items = [closure_5, role];
  const items1 = [guildId, roleId];
  const stateFromStoresObject = guildId(num[4]).useStateFromStoresObject(items, () => {
    const obj = { guild: closure_1_5.getGuild(guildId), role: null };
    role = undefined;
    if (null != guildId) {
      if (null != roleId) {
        role = role.getRole(guildId, tmp3);
      }
    }
    obj[1] = role;
    return obj;
  }, items1);
  guild = stateFromStoresObject.guild;
  role = stateFromStoresObject.role;
  const items2 = [guild, role, roleId, num];
  return guild.useMemo(() => {
    if (null != guild) {
      if (null != roleId) {
        let obj = guildId(num[5]);
        if (obj.canGuildUseRoleIcons(tmp, role)) {
          let roleIconData = tmp3(tmp4[5]).getRoleIconData(tmp5);
          if (roleIconData == null) {
            roleIconData = {};
          }
          ({ customIconSrc, unicodeEmoji } = roleIconData);
          let tmp6;
          if (null != customIconSrc) {
            obj = { uri: null };
            obj[0] = customIconSrc;
            tmp6 = obj;
          }
          obj = { source: null, unicodeEmoji: null, name: null, size: null };
          obj[0] = tmp6;
          obj[1] = unicodeEmoji;
          let str;
          const tmp3Result = tmp3(tmp4[5]);
          const tmp7 = closure_1_6;
          if (tmp5 != null) {
            str = tmp5.name;
          }
          if (str == null) {
            str = "";
          }
          obj[2] = str;
          obj[3] = num;
          return tmp7(roleId(tmp4[6]), obj);
        }
        tmp3 = guildId;
      }
    }
  }, items2);
};
export const getRoleIcon = function getRoleIcon(roleId) {
  roleId = roleId.roleId;
  guild = guild.getGuild(roleId.guildId);
  if (null != guild) {
    if (null != roleId) {
      role = role.getRole(guild.id, roleId);
      if (null != role) {
        let obj = getRoleIconData;
        if (obj.canGuildUseRoleIcons(guild, role)) {
          let roleIconData = tmp4(5859).getRoleIconData(role);
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
          obj = { source: null, name: null, size: null, unicodeEmoji: null, alt: null };
          obj[0] = customIconSrc;
          obj[1] = role.name;
          obj[2] = roleId.size;
          let surrogates1;
          if (unicodeEmoji != null) {
            surrogates1 = unicodeEmoji.surrogates;
          }
          obj[3] = surrogates1;
          const intl = tmp4(1236).intl;
          obj = { name: null };
          obj[0] = role.name;
          obj[4] = intl.formatToPlainString(tmp4(1236).t["9+YWrE"], obj);
          return obj;
        }
      }
    }
  }
};