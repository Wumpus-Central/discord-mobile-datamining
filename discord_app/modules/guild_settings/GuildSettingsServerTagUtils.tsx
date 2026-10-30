// discord_app/modules/guild_settings/GuildSettingsServerTagUtils.tsx
import GuildTagUtils from "../guild_tag/GuildTagUtils.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

require = fn;
const Permissions = fn(1072).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/GuildSettingsServerTagUtils.tsx");

export function canUseMobileServerTagSettings(guildId) {
  const guild = GuildStore.getGuild(guildId);
  let canResult = null != guild;
  if (canResult) {
    canResult = PermissionStore.can(Permissions.MANAGE_GUILD, guild);
  }
  return canResult;
}
export function canViewMobileServerTag(id) {
  const guild = GuildStore.getGuild(id);
  let guildSupportsTagsResult = null != guild;
  if (guildSupportsTagsResult) {
    guildSupportsTagsResult = GuildTagUtils.guildSupportsTags(guild);
  }
  if (guildSupportsTagsResult) {
    guildSupportsTagsResult = GuildTagUtils.guildHasTag(guild);
  }
  return guildSupportsTagsResult;
}
export function isServerTagDraftDirty(profile, profile2) {
  let tmp = null != profile && null != profile2;
  if (tmp) {
    tmp =
      profile.tag !== profile2.tag ||
      profile.badge !== profile2.badge ||
      profile.badgeColorPrimary !== profile2.badgeColorPrimary ||
      profile.badgeColorSecondary !== profile2.badgeColorSecondary;
    const tmp2 =
      profile.tag !== profile2.tag ||
      profile.badge !== profile2.badge ||
      profile.badgeColorPrimary !== profile2.badgeColorPrimary ||
      profile.badgeColorSecondary !== profile2.badgeColorSecondary;
  }
  return tmp;
}
