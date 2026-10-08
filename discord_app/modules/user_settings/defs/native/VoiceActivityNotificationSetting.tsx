// === Module 15603: VoiceActivityNotificationSetting ===

// Module 15603 (VoiceActivityNotificationSetting)
import Constants from "Constants" /* 1085 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import UserSettings from "UserSettings" /* 2040 */;
import NotificationConstants from "NotificationConstants" /* 4720 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const constants = NotificationConstants.NotificationSettingsUpdateType;
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.wtk08S);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableVoiceActivityNotifications.useSetting,
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.rngMNx);
  },
  onValueChange(voice_activity_notifications) {
    const EnableVoiceActivityNotifications = UserSettings.EnableVoiceActivityNotifications;
    EnableVoiceActivityNotifications.updateSetting(voice_activity_notifications);
    AnalyticsUtilsDefault.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, { update_type: constants.ACCOUNT, voice_activity_notifications });
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/VoiceActivityNotificationSetting.tsx");

export default toggle;