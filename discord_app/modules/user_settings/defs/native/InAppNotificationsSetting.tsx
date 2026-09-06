// === Module 15485: InAppNotificationsSetting ===

// Module 15485 (InAppNotificationsSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import UserSettings from "UserSettings" /* 1935 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import FocusModeUtils from "FocusModeUtils" /* 10090 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.rqEZdu);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: function useInAppNotificationsSettingValue() {
    const FocusMode = UserSettings.FocusMode;
    const setting = FocusMode.useSetting();
    const ShowInAppNotifications = UserSettings.ShowInAppNotifications;
    let setting1 = !setting;
    if (!setting) {
      setting1 = ShowInAppNotifications.useSetting();
    }
    return setting1;
  },
  onValueChange: function updateInAppNotificationSettings(notifications_in_app_enabled) {
    const ShowInAppNotifications = UserSettings.ShowInAppNotifications;
    ShowInAppNotifications.updateSetting(notifications_in_app_enabled);
    const obj = { notifications_in_app_enabled };
    obj.track(AnalyticEvents.LOCAL_SETTINGS_UPDATED, obj);
  },
  useDescription: function useInAppNotificationsDescription() {
    let stringResult;
    if (obj.useFocusModeEnabled()) {
      const intl = util.intl;
      stringResult = intl.string(util.t.cIRG0s);
    }
    return stringResult;
  },
  useIsDisabled: FocusModeUtils.useFocusModeEnabled
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InAppNotificationsSetting.tsx");

export default toggle;