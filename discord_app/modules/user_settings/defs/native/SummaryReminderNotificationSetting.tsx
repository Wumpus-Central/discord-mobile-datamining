// === Module 17864: SummaryReminderNotificationSetting ===

// Module 17864 (SummaryReminderNotificationSetting)
import util from "util" /* 1113 */;
import UserSettings from "UserSettings" /* 4967 */;
import SettingsConstants from "SettingsConstants" /* 8507 */;
import SummaryReminderNotificationExperiment from "SummaryReminderNotificationExperiment" /* 17865 */;
import SummaryReminderNotificationUtils from "SummaryReminderNotificationUtils" /* 17866 */;
import SettingBuilders from "SettingBuilders" /* 11694 */;
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