// discord_app/modules/permissions/useManageResourcePermissions.tsx
import BigFlagUtilsAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import PermissionStore from "../../stores/PermissionStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const require = globalThis.__r;

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
            let id1;
            if (user != null) {
              id1 = user.id;
            }
            tmp6 = id1 === id.id;
          }
          tmp5 = tmp6;
        }
      }
    }
  }
  return tmp;
}
const PermissionsConstants = fn(9170);
({
  CREATE_GUILD_EVENT_CORE_PERMISSIONS: closure_7,
  CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: closure_8,
  CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: closure_9,
} = PermissionsConstants);
const Permissions = fn(1096).Permissions;
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
const ReactCompilerGating = fn(558);
function attachChannelPermissions(channel) {
  if (null == channel) {
    const items = [,];
    ({ CREATE_EVENTS: arr2[0], MANAGE_EVENTS: arr2[1] } = Permissions);
    return items;
  } else {
    let tmp = React5;
    if (channel.isGuildStageVoice()) {
      tmp = closure_1_8;
    } else if (channel.isGuildVoice()) {
      tmp = options;
    }
    const items1 = [BigFlagUtilsAll.combine(tmp, Permissions.CREATE_EVENTS)];
    items1[1] = BigFlagUtilsAll.combine(tmp, Permissions.MANAGE_EVENTS);
    return items1;
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/permissions/useManageResourcePermissions.tsx");

export { attachChannelPermissions };
export const useManageResourcePermissions = ReactCompilerGating.isReactCompilerEnabled()
  ? (isGuildStageVoice) => {
      _require = isGuildStageVoice;
      const cResult = require("c").c(24);
      if (cResult[0] !== isGuildStageVoice) {
        if (tmpResult.isGuildRecord(isGuildStageVoice)) {
          let items = [,];
          ({ CREATE_EVENTS: arr3[0], MANAGE_EVENTS: arr3[1] } = Permissions);
          let items2 = items;
        } else if (null == isGuildStageVoice) {
          const items1 = [,];
          ({ CREATE_EVENTS: arr2[0], MANAGE_EVENTS: arr2[1] } = Permissions);
          items2 = items1;
        } else {
          let tmp5 = stateFromStores;
          if (isGuildStageVoice.isGuildStageVoice()) {
            tmp5 = closure_8;
          } else if (isGuildStageVoice.isGuildVoice()) {
            tmp5 = closure_9;
          }
          items2 = [first(1097).combine(tmp5, Permissions.CREATE_EVENTS)];
          const obj3 = first(1097);
          items2[1] = first(1097).combine(tmp5, Permissions.MANAGE_EVENTS);
          const obj4 = first(1097);
        }
        cResult[0] = isGuildStageVoice;
        cResult[1] = items2;
        tmpResult = tmp(2066);
      } else {
        const tmp12 = first1(cResult[1], 2);
        first = tmp12[0];
        dependencyMap = tmp14;
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const items3 = [closure_5];
          cResult[2] = items3;
          let tmp16 = items3;
        } else {
          tmp16 = cResult[2];
        }
        if (cResult[3] === isGuildStageVoice) {
          if (cResult[4] === first) {
            if (cResult[5] === tmp14) {
              let tmp18 = cResult[6];
            }
            const tmp11Result = tmp11(tmp(504).useStateFromStoresArray(tmp16, tmp18), 4);
            first1 = tmp11Result[0];
            closure_4 = tmp21;
            closure_5 = tmp22;
            UserStore = tmp23;
            const _Symbol2 = Symbol;
            if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
              const items4 = [UserStore];
              class G {
                constructor() {
                  return closure_6.getCurrentUser();
                }
              }
              cResult[7] = items4;
              cResult[8] = G;
              let tmp25 = G;
              let tmp24 = items4;
            } else {
              tmp24 = cResult[7];
              tmp25 = cResult[8];
            }
            const tmpResult3 = tmp(504);
            stateFromStores = tmp(504).useStateFromStores(tmp24, tmp25);
            if (cResult[9] === first1) {
              if (cResult[10] === tmp21) {
                if (cResult[11] === stateFromStores) {
                  let tmp28 = cResult[12];
                }
                if (cResult[13] === tmp22) {
                  if (cResult[14] === tmp23) {
                    if (cResult[15] === stateFromStores) {
                      let tmp29 = cResult[16];
                    }
                    if (null != isGuildStageVoice) {
                      const obj2 = {
                        canCreateExpressions: first1,
                        canCreateGuildEvent: null,
                        canManageAllExpressions: null,
                        canManageAllEvents: null,
                        canManageGuildExpression: null,
                        canManageGuildEvent: null,
                      };
                      class G {
                        constructor() {
                          return closure_6.getCurrentUser();
                        }
                      }
                      obj2.canManageAllExpressions = tmp21;
                      obj2.canManageAllEvents = tmp23;
                      obj2.canManageGuildExpression = tmp28;
                      obj2.canManageGuildEvent = tmp29;
                      cResult[17] = tmp22;
                      cResult[18] = first1;
                      cResult[19] = tmp23;
                      cResult[20] = tmp21;
                      cResult[21] = tmp29;
                      class V {
                        constructor(arg0) {
                          return canManageResource(isGuildStageVoice, closure_7, closure_4, closure_3);
                        }
                      }
                      cResult[23] = obj2;
                    }
                    class G {
                      constructor() {
                        return closure_6.getCurrentUser();
                      }
                    }
                  }
                }
                const fn2 = function x(arg0) {
                  return canManageResource(arg0, stateFromStores, closure_6, closure_5);
                };
                class G {
                  constructor() {
                    return closure_6.getCurrentUser();
                  }
                }
                cResult[13] = tmp22;
                cResult[14] = tmp23;
                cResult[15] = stateFromStores;
                cResult[16] = fn2;
                tmp29 = fn2;
              }
            }
            class V {
              constructor(arg0) {
                return canManageResource(isGuildStageVoice, closure_7, closure_4, closure_3);
              }
            }
            cResult[9] = first1;
            cResult[10] = tmp11Result[1];
            cResult[11] = stateFromStores;
            cResult[12] = V;
            tmp28 = V;
            const tmpResult4 = tmp(504);
          }
        }
        const fn = function u() {
          const items = [
            PermissionStore.can(Permissions.CREATE_GUILD_EXPRESSIONS, closure_0),
            PermissionStore.can(Permissions.MANAGE_GUILD_EXPRESSIONS, closure_0),
            PermissionStore.can(first, closure_0),
            PermissionStore.can(closure_2, closure_0),
          ];
          return items;
        };
        cResult[3] = isGuildStageVoice;
        cResult[4] = first;
        cResult[6] = fn;
        tmp18 = fn;
        tmp11 = first1;
      }
      const obj = require("c");
    }
  : (isGuildStageVoice) => {
      _require = isGuildStageVoice;
      if (obj.isGuildRecord(isGuildStageVoice)) {
        let items = [,];
        ({ CREATE_EVENTS: arr3[0], MANAGE_EVENTS: arr3[1] } = Permissions);
        let items2 = items;
      } else if (null == isGuildStageVoice) {
        const items1 = [,];
        ({ CREATE_EVENTS: arr2[0], MANAGE_EVENTS: arr2[1] } = Permissions);
        items2 = items1;
      } else {
        let tmp4 = stateFromStores;
        if (isGuildStageVoice.isGuildStageVoice()) {
          tmp4 = closure_8;
        } else if (isGuildStageVoice.isGuildVoice()) {
          tmp4 = closure_9;
        }
        items2 = [BigFlagUtilsAll.combine(tmp4, Permissions.CREATE_EVENTS)];
        items2[1] = BigFlagUtilsAll.combine(tmp4, Permissions.MANAGE_EVENTS);
      }
      obj = require("GuildRecordUtils");
      [importAll, dependencyMap] = canCreateExpressions(items2, 2);
      const tmp9 = canCreateExpressions(items2, 2);
      const items3 = [closure_5];
      const tmp10 = canCreateExpressions(
        require("initialize").useStateFromStoresArray(items3, () => {
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
      const tmpResult = require("initialize");
      const items4 = [currentUser];
      stateFromStores = require("initialize").useStateFromStores(items4, () => currentUser.getCurrentUser());
      const items5 = [canCreateExpressions, tmp10[1], stateFromStores];
      const items6 = [tmp10[3], tmp10[2], stateFromStores];
      const callback = noop.useCallback((arg0) => canManageResource(arg0, stateFromStores, closure_4, first), items5);
      if (null == isGuildStageVoice) {
        let obj4 = closure_11;
      } else {
        obj4 = {
          canCreateExpressions,
          canCreateGuildEvent: tmp13,
          canManageAllExpressions: tmp12,
          canManageAllEvents: tmp14,
          canManageGuildExpression: callback,
          canManageGuildEvent: tmp17,
        };
      }
      return obj4;
    };
export const getManageResourcePermissions = function getManageResourcePermissions(guild) {
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
    let obj6 = closure_11;
  } else {
    obj6 = {
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
  return obj6;
};
