// discord_app/modules/user_settings/defs/native/HighlightNotificationsSetting.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import createToggle from "createToggle";

const require = arg1;
function useHighlightNotifications() {
  const items = [createGuildRecordFromRust];
  return require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => guildCount.getGuildCount() > 0);
}
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.o8Bypv);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["Vw/Xn8"]);
  },
  usePredicate: useHighlightNotifications,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.HIGHLIGHT_NOTIFICATIONS,
  getComponent() {
    return require("../../notifications/native/UserSettingsHighlightNotifications.tsx") /* Row */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/HighlightNotificationsSetting.tsx");

export default createToggle;
export { useHighlightNotifications };