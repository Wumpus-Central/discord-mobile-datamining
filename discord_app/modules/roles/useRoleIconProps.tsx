// === Module 6882: useRoleIconProps ===

// Module 6882 (useRoleIconProps)
import RoleIconUtils from "RoleIconUtils" /* 6883 */;
import noop from "module_19" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2119 */;
import GuildStore from "GuildStore" /* 2087 */;

const require = globalThis.__r;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useRoleIconProps(guildId) {
  const cResult = guildId(roleId[4]).c(10);
  guildId = guildId.guildId;
  roleId = guildId.roleId;
  ({ size, role } = guildId);
  guild = guildId.guild;
  let num = 20;
  if (undefined !== size) {
    num = size;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, guild];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guild) {
    if (cResult[2] === guildId) {
      if (cResult[3] === role) {
        if (cResult[4] === roleId) {
          let tmp7 = cResult[5];
          let tmp8 = cResult[6];
        }
        const stateFromStores = tmp(tmp2[5]).useStateFromStores(first, tmp7, tmp8);
        if (cResult[7] === stateFromStores) {
          if (cResult[8] === num) {
            let tmp10 = cResult[9];
          }
          return tmp10;
        }
        let tmp12;
        if (null != stateFromStores) {
          const roleIconData = tmp(tmp2[6]).getRoleIconData(stateFromStores, num);
          if (null != roleIconData) {
            const obj2 = { src: roleIconData.customIconSrc, name: null, roleId: null, size: null, unicodeEmoji: null };
            ({ name: obj4.name, id: obj4.roleId } = stateFromStores);
            obj2.size = num;
            obj2.unicodeEmoji = roleIconData.unicodeEmoji;
            tmp12 = obj2;
          }
          const tmpResult2 = tmp(tmp2[6]);
        }
        cResult[7] = stateFromStores;
        cResult[8] = num;
        cResult[9] = tmp12;
        tmp10 = tmp12;
        const tmpResult = tmp(tmp2[5]);
      }
    }
  }
  const fn = function c() {
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
  };
  const items1 = [guildId, roleId, role, guild];
  cResult[1] = guild;
  cResult[2] = guildId;
  cResult[3] = role;
  cResult[4] = roleId;
  cResult[5] = fn;
  cResult[6] = items1;
  tmp8 = items1;
  tmp7 = fn;
  const obj = guildId(roleId[4]);
}) : (function useRoleIconProps(guildId) {
  guildId = guildId.guildId;
  const roleId = guildId.roleId;
  let num = guildId.size;
  if (num === undefined) {
    num = 20;
  }
  let role = guildId.role;
  guild = guildId.guild;
  const items = [guild, role];
  const items1 = [guildId, roleId, role, guild];
  const stateFromStores = guildId(roleId[5]).useStateFromStores(items, () => {
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
      const roleIconData = RoleIconUtils.getRoleIconData(stateFromStores, num);
      if (null != roleIconData) {
        const obj3 = { src: roleIconData.customIconSrc, name: null, roleId: null, size: null, unicodeEmoji: null };
        ({ name: obj2.name, id: obj2.roleId } = stateFromStores);
        obj3.size = num;
        obj3.unicodeEmoji = roleIconData.unicodeEmoji;
        tmp3 = obj3;
      }
    }
    return tmp3;
  }, items2);
});
function getRoleIconProps(roleIconRole, size) {
  if (null != roleIconRole) {
    const roleIconData = RoleIconUtils.getRoleIconData(roleIconRole, size);
    if (null != roleIconData) {
      const obj3 = { src: roleIconData.customIconSrc, name: null, roleId: null, size: null, unicodeEmoji: null };
      ({ name: obj2.name, id: obj2.roleId } = roleIconRole);
      obj3.size = size;
      obj3.unicodeEmoji = roleIconData.unicodeEmoji;
      return obj3;
    }
  }
}
function computeRoleIconRole(arg0) {
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
    let role1;
    if (null != guildId) {
      if (null != roleId) {
        role1 = obj2.getRole(guildId, roleId);
      }
    }
    role = role1;
  }
  if (null != guild) {
    if (null != role) {
      if (obj3.canGuildUseRoleIcons(guild, role)) {
        return role;
      }
      obj3 = RoleIconUtils;
    }
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/roles/useRoleIconProps.tsx");

export const useRoleIconProps = tmp2;
export { getRoleIconProps };
export const useRoleIconPropsForPreview = ReactCompilerGating.isReactCompilerEnabled() ? (function useRoleIconPropsForPreview(guildId, role) {
  _require = guildId;
  dependencyMap = role;
  const cResult = require("c").c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, GuildRoleStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId) {
    if (cResult[2] === role) {
      let tmp7 = cResult[3];
      let tmp8 = cResult[4];
    }
    const stateFromStores = tmp(504).useStateFromStores(first, tmp7, tmp8);
    if (cResult[5] !== stateFromStores) {
      let tmp12;
      if (null != stateFromStores) {
        const roleIconData = tmp(6883).getRoleIconData(stateFromStores, undefined);
        if (null != roleIconData) {
          const obj2 = { src: roleIconData.customIconSrc, name: null, roleId: null, size: "Array", unicodeEmoji: "guild_id" };
          ({ name: obj4.name, id: obj4.roleId } = stateFromStores);
          obj2.unicodeEmoji = roleIconData.unicodeEmoji;
          tmp12 = obj2;
        }
        const tmpResult2 = tmp(6883);
      }
      cResult[5] = stateFromStores;
      cResult[6] = tmp12;
      let tmp10 = tmp12;
    } else {
      tmp10 = cResult[6];
    }
    return tmp10;
  }
  const fn = function t() {
    ({ guildId, roleId, role, guild } = { guildId, role });
    if (GuildStore !== undefined) {
      if (GuildRoleStore !== undefined) {
        if (guild == null) {
          guild = GuildStore.getGuild(guildId);
        }
        if (role == null) {
          let role1;
          if (null != guildId) {
            if (null != roleId) {
              role1 = GuildRoleStore.getRole(guildId, roleId);
            }
          }
          role = role1;
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
  };
  const items1 = [guildId, role];
  cResult[1] = guildId;
  cResult[2] = role;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
  let obj = require("c");
}) : (function useRoleIconPropsForPreview(guildId, role) {
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
          let role1;
          if (null != guildId) {
            if (null != roleId) {
              role1 = GuildRoleStore.getRole(guildId, roleId);
            }
          }
          role = role1;
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
      const roleIconData = RoleIconUtils.getRoleIconData(stateFromStores, undefined);
      if (null != roleIconData) {
        const obj3 = { src: roleIconData.customIconSrc, name: null, roleId: null, size: "Array", unicodeEmoji: "guild_id" };
        ({ name: obj2.name, id: obj2.roleId } = stateFromStores);
        obj3.unicodeEmoji = roleIconData.unicodeEmoji;
        tmp2 = obj3;
      }
    }
    return tmp2;
  }, items2);
});
export { computeRoleIconRole };