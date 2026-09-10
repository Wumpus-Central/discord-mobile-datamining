// === Module 15601: HighlightNotificationsSetting ===

// Module 15601 (HighlightNotificationsSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
function useHighlightNotifications() {
  const items = [GuildStore];
  return initialize.useStateFromStores(items, () => guildCount.getGuildCount() > 0);
}
fn(11540);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.o8Bypv);
  },
  parent: fn(8027).MobileUserSettings.NOTIFICATIONS,
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t["Vw/Xn8"]);
  },
  usePredicate: useHighlightNotifications,
  screen: {
    route: fn(1074).UserSettingsSections.HIGHLIGHT_NOTIFICATIONS,
    getComponent() {
      return require("UserSettingsHighlightNotifications").default;
    }
  }
};
SettingBuilders = SettingBuilders.createRoute(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/HighlightNotificationsSetting.tsx");

export default SettingBuilders;
export { useHighlightNotifications };