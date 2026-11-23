// === Module 16914: CommunityActivityAlertsSetting ===

// Module 16914 (CommunityActivityAlertsSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 11101 */;

require = fn;
let SettingBuilders = fn(11937);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.D9yVAH);
  },
  parent: fn(8712).MobileUserSettings.NOTIFICATIONS,
  useDescription: function useCommunityActivityAlertsSettingDescription() {
    const intl = util.intl;
    return intl.string(util.t["0PhAOH"]);
  },
  usePredicate: function useHasCommunityActivityAlertsSetting() {
    items = [GuildIncidentsStore];
    return initialize.useStateFromStores(items, () => Object.keys(guildAlertSettings.getGuildAlertSettings()).length > 0);
  },
  screen: {
    route: fn(1071).UserSettingsSections.COMMUNITY_ALERTS,
    getComponent() {
      return require("UserSettingsCommunityNotifications").default;
    }
  }
});
SettingBuilders = fn(11937);
const obj4 = {};
const merged = Object.assign(route);
obj4.parent = fn(16896).MobileNotifSettings.NOTIF_CATEGORY_SERVERS;
const route1 = SettingBuilders.createRoute(obj4);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/CommunityActivityAlertsSetting.tsx");

export default route;
export const RedesignCommunityActivityAlertsSetting = route1;