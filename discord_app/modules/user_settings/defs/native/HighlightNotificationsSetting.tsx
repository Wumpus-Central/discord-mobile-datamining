// === Module 17129: HighlightNotificationsSetting ===

// Module 17129 (HighlightNotificationsSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import _modDef3207 from "module_3207" /* 3207 */;
import GuildStore from "GuildStore" /* 4914 */;

require = fn;
function useHighlightNotifications() {
  items = [GuildStore];
  return initialize.useStateFromStores(items, () => guildCount.getGuildCount() > 0);
}
let SettingBuilders = fn(11970);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.o8Bypv);
  },
  parent: fn(9556).MobileUserSettings.NOTIFICATIONS,
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
SettingBuilders = fn(11970);
const obj4 = {};
const merged = Object.assign(route);
obj4.useTitle = function useTitle() {
  const intl = util.intl;
  return intl.string(_modDef3207["Sq+zmG"]);
};
obj4.useDescription = function useDescription() {
  const intl = util.intl;
  return intl.string(_modDef3207.yHrluZ);
};
obj4.parent = fn(17109).MobileNotifSettings.NOTIF_CATEGORY_DISCOVERY_HIGHLIGHTS;
const route1 = SettingBuilders.createRoute(obj4);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/HighlightNotificationsSetting.tsx");

export default route;
export { useHighlightNotifications };
export const RedesignHighlightNotificationsSetting = route1;