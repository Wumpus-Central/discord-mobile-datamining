// === Module 17748: SummaryReminderNotificationSetting ===

// Module 17748 (SummaryReminderNotificationSetting)
import util from "util" /* 1113 */;
import UserSettings from "UserSettings" /* 4966 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import SummaryReminderNotificationExperiment from "SummaryReminderNotificationExperiment" /* 17749 */;
import SummaryReminderNotificationUtils from "SummaryReminderNotificationUtils" /* 17750 */;
import SettingBuilders from "SettingBuilders" /* 11728 */;
import size from "module_2" /* 2 */;

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
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SummaryReminderNotificationSetting.tsx");

export default toggle;