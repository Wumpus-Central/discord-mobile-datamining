// === Module 9042: GuildSettingsServerTagUtils ===

// Module 9042 (GuildSettingsServerTagUtils)
import GuildTagUtils from "GuildTagUtils" /* 8691 */;
import GuildStore from "GuildStore" /* 4878 */;
import PermissionStore from "PermissionStore" /* 4936 */;

require = fn;
const Permissions = fn(1084).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/GuildSettingsServerTagUtils.tsx");

export const canUseMobileServerTagSettings = function canUseMobileServerTagSettings(guildId) {
  guild = GuildStore.getGuild(guildId);
  let canResult = null != guild;
  if (canResult) {
    canResult = PermissionStore.can(Permissions.MANAGE_GUILD, guild);
  }
  return canResult;
};
export const canViewMobileServerTag = function canViewMobileServerTag(id) {
  guild = GuildStore.getGuild(id);
  let guildSupportsTagsResult = null != guild;
  if (guildSupportsTagsResult) {
    guildSupportsTagsResult = GuildTagUtils.guildSupportsTags(guild);
  }
  if (guildSupportsTagsResult) {
    guildSupportsTagsResult = GuildTagUtils.guildHasTag(guild);
  }
  return guildSupportsTagsResult;
};
export const isServerTagDraftDirty = function isServerTagDraftDirty(profile, profile2) {
  let tmp = null != profile && null != profile2;
  if (tmp) {
    tmp = profile.tag !== profile2.tag || profile.badge !== profile2.badge || profile.badgeColorPrimary !== profile2.badgeColorPrimary || profile.badgeColorSecondary !== profile2.badgeColorSecondary;
    const tmp2 = profile.tag !== profile2.tag || profile.badge !== profile2.badge || profile.badgeColorPrimary !== profile2.badgeColorPrimary || profile.badgeColorSecondary !== profile2.badgeColorSecondary;
  }
  return tmp;
};