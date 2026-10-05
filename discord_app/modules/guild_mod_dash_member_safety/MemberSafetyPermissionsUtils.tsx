// discord_app/modules/guild_mod_dash_member_safety/MemberSafetyPermissionsUtils.tsx
import BigFlagUtilsAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import GuildRecord from "../../records/GuildRecord.tsx";
import MemberSafetyConstants from "MemberSafetyConstants.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import Constants from "../../Constants.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let c10;
let c9;
const isGuildOwner = GuildRecord.isGuildOwner;
let closure_8 = MemberSafetyConstants.MemberSafetyPagePermissions;
({ GuildFeatures: c9, Permissions: c10 } = Constants);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp7;
      let tmp8;
      _require = arg0;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildStore, UserStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function u() {
          let obj;
          let obj2;
          const items = [GuildStore, UserStore];
          [obj, obj2] = items;
          _slicedToArray(items, 2);
          const guild = obj.getGuild(closure_0);
          const currentUser = obj2.getCurrentUser();
          return false;
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp7, tmp8);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const obj = require("get initialized");
      let items = [GuildStore, UserStore];
      const items1 = [arg0];
      return obj.useStateFromStores(
        items,
        () => {
          let obj;
          let obj2;
          const items = [GuildStore, UserStore];
          [obj, obj2] = items;
          _slicedToArray(items, 2);
          const guild = obj.getGuild(closure_0);
          const currentUser = obj2.getCurrentUser();
          return false;
        },
        items1,
      );
    };
let closure_11 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp8;
      let tmp9;
      _require = arg0;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(4);
      let stateFromStores = closure_11(arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildStore, UserStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function u() {
          let obj;
          let obj2;
          const items = [GuildStore, UserStore];
          [obj, obj2] = items;
          _slicedToArray(items, 2);
          const guild = obj.getGuild(closure_0);
          const currentUser = obj2.getCurrentUser();
          return false;
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp9 = items1;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = tmp(504);
      if (stateFromStores) {
        stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
      }
      return stateFromStores;
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      let stateFromStores = closure_11(arg0);
      const obj = require("get initialized");
      let items = [GuildStore, UserStore];
      const items1 = [arg0];
      if (stateFromStores) {
        stateFromStores = obj.useStateFromStores(
          items,
          () => {
            let obj;
            let obj2;
            const items = [GuildStore, UserStore];
            [obj, obj2] = items;
            _slicedToArray(items, 2);
            const guild = obj.getGuild(closure_0);
            const currentUser = obj2.getCurrentUser();
            return false;
          },
          items1,
        );
      }
      return stateFromStores;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp7;
      let tmp8;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(4);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore, PermissionStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          const guild = GuildStore.getGuild(closure_0);
          const canResult = null != guild && PermissionStore.can(constants.MANAGE_GUILD, guild);
          return canResult;
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp7, tmp8);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [GuildStore, PermissionStore];
      const items1 = [arg0];
      const obj = require("get initialized");
      return obj.useStateFromStores(
        items,
        () => {
          const guild = GuildStore.getGuild(closure_0);
          const canResult = null != guild && PermissionStore.can(constants.MANAGE_GUILD, guild);
          return canResult;
        },
        items1,
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2) => {
      let closure_0;
      let closure_2;
      let first;
      _require = arg0;
      let closure_1 = arg1;
      dependencyMap = arg2;
      let tmp2 = dependencyMap;
      const obj = require("react");
      const cResult = obj.c(6);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore, GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg1) {
        if (cResult[2] === arg0) {
          let tmp7;
          let tmp8;
          if (cResult[3] === arg2) {
            tmp7 = cResult[4];
            tmp8 = cResult[5];
          }
          const tmpResult = tmp(504);
          return tmpResult.useStateFromStores(first, tmp7, tmp8);
        }
      }
      const fn = function l() {
        const guild = GuildStore.getGuild(closure_0);
        let tmp2 = null != guild;
        if (tmp2) {
          tmp2 = closure_1 && PermissionStore.canManageUser(constants.BAN_MEMBERS, closure_2, guild);
          const canManageUserResult =
            closure_1 && PermissionStore.canManageUser(constants.BAN_MEMBERS, closure_2, guild);
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
    }
  : (arg0, arg1, arg2) => {
      let closure_0;
      let closure_2;
      _require = arg0;
      let closure_1 = arg1;
      dependencyMap = arg2;
      const items = [PermissionStore, GuildStore];
      const items1 = [arg1, arg0, arg2];
      const obj = require("get initialized");
      return obj.useStateFromStores(
        items,
        () => {
          const guild = GuildStore.getGuild(closure_0);
          let tmp2 = null != guild;
          if (tmp2) {
            tmp2 = closure_1 && PermissionStore.canManageUser(constants.BAN_MEMBERS, closure_2, guild);
            const canManageUserResult =
              closure_1 && PermissionStore.canManageUser(constants.BAN_MEMBERS, closure_2, guild);
          }
          return tmp2;
        },
        items1,
      );
    };
function getContextForPermission(arg0) {
  let items;
  let obj;
  let obj2;
  let tmp = items;
  if (items === undefined) {
    items = [UserStore, closure_8];
    tmp = items;
  }
  [obj, obj2] = tmp;
  _slicedToArray(tmp, 2);
  const guild = obj.getGuild(arg0);
  const currentUser = obj2.getCurrentUser();
}
function canAccessMemberSafetyPage(arg0) {
  let obj;
  let obj2;
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
  _slicedToArray(tmp, 2);
  const guild = obj.getGuild(arg0);
  const currentUser = obj2.getCurrentUser();
  return false;
}
function hasBulkBanningPermissions(arg0) {
  let obj;
  let obj2;
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
  _slicedToArray(tmp, 2);
  const guild = obj.getGuild(arg0);
  const currentUser = obj2.getCurrentUser();
  return false;
}
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyPermissionsUtils.tsx");

export { getContextForPermission };
export { canAccessMemberSafetyPage };
export { hasBulkBanningPermissions };
export const canPruneGuildMembers = function canPruneGuildMembers(guild, currentUser) {
  let canResult1;
  let obj = PermissionStore;
  if (PermissionStore === undefined) {
    obj = PermissionStore;
  }
  const features = guild.features;
  if (features.has(constants.PRUNE_REQUIRES_ADMIN)) {
    canResult1 = isGuildOwner(guild, currentUser) || obj.can(constants2.ADMINISTRATOR, guild);
    const canResult = isGuildOwner(guild, currentUser) || obj.can(constants2.ADMINISTRATOR, guild);
  } else {
    const can = obj.can;
    const obj2 = BigFlagUtilsAll;
    canResult1 = can(obj2.combine(constants2.MANAGE_GUILD, constants2.KICK_MEMBERS), guild);
  }
  return canResult1;
};
export const useCanAccessMemberSafetyPage = tmp3;
export const useCanAccessBulkBanningFeature = tmp4;
export const useCanAccessInviteCodeFeature = tmp5;
export const useCanBulkBanUser = tmp6;
export const canBulkBanUser = function canBulkBanUser(arg0, arg1, user) {
  const guild = GuildStore.getGuild(arg0);
  let tmp2 = null != guild;
  if (tmp2) {
    tmp2 = arg1 && PermissionStore.canManageUser(constants2.BAN_MEMBERS, user, guild);
    const canManageUserResult = arg1 && PermissionStore.canManageUser(constants2.BAN_MEMBERS, user, guild);
  }
  return tmp2;
};
