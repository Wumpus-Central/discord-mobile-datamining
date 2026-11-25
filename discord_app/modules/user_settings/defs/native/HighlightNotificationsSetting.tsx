// === Module 17071: HighlightNotificationsSetting ===

// Module 17071 (HighlightNotificationsSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import _modDef3206 from "module_3206" /* 3206 */;
import GuildStore from "GuildStore" /* 4883 */;

require = fn;
function useHighlightNotifications() {
  items = [GuildStore];
  return initialize.useStateFromStores(items, () => guildCount.getGuildCount() > 0);
}
let SettingBuilders = fn(11914);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.o8Bypv);
  },
  parent: fn(9513).MobileUserSettings.NOTIFICATIONS,
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t["Vw/Xn8"]);
  },
  usePredicate: useHighlightNotifications,
  screen: {
    route: fn(1071).UserSettingsSections.HIGHLIGHT_NOTIFICATIONS,
    getComponent() {
      return require("UserSettingsHighlightNotifications").default;
    }
  }
});
SettingBuilders = fn(11914);
const obj4 = {};
const merged = Object.assign(route);
obj4.useTitle = function useTitle() {
  const intl = util.intl;
  return intl.string(_modDef3206["Sq+zmG"]);
};
obj4.useDescription = function useDescription() {
  const intl = util.intl;
  return intl.string(_modDef3206.yHrluZ);
};
obj4.parent = fn(17051).MobileNotifSettings.NOTIF_CATEGORY_DISCOVERY_HIGHLIGHTS;
const route1 = SettingBuilders.createRoute(obj4);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/HighlightNotificationsSetting.tsx");

export default route;
export { useHighlightNotifications };
export const RedesignHighlightNotificationsSetting = route1;