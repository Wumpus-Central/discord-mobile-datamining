// === Module 10182: canReportRaid ===

// Module 10182 (canReportRaid)
import closure_2 from "getUncachedChannelPermissions" /* 4121 */;
import closure_3 from "computeAlertSettings" /* 10163 */;
import ME from "ME" /* 676 */;

const require = arg1;
({ EMPTY_STRING_SNOWFLAKE_ID: c4, Permissions: c5 } = ME);
const result = require("set").fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidPermissionsUtils.tsx");

export const canReportRaid = function canReportRaid(guild, closure_1_6) {
  let obj = closure_1_6;
  if (closure_1_6 === undefined) {
    obj = closure_2;
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
  const items = [closure_2];
  const items1 = [guild];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    if (closure_1_2 !== undefined) {
      return obj.can(closure_1_5.BAN_MEMBERS, tmp) || obj.can(closure_1_5.KICK_MEMBERS, tmp) || obj.can(closure_1_5.MODERATE_MEMBERS, tmp) || obj.can(closure_1_5.MANAGE_GUILD, tmp);
    }
  }, items1);
  const obj = _require(589);
  const tmp = _require;
  const items2 = [closure_3];
  const items3 = [guild];
  const stateFromStores1 = _require(589).useStateFromStores(items2, () => {
    let guildIncident = null;
    if (null != closure_0) {
      guildIncident = closure_1_3.getGuildIncident(tmp.id);
    }
    return guildIncident;
  }, items3);
  let hasDetectedActivityResult = null != stateFromStores1;
  if (hasDetectedActivityResult) {
    hasDetectedActivityResult = tmp(7924).hasDetectedActivity(stateFromStores1);
    const tmpResult = tmp(7924);
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
    obj = closure_2;
  }
  return obj.can(constants.MANAGE_GUILD, arg0);
};
export const useCanEnableRaidAlerts = function useCanEnableRaidAlerts(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => {
    if (closure_1_2 !== undefined) {
      return closure_1_2.can(closure_1_5.MANAGE_GUILD, tmp);
    }
  }, items1);
};
export const useShowMentionRaidLimitUpsell = function useShowMentionRaidLimitUpsell(id) {
  const _require = id;
  const items = [closure_2];
  const items1 = [id];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    if (closure_1_2 !== undefined) {
      return closure_1_2.can(closure_1_5.MANAGE_GUILD, tmp);
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
  const obj2 = _require(10183);
  return _require(10183).useIsMentionRaidExperimentEnabled(id, false) && stateFromStores;
};