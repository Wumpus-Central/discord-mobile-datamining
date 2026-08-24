// discord_app/modules/permissions/useManageResourcePermissions.tsx
import fromStringAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../_runtime/00019_noop.js";
import closure_5 from "../../stores/PermissionStore.tsx";
import closure_6 from "../../stores/UserStore.tsx";
import VIEW_CHANNEL from "../guild_scheduled_events/PermissionsConstants.tsx";
import { Permissions } from "../../../discord_common/js/shared/Constants.tsx";
import { fromGuildPropertiesWithAdditionalFields } from "../../utils/GuildRecordUtils.tsx";

const require = arg1;
function canManageResource(arg0, arg1, arg2, arg3) {
  let creator_id = arg0;
  let tmp = null != arg0;
  if (tmp) {
    if (arg2) {
      tmp = tmp3;
    } else {
      let id = arg1;
      let tmp4 = arg3;
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
({ CREATE_GUILD_EVENT_CORE_PERMISSIONS: error, CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: closure_8, CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: c9 } = VIEW_CHANNEL);
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
  }
};
const result = require("set").fileFinishedImporting("modules/permissions/useManageResourcePermissions.tsx");

export const attachChannelPermissions = function attachChannelPermissions(channel) {
  if (null == channel) {
    const items = [, ];
    ({ CREATE_EVENTS: arr2[0], MANAGE_EVENTS: arr2[1] } = Permissions);
    return items;
  } else {
    let tmp = closure_7;
    if (channel.isGuildStageVoice()) {
      tmp = closure_8;
    } else if (channel.isGuildVoice()) {
      tmp = closure_9;
    }
    const items1 = [fromStringAll.combine(tmp, Permissions.CREATE_EVENTS), ];
    const obj = fromStringAll;
    items1[1] = fromStringAll.combine(tmp, Permissions.MANAGE_EVENTS);
    return items1;
  }
};
export const useManageResourcePermissions = function useManageResourcePermissions(channel) {
  const _require = channel;
  let obj = fromGuildPropertiesWithAdditionalFields;
  if (obj.isGuildRecord(channel)) {
    let items = [, ];
    ({ CREATE_EVENTS: arr3[0], MANAGE_EVENTS: arr3[1] } = Permissions);
    let items2 = items;
  } else if (null == channel) {
    const items1 = [, ];
    ({ CREATE_EVENTS: arr2[0], MANAGE_EVENTS: arr2[1] } = Permissions);
    items2 = items1;
  } else {
    let tmp4 = stateFromStores;
    if (channel.isGuildStageVoice()) {
      tmp4 = closure_8;
    } else if (channel.isGuildVoice()) {
      tmp4 = closure_9;
    }
    items2 = [fromStringAll.combine(tmp4, Permissions.CREATE_EVENTS), ];
    const obj2 = fromStringAll;
    items2[1] = fromStringAll.combine(tmp4, Permissions.MANAGE_EVENTS);
    const obj3 = fromStringAll;
  }
  [importAll, dependencyMap] = first(items2, 2);
  let tmpResult = tmp(589);
  const items3 = [closure_5];
  const tmp10 = first(tmpResult.useStateFromStoresArray(items3, () => {
    const items = [closure_5.can(closure_1_10.CREATE_GUILD_EXPRESSIONS, closure_0), closure_5.can(closure_1_10.MANAGE_GUILD_EXPRESSIONS, closure_0), closure_5.can(closure_1, closure_0), closure_5.can(closure_2, closure_0)];
    return items;
  }), 4);
  first = tmp10[0];
  const React = tmp12;
  closure_5 = tmp13;
  closure_6 = tmp14;
  tmpResult = tmp(589);
  const items4 = [closure_6];
  stateFromStores = tmpResult.useStateFromStores(items4, () => currentUser.getCurrentUser());
  const items5 = [first, tmp10[1], stateFromStores];
  const items6 = [tmp10[3], tmp10[2], stateFromStores];
  const callback = React.useCallback((arg0) => closure_1_12(arg0, stateFromStores, closure_4, first), items5);
  if (null == channel) {
    obj = closure_11;
  } else {
    obj = { canCreateExpressions: null, canCreateGuildEvent: null, canManageAllExpressions: null, canManageAllEvents: null, canManageGuildExpression: null, canManageGuildEvent: null };
    obj[0] = first;
    obj[1] = tmp13;
    obj[2] = tmp12;
    obj[3] = tmp14;
    obj[4] = callback;
    obj[5] = tmp17;
  }
  return obj;
};
export const getManageResourcePermissions = function getManageResourcePermissions(guild, c6, closure_7) {
  let obj = c6;
  if (c6 === undefined) {
    obj = closure_5;
  }
  let obj2 = closure_7;
  if (closure_7 === undefined) {
    obj2 = closure_6;
  }
  let _require;
  let canResult1;
  let canResult2;
  let canResult3;
  let currentUser;
  if (obj3.isGuildRecord(guild)) {
    const items = [, ];
    ({ CREATE_EVENTS: arr3[0], MANAGE_EVENTS: arr3[1] } = Permissions);
    let tmp5 = Permissions;
    let items2 = items;
  } else if (null == guild) {
    const items1 = [, ];
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
    items2 = [canResult1(tmp[6]).combine(tmp3, Permissions.CREATE_EVENTS), ];
    const obj4 = canResult1(tmp[6]);
    items2[1] = canResult1(tmp[6]).combine(tmp3, Permissions.MANAGE_EVENTS);
    const obj5 = canResult1(tmp[6]);
  }
  obj3 = _require(canResult2[7]);
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
    obj = { canCreateExpressions: null, canCreateGuildEvent: null, canManageAllExpressions: null, canManageAllEvents: null, canManageGuildExpression: null, canManageGuildEvent: null };
    obj[0] = canResult;
    obj[1] = canResult2;
    obj[2] = canResult1;
    obj[3] = canResult3;
    obj[4] = function canManageGuildExpression(arg0) {
      return closure_1_12(arg0, closure_4, canResult1, c0);
    };
    obj[5] = function canManageGuildEvent(arg0) {
      return closure_1_12(arg0, closure_4, canResult3, canResult2);
    };
  }
  return obj;
};