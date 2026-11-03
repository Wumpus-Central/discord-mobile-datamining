// === Module 17652: SummaryReminderNotificationSetting ===

// Module 17652 (SummaryReminderNotificationSetting)
import util from "util" /* 1113 */;
import UserSettings from "UserSettings" /* 4966 */;
import SettingsConstants from "SettingsConstants" /* 8556 */;
import SummaryReminderNotificationExperiment from "SummaryReminderNotificationExperiment" /* 17653 */;
import SummaryReminderNotificationUtils from "SummaryReminderNotificationUtils" /* 17654 */;
import SettingBuilders from "SettingBuilders" /* 11677 */;
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