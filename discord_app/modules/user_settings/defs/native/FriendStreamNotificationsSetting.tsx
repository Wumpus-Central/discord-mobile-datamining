// === Module 15042: toggle ===

// Module 15042 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4134 */;
import MobileUserSettings from "MobileUserSettings" /* 7816 */;
import onGoLiveNotificationSettingsChanged from "onGoLiveNotificationSettingsChanged" /* 15043 */;
import createToggle from "createToggle" /* 10988 */;

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