// === Module 7282: MemberSafetyPermissionsUtils ===

// Module 7282 (MemberSafetyPermissionsUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1084 */;
import BulkRoleActionsExperimentDefault from "BulkRoleActionsExperiment" /* 7283 */;
import _slicedToArray from "module_32" /* 32 */;
import GuildStore from "GuildStore" /* 5177 */;
import PermissionStore from "PermissionStore" /* 5238 */;
import UserStore from "UserStore" /* 1388 */;

const require = globalThis.__r;

const require = fn;
const isGuildOwner = fn(5173).isGuildOwner;
let closure_9 = fn(5242).MemberSafetyPagePermissions;
const Constants = fn(1072);
({ GuildFeatures: closure_10, Permissions: closure_11 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyPermissionsUtils.tsx");

export function getContextForPermission(arg0) {
  let tmp = items;
  if (items === undefined) {
    items = [UserStore, closure_9];
    tmp = items;
  }
  [obj, obj2] = tmp;
  guild = obj.getGuild(arg0);
  const currentUser = obj2.getCurrentUser();
  const tmp4 = _slicedToArray(tmp, 2);
}
export function canAccessMemberSafetyPage(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    items = [GuildStore, UserStore];
    tmp = items;
  }
  if (tmp === undefined) {
    const items1 = [UserStore, closure_9];
    tmp = items1;
  }
  [obj, obj2] = tmp;
  guild = obj.getGuild(arg0);
  const currentUser = obj2.getCurrentUser();
  return false;
}
export function hasBulkBanningPermissions(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    items = [GuildStore, UserStore];
    tmp = items;
  }
  if (tmp === undefined) {
    const items1 = [UserStore, closure_9];
    tmp = items1;
  }
  [obj, obj2] = tmp;
  guild = obj.getGuild(arg0);
  const currentUser = obj2.getCurrentUser();
  return false;
}
export function canPruneGuildMembers(guild, currentUser) {
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
}
export function useCanAccessMemberSafetyPage(id) {
  _require = id;
  items = [GuildStore, UserStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(items, () => {
    items = [GuildStore, UserStore];
    [obj, obj2] = items;
    guild = obj.getGuild(closure_0);
    const currentUser = obj2.getCurrentUser();
    return false;
  }, items1);
}
export function useCanAccessBulkBanningFeature(arg0) {
  _require = arg0;
  closure_129_0 = arg0;
  items = [GuildStore, UserStore];
  const items1 = [arg0];
  let stateFromStores = require("initialize").useStateFromStores(items, () => {
    items = [GuildStore, UserStore];
    [obj, obj2] = items;
    guild = obj.getGuild(closure_0);
    const currentUser = obj2.getCurrentUser();
    return false;
  }, items1);
  const obj = require("initialize");
  const items2 = [GuildStore, UserStore];
  const items3 = [arg0];
  if (stateFromStores) {
    stateFromStores = obj2.useStateFromStores(items2, () => {
      items = [GuildStore, UserStore];
      [obj, obj2] = items;
      guild = obj.getGuild(closure_0);
      const currentUser = obj2.getCurrentUser();
      return false;
    }, items3);
  }
  return stateFromStores;
}
export function useCanAccessInviteCodeFeature(arg0) {
  _require = arg0;
  items = [GuildStore, PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    guild = GuildStore.getGuild(closure_0);
    let canResult = null != guild;
    if (canResult) {
      canResult = PermissionStore.can(constants2.MANAGE_GUILD, guild);
    }
    return canResult;
  }, items1);
}
export function canBulkBanUser(arg0, user) {
  guild = GuildStore.getGuild(arg0);
  let canManageUserResult = null != guild;
  if (canManageUserResult) {
    canManageUserResult = PermissionStore.canManageUser(constants2.BAN_MEMBERS, user, guild);
  }
  return canManageUserResult;
}
export function useCanBulkBanUser(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  items = [PermissionStore, GuildStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(items, () => {
    guild = GuildStore.getGuild(closure_0);
    let canManageUserResult = null != guild;
    if (canManageUserResult) {
      canManageUserResult = PermissionStore.canManageUser(constants2.BAN_MEMBERS, closure_1, guild);
    }
    return canManageUserResult;
  }, items1);
}
export function useCanAccessBulkActions(guildId) {
  _require = guildId;
  closure_129_0 = guildId;
  items = [GuildStore, UserStore];
  const items1 = [guildId];
  let canAccessBulkBan = require("initialize").useStateFromStores(items, () => {
    items = [GuildStore, UserStore];
    [obj, obj2] = items;
    guild = obj.getGuild(closure_0);
    const currentUser = obj2.getCurrentUser();
    return false;
  }, items1);
  const obj = require("initialize");
  const items2 = [GuildStore, UserStore];
  const items3 = [guildId];
  if (canAccessBulkBan) {
    canAccessBulkBan = obj2.useStateFromStores(items2, () => {
      items = [GuildStore, UserStore];
      [obj, obj2] = items;
      guild = obj.getGuild(closure_0);
      const currentUser = obj2.getCurrentUser();
      return false;
    }, items3);
  }
  closure_130_0 = guildId;
  obj2 = require("initialize");
  let canAccessBulkRole = BulkRoleActionsExperimentDefault.useConfig({ guildId, location: "Members page bulk actions" }).enabled;
  closure_131_0 = guildId;
  const obj4 = { guildId, location: "Members page bulk actions" };
  const items4 = [GuildStore, UserStore];
  const items5 = [guildId];
  const stateFromStores1 = require("initialize").useStateFromStores(items4, () => {
    items = [GuildStore, UserStore];
    [obj, obj2] = items;
    guild = obj.getGuild(closure_0);
    const currentUser = obj2.getCurrentUser();
    return false;
  }, items5);
  const tmpResult = require("initialize");
  const items6 = [GuildStore, UserStore];
  const items7 = [guildId];
  const stateFromStores2 = require("initialize").useStateFromStores(items6, () => {
    items = [GuildStore, UserStore];
    [obj, obj2] = items;
    guild = obj.getGuild(closure_0);
    const currentUser = obj2.getCurrentUser();
    return false;
  }, items7);
  if (canAccessBulkRole) {
    canAccessBulkRole = stateFromStores1;
  }
  if (canAccessBulkRole) {
    canAccessBulkRole = stateFromStores2;
  }
  let canAccessBulkActions = canAccessBulkBan;
  if (!canAccessBulkBan) {
    canAccessBulkActions = canAccessBulkRole;
  }
  return { canAccessBulkActions, canAccessBulkBan, canAccessBulkRole };
}