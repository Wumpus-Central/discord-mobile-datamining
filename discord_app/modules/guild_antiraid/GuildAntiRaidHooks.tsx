// discord_app/modules/guild_antiraid/GuildAntiRaidHooks.tsx
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";
import fromStringAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import applyOverwritesAll from "../../utils/PermissionUtils.tsx";
import DATE_CONFIG from "GuildAntiRaidUtils.tsx";
import handleConnectionClosedOrResumed from "../user_settings/UserSettingsProtoStore.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import getUncachedChannelPermissions from "../../stores/PermissionStore.tsx";
import handleConnectionOpen from "../../stores/SelectedGuildStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import computeAlertSettings from "GuildIncidentsStore.tsx";
import { IncidentAlertModeratorPermissions as closure_10 } from "GuildAntiRaidConstants.tsx";
import ME from "../../Constants.tsx";
import { defaultAreStatesEqual } from "../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import { DATE_CONFIG } from "GuildAntiRaidUtils.tsx";

require = fn;
function getFirstGuildIncidentId(guildId) {
  currentUser = currentUser.getCurrentUser();
  const incidentsByGuild = store3.getIncidentsByGuild();
  let obj = DISCORD_EPOCHDefault;
  const keys = obj.keys(incidentsByGuild);
  const mapped = keys.map((item, index) => guild.getGuild(item));
  const iter = mapped[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult;
    if (null != nextResult) {
      let tmp17 = incidentsByGuild[tmp5.id];
      let tmp18 = tmp17;
      if (null != tmp17) {
        let obj7 = DATE_CONFIG;
        if (obj7.hasDetectedActivity(tmp18)) {
          let tmp19Result = DATE_CONFIG;
          if (!tmp19Result.isUnderLockdown(tmp18)) {
            let obj4 = fromStringAll;
            let obj5 = applyOverwritesAll;
            obj = { user: null, context: null, checkElevated: false };
            obj[0] = currentUser;
            obj[1] = tmp5;
            if (obj4.hasAny(obj5.computePermissions(obj), closure_10)) {
              iter.return();
              return nextResult.id;
            }
          }
        } else {
          tmp19Result = DATE_CONFIG;
        }
      }
    }
    continue;
  }
  return null;
}
({ EMPTY_STRING_SNOWFLAKE_ID: unpackModuleId, GuildFeatures: closure_12 } = ME);
const result = require("obj132").fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidHooks.tsx");

export const useFirstGuildIncidentId = function useFirstGuildIncidentId() {
  let obj = stateFromStores1(647);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [closure_9];
  stateFromStores1 = stateFromStores1(647).useStateFromStores(items1, () => incidentsByGuild.getIncidentsByGuild());
  const obj2 = stateFromStores1(647);
  const items2 = [closure_5];
  const stateFromStoresArray = stateFromStores1(647).useStateFromStoresArray(items2, () => {
    const keys = DISCORD_EPOCHDefault.keys(stateFromStores1);
    return keys.map((item, index) => guild.getGuild(item));
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
        let obj8 = stateFromStores1(8234);
        if (obj8.hasDetectedActivity(tmp16)) {
          let obj5 = fromStringAll;
          let obj6 = applyOverwritesAll;
          obj = { user: null, context: null, checkElevated: false };
          obj[0] = stateFromStores;
          obj[1] = tmp5;
          if (obj5.hasAny(obj6.computePermissions(obj), closure_10)) {
            iter.return();
            return nextResult.id;
          }
        } else {
          let tmp18Result = tmp18(8234);
        }
      }
    }
    continue;
  }
  return null;
};
export const useGuildIncidentsState = function useGuildIncidentsState(id) {
  const _require = id;
  let obj = defaultAreStatesEqual;
  const items = [closure_5, closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = closure_1_5.getGuild(closure_0);
    if (null == guild) {
      return false;
    } else {
      const guildPermissions = closure_1_6.getGuildPermissions(guild);
      let hasAnyResult = null != guildPermissions;
      if (hasAnyResult) {
        hasAnyResult = fromStringAll.hasAny(guildPermissions, closure_1_10);
      }
      return hasAnyResult;
    }
  });
  const items1 = [closure_9];
  const stateFromStores1 = require("../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items1, () => {
    let guildIncident = null;
    if (null != closure_0) {
      guildIncident = closure_1_9.getGuildIncident(tmp);
    }
    return guildIncident;
  });
  obj = { shouldShowIncidentActions: stateFromStores, incidentData: stateFromStores1, isUnderLockdown: null };
  let isUnderLockdownResult = null != stateFromStores1;
  if (isUnderLockdownResult) {
    isUnderLockdownResult = require("GuildAntiRaidUtils.tsx").isUnderLockdown(stateFromStores1);
    const tmpResult = DATE_CONFIG;
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
  const items = [closure_9];
  const items1 = [id];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_9.getGuildIncident(id), items1);
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
  const items = [closure_6, closure_5];
  return require("../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () => {
    const guild = closure_1_5.getGuild(callback);
    return callback(dependencyMap[13]).canReportRaid(guild, closure_1_6);
  });
};