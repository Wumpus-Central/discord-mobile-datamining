// discord_app/modules/guild_boosting/native/RoleIconUtils.tsx
import getSystemLocale from "../../../intl/index.native.tsx";
import getRoleIconData from "../RoleIconUtils.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import createGuildRoleRecordFromRust from "../../../stores/GuildRoleStore.tsx";
import createGuildRecordFromRust from "../../../stores/GuildStore.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_boosting/native/RoleIconUtils.tsx");

export const useRoleIcon = function useRoleIcon(guildId) {
  guildId = guildId.guildId;
  const roleId = guildId.roleId;
  let num = guildId.size;
  if (num === undefined) {
    num = 20;
  }
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
  const guild = stateFromStoresObject.guild;
  role = stateFromStoresObject.role;
  const items2 = [guild, role, roleId, num];
  return guild.useMemo(() => {
    if (null != guild) {
      if (null != roleId) {
        let obj = guildId(num[5]);
        if (obj.canGuildUseRoleIcons(tmp, role)) {
          let roleIconData = guildId(num[5]).getRoleIconData(role);
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
          const tmp2Result = guildId(num[5]);
          if (role != null) {
            str = role.name;
          }
          if (str == null) {
            str = "";
          }
          obj[2] = str;
          obj[3] = num;
          return jsx(roleId(num[6]), { source: null, unicodeEmoji: null, name: null, size: null });
        }
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
          let roleIconData = getRoleIconData.getRoleIconData(role);
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
          const intl = getSystemLocale.intl;
          obj = { name: null };
          obj[0] = role.name;
          obj[4] = intl.formatToPlainString(getSystemLocale.t["9+YWrE"], obj);
          return obj;
        }
      }
    }
  }
};