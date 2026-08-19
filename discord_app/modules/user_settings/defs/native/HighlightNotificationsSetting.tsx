// === Module 14829: useHighlightNotifications ===

// Module 14829 (useHighlightNotifications)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import createToggle from "createToggle" /* 10669 */;

require = fn;
function useHighlightNotifications() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => guildCount.getGuildCount() > 0);
}
{
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.o8Bypv);
  },
  parent: require("MobileUserSettings").MobileUserSettings.NOTIFICATIONS,
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["Vw/Xn8"]);
  },
  usePredicate: useHighlightNotifications,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.HIGHLIGHT_NOTIFICATIONS,
  getComponent() {
    return require(14830) /* Row */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/HighlightNotificationsSetting.tsx");

export default createToggle;
export { useHighlightNotifications };