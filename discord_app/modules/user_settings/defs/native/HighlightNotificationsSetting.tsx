import createGuildRecordFromRust from "createGuildRecordFromRust";
import createToggle from "createToggle";

const require = arg1;
function useHighlightNotifications() {
  const items = [createGuildRecordFromRust];
  return require(589) /* initialize */.useStateFromStores(items, () => guildCount.getGuildCount() > 0);
}
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.o8Bypv);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["Vw/Xn8"]);
  },
  usePredicate: useHighlightNotifications,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.HIGHLIGHT_NOTIFICATIONS,
  getComponent() {
    return require(14601) /* Row */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/HighlightNotificationsSetting.tsx");

export default createToggle;
export { useHighlightNotifications };