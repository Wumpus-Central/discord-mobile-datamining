// discord_app/modules/guild_mod_dash_member_safety/MemberSafetyPermissionsUtils.tsx
import _slicedToArray from "_slicedToArray";
import { isGuildOwner } from "GuildNSFWContentLevel";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import mergeGuildAvatar from "mergeGuildAvatar";
import { MemberSafetyPagePermissions as closure_8 } from "MemberSafetyPagePermissions";
import ME from "ME";

let c10;
let c9;
const require = arg1;
({ GuildFeatures: c9, Permissions: c10 } = ME);
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyPermissionsUtils.tsx");

export const getContextForPermission = function getContextForPermission(arg0, arg1) {
  let obj;
  let obj2;
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [mergeGuildAvatar, closure_8];
    tmp = items;
  }
  [obj, obj2] = callback(tmp, 2);
  const guild = obj.getGuild(arg0);
  const currentUser = obj2.getCurrentUser();
};
export const canAccessMemberSafetyPage = function canAccessMemberSafetyPage(arg0) {
  let obj;
  let obj2;
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [createGuildRecordFromRust, mergeGuildAvatar];
    tmp = items;
  }
  if (tmp === undefined) {
    const items1 = [mergeGuildAvatar, closure_8];
    tmp = items1;
  }
  [obj, obj2] = callback(tmp, 2);
  const guild = obj.getGuild(arg0);
  const currentUser = obj2.getCurrentUser();
  return false;
};
export const hasBulkBanningPermissions = function hasBulkBanningPermissions(arg0) {
  let obj;
  let obj2;
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [createGuildRecordFromRust, mergeGuildAvatar];
    tmp = items;
  }
  if (tmp === undefined) {
    const items1 = [mergeGuildAvatar, closure_8];
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
    obj = getUncachedChannelPermissions;
  }
  const features = guild.features;
  if (features.has(constants.PRUNE_REQUIRES_ADMIN)) {
    let canResult = isGuildOwner(guild, currentUser);
    if (!canResult) {
      canResult = obj.can(constants2.ADMINISTRATOR, guild);
    }
    let canResult1 = canResult;
  } else {
    canResult1 = obj.can(importAll(506).combine(constants2.MANAGE_GUILD, constants2.KICK_MEMBERS), guild);
    const obj2 = importAll(506);
  }
  return canResult1;
};
export const useCanAccessMemberSafetyPage = function useCanAccessMemberSafetyPage(id) {
  const _require = id;
  const items = [createGuildRecordFromRust, mergeGuildAvatar];
  const items1 = [id];
  return _require(589).useStateFromStores(items, () => {
    let obj;
    let obj2;
    const items = [outer1_5, outer1_7];
    [obj, obj2] = outer1_3(items, 2);
    const guild = obj.getGuild(closure_0);
    const currentUser = obj2.getCurrentUser();
    return false;
  }, items1);
};
export const useCanAccessBulkBanningFeature = function useCanAccessBulkBanningFeature(arg0) {
  const _require = arg0;
  let items = [createGuildRecordFromRust, mergeGuildAvatar];
  const items1 = [arg0];
  let stateFromStores = _require(589).useStateFromStores(items, () => {
    let obj;
    let obj2;
    const items = [outer1_5, outer1_7];
    [obj, obj2] = outer1_3(items, 2);
    const guild = obj.getGuild(closure_0);
    const currentUser = obj2.getCurrentUser();
    return false;
  }, items1);
  const obj = _require(589);
  const items2 = [createGuildRecordFromRust, mergeGuildAvatar];
  const items3 = [arg0];
  if (stateFromStores) {
    stateFromStores = obj2.useStateFromStores(items2, () => {
      let obj;
      let obj2;
      const items = [outer1_5, outer1_7];
      [obj, obj2] = outer1_3(items, 2);
      const guild = obj.getGuild(closure_0);
      const currentUser = obj2.getCurrentUser();
      return false;
    }, items3);
  }
  return stateFromStores;
};
export const useCanAccessInviteCodeFeature = function useCanAccessInviteCodeFeature(arg0) {
  const _require = arg0;
  const items = [createGuildRecordFromRust, getUncachedChannelPermissions];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => {
    const guild = outer1_5.getGuild(closure_0);
    let canResult = null != guild;
    if (canResult) {
      canResult = outer1_6.can(outer1_10.MANAGE_GUILD, guild);
    }
    return canResult;
  }, items1);
};
export const useCanBulkBanUser = function useCanBulkBanUser(arg0, arg1, arg2) {
  const _require = arg0;
  let closure_1 = arg1;
  const dependencyMap = arg2;
  const items = [getUncachedChannelPermissions, createGuildRecordFromRust];
  const items1 = [arg1, arg0, arg2];
  return _require(589).useStateFromStores(items, () => {
    const guild = outer1_5.getGuild(closure_0);
    let tmp2 = null != guild;
    if (tmp2) {
      let canManageUserResult = closure_1;
      if (closure_1) {
        canManageUserResult = outer1_6.canManageUser(outer1_10.BAN_MEMBERS, closure_2, guild);
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
      canManageUserResult = getUncachedChannelPermissions.canManageUser(constants2.BAN_MEMBERS, user, guild);
    }
    tmp2 = canManageUserResult;
  }
  return tmp2;
};