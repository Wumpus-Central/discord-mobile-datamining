import { guildHasTag } from "../guild_tag/GuildTagUtils.tsx";
import { apexExperiment } from "MobileServerTagExperiment.tsx";
// discord_app/modules/guild_settings/GuildSettingsServerTagUtils.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "ME";

const require = arg1;
const GuildSettingsServerTag = "GuildSettingsServerTag";
const result = require("ME").fileFinishedImporting("modules/guild_settings/GuildSettingsServerTagUtils.tsx");

export const canUseMobileServerTagSettings = function canUseMobileServerTagSettings(guildId) {
  const guild = store.getGuild(guildId);
  let enabled = null != guild;
  if (enabled) {
    enabled = getUncachedChannelPermissions.can(Permissions.MANAGE_GUILD, guild);
  }
  if (enabled) {
    let obj = apexExperiment;
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
    let obj = guildHasTag /* guildHasTag */;
    enabled = obj.guildSupportsTags(guild);
  }
  if (enabled) {
    enabled = guildHasTag /* guildHasTag */.guildHasTag(guild);
    const obj2 = guildHasTag /* guildHasTag */;
  }
  if (enabled) {
    obj = { location: null };
    obj[0] = GuildSettingsServerTag;
    enabled = apexExperiment.getConfig(obj).enabled;
    const obj3 = apexExperiment;
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