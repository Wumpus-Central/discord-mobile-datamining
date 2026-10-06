// discord_app/modules/guild_antiraid/GuildAntiRaidHooks.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import BigFlagUtilsAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import PermissionUtilsAll from "../../utils/PermissionUtils.tsx";
import GuildAntiRaidUtils from "GuildAntiRaidUtils.tsx";
import GuildAntiRaidConstants from "GuildAntiRaidConstants.tsx";
import GuildAntiRaidPermissionsUtils from "GuildAntiRaidPermissionsUtils.tsx";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import GuildIncidentsStore from "GuildIncidentsStore.tsx";
import Constants from "../../Constants.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let closure_12;
let unpackModuleId;
function getFirstGuildIncidentId(guildId) {
  let guild;
  const currentUser = UserStore.getCurrentUser();
  const incidentsByGuild = GuildIncidentsStore.getIncidentsByGuild();
  const obj = SnowflakeUtilsDefault;
  const keys = obj.keys(incidentsByGuild);
  const mapped = keys.map((item) => guild.getGuild(item));
  const iter = mapped[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult;
    if (null != nextResult) {
      let tmp18 = incidentsByGuild[tmp5.id];
      let tmp19 = tmp18;
      if (null != tmp18) {
        let obj6 = GuildAntiRaidUtils;
        if (obj6.hasDetectedActivity(tmp19)) {
          let tmp20Result = GuildAntiRaidUtils;
          if (!tmp20Result.isUnderLockdown(tmp19)) {
            let tmp13 = BigFlagUtilsAll;
            let hasAny = tmp13.hasAny;
            let obj4 = PermissionUtilsAll;
            let obj2 = { user: currentUser, context: tmp5, checkElevated: false };
            if (hasAny(obj4.computePermissions(obj2), closure_10)) {
              let id = nextResult.id;
              iter.return();
              return id;
            }
          }
        } else {
          let tmp20Result2 = GuildAntiRaidUtils;
        }
      }
    }
    continue;
  }
  return null;
}
let closure_10 = GuildAntiRaidConstants.IncidentAlertModeratorPermissions;
({ EMPTY_STRING_SNOWFLAKE_ID: unpackModuleId, GuildFeatures: closure_12 } = Constants);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let currentUser;
      let incidentsByGuild;
      let stateFromStores1;
      let tmp10;
      let tmp11;
      let tmp14;
      let tmp16;
      let tmp6;
      let tmp7;
      let obj = stateFromStores1(576);
      const cResult = obj.c(11);
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
      const tmp2Result = stateFromStores1(573);
      const stateFromStores = tmp2Result.useStateFromStores(tmp6, tmp7);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildIncidentsStore];
        class S {
          constructor() {
            return incidentsByGuild.getIncidentsByGuild();
          }
        }
        cResult[2] = items1;
        cResult[3] = S;
        tmp11 = S;
        tmp10 = items1;
      } else {
        tmp10 = cResult[2];
        tmp11 = cResult[3];
      }
      const tmp2Result3 = stateFromStores1(573);
      stateFromStores1 = tmp2Result3.useStateFromStores(tmp10, tmp11);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [GuildStore];
        class S {
          constructor() {
            return incidentsByGuild.getIncidentsByGuild();
          }
        }
        cResult[4] = items2;
        tmp14 = items2;
      } else {
        tmp14 = cResult[4];
      }
      if (cResult[5] !== stateFromStores1) {
        const fn2 = function b() {
          let guild;
          const obj = SnowflakeUtilsDefault;
          const keys = obj.keys(stateFromStores1);
          return keys.map((item) => guild.getGuild(item));
        };
        cResult[5] = stateFromStores1;
        class S {
          constructor() {
            return incidentsByGuild.getIncidentsByGuild();
          }
        }
        cResult[6] = fn2;
        tmp16 = fn2;
      } else {
        tmp16 = cResult[6];
      }
      const tmp2Result4 = stateFromStores1(573);
      const stateFromStoresArray = tmp2Result4.useStateFromStoresArray(tmp14, tmp16);
      if (cResult[7] === stateFromStores) {
        if (cResult[8] === stateFromStoresArray) {
          let forResult;
          if (cResult[9] === stateFromStores1) {
            forResult = cResult[10];
          }
          const _Symbol = Symbol;
          class S {
            constructor() {
              return incidentsByGuild.getIncidentsByGuild();
            }
          }
          let tmp22 = null;
          if (forResult !== Symbol.for("react.early_return_sentinel")) {
            tmp22 = forResult;
          }
          return tmp22;
        }
      }
      forResult = Symbol.for("react.early_return_sentinel");
      const iter = stateFromStoresArray[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (null != nextResult) {
          class S {
            constructor() {
              return incidentsByGuild.getIncidentsByGuild();
            }
          }
        }
        continue;
      }
    }
  : () => {
      let currentUser;
      let incidentsByGuild;
      let stateFromStores1;
      let obj = stateFromStores1(573);
      const items = [UserStore];
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      const items1 = [GuildIncidentsStore];
      const obj2 = stateFromStores1(573);
      stateFromStores1 = obj2.useStateFromStores(items1, () => incidentsByGuild.getIncidentsByGuild());
      const items2 = [GuildStore];
      const obj3 = stateFromStores1(573);
      const stateFromStoresArray = obj3.useStateFromStoresArray(items2, () => {
        let guild;
        const obj = SnowflakeUtilsDefault;
        const keys = obj.keys(stateFromStores1);
        return keys.map((item) => guild.getGuild(item));
      });
      const iter = stateFromStoresArray[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp5 = nextResult;
        if (null != nextResult) {
          let tmp16 = stateFromStores1[tmp5.id];
          let tmp17 = tmp16;
          if (null != tmp16) {
            let tmp19 = stateFromStores1;
            let obj7 = stateFromStores1(7696);
            if (obj7.hasDetectedActivity(tmp17)) {
              let tmp11 = BigFlagUtilsAll;
              let hasAny = tmp11.hasAny;
              let obj5 = PermissionUtilsAll;
              let obj4 = { user: stateFromStores, context: tmp5, checkElevated: false };
              if (hasAny(obj5.computePermissions(obj4), closure_10)) {
                let id = nextResult.id;
                iter.return();
                return id;
              }
            } else {
              let tmp19Result = tmp19(7696);
            }
          }
        }
        continue;
      }
      return null;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp11;
      let tmp13;
      let tmp7;
      let tmp9;
      _require = arg0;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(12);
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
          if (null == guild) {
            return false;
          } else {
            const guildPermissions = PermissionStore.getGuildPermissions(guild);
            let hasAnyResult = null != guildPermissions;
            if (hasAnyResult) {
              const obj = BigFlagUtilsAll;
              hasAnyResult = obj.hasAny(guildPermissions, closure_10);
            }
            return hasAnyResult;
          }
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = tmp(573);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildIncidentsStore];
        cResult[3] = items1;
        tmp9 = items1;
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
        tmp11 = fn2;
      } else {
        tmp11 = cResult[5];
      }
      const tmpResult3 = tmp(573);
      const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp11);
      if (cResult[6] !== stateFromStores1) {
        let isUnderLockdownResult = null != stateFromStores1;
        if (isUnderLockdownResult) {
          const tmpResult4 = tmp(7696);
          isUnderLockdownResult = tmpResult4.isUnderLockdown(stateFromStores1);
        }
        cResult[6] = stateFromStores1;
        cResult[7] = isUnderLockdownResult;
        tmp13 = isUnderLockdownResult;
      } else {
        tmp13 = cResult[7];
      }
      if (cResult[8] === stateFromStores) {
        if (cResult[9] === stateFromStores1) {
          let tmp16;
          if (cResult[10] === tmp13) {
            tmp16 = cResult[11];
          }
          return tmp16;
        }
      }
      const obj2 = {
        shouldShowIncidentActions: stateFromStores,
        incidentData: stateFromStores1,
        isUnderLockdown: tmp13,
      };
      cResult[8] = stateFromStores;
      cResult[9] = stateFromStores1;
      cResult[10] = tmp13;
      cResult[11] = obj2;
      tmp16 = obj2;
    }
  : (arg0) => {
      let closure_0;
      let isUnderLockdownResult;
      _require = arg0;
      const tmp = _require;
      let obj = require("useStateFromStores");
      const items = [GuildStore, PermissionStore];
      const stateFromStores = obj.useStateFromStores(items, () => {
        const guild = GuildStore.getGuild(closure_0);
        if (null == guild) {
          return false;
        } else {
          const guildPermissions = PermissionStore.getGuildPermissions(guild);
          let hasAnyResult = null != guildPermissions;
          if (hasAnyResult) {
            const obj = BigFlagUtilsAll;
            hasAnyResult = obj.hasAny(guildPermissions, closure_10);
          }
          return hasAnyResult;
        }
      });
      const items1 = [GuildIncidentsStore];
      const obj2 = require("useStateFromStores");
      const stateFromStores1 = obj2.useStateFromStores(items1, () => {
        let guildIncident = null;
        if (null != closure_0) {
          guildIncident = GuildIncidentsStore.getGuildIncident(tmp);
        }
        return guildIncident;
      });
      const obj3 = {
        shouldShowIncidentActions: stateFromStores,
        incidentData: stateFromStores1,
        isUnderLockdown: isUnderLockdownResult,
      };
      isUnderLockdownResult = null != stateFromStores1;
      if (isUnderLockdownResult) {
        const tmpResult = tmp(7696);
        isUnderLockdownResult = tmpResult.isUnderLockdown(stateFromStores1);
      }
      return obj3;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (id) {
      let first;
      let tmp7;
      let tmp8;
      const obj = id(576);
      const cResult = obj.c(13);
      const tmp = id;
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
        first = items;
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
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = tmp(573);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
      if (null == id) {
        let tmp29;
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { dmsDisabled: false, invitesDisabled: false };
          cResult[4] = obj2;
          tmp29 = obj2;
        } else {
          tmp29 = cResult[4];
        }
        return tmp29;
      } else {
        let features1;
        const tmp30 = cResult[5];
        if (id != null) {
          features1 = id.features;
        }
        if (tmp30 === features1) {
          let tmp11;
          let tmp21;
          if (cResult[6] === stateFromStores) {
            tmp11 = cResult[7];
          }
          if (cResult[8] !== stateFromStores) {
            let dmsDisabledUntil;
            if (stateFromStores != null) {
              dmsDisabledUntil = stateFromStores.dmsDisabledUntil;
            }
            let tmp23 = null != dmsDisabledUntil;
            if (tmp23) {
              const _Date3 = Date;
              const self5 = this;
              const self6 = this;
              const _Date4 = Date;
              const self7 = this;
              const self8 = this;
              const date = new Date(stateFromStores.dmsDisabledUntil);
              tmp23 = date > new Date();
              const date1 = new Date();
            }
            cResult[8] = stateFromStores;
            cResult[9] = tmp23;
            tmp21 = tmp23;
          } else {
            tmp21 = cResult[9];
          }
          if (cResult[10] === tmp21) {
            let tmp28;
            if (cResult[11] === tmp11) {
              tmp28 = cResult[12];
            }
            return tmp28;
          }
          const obj3 = { invitesDisabled: tmp11, dmsDisabled: tmp21 };
          cResult[10] = tmp21;
          cResult[11] = tmp11;
          cResult[12] = obj3;
          tmp28 = obj3;
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
            const self = this;
            const self2 = this;
            const _Date2 = Date;
            const self3 = this;
            const self4 = this;
            const date2 = new Date(stateFromStores.invitesDisabledUntil);
            tmp15 = date2 > new Date();
            const date3 = new Date();
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
    }
  : function (id) {
      let obj2;
      let tmp13;
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      if (id == null) {
        id = closure_11;
      }
      const items = [GuildIncidentsStore];
      const items1 = [id];
      const obj = id(573);
      const stateFromStores = obj.useStateFromStores(items, () => GuildIncidentsStore.getGuildIncident(id), items1);
      if (null == id) {
        obj2 = { dmsDisabled: false, invitesDisabled: false };
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
            const self = this;
            const self2 = this;
            const _Date2 = Date;
            const self3 = this;
            const self4 = this;
            const date = new Date(stateFromStores.invitesDisabledUntil);
            tmp6 = date > new Date();
            const date1 = new Date();
          }
          hasItem = tmp6;
        }
        obj2 = { invitesDisabled: hasItem, dmsDisabled: tmp13 };
        let dmsDisabledUntil;
        if (stateFromStores != null) {
          dmsDisabledUntil = stateFromStores.dmsDisabledUntil;
        }
        tmp13 = null != dmsDisabledUntil;
        if (tmp13) {
          const _Date3 = Date;
          const self5 = this;
          const self6 = this;
          const _Date4 = Date;
          const self7 = this;
          const self8 = this;
          const date2 = new Date(stateFromStores.dmsDisabledUntil);
          tmp13 = date2 > new Date();
          const date3 = new Date();
        }
      }
      return obj2;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp7;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore, GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          const guild = GuildStore.getGuild(closure_0);
          const obj = GuildAntiRaidPermissionsUtils;
          return obj.canReportRaid(guild, PermissionStore);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = tmp(573);
      return tmpResult.useStateFromStores(first, tmp7);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      let obj = require("useStateFromStores");
      const items = [PermissionStore, GuildStore];
      return obj.useStateFromStores(items, () => {
        const guild = GuildStore.getGuild(closure_0);
        const obj = GuildAntiRaidPermissionsUtils;
        return obj.canReportRaid(guild, PermissionStore);
      });
    };
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
  const tmp3 = null != tmp2 && tmp2.disableRaidAlertNag;
  if (null != guildId) {
    guildIncident = GuildIncidentsStore.getGuildIncident(guildId);
  }
  let isUnderLockdownResult = null != guildIncident;
  if (isUnderLockdownResult) {
    const obj2 = GuildAntiRaidUtils;
    isUnderLockdownResult = obj2.isUnderLockdown(guildIncident);
  }
  const show = null != guildId && !isUnderLockdownResult && !tmp3;
  return { show, guildId };
};
export const getDisabledActions = function getDisabledActions(id) {
  let tmp11;
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
        const self = this;
        const self2 = this;
        const _Date2 = Date;
        const self3 = this;
        const self4 = this;
        const date = new Date(guildIncident.invitesDisabledUntil);
        tmp4 = date > new Date();
        const date1 = new Date();
      }
      hasItem = tmp4;
    }
    let dmsDisabledUntil;
    const obj = { invitesDisabled: hasItem, dmsDisabled: tmp11 };
    if (guildIncident != null) {
      dmsDisabledUntil = guildIncident.dmsDisabledUntil;
    }
    tmp11 = null != dmsDisabledUntil;
    if (tmp11) {
      const _Date3 = Date;
      const self5 = this;
      const self6 = this;
      const _Date4 = Date;
      const self7 = this;
      const self8 = this;
      const date2 = new Date(guildIncident.dmsDisabledUntil);
      tmp11 = date2 > new Date();
      const date3 = new Date();
    }
    return obj;
  }
};
export const useDisabledActions = tmp5;
export const useShowAntiRaidInGuildNotifSettings = tmp6;
