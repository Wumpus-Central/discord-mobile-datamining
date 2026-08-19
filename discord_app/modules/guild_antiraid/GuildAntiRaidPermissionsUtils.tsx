// discord_app/modules/guild_antiraid/GuildAntiRaidPermissionsUtils.tsx
import getUncachedChannelPermissions from "../../stores/PermissionStore.tsx";
import computeAlertSettings from "GuildIncidentsStore.tsx";
import ME from "../../Constants.tsx";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { isInMentionRaidExperiment } from "../guild_automod/ExperimentUtils.tsx";

const require = fn;
({ EMPTY_STRING_SNOWFLAKE_ID: c4, Permissions: c5 } = ME);
const result = require("obj132").fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidPermissionsUtils.tsx");

export const canReportRaid = function canReportRaid(guild, closure_1_6) {
  let obj = closure_1_6;
  if (closure_1_6 === undefined) {
    obj = closure_2;
  }
  let canResult = obj.can(constants.BAN_MEMBERS, guild);
  if (!canResult) {
    canResult = obj.can(constants.KICK_MEMBERS, guild);
  }
  if (!canResult) {
    canResult = obj.can(constants.MODERATE_MEMBERS, guild);
  }
  if (!canResult) {
    canResult = obj.can(constants.MANAGE_GUILD, guild);
  }
  return canResult;
};
export const useCanReportRaid = function useCanReportRaid(guild) {
  const _require = guild;
  const items = [closure_2];
  const items1 = [guild];
  const stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    if (closure_1_2 !== undefined) {
      return closure_1_2.can(closure_1_5.BAN_MEMBERS, closure_0) || closure_1_2.can(closure_1_5.KICK_MEMBERS, closure_0) || closure_1_2.can(closure_1_5.MODERATE_MEMBERS, closure_0) || closure_1_2.can(closure_1_5.MANAGE_GUILD, closure_0);
    }
  }, items1);
  const obj = initialize;
  const tmp = _require;
  const items2 = [closure_3];
  const items3 = [guild];
  const stateFromStores1 = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items2, () => {
    let guildIncident = null;
    if (null != closure_0) {
      guildIncident = closure_1_3.getGuildIncident(tmp.id);
    }
    return guildIncident;
  }, items3);
  let hasDetectedActivityResult = null != stateFromStores1;
  if (hasDetectedActivityResult) {
    hasDetectedActivityResult = tmp(8234).hasDetectedActivity(stateFromStores1);
    const tmpResult = tmp(8234);
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
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    if (closure_1_2 !== undefined) {
      return closure_1_2.can(closure_1_5.MANAGE_GUILD, tmp);
    }
  }, items1);
};
export const useShowMentionRaidLimitUpsell = function useShowMentionRaidLimitUpsell(id) {
  const _require = id;
  const items = [closure_2];
  const items1 = [id];
  const stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    if (closure_1_2 !== undefined) {
      return closure_1_2.can(closure_1_5.MANAGE_GUILD, tmp);
    }
  }, items1);
  const obj = initialize;
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  if (id == null) {
    id = closure_4;
  }
  const obj2 = isInMentionRaidExperiment;
  return require("../guild_automod/ExperimentUtils.tsx").useIsMentionRaidExperimentEnabled(id, false) && stateFromStores;
};