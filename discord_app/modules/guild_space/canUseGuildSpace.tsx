// === Module 7459: canUseGuildSpace ===

// Module 7459 (canUseGuildSpace)
import GuildSpaceTypes from "GuildSpaceTypes" /* 7460 */;
import GuildStore from "GuildStore" /* 4788 */;
import PermissionStore from "PermissionStore" /* 4849 */;

const require = globalThis.__r;

require = fn;
const Permissions = fn(1071).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_space/canUseGuildSpace.tsx");

export function isGuildSpaceAdmin(guild) {
  let canResult = null != guild;
  if (canResult) {
    canResult = PermissionStore.can(Permissions.MANAGE_GUILD, guild);
  }
  return canResult;
}
export function useIsGuildSpaceAdmin(arg0) {
  _require = arg0;
  items = [PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = PermissionStore.can(Permissions.MANAGE_GUILD, tmp);
    }
    return canResult;
  }, items1);
}
export function isGuildSpaceVisibleToMembers(guild) {
  const guildSpaceSettings = guild.guildSpaceSettings;
  let tmp = null != guildSpaceSettings && guildSpaceSettings.enabled;
  if (tmp) {
    tmp = guildSpaceSettings.publish_status === GuildSpaceTypes.GuildSpacePublishStatus.PUBLISHED;
  }
  return tmp;
}
export function isGuildSpaceVisible(guild, arg1) {
  const guildSpaceSettings = guild.guildSpaceSettings;
  let enabled;
  if (guildSpaceSettings != null) {
    enabled = guildSpaceSettings.enabled;
  }
  let tmp3 = !tmp2;
  if (false !== enabled) {
    let tmp4 = arg1;
    if (!arg1) {
      const guildSpaceSettings2 = guild.guildSpaceSettings;
      let tmp5 = null != guildSpaceSettings2 && guildSpaceSettings2.enabled;
      if (tmp5) {
        tmp5 = guildSpaceSettings2.publish_status === GuildSpaceTypes.GuildSpacePublishStatus.PUBLISHED;
      }
      tmp4 = tmp5;
    }
    tmp3 = tmp4;
  }
  return tmp3;
}
export function canUseGuildSpace(guild, getChannelIdForGuildTransition) {
  return false;
}
export function useCanUseGuildSpace(id, useGuildActionRows) {
  _require = id;
  const guildSpaceExperimentEnabled = require("GuildSpaceExperiment").useGuildSpaceExperimentEnabled(id, useGuildActionRows);
  const obj = require("GuildSpaceExperiment");
  items = [GuildStore];
  const items1 = [id];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0), items1);
  closure_129_0 = stateFromStores;
  const tmpResult = require("initialize");
  const items2 = [PermissionStore];
  const items3 = [stateFromStores];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = PermissionStore.can(Permissions.MANAGE_GUILD, tmp);
    }
    return canResult;
  }, items3);
  return false;
}