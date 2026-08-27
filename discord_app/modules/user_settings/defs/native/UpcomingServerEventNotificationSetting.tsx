// === Module 15056: toggle ===

// Module 15056 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4134 */;
import MobileUserSettings from "MobileUserSettings" /* 7816 */;
import apexExperiment from "apexExperiment" /* 15057 */;
import onUpcomingServerEventNotificationSettingsChanged from "onUpcomingServerEventNotificationSettingsChanged" /* 15058 */;
import createToggle from "createToggle" /* 10988 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.MCVmjA);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.R0VpSW);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.EnableUpcomingServerEventNotifications.useSetting,
  onValueChange: onUpcomingServerEventNotificationSettingsChanged.onUpcomingServerEventNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return apexExperiment.useUpcomingServerEventExperiment("tabsV2Settings").showSettingsToggle;
  }
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.MCVmjA);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.R0VpSW);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.EnableUpcomingServerEventNotifications.useSetting,
  onValueChange: onUpcomingServerEventNotificationSettingsChanged.onUpcomingServerEventNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return apexExperiment.useUpcomingServerEventExperiment("tabsV2Settings").showSettingsToggle;
  }
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/UpcomingServerEventNotificationSetting.tsx");

export default toggle;