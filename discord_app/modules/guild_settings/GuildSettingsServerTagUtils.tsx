// === Module 8877: canUseMobileServerTagSettings ===

// Module 8877 (canUseMobileServerTagSettings)
import guildHasTag from "guildHasTag" /* 8375 */;
import apexExperimentDefault from "apexExperiment" /* 8878 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import { Permissions } from "ME" /* 676 */;

require = fn;
const GuildSettingsServerTag = "GuildSettingsServerTag";
const result = require("obj132").fileFinishedImporting("modules/guild_settings/GuildSettingsServerTagUtils.tsx");

export const canUseMobileServerTagSettings = function canUseMobileServerTagSettings(guildId) {
  const guild = store.getGuild(guildId);
  let enabled = null != guild;
  if (enabled) {
    enabled = closure_4.can(Permissions.MANAGE_GUILD, guild);
  }
  if (enabled) {
    const obj = { location: null };
    obj[0] = GuildSettingsServerTag;
    enabled = obj.getConfig(obj).enabled;
  }
  return enabled;
};
export const canViewMobileServerTag = function canViewMobileServerTag(id) {
  const guild = store.getGuild(id);
  let enabled = null != guild;
  if (enabled) {
    let obj = guildHasTag;
    enabled = obj.guildSupportsTags(guild);
  }
  if (enabled) {
    enabled = guildHasTag.guildHasTag(guild);
  }
  if (enabled) {
    obj = { location: null };
    obj[0] = GuildSettingsServerTag;
    enabled = apexExperimentDefault.getConfig(obj).enabled;
  }
  return enabled;
};
export const isServerTagDraftDirty = function isServerTagDraftDirty(closure_9, closure_8) {
  let tmp = null != closure_9 && null != closure_8;
  if (tmp) {
    tmp = closure_9.tag !== closure_8.tag || closure_9.badge !== closure_8.badge || closure_9.badgeColorPrimary !== closure_8.badgeColorPrimary || closure_9.badgeColorSecondary !== closure_8.badgeColorSecondary;
  }
  return tmp;
};