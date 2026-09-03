// === Module 15338: toggle ===

// Module 15338 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import MobileUserSettings from "MobileUserSettings" /* 7896 */;
import onGoLiveNotificationSettingsChanged from "onGoLiveNotificationSettingsChanged" /* 15339 */;
import createToggle from "createToggle" /* 11292 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.FEFn90);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.StreamNotificationsEnabled.useSetting,
  onValueChange: onGoLiveNotificationSettingsChanged.onGoLiveNotificationSettingsChanged
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.FEFn90);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.StreamNotificationsEnabled.useSetting,
  onValueChange: onGoLiveNotificationSettingsChanged.onGoLiveNotificationSettingsChanged
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/FriendStreamNotificationsSetting.tsx");

export default toggle;