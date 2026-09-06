// discord_app/modules/permissions/useManageResourcePermissions.tsx
import BigFlagUtilsAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import PermissionStore from "../../stores/PermissionStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const require = fn;
function canManageResource(arg0, stateFromStores, canResult1, c0) {
  let creator_id = arg0;
  let tmp = null != arg0;
  if (tmp) {
    if (canResult1) {
      tmp = tmp3;
    } else {
      let id = stateFromStores;
      let tmp4 = c0;
      if ("creator_id" in creator_id) {
        if (tmp4) {
          tmp4 = null != id;
        }
        if (tmp4) {
          creator_id = creator_id.creator_id;
          id = id.id;
          tmp4 = creator_id === id;
        }
        let tmp5 = tmp4;
      } else if ("userId" in creator_id) {
        let tmp8 = tmp4;
        if (tmp4) {
          tmp8 = null != id;
        }
        if (tmp8) {
          tmp8 = creator_id.userId === id.id;
        }
        tmp5 = tmp8;
      } else {
        tmp5 = "user" in creator_id;
        if (tmp5) {
          let tmp6 = tmp4;
          if (tmp4) {
            tmp6 = null != id;
          }
          if (tmp6) {
            const user = creator_id.user;
            id = undefined;
            if (user != null) {
              id = user.id;
            }
            tmp6 = id === id.id;
          }
          tmp5 = tmp6;
        }
      }
    }
  }
  return tmp;
}
const PermissionsConstants = fn(9672);
({
  CREATE_GUILD_EVENT_CORE_PERMISSIONS: closure_7,
  CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: closure_8,
  CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: closure_9,
} = PermissionsConstants);
const Permissions = fn(1085).Permissions;
let closure_11 = {
  canCreateExpressions: false,
  canCreateGuildEvent: false,
  canManageAllExpressions: false,
  canManageAllEvents: false,
  canManageGuildExpression() {
    return false;
  },
  canManageGuildEvent() {
    return false;
  },
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/permissions/useManageResourcePermissions.tsx");

export const attachChannelPermissions = function attachChannelPermissions(channel) {
  if (null == channel) {
    const items = [,];
    ({ CREATE_EVENTS: arr2[0], MANAGE_EVENTS: arr2[1] } = Permissions);
    return items;
  } else {
    let tmp = React5;
    if (channel.isGuildStageVoice()) {
      tmp = React6;
    } else if (channel.isGuildVoice()) {
      tmp = React7;
    }
    const items1 = [BigFlagUtilsAll.combine(tmp, Permissions.CREATE_EVENTS)];
    items1[1] = BigFlagUtilsAll.combine(tmp, Permissions.MANAGE_EVENTS);
    return items1;
  }
};
export const useManageResourcePermissions = function useManageResourcePermissions(channel) {
  _require = channel;
  let obj = require("GuildRecordUtils");
  if (obj.isGuildRecord(channel)) {
    let items = [,];
    ({ CREATE_EVENTS: arr3[0], MANAGE_EVENTS: arr3[1] } = Permissions);
    let items2 = items;
  } else if (null == channel) {
    const items1 = [,];
    ({ CREATE_EVENTS: arr2[0], MANAGE_EVENTS: arr2[1] } = Permissions);
    items2 = items1;
  } else {
    let tmp4 = stateFromStores;
    if (channel.isGuildStageVoice()) {
      tmp4 = closure_8;
    } else if (channel.isGuildVoice()) {
      tmp4 = closure_9;
    }
    items2 = [BigFlagUtilsAll.combine(tmp4, Permissions.CREATE_EVENTS)];
    items2[1] = BigFlagUtilsAll.combine(tmp4, Permissions.MANAGE_EVENTS);
  }
  [importAll, dependencyMap] = canCreateExpressions(items2, 2);
  let tmpResult = tmp(504);
  const items3 = [closure_5];
  const tmp10 = canCreateExpressions(
    tmpResult.useStateFromStoresArray(items3, () => {
      const items = [
        PermissionStore.can(Permissions.CREATE_GUILD_EXPRESSIONS, closure_0),
        PermissionStore.can(Permissions.MANAGE_GUILD_EXPRESSIONS, closure_0),
        PermissionStore.can(importAll, closure_0),
        PermissionStore.can(dependencyMap, closure_0),
      ];
      return items;
    }),
    4,
  );
  canCreateExpressions = tmp10[0];
  noop = tmp12;
  closure_5 = tmp13;
  const currentUser = tmp14;
  tmpResult = tmp(504);
  const items4 = [currentUser];
  stateFromStores = tmpResult.useStateFromStores(items4, () => currentUser.getCurrentUser());
  const items5 = [canCreateExpressions, tmp10[1], stateFromStores];
  const items6 = [tmp10[3], tmp10[2], stateFromStores];
  const callback = noop.useCallback((arg0) => canManageResource(arg0, stateFromStores, closure_4, first), items5);
  if (null == channel) {
    obj = closure_11;
  } else {
    obj = {
      canCreateExpressions,
      canCreateGuildEvent: tmp13,
      canManageAllExpressions: tmp12,
      canManageAllEvents: tmp14,
      canManageGuildExpression: callback,
      canManageGuildEvent: tmp17,
    };
  }
  return obj;
};
export const getManageResourcePermissions = function getManageResourcePermissions(guild, c6, UserStore) {
  let obj = c6;
  if (c6 === undefined) {
    obj = PermissionStore;
  }
  let obj2 = UserStore;
  if (UserStore === undefined) {
    obj2 = UserStore;
  }
  _require = undefined;
  let canResult1;
  let canResult2;
  let canResult3;
  let currentUser;
  if (obj3.isGuildRecord(guild)) {
    const items = [,];
    ({ CREATE_EVENTS: arr3[0], MANAGE_EVENTS: arr3[1] } = Permissions);
    let tmp5 = Permissions;
    let items2 = items;
  } else if (null == guild) {
    const items1 = [,];
    ({ CREATE_EVENTS: arr2[0], MANAGE_EVENTS: arr2[1] } = Permissions);
    tmp5 = Permissions;
    items2 = items1;
  } else {
    let tmp3 = closure_7;
    if (guild.isGuildStageVoice()) {
      tmp3 = closure_8;
    } else if (guild.isGuildVoice()) {
      tmp3 = closure_9;
    }
    tmp5 = Permissions;
    items2 = [canResult1(tmp[6]).combine(tmp3, Permissions.CREATE_EVENTS)];
    const obj4 = canResult1(tmp[6]);
    items2[1] = canResult1(tmp[6]).combine(tmp3, Permissions.MANAGE_EVENTS);
    const obj5 = canResult1(tmp[6]);
  }
  obj3 = require("GuildRecordUtils");
  [tmp9, tmp10] = canResult3(items2, 2);
  const canResult = obj.can(tmp5.CREATE_GUILD_EXPRESSIONS, guild);
  _require = canResult;
  canResult1 = obj.can(tmp5.MANAGE_GUILD_EXPRESSIONS, guild);
  canResult2 = obj.can(tmp9, guild);
  canResult3 = obj.can(tmp10, guild);
  currentUser = obj2.getCurrentUser();
  if (null == guild) {
    obj = closure_11;
  } else {
    obj = {
      canCreateExpressions: canResult,
      canCreateGuildEvent: canResult2,
      canManageAllExpressions: canResult1,
      canManageAllEvents: canResult3,
      canManageGuildExpression(arg0) {
        return canManageResource(arg0, closure_4, canResult1, c0);
      },
      canManageGuildEvent(arg0) {
        return canManageResource(arg0, closure_4, canResult3, canResult2);
      },
    };
  }
  return obj;
};
