// === Module 12578: GuildAntiRaidHooks ===

// Module 12578 (GuildAntiRaidHooks)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import PermissionUtilsAll from "PermissionUtils" /* 4755 */;
import GuildAntiRaidUtils from "GuildAntiRaidUtils" /* 8043 */;
import GuildAntiRaidPermissionsUtils from "GuildAntiRaidPermissionsUtils" /* 12579 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1244 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4939 */;
import UserStore from "UserStore" /* 1390 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 10694 */;

const require = globalThis.__r;

require = fn;
function getFirstGuildIncidentId(guildId) {
  const currentUser = UserStore.getCurrentUser();
  const incidentsByGuild = GuildIncidentsStore.getIncidentsByGuild();
  const keys = SnowflakeUtilsDefault.keys(incidentsByGuild);
  const mapped = keys.map((item) => guild.getGuild(item));
  const iter = mapped[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult;
    if (null != nextResult) {
      let tmp17 = incidentsByGuild[tmp5.id];
      let tmp18 = tmp17;
      if (null != tmp17) {
        let obj7 = GuildAntiRaidUtils;
        if (obj7.hasDetectedActivity(tmp18)) {
          let tmp19Result = GuildAntiRaidUtils;
          if (!tmp19Result.isUnderLockdown(tmp18)) {
            let obj4 = BigFlagUtilsAll;
            let obj5 = PermissionUtilsAll;
            let obj2 = { user: currentUser, context: null, checkElevated: false };
            obj2.context = tmp5;
            if (obj4.hasAny(obj5.computePermissions(obj2), closure_10)) {
              iter.return();
              return nextResult.id;
            }
          }
        } else {
          let tmp19Result2 = GuildAntiRaidUtils;
        }
      }
    }
    continue;
  }
  return null;
}
let closure_10 = fn(8044).IncidentAlertModeratorPermissions;
const Constants = fn(1085);
({ EMPTY_STRING_SNOWFLAKE_ID: closure_11, GuildFeatures: closure_12 } = Constants);
fn(558);
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFirstGuildIncidentId() {
  const cResult = stateFromStores1(576).c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function l() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const obj = stateFromStores1(576);
  const stateFromStores = stateFromStores1(573).useStateFromStores(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildIncidentsStore];
    class S {
      constructor() {
        return closure_1_9.getIncidentsByGuild();
      }
    }
    cResult[2] = items1;
    cResult[3] = S;
    let tmp11 = S;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  const tmp2Result = stateFromStores1(573);
  stateFromStores1 = stateFromStores1(573).useStateFromStores(tmp10, tmp11);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildStore];
    class S {
      constructor() {
        return closure_1_9.getIncidentsByGuild();
      }
    }
    cResult[4] = items2;
    let tmp14 = items2;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] !== stateFromStores1) {
    const fn2 = function b() {
      const keys = SnowflakeUtilsDefault.keys(stateFromStores1);
      return keys.map((item) => guild.getGuild(item));
    };
    cResult[5] = stateFromStores1;
    class S {
      constructor() {
        return closure_1_9.getIncidentsByGuild();
      }
    }
    cResult[6] = fn2;
    let tmp16 = fn2;
  } else {
    tmp16 = cResult[6];
  }
  const tmp2Result3 = stateFromStores1(573);
  const stateFromStoresArray = stateFromStores1(573).useStateFromStoresArray(tmp14, tmp16);
  if (cResult[7] === stateFromStores) {
    if (cResult[8] === stateFromStoresArray) {
      if (cResult[9] === stateFromStores1) {
        const _Symbol = Symbol;
        class S {
          constructor() {
            return closure_1_9.getIncidentsByGuild();
          }
        }
        let tmp23 = null;
        if (cResult[10] !== Symbol.for("react.early_return_sentinel")) {
          tmp23 = tmp18;
        }
        return tmp23;
      }
    }
  }
  Symbol.for("react.early_return_sentinel");
  const iter = stateFromStoresArray[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if (null != nextResult) {
      class S {
        constructor() {
          return closure_1_9.getIncidentsByGuild();
        }
      }
    }
    continue;
  }
  const tmp2Result4 = stateFromStores1(573);
}) : (function useFirstGuildIncidentId() {
  const items = [UserStore];
  const stateFromStores = stateFromStores1(573).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = stateFromStores1(573);
  const items1 = [GuildIncidentsStore];
  stateFromStores1 = stateFromStores1(573).useStateFromStores(items1, () => incidentsByGuild.getIncidentsByGuild());
  const obj2 = stateFromStores1(573);
  const items2 = [GuildStore];
  const stateFromStoresArray = stateFromStores1(573).useStateFromStoresArray(items2, () => {
    const keys = SnowflakeUtilsDefault.keys(stateFromStores1);
    return keys.map((item) => guild.getGuild(item));
  });
  const iter = stateFromStoresArray[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult;
    if (null != nextResult) {
      let tmp15 = stateFromStores1[tmp5.id];
      let tmp16 = tmp15;
      if (null != tmp15) {
        let tmp18 = stateFromStores1;
        let obj8 = stateFromStores1(8043);
        if (obj8.hasDetectedActivity(tmp16)) {
          let obj5 = BigFlagUtilsAll;
          let obj6 = PermissionUtilsAll;
          let obj4 = { user: stateFromStores, context: null, checkElevated: false };
          obj4.context = tmp5;
          if (obj5.hasAny(obj6.computePermissions(obj4), closure_10)) {
            iter.return();
            return nextResult.id;
          }
        } else {
          let tmp18Result = tmp18(8043);
        }
      }
    }
    continue;
  }
  return null;
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildIncidentsState(arg0) {
  _require = arg0;
  const cResult = require("c").c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      guild = GuildStore.getGuild(closure_0);
      if (null == guild) {
        return false;
      } else {
        const guildPermissions = PermissionStore.getGuildPermissions(guild);
        let hasAnyResult = null != guildPermissions;
        if (hasAnyResult) {
          hasAnyResult = BigFlagUtilsAll.hasAny(guildPermissions, closure_10);
        }
        return hasAnyResult;
      }
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = require("c");
  const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildIncidentsStore];
    cResult[3] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn2 = function v() {
      let guildIncident = null;
      if (null != closure_0) {
        guildIncident = GuildIncidentsStore.getGuildIncident(tmp);
      }
      return guildIncident;
    };
    cResult[4] = arg0;
    cResult[5] = fn2;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[5];
  }
  const tmpResult = require("useStateFromStores");
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(tmp9, tmp11);
  if (cResult[6] !== stateFromStores1) {
    let isUnderLockdownResult = null != stateFromStores1;
    if (isUnderLockdownResult) {
      isUnderLockdownResult = tmp(8043).isUnderLockdown(stateFromStores1);
      const tmpResult4 = tmp(8043);
    }
    cResult[6] = stateFromStores1;
    cResult[7] = isUnderLockdownResult;
    let tmp13 = isUnderLockdownResult;
  } else {
    tmp13 = cResult[7];
  }
  if (cResult[8] === stateFromStores) {
    if (cResult[9] === stateFromStores1) {
      if (cResult[10] === tmp13) {
        let tmp16 = cResult[11];
      }
      return tmp16;
    }
  }
  const obj2 = { shouldShowIncidentActions: stateFromStores, incidentData: stateFromStores1, isUnderLockdown: tmp13 };
  cResult[8] = stateFromStores;
  cResult[9] = stateFromStores1;
  cResult[10] = tmp13;
  cResult[11] = obj2;
  tmp16 = obj2;
  const tmpResult3 = require("useStateFromStores");
}) : (function useGuildIncidentsState(arg0) {
  _require = arg0;
  const items = [GuildStore, PermissionStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
    guild = GuildStore.getGuild(closure_0);
    if (null == guild) {
      return false;
    } else {
      const guildPermissions = PermissionStore.getGuildPermissions(guild);
      let hasAnyResult = null != guildPermissions;
      if (hasAnyResult) {
        hasAnyResult = BigFlagUtilsAll.hasAny(guildPermissions, closure_10);
      }
      return hasAnyResult;
    }
  });
  let obj = require("useStateFromStores");
  const tmp = _require;
  const items1 = [GuildIncidentsStore];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () => {
    let guildIncident = null;
    if (null != closure_0) {
      guildIncident = GuildIncidentsStore.getGuildIncident(tmp);
    }
    return guildIncident;
  });
  const obj3 = { shouldShowIncidentActions: stateFromStores, incidentData: stateFromStores1, isUnderLockdown: null };
  let isUnderLockdownResult = null != stateFromStores1;
  if (isUnderLockdownResult) {
    isUnderLockdownResult = tmp(8043).isUnderLockdown(stateFromStores1);
    const tmpResult = tmp(8043);
  }
  obj3.isUnderLockdown = isUnderLockdownResult;
  return obj3;
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDisabledActions(id) {
  const cResult = id(576).c(13);
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  if (id == null) {
    id = closure_11;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildIncidentsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id) {
    const fn = function l() {
      return GuildIncidentsStore.getGuildIncident(id);
    };
    const items1 = [id];
    cResult[1] = id;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = id(576);
  const stateFromStores = id(573).useStateFromStores(first, tmp7, tmp8);
  if (null == id) {
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { dmsDisabled: false, invitesDisabled: false };
      cResult[4] = obj2;
      let tmp37 = obj2;
    } else {
      tmp37 = cResult[4];
    }
    return tmp37;
  } else {
    let features1;
    if (id != null) {
      features1 = id.features;
    }
    if (cResult[5] === features1) {
      if (cResult[6] === stateFromStores) {
        let tmp11 = cResult[7];
      }
      if (cResult[8] !== stateFromStores) {
        let dmsDisabledUntil;
        if (stateFromStores != null) {
          dmsDisabledUntil = stateFromStores.dmsDisabledUntil;
        }
        let tmp27 = null != dmsDisabledUntil;
        if (tmp27) {
          const _Date3 = Date;
          const date = new Date(stateFromStores.dmsDisabledUntil);
          const _Date4 = Date;
          const date1 = new Date();
          tmp27 = date > date1;
        }
        cResult[8] = stateFromStores;
        cResult[9] = tmp27;
        let tmp25 = tmp27;
      } else {
        tmp25 = cResult[9];
      }
      if (cResult[10] === tmp25) {
        if (cResult[11] === tmp11) {
          let tmp36 = cResult[12];
        }
        return tmp36;
      }
      const obj3 = { invitesDisabled: tmp11, dmsDisabled: tmp25 };
      cResult[10] = tmp25;
      cResult[11] = tmp11;
      cResult[12] = obj3;
      tmp36 = obj3;
    }
    let hasItem;
    if (id != null) {
      const features = id.features;
      hasItem = features.has(constants.INVITES_DISABLED);
    }
    if (!hasItem) {
      let invitesDisabledUntil;
      if (stateFromStores != null) {
        invitesDisabledUntil = stateFromStores.invitesDisabledUntil;
      }
      let tmp15 = null != invitesDisabledUntil;
      if (tmp15) {
        const _Date = Date;
        const date2 = new Date(stateFromStores.invitesDisabledUntil);
        const _Date2 = Date;
        const date3 = new Date();
        tmp15 = date2 > date3;
      }
      hasItem = tmp15;
    }
    let features2;
    if (id != null) {
      features2 = id.features;
    }
    cResult[5] = features2;
    cResult[6] = stateFromStores;
    cResult[7] = hasItem;
    tmp11 = hasItem;
  }
  const tmpResult = id(573);
}) : (function useDisabledActions(id) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  if (id == null) {
    id = closure_11;
  }
  const items = [GuildIncidentsStore];
  const items1 = [id];
  const stateFromStores = id(573).useStateFromStores(items, () => GuildIncidentsStore.getGuildIncident(id), items1);
  if (null == id) {
    let obj2 = { dmsDisabled: false, invitesDisabled: false };
  } else {
    let hasItem;
    if (id != null) {
      const features = id.features;
      hasItem = features.has(constants.INVITES_DISABLED);
    }
    if (!hasItem) {
      let invitesDisabledUntil;
      if (stateFromStores != null) {
        invitesDisabledUntil = stateFromStores.invitesDisabledUntil;
      }
      let tmp6 = null != invitesDisabledUntil;
      if (tmp6) {
        const _Date = Date;
        const date = new Date(stateFromStores.invitesDisabledUntil);
        const _Date2 = Date;
        const date1 = new Date();
        tmp6 = date > date1;
      }
      hasItem = tmp6;
    }
    obj2 = { invitesDisabled: hasItem, dmsDisabled: null };
    let dmsDisabledUntil;
    if (stateFromStores != null) {
      dmsDisabledUntil = stateFromStores.dmsDisabledUntil;
    }
    let tmp17 = null != dmsDisabledUntil;
    if (tmp17) {
      const _Date3 = Date;
      const date2 = new Date(stateFromStores.dmsDisabledUntil);
      const _Date4 = Date;
      const date3 = new Date();
      tmp17 = date2 > date3;
    }
    obj2.dmsDisabled = tmp17;
  }
  return obj2;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidHooks.tsx");

export const useFirstGuildIncidentId = tmp3;
export const useGuildIncidentsState = tmp4;
export const shouldShowRaidNotificationNagbar = function shouldShowRaidNotificationNagbar() {
  const guildId = getFirstGuildIncidentId(SelectedGuildStore.getGuildId());
  let guildsProto = UserSettingsProtoStore.getGuildsProto();
  if (guildsProto == null) {
    guildsProto = {};
  }
  let tmp2 = null;
  if (null != guildId) {
    tmp2 = guildsProto[guildId];
  }
  const show = null != guildId && !(null != tmp2 && tmp2.disableRaidAlertNag);
  return { show, guildId };
};
export const shouldShowRaidInAppNotification = function shouldShowRaidInAppNotification() {
  const guildId = getFirstGuildIncidentId(SelectedGuildStore.getGuildId());
  let guildsProto = UserSettingsProtoStore.getGuildsProto();
  if (guildsProto == null) {
    guildsProto = {};
  }
  let tmp2 = null;
  if (null != guildId) {
    tmp2 = guildsProto[guildId];
  }
  let guildIncident = null;
  if (null != guildId) {
    guildIncident = GuildIncidentsStore.getGuildIncident(guildId);
  }
  let isUnderLockdownResult = null != guildIncident;
  if (isUnderLockdownResult) {
    isUnderLockdownResult = GuildAntiRaidUtils.isUnderLockdown(guildIncident);
  }
  const show = null != guildId && !isUnderLockdownResult && !(null != tmp2 && tmp2.disableRaidAlertNag);
  return { show, guildId };
};
export const getDisabledActions = function getDisabledActions(id) {
  if (null == id) {
    return { dmsDisabled: false, invitesDisabled: false };
  } else {
    const guildIncident = GuildIncidentsStore.getGuildIncident(id.id);
    let hasItem;
    if (id != null) {
      const features = id.features;
      hasItem = features.has(constants.INVITES_DISABLED);
    }
    if (!hasItem) {
      let invitesDisabledUntil;
      if (guildIncident != null) {
        invitesDisabledUntil = guildIncident.invitesDisabledUntil;
      }
      let tmp4 = null != invitesDisabledUntil;
      if (tmp4) {
        const _Date = Date;
        const date = new Date(guildIncident.invitesDisabledUntil);
        const _Date2 = Date;
        const date1 = new Date();
        tmp4 = date > date1;
      }
      hasItem = tmp4;
    }
    const obj = { invitesDisabled: hasItem, dmsDisabled: null };
    let dmsDisabledUntil;
    if (guildIncident != null) {
      dmsDisabledUntil = guildIncident.dmsDisabledUntil;
    }
    let tmp15 = null != dmsDisabledUntil;
    if (tmp15) {
      const _Date3 = Date;
      const date2 = new Date(guildIncident.dmsDisabledUntil);
      const _Date4 = Date;
      const date3 = new Date();
      tmp15 = date2 > date3;
    }
    obj.dmsDisabled = tmp15;
    return obj;
  }
};
export const useDisabledActions = tmp5;
export const useShowAntiRaidInGuildNotifSettings = ReactCompilerGating.isReactCompilerEnabled() ? (function useShowAntiRaidInGuildNotifSettings(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore, GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      guild = GuildStore.getGuild(closure_0);
      return GuildAntiRaidPermissionsUtils.canReportRaid(guild, PermissionStore);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = require("c");
  return require("useStateFromStores").useStateFromStores(first, tmp7);
}) : (function useShowAntiRaidInGuildNotifSettings(arg0) {
  _require = arg0;
  const items = [PermissionStore, GuildStore];
  return require("useStateFromStores").useStateFromStores(items, () => {
    guild = GuildStore.getGuild(closure_0);
    return GuildAntiRaidPermissionsUtils.canReportRaid(guild, PermissionStore);
  });
});