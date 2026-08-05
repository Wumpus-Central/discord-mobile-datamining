// discord_app/modules/opt_in_channels/isOptInEnabled.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";

let closure_6;
let error;
const require = arg1;
({ GuildFeatures: closure_6, Permissions: error } = ME);
const result = require("updateUserGuildSettingsInternal").fileFinishedImporting("modules/opt_in_channels/isOptInEnabled.tsx");

export const useOptInEnabledForGuild = function useOptInEnabledForGuild(id) {
  const _require = id;
  const items = [updateUserGuildSettingsInternal, createGuildRecordFromRust, mergeGuildAvatar];
  return _require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    let isOptInEnabledResult = outer1_4.isOptInEnabled(closure_0);
    const guild = outer1_2.getGuild(closure_0);
    let flag;
    if (guild != null) {
      const features = guild.features;
      flag = features.has(outer1_6.COMMUNITY);
    }
    if (flag == null) {
      flag = false;
    }
    const currentUser = outer1_5.getCurrentUser();
    let flag2;
    if (currentUser != null) {
      flag2 = currentUser.isStaff();
    }
    if (flag2 == null) {
      flag2 = false;
    }
    if (isOptInEnabledResult) {
      if (!flag) {
        flag = flag2;
      }
      isOptInEnabledResult = flag;
    }
    return isOptInEnabledResult;
  });
};
export const isOptInEnabledForGuild = function isOptInEnabledForGuild(_guildId) {
  guild = guild.getGuild(_guildId);
  currentUser = currentUser.getCurrentUser();
  let tmp2 = null != _guildId && null != guild && null != currentUser;
  if (tmp2) {
    const features = guild.features;
    let isOptInEnabledResult = features.has(constants.COMMUNITY) || currentUser.isStaff();
    if (isOptInEnabledResult) {
      isOptInEnabledResult = optInEnabled.isOptInEnabled(_guildId);
    }
    tmp2 = isOptInEnabledResult;
  }
  return tmp2;
};
export const useShouldShowOnboardingAdminUpsellForGuild = function useShouldShowOnboardingAdminUpsellForGuild(arg0) {
  const _require = arg0;
  const items = [createGuildRecordFromRust, getUncachedChannelPermissions];
  return _require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const guild = outer1_2.getGuild(closure_0);
    let flag;
    const canResult = outer1_3.can(outer1_7.MANAGE_GUILD, guild);
    if (guild != null) {
      const features = guild.features;
      flag = features.has(outer1_6.GUILD_ONBOARDING_EVER_ENABLED);
    }
    if (flag == null) {
      flag = false;
    }
    const canResult1 = outer1_3.can(outer1_7.MANAGE_ROLES, guild);
    return null != guild && canResult && outer1_3.can(outer1_7.MANAGE_ROLES, guild) && !flag;
  });
};