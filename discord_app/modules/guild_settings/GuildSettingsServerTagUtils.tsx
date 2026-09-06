// discord_app/modules/guild_settings/GuildSettingsServerTagUtils.tsx
import GuildTagUtils from "../guild_tag/GuildTagUtils.tsx";
import MobileServerTagExperimentDefault from "MobileServerTagExperiment.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

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
};
