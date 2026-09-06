// discord_app/modules/guild_antiraid/GuildAntiRaidHooks.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import BigFlagUtilsAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import PermissionUtilsAll from "../../utils/PermissionUtils.tsx";
import GuildAntiRaidUtils from "GuildAntiRaidUtils.tsx";
import GuildAntiRaidPermissionsUtils from "GuildAntiRaidPermissionsUtils.tsx";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import GuildIncidentsStore from "GuildIncidentsStore.tsx";

require = fn;
function getFirstGuildIncidentId(guildId) {
  const currentUser = UserStore.getCurrentUser();
  const incidentsByGuild = GuildIncidentsStore.getIncidentsByGuild();
  let obj = SnowflakeUtilsDefault;
  const keys = obj.keys(incidentsByGuild);
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
            obj = { user: currentUser, context: null, checkElevated: false };
            obj.context = tmp5;
            if (obj4.hasAny(obj5.computePermissions(obj), closure_10)) {
              iter.return();
              return nextResult.id;
            }
          }
        } else {
          tmp19Result = GuildAntiRaidUtils;
        }
      }
    }
    continue;
  }
  return null;
}
let closure_10 = fn(8016).IncidentAlertModeratorPermissions;
const Constants = fn(1074);
({ EMPTY_STRING_SNOWFLAKE_ID: closure_11, GuildFeatures: closure_12 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidHooks.tsx");

export const useFirstGuildIncidentId = function useFirstGuildIncidentId() {
  let obj = stateFromStores1(563);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [GuildIncidentsStore];
  stateFromStores1 = stateFromStores1(563).useStateFromStores(items1, () => incidentsByGuild.getIncidentsByGuild());
  const obj2 = stateFromStores1(563);
  const items2 = [GuildStore];
  const stateFromStoresArray = stateFromStores1(563).useStateFromStoresArray(items2, () => {
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
        let obj8 = stateFromStores1(8015);
        if (obj8.hasDetectedActivity(tmp16)) {
          let obj5 = BigFlagUtilsAll;
          let obj6 = PermissionUtilsAll;
          obj = { user: stateFromStores, context: null, checkElevated: false };
          obj.context = tmp5;
          if (obj5.hasAny(obj6.computePermissions(obj), closure_10)) {
            iter.return();
            return nextResult.id;
          }
        } else {
          let tmp18Result = tmp18(8015);
        }
      }
    }
    continue;
  }
  return null;
};
export const useGuildIncidentsState = function useGuildIncidentsState(id) {
  _require = id;
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
        hasAnyResult = BigFlagUtilsAll.hasAny(guildPermissions, closure_10);
      }
      return hasAnyResult;
    }
  });
  const items1 = [GuildIncidentsStore];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () => {
    let guildIncident = null;
    if (null != closure_0) {
      guildIncident = GuildIncidentsStore.getGuildIncident(tmp);
    }
    return guildIncident;
  });
  obj = { shouldShowIncidentActions: stateFromStores, incidentData: stateFromStores1, isUnderLockdown: null };
  let isUnderLockdownResult = null != stateFromStores1;
  if (isUnderLockdownResult) {
    isUnderLockdownResult = require("GuildAntiRaidUtils").isUnderLockdown(stateFromStores1);
    const tmpResult = require("GuildAntiRaidUtils");
  }
  obj.isUnderLockdown = isUnderLockdownResult;
  return obj;
};
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
export const useDisabledActions = function useDisabledActions(id) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  if (id == null) {
    id = closure_11;
  }
  let obj = id(563);
  const items = [GuildIncidentsStore];
  const items1 = [id];
  const stateFromStores = obj.useStateFromStores(items, () => GuildIncidentsStore.getGuildIncident(id), items1);
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
    obj = { invitesDisabled: hasItem, dmsDisabled: null };
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
    obj.dmsDisabled = tmp17;
  }
  return obj;
};
export const useShowAntiRaidInGuildNotifSettings = function useShowAntiRaidInGuildNotifSettings(arg0) {
  _require = arg0;
  const items = [PermissionStore, GuildStore];
  return require("useStateFromStores").useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    return GuildAntiRaidPermissionsUtils.canReportRaid(guild, PermissionStore);
  });
};
