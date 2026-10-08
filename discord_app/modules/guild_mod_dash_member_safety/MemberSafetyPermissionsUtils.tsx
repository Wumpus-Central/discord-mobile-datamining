// === Module 6954: MemberSafetyPermissionsUtils ===

// Module 6954 (MemberSafetyPermissionsUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import _slicedToArray from "module_32" /* 32 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import UserStore from "UserStore" /* 1389 */;

const require = globalThis.__r;

const require = fn;
const isGuildOwner = fn(2082).isGuildOwner;
let closure_8 = fn(4711).MemberSafetyPagePermissions;
const Constants = fn(1085);
({ GuildFeatures: closure_9, Permissions: c10 } = Constants);
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanAccessMemberSafetyPage(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildStore, UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      const items = [GuildStore, UserStore];
      [obj, obj2] = items;
      guild = obj.getGuild(closure_0);
      const currentUser = obj2.getCurrentUser();
      return false;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7, tmp8);
}) : (function useCanAccessMemberSafetyPage(arg0) {
  _require = arg0;
  let items = [GuildStore, UserStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const items = [GuildStore, UserStore];
    [obj, obj2] = items;
    guild = obj.getGuild(closure_0);
    const currentUser = obj2.getCurrentUser();
    return false;
  }, items1);
});
let closure_11 = tmp3;
fn(558);
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanAccessBulkBanningFeature(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  let stateFromStores = closure_11(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildStore, UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      const items = [GuildStore, UserStore];
      [obj, obj2] = items;
      guild = obj.getGuild(closure_0);
      const currentUser = obj2.getCurrentUser();
      return false;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const obj = require("c");
  if (stateFromStores) {
    stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
  }
  return stateFromStores;
}) : (function useCanAccessBulkBanningFeature(arg0) {
  _require = arg0;
  let stateFromStores = closure_11(arg0);
  let items = [GuildStore, UserStore];
  const items1 = [arg0];
  if (stateFromStores) {
    stateFromStores = obj.useStateFromStores(items, () => {
      const items = [GuildStore, UserStore];
      [obj, obj2] = items;
      guild = obj.getGuild(closure_0);
      const currentUser = obj2.getCurrentUser();
      return false;
    }, items1);
  }
  return stateFromStores;
});
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanAccessInviteCodeFeature(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      guild = GuildStore.getGuild(closure_0);
      let canResult = null != guild;
      if (canResult) {
        canResult = PermissionStore.can(constants2.MANAGE_GUILD, guild);
      }
      return canResult;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7, tmp8);
}) : (function useCanAccessInviteCodeFeature(arg0) {
  _require = arg0;
  const items = [GuildStore, PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    guild = GuildStore.getGuild(closure_0);
    let canResult = null != guild;
    if (canResult) {
      canResult = PermissionStore.can(constants2.MANAGE_GUILD, guild);
    }
    return canResult;
  }, items1);
});
function getContextForPermission(arg0) {
  let tmp = items;
  if (items === undefined) {
    items = [UserStore, closure_8];
    tmp = items;
  }
  [obj, obj2] = tmp;
  guild = obj.getGuild(arg0);
  const currentUser = obj2.getCurrentUser();
  const tmp4 = _slicedToArray(tmp, 2);
}
function canAccessMemberSafetyPage(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [GuildStore, UserStore];
    tmp = items;
  }
  if (tmp === undefined) {
    const items1 = [UserStore, closure_8];
    tmp = items1;
  }
  [obj, obj2] = tmp;
  guild = obj.getGuild(arg0);
  const currentUser = obj2.getCurrentUser();
  return false;
}
function hasBulkBanningPermissions(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [GuildStore, UserStore];
    tmp = items;
  }
  if (tmp === undefined) {
    const items1 = [UserStore, closure_8];
    tmp = items1;
  }
  [obj, obj2] = tmp;
  guild = obj.getGuild(arg0);
  const currentUser = obj2.getCurrentUser();
  return false;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyPermissionsUtils.tsx");

export { getContextForPermission };
export { canAccessMemberSafetyPage };
export { hasBulkBanningPermissions };
export const canPruneGuildMembers = function canPruneGuildMembers(guild, currentUser) {
  let obj = PermissionStore;
  if (PermissionStore === undefined) {
    obj = PermissionStore;
  }
  const features = guild.features;
  if (features.has(constants.PRUNE_REQUIRES_ADMIN)) {
    let canResult = isGuildOwner(guild, currentUser);
    if (!canResult) {
      canResult = obj.can(constants2.ADMINISTRATOR, guild);
    }
    let canResult1 = canResult;
  } else {
    canResult1 = obj.can(BigFlagUtilsAll.combine(constants2.MANAGE_GUILD, constants2.KICK_MEMBERS), guild);
  }
  return canResult1;
};
export const useCanAccessMemberSafetyPage = tmp3;
export const useCanAccessBulkBanningFeature = tmp4;
export const useCanAccessInviteCodeFeature = tmp5;
export const useCanBulkBanUser = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanBulkBanUser(arg0, arg1, arg2) {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  const cResult = require("c").c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore, GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      if (cResult[3] === arg2) {
        let tmp7 = cResult[4];
        let tmp8 = cResult[5];
      }
      return tmp(504).useStateFromStores(first, tmp7, tmp8);
    }
  }
  const fn = function l() {
    guild = GuildStore.getGuild(closure_0);
    let tmp2 = null != guild;
    if (tmp2) {
      let canManageUserResult = closure_1;
      if (closure_1) {
        canManageUserResult = PermissionStore.canManageUser(constants2.BAN_MEMBERS, closure_2, guild);
      }
      tmp2 = canManageUserResult;
    }
    return tmp2;
  };
  const items1 = [arg1, arg0, arg2];
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = arg2;
  cResult[4] = fn;
  cResult[5] = items1;
  tmp8 = items1;
  tmp7 = fn;
  const obj = require("c");
  tmp = _require;
}) : (function useCanBulkBanUser(arg0, arg1, arg2) {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  const items = [PermissionStore, GuildStore];
  const items1 = [arg1, arg0, arg2];
  return require("initialize").useStateFromStores(items, () => {
    guild = GuildStore.getGuild(closure_0);
    let tmp2 = null != guild;
    if (tmp2) {
      let canManageUserResult = closure_1;
      if (closure_1) {
        canManageUserResult = PermissionStore.canManageUser(constants2.BAN_MEMBERS, closure_2, guild);
      }
      tmp2 = canManageUserResult;
    }
    return tmp2;
  }, items1);
});
export const canBulkBanUser = function canBulkBanUser(arg0, arg1, user) {
  guild = GuildStore.getGuild(arg0);
  let tmp2 = null != guild;
  if (tmp2) {
    let canManageUserResult = arg1;
    if (arg1) {
      canManageUserResult = PermissionStore.canManageUser(constants2.BAN_MEMBERS, user, guild);
    }
    tmp2 = canManageUserResult;
  }
  return tmp2;
};