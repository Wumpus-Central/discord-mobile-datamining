// === Module 15621: CommunityActivityAlertsSetting ===

// Module 15621 (CommunityActivityAlertsSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 11293 */;

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11262);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasCommunityActivityAlertsSetting() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildIncidentsStore];
    const fn = function s() {
      return Object.keys(guildAlertSettings.getGuildAlertSettings()).length > 0;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useHasCommunityActivityAlertsSetting() {
  const items = [GuildIncidentsStore];
  return initialize.useStateFromStores(items, () => Object.keys(guildAlertSettings.getGuildAlertSettings()).length > 0);
});
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.D9yVAH);
  },
  parent: fn(7966).MobileUserSettings.NOTIFICATIONS,
  useDescription: function useCommunityActivityAlertsSettingDescription() {
    const intl = util.intl;
    return intl.string(util.t["0PhAOH"]);
  },
  usePredicate: ReactCompilerGating.isReactCompilerEnabled() ? (function useHasCommunityActivityAlertsSetting() {
    const cResult = c.c(2);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [GuildIncidentsStore];
      const fn = function s() {
        return Object.keys(guildAlertSettings.getGuildAlertSettings()).length > 0;
      };
      cResult[0] = items;
      cResult[1] = fn;
      tmp4 = items;
      tmp5 = fn;
    } else {
      [tmp4, tmp5] = cResult;
    }
    return initialize.useStateFromStores(tmp4, tmp5);
  }) : (function useHasCommunityActivityAlertsSetting() {
    const items = [GuildIncidentsStore];
    return initialize.useStateFromStores(items, () => Object.keys(guildAlertSettings.getGuildAlertSettings()).length > 0);
  }),
  screen: {
    route: fn(1085).UserSettingsSections.COMMUNITY_ALERTS,
    getComponent() {
      return require("UserSettingsCommunityNotifications").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/CommunityActivityAlertsSetting.tsx");

export default route;