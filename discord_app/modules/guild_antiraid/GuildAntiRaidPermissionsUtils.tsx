// === Module 10099: GuildAntiRaidPermissionsUtils ===

// Module 10099 (GuildAntiRaidPermissionsUtils)
import PermissionStore from "PermissionStore" /* 4199 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 10080 */;

const require = fn;
const Constants = fn(1074);
({ EMPTY_STRING_SNOWFLAKE_ID: closure_4, Permissions: hasOwnProperty } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidPermissionsUtils.tsx");

export const canReportRaid = function canReportRaid(guild, PermissionStore) {
  let obj = PermissionStore;
  if (PermissionStore === undefined) {
    obj = PermissionStore;
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
  _require = guild;
  const items = [PermissionStore];
  const items1 = [guild];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    if (PermissionStore !== undefined) {
      return obj.can(constants.BAN_MEMBERS, tmp) || obj.can(constants.KICK_MEMBERS, tmp) || obj.can(constants.MODERATE_MEMBERS, tmp) || obj.can(constants.MANAGE_GUILD, tmp);
    }
  }, items1);
  const obj = require("initialize");
  const tmp = _require;
  const items2 = [GuildIncidentsStore];
  const items3 = [guild];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    let guildIncident = null;
    if (null != closure_0) {
      guildIncident = GuildIncidentsStore.getGuildIncident(tmp.id);
    }
    return guildIncident;
  }, items3);
  let hasDetectedActivityResult = null != stateFromStores1;
  if (hasDetectedActivityResult) {
    hasDetectedActivityResult = tmp(8015).hasDetectedActivity(stateFromStores1);
    const tmpResult = tmp(8015);
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
    obj = PermissionStore;
  }
  return obj.can(constants.MANAGE_GUILD, arg0);
};
export const useCanEnableRaidAlerts = function useCanEnableRaidAlerts(arg0) {
  _require = arg0;
  const items = [PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    if (PermissionStore !== undefined) {
      return PermissionStore.can(constants.MANAGE_GUILD, tmp);
    }
  }, items1);
};
export const useShowMentionRaidLimitUpsell = function useShowMentionRaidLimitUpsell(id) {
  _require = id;
  const items = [PermissionStore];
  const items1 = [id];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    if (PermissionStore !== undefined) {
      return PermissionStore.can(constants.MANAGE_GUILD, tmp);
    }
  }, items1);
  const obj = require("initialize");
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  if (id == null) {
    id = closure_4;
  }
  const obj2 = require("guild_automod/ExperimentUtils");
  return require("guild_automod/ExperimentUtils").useIsMentionRaidExperimentEnabled(id, false) && stateFromStores;
};