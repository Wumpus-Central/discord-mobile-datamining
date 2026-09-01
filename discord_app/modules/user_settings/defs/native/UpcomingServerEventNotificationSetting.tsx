// === Module 15108: toggle ===

// Module 15108 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import MobileUserSettings from "MobileUserSettings" /* 7884 */;
import apexExperiment from "apexExperiment" /* 15109 */;
import onUpcomingServerEventNotificationSettingsChanged from "onUpcomingServerEventNotificationSettingsChanged" /* 15110 */;
import createToggle from "createToggle" /* 11068 */;

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