// === Module 17069: CommunityActivityAlertsSetting ===

// Module 17069 (CommunityActivityAlertsSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import _modDef3206 from "module_3206" /* 3206 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 10550 */;

require = fn;
let SettingBuilders = fn(11914);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.D9yVAH);
  },
  parent: fn(9513).MobileUserSettings.NOTIFICATIONS,
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
SettingBuilders = fn(11914);
const obj4 = {};
const merged = Object.assign(route);
obj4.useTitle = function useTitle() {
  const intl = util.intl;
  return intl.string(_modDef3206.GI8o2C);
};
obj4.useDescription = function useDescription() {
  const intl = util.intl;
  return intl.string(_modDef3206["5g09KR"]);
};
obj4.parent = fn(17051).MobileNotifSettings.NOTIF_CATEGORY_SERVERS;
const route1 = SettingBuilders.createRoute(obj4);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/CommunityActivityAlertsSetting.tsx");

export default route;
export const RedesignCommunityActivityAlertsSetting = route1;