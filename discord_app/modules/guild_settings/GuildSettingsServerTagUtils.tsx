// === Module 8914: canUseMobileServerTagSettings ===

// Module 8914 (canUseMobileServerTagSettings)
import guildHasTag from "guildHasTag" /* 8414 */;
import apexExperimentDefault from "apexExperiment" /* 8915 */;
import closure_3 from "createGuildRecordFromRust" /* 1910 */;
import closure_4 from "getUncachedChannelPermissions" /* 4024 */;
import { Permissions } from "ME" /* 676 */;

require = arg1;
const GuildSettingsServerTag = "GuildSettingsServerTag";
const result = require("set").fileFinishedImporting("modules/guild_settings/GuildSettingsServerTagUtils.tsx");

export const canUseMobileServerTagSettings = function canUseMobileServerTagSettings(guildId) {
  const guild = store.getGuild(guildId);
  let enabled = null != guild;
  if (enabled) {
    enabled = closure_4.can(Permissions.MANAGE_GUILD, guild);
  }
  if (enabled) {
    let obj = apexExperimentDefault;
    obj = { location: null };
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
    const obj2 = guildHasTag;
  }
  if (enabled) {
    obj = { location: null };
    obj[0] = GuildSettingsServerTag;
    enabled = apexExperimentDefault.getConfig(obj).enabled;
    const obj3 = apexExperimentDefault;
  }
  return enabled;
};
export const isServerTagDraftDirty = function isServerTagDraftDirty(closure_9, closure_8) {
  let tmp = null != closure_9 && null != closure_8;
  if (tmp) {
    tmp = closure_9.tag !== closure_8.tag || closure_9.badge !== closure_8.badge || closure_9.badgeColorPrimary !== closure_8.badgeColorPrimary || closure_9.badgeColorSecondary !== closure_8.badgeColorSecondary;
    const tmp2 = closure_9.tag !== closure_8.tag || closure_9.badge !== closure_8.badge || closure_9.badgeColorPrimary !== closure_8.badgeColorPrimary || closure_9.badgeColorSecondary !== closure_8.badgeColorSecondary;
  }
  return tmp;
};