// === Module 16494: SummaryReminderNotificationSetting ===

// Module 16494 (SummaryReminderNotificationSetting)
import util from "util" /* 1128 */;
import UserSettings from "UserSettings" /* 2044 */;
import SettingsConstants from "SettingsConstants" /* 8213 */;
import SummaryReminderNotificationExperiment from "SummaryReminderNotificationExperiment" /* 16495 */;
import SummaryReminderNotificationUtils from "SummaryReminderNotificationUtils" /* 16496 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.xEqC6q);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.KmVXll);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableSummaryReminderNotifications.useSetting,
  onValueChange: SummaryReminderNotificationUtils.onSummaryReminderNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return SummaryReminderNotificationExperiment.useSummaryReminderNotificationExperiment("tabsV2Settings").showSettingsToggle;
  }
});
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/SummaryReminderNotificationSetting.tsx");

export default toggle;