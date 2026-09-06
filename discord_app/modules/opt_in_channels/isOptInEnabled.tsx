// === Module 7535: isOptInEnabled ===

// Module 7535 (isOptInEnabled)
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;
import UserStore from "UserStore" /* 1371 */;

const require = fn;
const Constants = fn(1074);
({ GuildFeatures: metroRequire, Permissions: closure_7 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/opt_in_channels/isOptInEnabled.tsx");

export const useOptInEnabledForGuild = function useOptInEnabledForGuild(id) {
  _require = id;
  const items = [UserGuildSettingsStore, GuildStore, UserStore];
  return require("initialize").useStateFromStores(items, () => {
    let isOptInEnabledResult = UserGuildSettingsStore.isOptInEnabled(closure_0);
    const guild = GuildStore.getGuild(closure_0);
    let flag;
    if (guild != null) {
      const features = guild.features;
      flag = features.has(constants.COMMUNITY);
    }
    if (flag == null) {
      flag = false;
    }
    const currentUser = UserStore.getCurrentUser();
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
  const guild = GuildStore.getGuild(_guildId);
  const currentUser = UserStore.getCurrentUser();
  let tmp2 = null != _guildId && null != guild && null != currentUser;
  if (tmp2) {
    const features = guild.features;
    let isOptInEnabledResult = features.has(constants.COMMUNITY) || currentUser.isStaff();
    if (isOptInEnabledResult) {
      isOptInEnabledResult = UserGuildSettingsStore.isOptInEnabled(_guildId);
    }
    tmp2 = isOptInEnabledResult;
  }
  return tmp2;
};
export const useShouldShowOnboardingAdminUpsellForGuild = function useShouldShowOnboardingAdminUpsellForGuild(arg0) {
  _require = arg0;
  const items = [GuildStore, PermissionStore];
  return require("initialize").useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let flag;
    const canResult = PermissionStore.can(constants2.MANAGE_GUILD, guild);
    if (guild != null) {
      const features = guild.features;
      flag = features.has(constants.GUILD_ONBOARDING_EVER_ENABLED);
    }
    if (flag == null) {
      flag = false;
    }
    const canResult1 = PermissionStore.can(constants2.MANAGE_ROLES, guild);
    return null != guild && canResult && PermissionStore.can(constants2.MANAGE_ROLES, guild) && !flag;
  });
};