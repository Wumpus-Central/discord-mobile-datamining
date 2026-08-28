// === Module 7227: useOptInEnabledForGuild ===

// Module 7227 (useOptInEnabledForGuild)
import closure_2 from "createGuildRecordFromRust" /* 1910 */;
import closure_3 from "getUncachedChannelPermissions" /* 4090 */;
import closure_4 from "updateUserGuildSettingsInternal" /* 4667 */;
import closure_5 from "mergeGuildAvatar" /* 1923 */;
import ME from "ME" /* 676 */;

const require = arg1;
({ GuildFeatures: closure_6, Permissions: error } = ME);
const result = require("set").fileFinishedImporting("modules/opt_in_channels/isOptInEnabled.tsx");

export const useOptInEnabledForGuild = function useOptInEnabledForGuild(id) {
  const _require = id;
  const items = [closure_4, closure_2, closure_5];
  return _require(589).useStateFromStores(items, () => {
    let isOptInEnabledResult = closure_1_4.isOptInEnabled(closure_0);
    const guild = closure_1_2.getGuild(closure_0);
    let flag;
    if (guild != null) {
      const features = guild.features;
      flag = features.has(closure_1_6.COMMUNITY);
    }
    if (flag == null) {
      flag = false;
    }
    const currentUser = closure_1_5.getCurrentUser();
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
  const items = [closure_2, closure_3];
  return _require(589).useStateFromStores(items, () => {
    const guild = closure_1_2.getGuild(closure_0);
    let flag;
    const canResult = closure_1_3.can(closure_1_7.MANAGE_GUILD, guild);
    if (guild != null) {
      const features = guild.features;
      flag = features.has(closure_1_6.GUILD_ONBOARDING_EVER_ENABLED);
    }
    if (flag == null) {
      flag = false;
    }
    const canResult1 = closure_1_3.can(closure_1_7.MANAGE_ROLES, guild);
    return null != guild && canResult && closure_1_3.can(closure_1_7.MANAGE_ROLES, guild) && !flag;
  });
};