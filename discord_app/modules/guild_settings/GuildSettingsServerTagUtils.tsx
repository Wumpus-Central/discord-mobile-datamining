// === Module 9067: GuildSettingsServerTagUtils ===

// Module 9067 (GuildSettingsServerTagUtils)
import GuildTagUtils from "GuildTagUtils" /* 8165 */;
import MobileServerTagExperimentDefault from "MobileServerTagExperiment" /* 9068 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;

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
    const obj = { location: GuildSettingsServerTag };
    enabled = obj.getConfig(obj).enabled;
  }
  return enabled;
};
export const canViewMobileServerTag = function canViewMobileServerTag(id) {
  const guild = GuildStore.getGuild(id);
  let enabled = null != guild;
  if (enabled) {
    let obj = GuildTagUtils;
    enabled = obj.guildSupportsTags(guild);
  }
  if (enabled) {
    enabled = GuildTagUtils.guildHasTag(guild);
  }
  if (enabled) {
    obj = { location: GuildSettingsServerTag };
    enabled = MobileServerTagExperimentDefault.getConfig(obj).enabled;
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