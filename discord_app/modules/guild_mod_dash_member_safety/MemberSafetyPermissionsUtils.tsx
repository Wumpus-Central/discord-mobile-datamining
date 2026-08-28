// === Module 6077: getContextForPermission ===

// Module 6077 (getContextForPermission)
import fromStringAll from "fromString" /* 506 */;
import closure_3 from "_slicedToArray" /* 32 */;
import { isGuildOwner } from "GuildNSFWContentLevel" /* 1434 */;
import closure_5 from "createGuildRecordFromRust" /* 1910 */;
import closure_6 from "getUncachedChannelPermissions" /* 4090 */;
import closure_7 from "mergeGuildAvatar" /* 1923 */;
import { MemberSafetyPagePermissions as closure_8 } from "MemberSafetyPagePermissions" /* 4094 */;
import ME from "ME" /* 676 */;

const require = arg1;
({ GuildFeatures: c9, Permissions: c10 } = ME);
const result = require("set").fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyPermissionsUtils.tsx");

export const getContextForPermission = function getContextForPermission(arg0, arg1) {
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [closure_7, closure_8];
    tmp = items;
  }
  [obj, obj2] = callback(tmp, 2);
  const guild = obj.getGuild(arg0);
  const currentUser = obj2.getCurrentUser();
};
export const canAccessMemberSafetyPage = function canAccessMemberSafetyPage(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [closure_5, closure_7];
    tmp = items;
  }
  if (tmp === undefined) {
    const items1 = [closure_7, closure_8];
    tmp = items1;
  }
  [obj, obj2] = callback(tmp, 2);
  const guild = obj.getGuild(arg0);
  const currentUser = obj2.getCurrentUser();
  return false;
};
export const hasBulkBanningPermissions = function hasBulkBanningPermissions(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [closure_5, closure_7];
    tmp = items;
  }
  if (tmp === undefined) {
    const items1 = [closure_7, closure_8];
    tmp = items1;
  }
  [obj, obj2] = callback(tmp, 2);
  const guild = obj.getGuild(arg0);
  const currentUser = obj2.getCurrentUser();
  return false;
};
export const canPruneGuildMembers = function canPruneGuildMembers(guild, currentUser, callback1) {
  let obj = callback1;
  if (callback1 === undefined) {
    obj = closure_6;
  }
  const features = guild.features;
  if (features.has(constants.PRUNE_REQUIRES_ADMIN)) {
    let canResult = isGuildOwner(guild, currentUser);
    if (!canResult) {
      canResult = obj.can(constants2.ADMINISTRATOR, guild);
    }
    let canResult1 = canResult;
  } else {
    canResult1 = obj.can(fromStringAll.combine(constants2.MANAGE_GUILD, constants2.KICK_MEMBERS), guild);
    const obj2 = fromStringAll;
  }
  return canResult1;
};
export const useCanAccessMemberSafetyPage = function useCanAccessMemberSafetyPage(id) {
  const _require = id;
  const items = [closure_5, closure_7];
  const items1 = [id];
  return _require(589).useStateFromStores(items, () => {
    const items = [closure_1_5, closure_1_7];
    [obj, obj2] = closure_1_3(items, 2);
    const guild = obj.getGuild(closure_0);
    const currentUser = obj2.getCurrentUser();
    return false;
  }, items1);
};
export const useCanAccessBulkBanningFeature = function useCanAccessBulkBanningFeature(arg0) {
  const _require = arg0;
  let items = [closure_5, closure_7];
  const items1 = [arg0];
  let stateFromStores = _require(589).useStateFromStores(items, () => {
    const items = [closure_1_5, closure_1_7];
    [obj, obj2] = closure_1_3(items, 2);
    const guild = obj.getGuild(closure_0);
    const currentUser = obj2.getCurrentUser();
    return false;
  }, items1);
  const obj = _require(589);
  const items2 = [closure_5, closure_7];
  const items3 = [arg0];
  if (stateFromStores) {
    stateFromStores = obj2.useStateFromStores(items2, () => {
      const items = [closure_1_5, closure_1_7];
      [obj, obj2] = closure_1_3(items, 2);
      const guild = obj.getGuild(closure_0);
      const currentUser = obj2.getCurrentUser();
      return false;
    }, items3);
  }
  return stateFromStores;
};
export const useCanAccessInviteCodeFeature = function useCanAccessInviteCodeFeature(arg0) {
  const _require = arg0;
  const items = [closure_5, closure_6];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => {
    const guild = closure_1_5.getGuild(closure_0);
    let canResult = null != guild;
    if (canResult) {
      canResult = closure_1_6.can(closure_1_10.MANAGE_GUILD, guild);
    }
    return canResult;
  }, items1);
};
export const useCanBulkBanUser = function useCanBulkBanUser(arg0, arg1, arg2) {
  const _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  const items = [closure_6, closure_5];
  const items1 = [arg1, arg0, arg2];
  return _require(589).useStateFromStores(items, () => {
    const guild = closure_1_5.getGuild(closure_0);
    let tmp2 = null != guild;
    if (tmp2) {
      let canManageUserResult = closure_1;
      if (closure_1) {
        canManageUserResult = closure_1_6.canManageUser(closure_1_10.BAN_MEMBERS, closure_2, guild);
      }
      tmp2 = canManageUserResult;
    }
    return tmp2;
  }, items1);
};
export const canBulkBanUser = function canBulkBanUser(arg0, arg1, user) {
  guild = guild.getGuild(arg0);
  let tmp2 = null != guild;
  if (tmp2) {
    let canManageUserResult = arg1;
    if (arg1) {
      canManageUserResult = closure_6.canManageUser(constants2.BAN_MEMBERS, user, guild);
    }
    tmp2 = canManageUserResult;
  }
  return tmp2;
};