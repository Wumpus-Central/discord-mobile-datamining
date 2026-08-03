// === Module 10418: canReportRaid ===

// Module 10418 (canReportRaid)
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import computeAlertSettings from "computeAlertSettings";
import ME from "ME";

let c4;
let c5;
const require = arg1;
({ EMPTY_STRING_SNOWFLAKE_ID: c4, Permissions: c5 } = ME);
const result = require("ME").fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidPermissionsUtils.tsx");

export const canReportRaid = function canReportRaid(guild, outer1_6) {
  let obj = outer1_6;
  if (outer1_6 === undefined) {
    obj = getUncachedChannelPermissions;
  }
  let canResult = obj.can(constants.BAN_MEMBERS, guild);
  if (!canResult) {
    canResult = obj.can(tmp.KICK_MEMBERS, guild);
  }
  if (!canResult) {
    canResult = obj.can(tmp.MODERATE_MEMBERS, guild);
  }
  if (!canResult) {
    canResult = obj.can(tmp.MANAGE_GUILD, guild);
  }
  return canResult;
};
export const useCanReportRaid = function useCanReportRaid(guild) {
  const _require = guild;
  const items = [getUncachedChannelPermissions];
  const items1 = [guild];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    if (outer1_2 !== undefined) {
      return obj.can(outer1_5.BAN_MEMBERS, tmp) || obj.can(outer1_5.KICK_MEMBERS, tmp) || obj.can(outer1_5.MODERATE_MEMBERS, tmp) || obj.can(outer1_5.MANAGE_GUILD, tmp);
    }
  }, items1);
  const obj = _require(589);
  const tmp = _require;
  const items2 = [computeAlertSettings];
  const items3 = [guild];
  const stateFromStores1 = _require(589).useStateFromStores(items2, () => {
    let guildIncident = null;
    if (null != closure_0) {
      guildIncident = outer1_3.getGuildIncident(tmp.id);
    }
    return guildIncident;
  }, items3);
  let hasDetectedActivityResult = null != stateFromStores1;
  if (hasDetectedActivityResult) {
    hasDetectedActivityResult = tmp(7920).hasDetectedActivity(stateFromStores1);
    const tmpResult = tmp(7920);
  }
  let tmp6 = !hasDetectedActivityResult;
  if (!hasDetectedActivityResult) {
    tmp6 = stateFromStores;
  }
  return tmp6;
};
export const canEnableRaidAlerts = function canEnableRaidAlerts(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = getUncachedChannelPermissions;
  }
  return obj.can(constants.MANAGE_GUILD, arg0);
};
export const useCanEnableRaidAlerts = function useCanEnableRaidAlerts(arg0) {
  const _require = arg0;
  const items = [getUncachedChannelPermissions];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => {
    if (outer1_2 !== undefined) {
      return outer1_2.can(outer1_5.MANAGE_GUILD, tmp);
    }
  }, items1);
};
export const useShowMentionRaidLimitUpsell = function useShowMentionRaidLimitUpsell(id) {
  const _require = id;
  const items = [getUncachedChannelPermissions];
  const items1 = [id];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    if (outer1_2 !== undefined) {
      return outer1_2.can(outer1_5.MANAGE_GUILD, tmp);
    }
  }, items1);
  const obj = _require(589);
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  if (id == null) {
    id = closure_4;
  }
  const obj2 = _require(10419);
  return _require(10419).useIsMentionRaidExperimentEnabled(id, false) && stateFromStores;
};