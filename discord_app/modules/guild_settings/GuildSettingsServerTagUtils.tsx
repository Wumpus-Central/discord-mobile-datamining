// === Module 8616: canUseMobileServerTagSettings ===

// Module 8616 (canUseMobileServerTagSettings)
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
    let obj = importDefault(8617);
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
    let obj = require(8064) /* guildHasTag */;
    enabled = obj.guildSupportsTags(guild);
  }
  if (enabled) {
    enabled = require(8064) /* guildHasTag */.guildHasTag(guild);
    const obj2 = require(8064) /* guildHasTag */;
  }
  if (enabled) {
    obj = { location: null };
    obj[0] = GuildSettingsServerTag;
    enabled = importDefault(8617).getConfig(obj).enabled;
    const obj3 = importDefault(8617);
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