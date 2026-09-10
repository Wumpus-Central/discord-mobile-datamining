// === Module 7238: useRoleIconProps ===

// Module 7238 (useRoleIconProps)
import RoleIconUtils from "RoleIconUtils" /* 7239 */;
import noop from "module_19" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/roles/useRoleIconProps.tsx");

export const useRoleIconProps = function useRoleIconProps(guildId) {
  guildId = guildId.guildId;
  const roleId = guildId.roleId;
  let num = guildId.size;
  if (num === undefined) {
    num = 20;
  }
  let role = guildId.role;
  let guild = guildId.guild;
  const items = [guild, role];
  const items1 = [guildId, roleId, role, guild];
  const stateFromStores = guildId(roleId[3]).useStateFromStores(items, () => {
    let tmp3 = role;
    if (GuildStore !== undefined) {
      if (GuildRoleStore !== undefined) {
        if (guild == null) {
          guild = GuildStore.getGuild(guildId);
        }
        if (tmp3 == null) {
          role = undefined;
          if (null != guildId) {
            if (null != roleId) {
              role = GuildRoleStore.getRole(guildId, roleId);
            }
          }
          tmp3 = role;
        }
        let tmp7;
        if (null != guild) {
          if (null != tmp3) {
            if (obj3.canGuildUseRoleIcons(guild, tmp3)) {
              tmp7 = tmp3;
            }
            obj3 = RoleIconUtils;
          }
        }
        return tmp7;
      }
    }
  }, items1);
  const items2 = [stateFromStores, num];
  return num.useMemo(() => {
    let tmp3;
    if (null != stateFromStores) {
      let obj = RoleIconUtils;
      const roleIconData = obj.getRoleIconData(stateFromStores, num);
      if (null != roleIconData) {
        obj = { src: roleIconData.customIconSrc, name: null, roleId: null, size: null, unicodeEmoji: null };
        ({ name: obj2.name, id: obj2.roleId } = stateFromStores);
        obj.size = num;
        obj.unicodeEmoji = roleIconData.unicodeEmoji;
        tmp3 = obj;
      }
    }
    return tmp3;
  }, items2);
};
export const getRoleIconProps = function getRoleIconProps(roleIconRole, size) {
  if (null != roleIconRole) {
    let obj = RoleIconUtils;
    const roleIconData = obj.getRoleIconData(roleIconRole, size);
    if (null != roleIconData) {
      obj = { src: roleIconData.customIconSrc, name: null, roleId: null, size: null, unicodeEmoji: null };
      ({ name: obj2.name, id: obj2.roleId } = roleIconRole);
      obj.size = size;
      obj.unicodeEmoji = roleIconData.unicodeEmoji;
      return obj;
    }
  }
};
export const useRoleIconPropsForPreview = function useRoleIconPropsForPreview(guildId, role) {
  _require = guildId;
  dependencyMap = role;
  const items = [GuildStore, GuildRoleStore];
  const items1 = [guildId, role];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    ({ guildId, roleId, role, guild } = { guildId, role });
    if (GuildStore !== undefined) {
      if (GuildRoleStore !== undefined) {
        if (guild == null) {
          guild = GuildStore.getGuild(guildId);
        }
        if (role == null) {
          role = undefined;
          if (null != guildId) {
            if (null != roleId) {
              role = GuildRoleStore.getRole(guildId, roleId);
            }
          }
        }
        let tmp3;
        if (null != guild) {
          if (null != role) {
            if (obj4.canGuildUseRoleIcons(guild, role)) {
              tmp3 = role;
            }
            obj4 = RoleIconUtils;
          }
        }
        return tmp3;
      }
    }
    const obj = { guildId, role };
  }, items1);
  const items2 = [stateFromStores];
  return stateFromStores.useMemo(() => {
    let tmp2;
    if (null != stateFromStores) {
      let obj = RoleIconUtils;
      const roleIconData = obj.getRoleIconData(stateFromStores, undefined);
      if (null != roleIconData) {
        obj = { src: roleIconData.customIconSrc, name: null, roleId: null, size: "Array", unicodeEmoji: 0 };
        ({ name: obj2.name, id: obj2.roleId } = stateFromStores);
        obj.unicodeEmoji = roleIconData.unicodeEmoji;
        tmp2 = obj;
      }
    }
    return tmp2;
  }, items2);
};
export const computeRoleIconRole = function computeRoleIconRole(arg0) {
  ({ guildId, roleId, role, guild } = arg0);
  let obj = arg1;
  if (arg1 === undefined) {
    obj = GuildStore;
  }
  let obj2 = arg2;
  if (arg2 === undefined) {
    obj2 = GuildRoleStore;
  }
  if (guild == null) {
    guild = obj.getGuild(guildId);
  }
  if (role == null) {
    role = undefined;
    if (null != guildId) {
      if (null != roleId) {
        role = obj2.getRole(guildId, roleId);
      }
    }
  }
  if (null != guild) {
    if (null != role) {
      if (obj3.canGuildUseRoleIcons(guild, role)) {
        return role;
      }
      obj3 = RoleIconUtils;
    }
  }
};