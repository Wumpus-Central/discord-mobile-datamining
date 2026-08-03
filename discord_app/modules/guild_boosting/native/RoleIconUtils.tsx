import noop from "noop";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/guild_boosting/native/RoleIconUtils.tsx");

export const useRoleIcon = function useRoleIcon(guildId) {
  guildId = guildId.guildId;
  const roleId = guildId.roleId;
  let num = guildId.size;
  if (num === undefined) {
    num = 20;
  }
  let guild;
  let role;
  const items = [createGuildRecordFromRust, role];
  const items1 = [guildId, roleId];
  const stateFromStoresObject = guildId(num[4]).useStateFromStoresObject(items, () => {
    const obj = { guild: outer1_5.getGuild(guildId), role: null };
    let role;
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
    let customIconSrc;
    let unicodeEmoji;
    if (null != guild) {
      if (null != roleId) {
        let obj = guildId(num[5]);
        if (obj.canGuildUseRoleIcons(tmp, role)) {
          let roleIconData = tmp2(tmp3[5]).getRoleIconData(tmp4);
          if (roleIconData == null) {
            roleIconData = {};
          }
          ({ customIconSrc, unicodeEmoji } = roleIconData);
          let tmp5;
          if (null != customIconSrc) {
            obj = { uri: null };
            obj[0] = customIconSrc;
            tmp5 = obj;
          }
          obj = { source: null, unicodeEmoji: null, name: null, size: null };
          obj[0] = tmp5;
          obj[1] = unicodeEmoji;
          let str;
          const tmp2Result = tmp2(tmp3[5]);
          const tmp6 = outer1_6;
          if (tmp4 != null) {
            str = tmp4.name;
          }
          if (str == null) {
            str = "";
          }
          obj[2] = str;
          obj[3] = num;
          return tmp6(roleId(tmp3[6]), obj);
        }
        tmp2 = guildId;
      }
    }
  }, items2);
};
export const getRoleIcon = function getRoleIcon(roleId) {
  let customIconSrc;
  let unicodeEmoji;
  roleId = roleId.roleId;
  guild = guild.getGuild(roleId.guildId);
  if (null != guild) {
    if (null != roleId) {
      role = role.getRole(guild.id, roleId);
      if (null != role) {
        let obj = require(5606) /* getRoleIconData */;
        if (obj.canGuildUseRoleIcons(guild, role)) {
          let roleIconData = tmp4(5606).getRoleIconData(role);
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