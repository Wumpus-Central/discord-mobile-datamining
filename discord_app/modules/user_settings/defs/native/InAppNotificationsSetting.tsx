// === Module 15571: InAppNotificationsSetting ===

// Module 15571 (InAppNotificationsSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import UserSettings from "UserSettings" /* 1935 */;
import _modDef2722 from "module_2722" /* 2722 */;
import SettingsConstants from "SettingsConstants" /* 8079 */;
import FocusModeUtils from "FocusModeUtils" /* 10219 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 14538 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15572 */;
import SettingBuilders from "SettingBuilders" /* 11601 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
let obj = {
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
  useIsDisabled: FocusModeUtils.useFocusModeEnabled
};
obj = {};
const merged = Object.assign(obj);
obj.useTitle = function useTitle() {
  const intl = util.intl;
  return intl.string(util.t.rqEZdu);
};
obj.useDescription = function useInAppNotificationsDescription() {
  let stringResult;
  if (obj.useFocusModeEnabled()) {
    const intl = util.intl;
    stringResult = intl.string(util.t.cIRG0s);
  }
  return stringResult;
};
obj.parent = SettingsConstants.MobileUserSettings.NOTIFICATIONS;
obj.usePredicate = function usePredicate() {
  return !notifications_NotificationSettingsUtils.useIsDeclarativeSettingsUIAvailable("InAppNotificationsSetting");
};
const toggle = SettingBuilders.createToggle(obj);
obj = {};
const merged1 = Object.assign(obj);
obj.useTitle = function useTitle() {
  const intl = util.intl;
  return intl.string(_modDef2722.sH5mu9);
};
obj.useDescription = function useRedesignInAppNotificationsDescription() {
  const focusModeEnabled = FocusModeUtils.useFocusModeEnabled();
  const intl = util.intl;
  const string = intl.string;
  if (focusModeEnabled) {
    let stringResult = string(util.t.cIRG0s);
  } else {
    stringResult = string(_modDef2722["T/zMdV"]);
  }
  return stringResult;
};
obj.parent = MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN;
obj.usePredicate = function usePredicate() {
  return notifications_NotificationSettingsUtils.useIsDeclarativeSettingsUIAvailable("RedesignInAppNotificationsSetting");
};
const toggle1 = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InAppNotificationsSetting.tsx");

export default toggle;
export const RedesignInAppNotificationsSetting = toggle1;