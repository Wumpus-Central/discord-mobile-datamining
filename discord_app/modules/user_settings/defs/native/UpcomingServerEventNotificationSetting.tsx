// === Module 16811: UpcomingServerEventNotificationSetting ===

// Module 16811 (UpcomingServerEventNotificationSetting)
import util from "util" /* 1112 */;
import UserSettings from "UserSettings" /* 4619 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import UpcomingServerEventExperiment from "UpcomingServerEventExperiment" /* 16812 */;
import UpcomingServerEventNotificationUtils from "UpcomingServerEventNotificationUtils" /* 16813 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.MCVmjA);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.R0VpSW);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableUpcomingServerEventNotifications.useSetting,
  onValueChange: UpcomingServerEventNotificationUtils.onUpcomingServerEventNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return UpcomingServerEventExperiment.useUpcomingServerEventExperiment("tabsV2Settings").showSettingsToggle;
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/UpcomingServerEventNotificationSetting.tsx");

export default toggle;