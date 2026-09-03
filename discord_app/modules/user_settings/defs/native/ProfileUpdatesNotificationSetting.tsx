// === Module 15347: toggle ===

// Module 15347 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import MobileUserSettings from "MobileUserSettings" /* 7896 */;
import onProfileUpdatesNotificationSettingsChanged from "onProfileUpdatesNotificationSettingsChanged" /* 15348 */;
import createToggle from "createToggle" /* 11292 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.VxBO2F);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.F4VeBe);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.EnableProfileUpdatesNotifications.useSetting,
  onValueChange: onProfileUpdatesNotificationSettingsChanged.onProfileUpdatesNotificationSettingsChanged
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.VxBO2F);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.F4VeBe);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.EnableProfileUpdatesNotifications.useSetting,
  onValueChange: onProfileUpdatesNotificationSettingsChanged.onProfileUpdatesNotificationSettingsChanged
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ProfileUpdatesNotificationSetting.tsx");

export default toggle;