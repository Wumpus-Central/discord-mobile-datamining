// discord_app/modules/guild_settings/GuildSettingsServerTagUtils.tsx
import Constants from "../../Constants.tsx";
import GuildTagUtils from "../guild_tag/GuildTagUtils.tsx";
import MobileServerTagExperimentDefault from "MobileServerTagExperiment.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const Permissions = Constants.Permissions;
const GuildSettingsServerTag = "GuildSettingsServerTag";
const result = size.fileFinishedImporting("modules/guild_settings/GuildSettingsServerTagUtils.tsx");

export const canUseMobileServerTagSettings = function canUseMobileServerTagSettings(guildId) {
  const guild = GuildStore.getGuild(guildId);
  let enabled = null != guild && PermissionStore.can(Permissions.MANAGE_GUILD, guild);
  if (enabled) {
    const obj2 = { location: GuildSettingsServerTag };
    const obj = MobileServerTagExperimentDefault;
    enabled = obj.getConfig(obj2).enabled;
  }
  return enabled;
};
export const canViewMobileServerTag = function canViewMobileServerTag(id) {
  const guild = GuildStore.getGuild(id);
  let enabled = null != guild;
  if (enabled) {
    const obj = GuildTagUtils;
    enabled = obj.guildSupportsTags(guild);
  }
  if (enabled) {
    const obj2 = GuildTagUtils;
    enabled = obj2.guildHasTag(guild);
  }
  if (enabled) {
    const obj4 = { location: GuildSettingsServerTag };
    const obj3 = MobileServerTagExperimentDefault;
    enabled = obj3.getConfig(obj4).enabled;
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
  }
  return tmp;
};
