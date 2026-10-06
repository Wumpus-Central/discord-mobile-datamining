// === Module 9204: useManageResourcePermissions ===

// Module 9204 (useManageResourcePermissions)
import Constants from "Constants" /* 1096 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import UserStore_mod from "UserStore" /* 1377 */;
import PermissionsConstants from "PermissionsConstants" /* 9205 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_5, dependencyMap;

let c9;
let metroImportAll;
let metroImportDefault;
function canManageResource(creator_id, stateFromStores, canResult1, c0) {
  let tmp = null != creator_id;
  if (tmp) {
    let tmp3 = canResult1;
    if (!tmp3) {
      let tmp6;
      let tmp5 = c0;
      if ("creator_id" in creator_id) {
        if (tmp5) {
          tmp5 = null != stateFromStores;
        }
        if (tmp5) {
          tmp5 = creator_id.creator_id === stateFromStores.id;
        }
        tmp6 = tmp5;
      } else if ("userId" in creator_id) {
        tmp6 = tmp5 && null != stateFromStores && creator_id.userId === stateFromStores.id;
      } else {
        tmp6 = "user" in creator_id;
        if (tmp6) {
          let tmp7 = tmp5 && null != stateFromStores;
          if (tmp7) {
            const user = creator_id.user;
            let id;
            if (user != null) {
              id = user.id;
            }
            tmp7 = id === stateFromStores.id;
          }
          tmp6 = tmp7;
        }
      }
      tmp3 = tmp6;
    }
    tmp = tmp3;
  }
  return tmp;
}
let react = react_mod;
let UserStore = UserStore_mod;
({ CREATE_GUILD_EVENT_CORE_PERMISSIONS: metroImportDefault, CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: metroImportAll, CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: c9 } = PermissionsConstants);
const Permissions = Constants.Permissions;
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
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((isGuildStageVoice) => {
  let closure_2;
  let currentUser;
  let first;
  let first1;
  let stateFromStores;
  let tmp15;
  let tmp4;
  _require = isGuildStageVoice;
  const obj = require("react");
  const cResult = obj.c(24);
  if (cResult[0] !== isGuildStageVoice) {
    let items2;
    const tmpResult = require("GuildRecordUtils");
    if (tmpResult.isGuildRecord(isGuildStageVoice)) {
      let items = [, ];
      ({ CREATE_EVENTS: arr3[0], MANAGE_EVENTS: arr3[1] } = Permissions);
      items2 = items;
    } else if (null == isGuildStageVoice) {
      const items1 = [, ];
      ({ CREATE_EVENTS: arr2[0], MANAGE_EVENTS: arr2[1] } = Permissions);
      items2 = items1;
    } else {
      let tmp6 = stateFromStores;
      if (isGuildStageVoice.isGuildStageVoice()) {
        tmp6 = closure_8;
      } else if (isGuildStageVoice.isGuildVoice()) {
        tmp6 = closure_9;
      }
      items2 = [, ];
      const obj3 = first(1097);
      items2[0] = obj3.combine(tmp6, Permissions.CREATE_EVENTS);
      const obj4 = first(1097);
      items2[1] = obj4.combine(tmp6, Permissions.MANAGE_EVENTS);
    }
    cResult[0] = isGuildStageVoice;
    cResult[1] = items2;
    tmp4 = items2;
  } else {
    tmp4 = cResult[1];
  }
  const tmp12 = first1(tmp4, 2);
  first = tmp12[0];
  dependencyMap = tmp14;
  const tmp11 = first1;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [closure_5];
    cResult[2] = items3;
    tmp15 = items3;
  } else {
    tmp15 = cResult[2];
  }
  if (cResult[3] === isGuildStageVoice) {
    if (cResult[4] === first) {
      let tmp17;
      let tmp24;
      let tmp23;
      if (cResult[5] === tmp12[1]) {
        tmp17 = cResult[6];
      }
      const tmpResult3 = require("get initialized");
      const tmp11Result = tmp11(tmpResult3.useStateFromStoresArray(tmp15, tmp17), 4);
      first1 = tmp11Result[0];
      let closure_4 = tmp20;
      closure_5 = tmp21;
      UserStore = tmp22;
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items4 = [UserStore];
        class G {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
        cResult[7] = items4;
        cResult[8] = G;
        tmp24 = G;
        tmp23 = items4;
      } else {
        tmp23 = cResult[7];
        tmp24 = cResult[8];
      }
      const tmpResult4 = require("get initialized");
      stateFromStores = tmpResult4.useStateFromStores(tmp23, tmp24);
      if (cResult[9] === first1) {
        if (cResult[10] === tmp11Result[1]) {
          let tmp27;
          if (cResult[11] === stateFromStores) {
            tmp27 = cResult[12];
          }
          if (cResult[13] === tmp11Result[2]) {
            if (cResult[14] === tmp11Result[3]) {
              let tmp28;
              if (cResult[15] === stateFromStores) {
                tmp28 = cResult[16];
              }
              if (null != isGuildStageVoice) {
                const obj2 = { canCreateExpressions: first1, canCreateGuildEvent: null, canManageAllExpressions: tmp11Result[1], canManageAllEvents: tmp11Result[3], canManageGuildExpression: tmp27, canManageGuildEvent: tmp28 };
                class G {
                  constructor() {
                    return currentUser.getCurrentUser();
                  }
                }
                cResult[17] = tmp11Result[2];
                cResult[18] = first1;
                cResult[19] = tmp11Result[3];
                cResult[20] = tmp11Result[1];
                cResult[21] = tmp28;
                class V {
                  constructor(creator_id) {
                    return canManageResource(creator_id, stateFromStores, closure_4, first1);
                  }
                }
                cResult[23] = obj2;
              }
              class G {
                constructor() {
                  return currentUser.getCurrentUser();
                }
              }
            }
          }
          const fn2 = function x(creator_id) {
            return canManageResource(creator_id, stateFromStores, currentUser, closure_5);
          };
          class G {
            constructor() {
              return currentUser.getCurrentUser();
            }
          }
          cResult[13] = tmp11Result[2];
          cResult[14] = tmp11Result[3];
          cResult[15] = stateFromStores;
          cResult[16] = fn2;
          tmp28 = fn2;
        }
      }
      class V {
        constructor(creator_id) {
          return canManageResource(creator_id, stateFromStores, closure_4, first1);
        }
      }
      cResult[9] = first1;
      cResult[10] = tmp11Result[1];
      cResult[11] = stateFromStores;
      cResult[12] = V;
      tmp27 = V;
    }
  }
  const fn = function u() {
    const items = [PermissionStore.can(Permissions.CREATE_GUILD_EXPRESSIONS, isGuildStageVoice), PermissionStore.can(Permissions.MANAGE_GUILD_EXPRESSIONS, isGuildStageVoice), PermissionStore.can(first, isGuildStageVoice), PermissionStore.can(closure_2, isGuildStageVoice)];
    return items;
  };
  cResult[3] = isGuildStageVoice;
  cResult[4] = first;
  cResult[5] = tmp12[1];
  cResult[6] = fn;
  tmp17 = fn;
}) : ((isGuildStageVoice) => {
  let canCreateExpressions;
  let closure_4;
  let items2;
  let obj4;
  let stateFromStores;
  _require = isGuildStageVoice;
  const obj = require("GuildRecordUtils");
  if (obj.isGuildRecord(isGuildStageVoice)) {
    let items = [, ];
    ({ CREATE_EVENTS: arr3[0], MANAGE_EVENTS: arr3[1] } = Permissions);
    items2 = items;
  } else if (null == isGuildStageVoice) {
    const items1 = [, ];
    ({ CREATE_EVENTS: arr2[0], MANAGE_EVENTS: arr2[1] } = Permissions);
    items2 = items1;
  } else {
    let tmp4 = stateFromStores;
    if (isGuildStageVoice.isGuildStageVoice()) {
      tmp4 = closure_8;
    } else if (isGuildStageVoice.isGuildVoice()) {
      tmp4 = closure_9;
    }
    items2 = [, ];
    const obj2 = BigFlagUtilsAll;
    items2[0] = obj2.combine(tmp4, Permissions.CREATE_EVENTS);
    const obj3 = BigFlagUtilsAll;
    items2[1] = obj3.combine(tmp4, Permissions.MANAGE_EVENTS);
  }
  [importAll, dependencyMap] = canCreateExpressions(items2, 2);
  canCreateExpressions(items2, 2);
  const items3 = [closure_5];
  const tmpResult = require("get initialized");
  const tmp10 = canCreateExpressions(tmpResult.useStateFromStoresArray(items3, () => {
    const items = [PermissionStore.can(Permissions.CREATE_GUILD_EXPRESSIONS, isGuildStageVoice), PermissionStore.can(Permissions.MANAGE_GUILD_EXPRESSIONS, isGuildStageVoice), PermissionStore.can(importAll, isGuildStageVoice), PermissionStore.can(dependencyMap, isGuildStageVoice)];
    return items;
  }), 4);
  canCreateExpressions = tmp10[0];
  react = tmp12;
  closure_5 = tmp13;
  const currentUser = tmp14;
  const items4 = [currentUser];
  const tmpResult2 = require("get initialized");
  stateFromStores = tmpResult2.useStateFromStores(items4, () => currentUser.getCurrentUser());
  const items5 = [canCreateExpressions, tmp10[1], stateFromStores];
  const items6 = [tmp10[3], tmp10[2], stateFromStores];
  const callback = react.useCallback((creator_id) => canManageResource(creator_id, stateFromStores, closure_4, first), items5);
  if (null == isGuildStageVoice) {
    obj4 = closure_11;
  } else {
    obj4 = { canCreateExpressions, canCreateGuildEvent: tmp10[2], canManageAllExpressions: tmp10[1], canManageAllEvents: tmp10[3], canManageGuildExpression: callback, canManageGuildEvent: tmp17 };
  }
  return obj4;
});
function attachChannelPermissions(channel) {
  if (null == channel) {
    const items = [, ];
    ({ CREATE_EVENTS: arr2[0], MANAGE_EVENTS: arr2[1] } = Permissions);
    return items;
  } else {
    let tmp = metroImportDefault;
    if (channel.isGuildStageVoice()) {
      tmp = metroImportAll;
    } else if (channel.isGuildVoice()) {
      tmp = React4;
    }
    const items1 = [, ];
    const obj = BigFlagUtilsAll;
    items1[0] = obj.combine(tmp, Permissions.CREATE_EVENTS);
    const obj2 = BigFlagUtilsAll;
    items1[1] = obj2.combine(tmp, Permissions.MANAGE_EVENTS);
    return items1;
  }
}
const result = size.fileFinishedImporting("modules/permissions/useManageResourcePermissions.tsx");

export { attachChannelPermissions };
export const useManageResourcePermissions = tmp3;
export const getManageResourcePermissions = function getManageResourcePermissions(guild) {
  let c0;
  let closure_4;
  let items2;
  let obj6;
  let tmp10;
  let tmp5;
  let tmp9;
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
  const obj3 = require("GuildRecordUtils");
  if (obj3.isGuildRecord(guild)) {
    const items = [, ];
    ({ CREATE_EVENTS: arr3[0], MANAGE_EVENTS: arr3[1] } = Permissions);
    tmp5 = Permissions;
    items2 = items;
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
    items2 = [, ];
    const obj4 = canResult1(canResult2[6]);
    items2[0] = obj4.combine(tmp3, Permissions.CREATE_EVENTS);
    const obj5 = canResult1(canResult2[6]);
    items2[1] = obj5.combine(tmp3, Permissions.MANAGE_EVENTS);
  }
  [tmp9, tmp10] = canResult3(items2, 2);
  canResult3(items2, 2);
  const canResult = obj.can(tmp5.CREATE_GUILD_EXPRESSIONS, guild);
  _require = canResult;
  canResult1 = obj.can(tmp5.MANAGE_GUILD_EXPRESSIONS, guild);
  canResult2 = obj.can(tmp9, guild);
  canResult3 = obj.can(tmp10, guild);
  currentUser = obj2.getCurrentUser();
  if (null == guild) {
    obj6 = closure_11;
  } else {
    obj6 = {
      canCreateExpressions: canResult,
      canCreateGuildEvent: canResult2,
      canManageAllExpressions: canResult1,
      canManageAllEvents: canResult3,
      canManageGuildExpression(creator_id) {
          return canManageResource(creator_id, closure_4, canResult1, c0);
        },
      canManageGuildEvent(creator_id) {
          return canManageResource(creator_id, closure_4, canResult3, canResult2);
        }
    };
  }
  return obj6;
};