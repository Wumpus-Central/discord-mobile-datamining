// === Module 14817: toggle ===

// Module 14817 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import onServerTrendingNotificationSettingsChanged from "onServerTrendingNotificationSettingsChanged" /* 14818 */;
import createToggle from "createToggle" /* 10669 */;

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