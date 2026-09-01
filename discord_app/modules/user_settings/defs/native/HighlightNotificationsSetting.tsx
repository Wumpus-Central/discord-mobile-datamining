// discord_app/modules/user_settings/defs/native/HighlightNotificationsSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import closure_2 from "../../../../stores/GuildStore.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { Row } from "../../notifications/native/UserSettingsHighlightNotifications.tsx";

require = arg1;
function useHighlightNotifications() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => guildCount.getGuildCount() > 0);
}
createToggle = {
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
  screen: createToggle,
};
createToggle = {
  route: require("ME").UserSettingsSections.HIGHLIGHT_NOTIFICATIONS,
  getComponent() {
    return Row /* Row */.default;
  },
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting(
  "modules/user_settings/defs/native/HighlightNotificationsSetting.tsx",
);

export default createToggle;
export { useHighlightNotifications };
