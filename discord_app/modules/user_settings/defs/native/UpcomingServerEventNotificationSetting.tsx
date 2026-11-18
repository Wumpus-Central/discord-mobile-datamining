// === Module 16994: UpcomingServerEventNotificationSetting ===

// Module 16994 (UpcomingServerEventNotificationSetting)
import util from "util" /* 1113 */;
import UserSettings from "UserSettings" /* 4648 */;
import SettingsConstants from "SettingsConstants" /* 8624 */;
import UpcomingServerEventExperiment from "UpcomingServerEventExperiment" /* 16995 */;
import UpcomingServerEventNotificationUtils from "UpcomingServerEventNotificationUtils" /* 16996 */;
import SettingBuilders from "SettingBuilders" /* 11897 */;
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