// discord_app/modules/guild_mod_dash_member_safety/MemberSafetyPermissionsUtils.tsx
import BigFlagUtilsAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const require = fn;
const isGuildOwner = fn(1975).isGuildOwner;
let closure_8 = fn(4203).MemberSafetyPagePermissions;
const Constants = fn(1074);
({ GuildFeatures: closure_9, Permissions: c10 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyPermissionsUtils.tsx");

export const getContextForPermission = function getContextForPermission(arg0, items) {
  let tmp = items;
  if (items === undefined) {
    items = [UserStore, closure_8];
    tmp = items;
  }
  [obj, obj2] = _slicedToArray(tmp, 2);
  const guild = obj.getGuild(arg0);
  const currentUser = obj2.getCurrentUser();
};
export const canAccessMemberSafetyPage = function canAccessMemberSafetyPage(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [GuildStore, UserStore];
    tmp = items;
  }
  if (tmp === undefined) {
    const items1 = [UserStore, closure_8];
    tmp = items1;
  }
  [obj, obj2] = _slicedToArray(tmp, 2);
  const guild = obj.getGuild(arg0);
  const currentUser = obj2.getCurrentUser();
  return false;
};
export const hasBulkBanningPermissions = function hasBulkBanningPermissions(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [GuildStore, UserStore];
    tmp = items;
  }
  if (tmp === undefined) {
    const items1 = [UserStore, closure_8];
    tmp = items1;
  }
  [obj, obj2] = _slicedToArray(tmp, 2);
  const guild = obj.getGuild(arg0);
  const currentUser = obj2.getCurrentUser();
  return false;
};
export const canPruneGuildMembers = function canPruneGuildMembers(guild, currentUser, PermissionStore) {
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
export const useCanAccessMemberSafetyPage = function useCanAccessMemberSafetyPage(id) {
  _require = id;
  const items = [GuildStore, UserStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(
    items,
    () => {
      const items = [GuildStore, UserStore];
      [obj, obj2] = _slicedToArray(items, 2);
      const guild = obj.getGuild(closure_0);
      const currentUser = obj2.getCurrentUser();
      return false;
    },
    items1,
  );
};
export const useCanAccessBulkBanningFeature = function useCanAccessBulkBanningFeature(arg0) {
  _require = arg0;
  closure_129_0 = arg0;
  let items = [GuildStore, UserStore];
  const items1 = [arg0];
  let stateFromStores = require("initialize").useStateFromStores(
    items,
    () => {
      const items = [GuildStore, UserStore];
      [obj, obj2] = _slicedToArray(items, 2);
      const guild = obj.getGuild(closure_0);
      const currentUser = obj2.getCurrentUser();
      return false;
    },
    items1,
  );
  const obj = require("initialize");
  const items2 = [GuildStore, UserStore];
  const items3 = [arg0];
  if (stateFromStores) {
    stateFromStores = obj2.useStateFromStores(
      items2,
      () => {
        const items = [GuildStore, UserStore];
        [obj, obj2] = _slicedToArray(items, 2);
        const guild = obj.getGuild(closure_0);
        const currentUser = obj2.getCurrentUser();
        return false;
      },
      items3,
    );
  }
  return stateFromStores;
};
export const useCanAccessInviteCodeFeature = function useCanAccessInviteCodeFeature(arg0) {
  _require = arg0;
  const items = [GuildStore, PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(
    items,
    () => {
      const guild = GuildStore.getGuild(closure_0);
      let canResult = null != guild;
      if (canResult) {
        canResult = PermissionStore.can(constants2.MANAGE_GUILD, guild);
      }
      return canResult;
    },
    items1,
  );
};
export const useCanBulkBanUser = function useCanBulkBanUser(arg0, arg1, arg2) {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  const items = [PermissionStore, GuildStore];
  const items1 = [arg1, arg0, arg2];
  return require("initialize").useStateFromStores(
    items,
    () => {
      const guild = GuildStore.getGuild(closure_0);
      let tmp2 = null != guild;
      if (tmp2) {
        let canManageUserResult = closure_1;
        if (closure_1) {
          canManageUserResult = PermissionStore.canManageUser(constants2.BAN_MEMBERS, closure_2, guild);
        }
        tmp2 = canManageUserResult;
      }
      return tmp2;
    },
    items1,
  );
};
export const canBulkBanUser = function canBulkBanUser(arg0, arg1, user) {
  const guild = GuildStore.getGuild(arg0);
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
