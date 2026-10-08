// discord_app/modules/opt_in_channels/isOptInEnabled.tsx
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const require = globalThis.__r;

const require = fn;
const Constants = fn(1085);
({ GuildFeatures: metroRequire, Permissions: closure_7 } = Constants);
fn(558);
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useOptInEnabledForGuild(arg0) {
      _require = arg0;
      const cResult = require("c").c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserGuildSettingsStore, GuildStore, UserStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        class E {
          constructor() {
            isOptInEnabledResult = closure_4.isOptInEnabled(closure_0);
            guild = closure_2.getGuild(closure_0);
            flag = undefined;
            if (guild != null) {
              features = guild.features;
              tmp3 = GuildFeatures;
              flag = features.has(GuildFeatures.COMMUNITY);
            }
            if (flag == null) {
              flag = false;
            }
            currentUser = closure_5.getCurrentUser();
            flag2 = undefined;
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
          }
        }
        cResult[1] = arg0;
        cResult[2] = E;
      } else {
        class E {
          constructor() {
            isOptInEnabledResult = closure_4.isOptInEnabled(closure_0);
            guild = closure_2.getGuild(closure_0);
            flag = undefined;
            if (guild != null) {
              features = guild.features;
              tmp3 = GuildFeatures;
              flag = features.has(GuildFeatures.COMMUNITY);
            }
            if (flag == null) {
              flag = false;
            }
            currentUser = closure_5.getCurrentUser();
            flag2 = undefined;
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
          }
        }
      }
      const obj = require("c");
      return require("initialize").useStateFromStores(first, E);
    }
  : function useOptInEnabledForGuild(arg0) {
      _require = arg0;
      const items = [UserGuildSettingsStore, GuildStore, UserStore];
      return require("initialize").useStateFromStores(items, () => {
        let isOptInEnabledResult = UserGuildSettingsStore.isOptInEnabled(closure_0);
        guild = GuildStore.getGuild(closure_0);
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/opt_in_channels/isOptInEnabled.tsx");

export const useOptInEnabledForGuild = tmp3;
export const isOptInEnabledForGuild = function isOptInEnabledForGuild(guild_id) {
  guild = GuildStore.getGuild(guild_id);
  const currentUser = UserStore.getCurrentUser();
  let tmp2 = null != guild_id && null != guild && null != currentUser;
  if (tmp2) {
    const features = guild.features;
    let isOptInEnabledResult = features.has(constants.COMMUNITY) || currentUser.isStaff();
    if (isOptInEnabledResult) {
      isOptInEnabledResult = UserGuildSettingsStore.isOptInEnabled(guild_id);
    }
    tmp2 = isOptInEnabledResult;
  }
  return tmp2;
};
export const useShouldShowOnboardingAdminUpsellForGuild = ReactCompilerGating.isReactCompilerEnabled()
  ? function useShouldShowOnboardingAdminUpsellForGuild(arg0) {
      _require = arg0;
      const cResult = require("c").c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore, PermissionStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function s() {
          guild = GuildStore.getGuild(closure_0);
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
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj = require("c");
      return require("initialize").useStateFromStores(first, tmp7);
    }
  : function useShouldShowOnboardingAdminUpsellForGuild(arg0) {
      _require = arg0;
      const items = [GuildStore, PermissionStore];
      return require("initialize").useStateFromStores(items, () => {
        guild = GuildStore.getGuild(closure_0);
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
