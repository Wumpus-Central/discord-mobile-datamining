// === Module 15054: toggle ===

// Module 15054 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4134 */;
import MobileUserSettings from "MobileUserSettings" /* 7816 */;
import onServerTrendingNotificationSettingsChanged from "onServerTrendingNotificationSettingsChanged" /* 15055 */;
import createToggle from "createToggle" /* 10988 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Q3VWjI);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Wc1RcU);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.EnableServerTrendingNotifications.useSetting,
  onValueChange: onServerTrendingNotificationSettingsChanged.onServerTrendingNotificationSettingsChanged,
  usePredicate() {
    return false;
  }
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Q3VWjI);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Wc1RcU);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.EnableServerTrendingNotifications.useSetting,
  onValueChange: onServerTrendingNotificationSettingsChanged.onServerTrendingNotificationSettingsChanged,
  usePredicate() {
    return false;
  }
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ServerTrendingNotificationSetting.tsx");

export default toggle;