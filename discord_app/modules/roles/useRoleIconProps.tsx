// === Module 6685: useRoleIconProps ===

// Module 6685 (useRoleIconProps)
import RoleIconUtils from "RoleIconUtils" /* 6686 */;
import react from "react" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import GuildStore from "GuildStore" /* 2074 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  let role;
  let roleId;
  const obj = guildId(roleId[4]);
  const cResult = obj.c(10);
  guildId = guildId.guildId;
  roleId = guildId.roleId;
  ({ size, role } = guildId);
  let guild = guildId.guild;
  let num = 20;
  if (undefined !== size) {
    num = size;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, guild];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guild) {
    if (cResult[2] === guildId) {
      if (cResult[3] === role) {
        let tmp7;
        let tmp8;
        if (cResult[4] === roleId) {
          tmp7 = cResult[5];
          tmp8 = cResult[6];
        }
        const tmpResult = guildId(roleId[5]);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
        if (cResult[7] === stateFromStores) {
          let tmp10;
          if (cResult[8] === num) {
            tmp10 = cResult[9];
          }
          return tmp10;
        }
        let tmp12;
        if (null != stateFromStores) {
          const tmpResult2 = guildId(roleId[6]);
          const roleIconData = tmpResult2.getRoleIconData(stateFromStores, num);
          if (null != roleIconData) {
            const obj2 = { src: roleIconData.customIconSrc, name: null, roleId: null, size: num, unicodeEmoji: roleIconData.unicodeEmoji };
            ({ name: obj4.name, id: obj4.roleId } = stateFromStores);
            tmp12 = obj2;
          }
        }
        cResult[7] = stateFromStores;
        cResult[8] = num;
        cResult[9] = tmp12;
        tmp10 = tmp12;
      }
    }
  }
  const fn = function u() {
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
            const obj3 = RoleIconUtils;
            if (obj3.canGuildUseRoleIcons(guild, tmp3)) {
              tmp7 = tmp3;
            }
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
}) : ((guildId) => {
  guildId = guildId.guildId;
  const roleId = guildId.roleId;
  let num = guildId.size;
  if (num === undefined) {
    num = 20;
  }
  let role = guildId.role;
  let guild = guildId.guild;
  let obj = guildId(roleId[5]);
  const items = [guild, role];
  const items1 = [guildId, roleId, role, guild];
  const stateFromStores = obj.useStateFromStores(items, () => {
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
            const obj3 = RoleIconUtils;
            if (obj3.canGuildUseRoleIcons(guild, tmp3)) {
              tmp7 = tmp3;
            }
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
      const obj = RoleIconUtils;
      const roleIconData = obj.getRoleIconData(stateFromStores, num);
      if (null != roleIconData) {
        const obj3 = { src: roleIconData.customIconSrc, name: null, roleId: null, size: num, unicodeEmoji: roleIconData.unicodeEmoji };
        ({ name: obj2.name, id: obj2.roleId } = stateFromStores);
        tmp3 = obj3;
      }
    }
    return tmp3;
  }, items2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId, role) => {
  let first;
  _require = guildId;
  dependencyMap = role;
  let obj = require("react");
  const cResult = obj.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, GuildRoleStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId) {
    let tmp7;
    let tmp8;
    let tmp10;
    if (cResult[2] === role) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    const tmpResult = require("get initialized");
    const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
    if (cResult[5] !== stateFromStores) {
      let tmp12;
      if (null != stateFromStores) {
        const tmpResult2 = require("RoleIconUtils");
        const roleIconData = tmpResult2.getRoleIconData(stateFromStores, undefined);
        if (null != roleIconData) {
          const obj2 = { src: roleIconData.customIconSrc, name: null, roleId: null, size: "Array", unicodeEmoji: roleIconData.unicodeEmoji };
          ({ name: obj4.name, id: obj4.roleId } = stateFromStores);
          tmp12 = obj2;
        }
      }
      cResult[5] = stateFromStores;
      cResult[6] = tmp12;
      tmp10 = tmp12;
    } else {
      tmp10 = cResult[6];
    }
    return tmp10;
  }
  const fn = function c() {
    let guild;
    let roleId;
    const obj = { guildId, role };
    ({ guildId, roleId, role, guild } = obj);
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
            const obj4 = RoleIconUtils;
            if (obj4.canGuildUseRoleIcons(guild, role)) {
              tmp3 = role;
            }
          }
        }
        return tmp3;
      }
    }
  };
  const items1 = [guildId, role];
  cResult[1] = guildId;
  cResult[2] = role;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
}) : ((guildId, role) => {
  _require = guildId;
  dependencyMap = role;
  let obj = require("get initialized");
  const items = [GuildStore, GuildRoleStore];
  const items1 = [guildId, role];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild;
    let roleId;
    const obj = { guildId, role };
    ({ guildId, roleId, role, guild } = obj);
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
            const obj4 = RoleIconUtils;
            if (obj4.canGuildUseRoleIcons(guild, role)) {
              tmp3 = role;
            }
          }
        }
        return tmp3;
      }
    }
  }, items1);
  const items2 = [stateFromStores];
  return stateFromStores.useMemo(() => {
    let tmp2;
    if (null != stateFromStores) {
      const obj = RoleIconUtils;
      const roleIconData = obj.getRoleIconData(stateFromStores, undefined);
      if (null != roleIconData) {
        const obj3 = { src: roleIconData.customIconSrc, name: null, roleId: null, size: "Array", unicodeEmoji: roleIconData.unicodeEmoji };
        ({ name: obj2.name, id: obj2.roleId } = stateFromStores);
        tmp2 = obj3;
      }
    }
    return tmp2;
  }, items2);
});
function getRoleIconProps(roleIconRole, size) {
  if (null != roleIconRole) {
    const obj = RoleIconUtils;
    const roleIconData = obj.getRoleIconData(roleIconRole, size);
    if (null != roleIconData) {
      const obj3 = { src: roleIconData.customIconSrc, name: null, roleId: null, size, unicodeEmoji: roleIconData.unicodeEmoji };
      ({ name: obj2.name, id: obj2.roleId } = roleIconRole);
      return obj3;
    }
  }
}
function computeRoleIconRole(arg0) {
  let guild;
  let guildId;
  let role;
  let roleId;
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
      const obj3 = RoleIconUtils;
      if (obj3.canGuildUseRoleIcons(guild, role)) {
        return role;
      }
    }
  }
}
const result = size.fileFinishedImporting("modules/roles/useRoleIconProps.tsx");

export const useRoleIconProps = tmp2;
export { getRoleIconProps };
export const useRoleIconPropsForPreview = tmp3;
export { computeRoleIconRole };