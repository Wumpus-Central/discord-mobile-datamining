// === Module 16125: UpcomingServerEventNotificationSetting ===

// Module 16125 (UpcomingServerEventNotificationSetting)
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import SettingsConstants from "SettingsConstants" /* 7993 */;
import UpcomingServerEventExperiment from "UpcomingServerEventExperiment" /* 16126 */;
import UpcomingServerEventNotificationUtils from "UpcomingServerEventNotificationUtils" /* 16127 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
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
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/UpcomingServerEventNotificationSetting.tsx");

export default toggle;