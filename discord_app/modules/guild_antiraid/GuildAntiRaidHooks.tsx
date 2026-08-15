// discord_app/modules/guild_antiraid/GuildAntiRaidHooks.tsx
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import handleConnectionOpen from "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import computeAlertSettings from "computeAlertSettings";
import { IncidentAlertModeratorPermissions as closure_10 } from "GUILD_REPORT_RAID_MOBILE_KEY";
import ME from "ME";
import { defaultAreStatesEqual } from "../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import { DISCORD_EPOCH } from "../../utils/SnowflakeUtils.tsx";
import { DATE_CONFIG } from "GuildAntiRaidUtils.tsx";

let closure_12;
let unpackModuleId;
const require = arg1;
function getFirstGuildIncidentId(guildId) {
  currentUser = currentUser.getCurrentUser();
  const incidentsByGuild = store3.getIncidentsByGuild();
  let obj = DISCORD_EPOCH;
  const keys = obj.keys(incidentsByGuild);
  const mapped = keys.map((arg0) => guild.getGuild(arg0));
  const iter = mapped[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult;
    if (null != nextResult) {
      let tmp16 = nextResult;
      let tmp17 = incidentsByGuild[tmp5.id];
      let tmp18 = tmp17;
      if (null != tmp17) {
        let tmp19 = require;
        let tmp20 = dependencyMap;
        let tmp21 = dependencyMap;
        let obj7 = DATE_CONFIG;
        let tmp22 = tmp17;
        if (obj7.hasDetectedActivity(tmp18)) {
          let tmp8 = tmp20;
          let tmp19Result = tmp19(8234);
          let tmp9 = tmp17;
          if (!tmp19Result.isUnderLockdown(tmp18)) {
            let tmp11 = importAll;
            let tmp12 = tmp20;
            let obj4 = importAll(506);
            let obj5 = importAll(4026);
            obj = { user: null, context: null, checkElevated: false };
            obj[0] = currentUser;
            let tmp13 = nextResult;
            obj[1] = tmp5;
            let tmp14 = closure_10;
            if (obj4.hasAny(obj5.computePermissions(obj), closure_10)) {
              let tmp15 = iter;
              iter.return();
              return nextResult.id;
            }
          } else {
            let tmp10 = nextResult;
          }
        } else {
          let tmp6 = tmp20;
          tmp19Result = tmp19(8234);
          let tmp7 = tmp17;
        }
      }
    }
    continue;
  }
  return null;
}
({ EMPTY_STRING_SNOWFLAKE_ID: unpackModuleId, GuildFeatures: closure_12 } = ME);
const result = require("getUncachedChannelPermissions").fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidHooks.tsx");

export const useFirstGuildIncidentId = function useFirstGuildIncidentId() {
  let obj = stateFromStores1(647);
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [computeAlertSettings];
  stateFromStores1 = stateFromStores1(647).useStateFromStores(items1, () => incidentsByGuild.getIncidentsByGuild());
  const obj2 = stateFromStores1(647);
  const items2 = [createGuildRecordFromRust];
  const stateFromStoresArray = stateFromStores1(647).useStateFromStoresArray(items2, () => {
    const keys = outer1_1(outer1_3[9]).keys(stateFromStores1);
    return keys.map((arg0) => guild.getGuild(arg0));
  });
  const iter = stateFromStoresArray[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult;
    if (null != nextResult) {
      let tmp14 = nextResult;
      let tmp15 = stateFromStores1[tmp5.id];
      let tmp16 = tmp15;
      if (null != tmp15) {
        let tmp19 = dependencyMap;
        let tmp20 = dependencyMap;
        let tmp17 = stateFromStores1;
        let tmp18 = stateFromStores1;
        let obj8 = stateFromStores1(8234);
        let tmp21 = tmp15;
        if (obj8.hasDetectedActivity(tmp16)) {
          let tmp9 = importAll;
          let tmp10 = tmp19;
          let obj5 = importAll(506);
          let obj6 = importAll(4026);
          obj = { user: null, context: null, checkElevated: false };
          obj[0] = stateFromStores;
          let tmp11 = nextResult;
          obj[1] = tmp5;
          let tmp12 = closure_10;
          if (obj5.hasAny(obj6.computePermissions(obj), closure_10)) {
            let tmp13 = iter;
            iter.return();
            return nextResult.id;
          }
        } else {
          let tmp6 = tmp17;
          let tmp7 = tmp19;
          let tmp18Result = tmp18(8234);
          let tmp8 = tmp15;
        }
      }
    }
    continue;
  }
  return null;
};
export const useGuildIncidentsState = function useGuildIncidentsState(id) {
  const _require = id;
  let obj = _defaultAreStatesEqual;
  const items = [createGuildRecordFromRust, getUncachedChannelPermissions];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = outer1_5.getGuild(closure_0);
    if (null == guild) {
      return false;
    } else {
      const guildPermissions = outer1_6.getGuildPermissions(guild);
      let hasAnyResult = null != guildPermissions;
      if (hasAnyResult) {
        hasAnyResult = outer1_2(outer1_3[11]).hasAny(guildPermissions, outer1_10);
        const obj = outer1_2(outer1_3[11]);
      }
      return hasAnyResult;
    }
  });
  const items1 = [computeAlertSettings];
  const stateFromStores1 = _defaultAreStatesEqual.useStateFromStores(items1, () => {
    let guildIncident = null;
    if (null != closure_0) {
      guildIncident = outer1_9.getGuildIncident(tmp);
    }
    return guildIncident;
  });
  obj = { shouldShowIncidentActions: stateFromStores, incidentData: stateFromStores1, isUnderLockdown: null };
  let isUnderLockdownResult = null != stateFromStores1;
  if (isUnderLockdownResult) {
    isUnderLockdownResult = _DATE_CONFIG.isUnderLockdown(stateFromStores1);
    const tmpResult = _DATE_CONFIG;
  }
  obj[2] = isUnderLockdownResult;
  return obj;
};
export const shouldShowRaidNotificationNagbar = function shouldShowRaidNotificationNagbar() {
  const guildId = getFirstGuildIncidentId(store2.getGuildId());
  let guildsProto = store.getGuildsProto();
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
  const guildId = getFirstGuildIncidentId(store2.getGuildId());
  let guildsProto = store.getGuildsProto();
  if (guildsProto == null) {
    guildsProto = {};
  }
  let tmp2 = null;
  if (null != guildId) {
    tmp2 = guildsProto[guildId];
  }
  let guildIncident = null;
  if (null != guildId) {
    guildIncident = store3.getGuildIncident(guildId);
  }
  let isUnderLockdownResult = null != guildIncident;
  if (isUnderLockdownResult) {
    isUnderLockdownResult = DATE_CONFIG.isUnderLockdown(guildIncident);
    const obj2 = DATE_CONFIG;
  }
  const show = null != guildId && !isUnderLockdownResult && !(null != tmp2 && tmp2.disableRaidAlertNag);
  return { show, guildId };
};
export const getDisabledActions = function getDisabledActions(id) {
  if (null == id) {
    return { dmsDisabled: false, invitesDisabled: false };
  } else {
    const guildIncident = store3.getGuildIncident(id.id);
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
    const obj = { invitesDisabled: null, dmsDisabled: null };
    obj[0] = hasItem;
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
    obj[1] = tmp15;
    return obj;
  }
};
export const useDisabledActions = function useDisabledActions(id) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  if (id == null) {
    id = closure_11;
  }
  let obj = id(647);
  const items = [computeAlertSettings];
  const items1 = [id];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_9.getGuildIncident(id), items1);
  if (null == id) {
    obj = { dmsDisabled: false, invitesDisabled: false };
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
    obj = { invitesDisabled: null, dmsDisabled: null };
    obj[0] = hasItem;
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
    obj[1] = tmp17;
  }
  return obj;
};
export const useShowAntiRaidInGuildNotifSettings = function useShowAntiRaidInGuildNotifSettings(arg0) {
  const _require = arg0;
  const items = [getUncachedChannelPermissions, createGuildRecordFromRust];
  return _defaultAreStatesEqual.useStateFromStores(items, () => {
    const guild = outer1_5.getGuild(callback);
    return callback(outer1_3[13]).canReportRaid(guild, outer1_6);
  });
};