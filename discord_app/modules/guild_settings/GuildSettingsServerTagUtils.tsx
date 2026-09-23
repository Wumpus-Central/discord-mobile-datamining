// === Module 9937: GuildSettingsServerTagUtils ===

// Module 9937 (GuildSettingsServerTagUtils)
import GuildTagUtils from "GuildTagUtils" /* 8509 */;
import MobileServerTagExperimentDefault from "MobileServerTagExperiment" /* 9938 */;
import GuildStore from "GuildStore" /* 2064 */;
import PermissionStore from "PermissionStore" /* 4462 */;

require = fn;
const Permissions = fn(1074).Permissions;
const GuildSettingsServerTag = "GuildSettingsServerTag";
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/GuildSettingsServerTagUtils.tsx");

export const canUseMobileServerTagSettings = function canUseMobileServerTagSettings(guildId) {
  const guild = GuildStore.getGuild(guildId);
  let enabled = null != guild;
  if (enabled) {
    enabled = PermissionStore.can(Permissions.MANAGE_GUILD, guild);
  }
  if (enabled) {
    const obj2 = { location: GuildSettingsServerTag };
    enabled = MobileServerTagExperimentDefault.getConfig(obj2).enabled;
  }
  return enabled;
};
export const canViewMobileServerTag = function canViewMobileServerTag(id) {
  const guild = GuildStore.getGuild(id);
  let enabled = null != guild;
  if (enabled) {
    enabled = GuildTagUtils.guildSupportsTags(guild);
  }
  if (enabled) {
    enabled = GuildTagUtils.guildHasTag(guild);
  }
  if (enabled) {
    const obj4 = { location: GuildSettingsServerTag };
    enabled = MobileServerTagExperimentDefault.getConfig(obj4).enabled;
  }
  return enabled;
};
export const isServerTagDraftDirty = function isServerTagDraftDirty(profile, profile2) {
  let tmp = null != profile && null != profile2;
  if (tmp) {
    tmp = profile.tag !== profile2.tag || profile.badge !== profile2.badge || profile.badgeColorPrimary !== profile2.badgeColorPrimary || profile.badgeColorSecondary !== profile2.badgeColorSecondary;
    const tmp2 = profile.tag !== profile2.tag || profile.badge !== profile2.badge || profile.badgeColorPrimary !== profile2.badgeColorPrimary || profile.badgeColorSecondary !== profile2.badgeColorSecondary;
  }
  return tmp;
};