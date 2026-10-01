// === Module 9753: GuildAntiRaidPermissionsUtils ===

// Module 9753 (GuildAntiRaidPermissionsUtils)
import PermissionStore from "PermissionStore" /* 4498 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 9735 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidPermissionsUtils.tsx");

export const canReportRaid = function canReportRaid(guild) {
  let obj = PermissionStore;
  if (PermissionStore === undefined) {
    obj = PermissionStore;
  }
  let canResult = obj.can(Permissions.BAN_MEMBERS, guild);
  if (!canResult) {
    canResult = obj.can(Permissions.KICK_MEMBERS, guild);
  }
  if (!canResult) {
    canResult = obj.can(Permissions.MODERATE_MEMBERS, guild);
  }
  if (!canResult) {
    canResult = obj.can(Permissions.MANAGE_GUILD, guild);
  }
  return canResult;
};
export const useCanReportRaid = function useCanReportRaid(guild) {
  _require = guild;
  const items = [PermissionStore];
  const items1 = [guild];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    if (PermissionStore !== undefined) {
      return PermissionStore.can(Permissions.BAN_MEMBERS, closure_0) || PermissionStore.can(Permissions.KICK_MEMBERS, closure_0) || PermissionStore.can(Permissions.MODERATE_MEMBERS, closure_0) || PermissionStore.can(Permissions.MANAGE_GUILD, closure_0);
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
    hasDetectedActivityResult = tmp(7641).hasDetectedActivity(stateFromStores1);
    const tmpResult = tmp(7641);
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
  return obj.can(Permissions.MANAGE_GUILD, arg0);
};
export const useCanEnableRaidAlerts = function useCanEnableRaidAlerts(arg0) {
  _require = arg0;
  const items = [PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    if (PermissionStore !== undefined) {
      return PermissionStore.can(Permissions.MANAGE_GUILD, tmp);
    }
  }, items1);
};