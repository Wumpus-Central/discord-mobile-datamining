// === Module 17408: InAppNotificationsSetting ===

// Module 17408 (InAppNotificationsSetting)
import Constants from "Constants" /* 1072 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import _modDef2867 from "module_2867" /* 2867 */;
import UserSettings from "UserSettings" /* 4834 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import FocusModeUtils from "FocusModeUtils" /* 10999 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 16236 */;
import MobileNotifSettings from "MobileNotifSettings" /* 17409 */;
import SettingBuilders_mod from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const obj = {
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
    AnalyticsUtilsDefault.track(AnalyticEvents.LOCAL_SETTINGS_UPDATED, { notifications_in_app_enabled });
  },
  useIsDisabled: FocusModeUtils.useFocusModeEnabled
};
let SettingBuilders = SettingBuilders_mod;
const obj2 = {};
const merged = Object.assign(obj);
obj2.useTitle = function useTitle() {
  const intl = util.intl;
  return intl.string(util.t.rqEZdu);
};
obj2.useDescription = function useInAppNotificationsDescription() {
  let stringResult;
  if (obj.useFocusModeEnabled()) {
    const intl = util.intl;
    stringResult = intl.string(util.t.cIRG0s);
  }
  return stringResult;
};
obj2.parent = SettingsConstants.MobileUserSettings.NOTIFICATIONS;
obj2.usePredicate = function usePredicate() {
  return !notifications_NotificationSettingsUtils.useIsDeclarativeSettingsUIAvailable("InAppNotificationsSetting");
};
const toggle = SettingBuilders.createToggle(obj2);
let SettingBuilders = SettingBuilders_mod;
const obj3 = {};
const merged1 = Object.assign(obj);
obj3.useTitle = function useTitle() {
  const intl = util.intl;
  return intl.string(_modDef2867.sH5mu9);
};
obj3.useDescription = function useRedesignInAppNotificationsDescription() {
  const focusModeEnabled = FocusModeUtils.useFocusModeEnabled();
  const intl = util.intl;
  const string = intl.string;
  if (focusModeEnabled) {
    let stringResult = string(util.t.cIRG0s);
  } else {
    stringResult = string(_modDef2867["T/zMdV"]);
  }
  return stringResult;
};
obj3.parent = MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN;
obj3.usePredicate = function usePredicate() {
  return notifications_NotificationSettingsUtils.useIsDeclarativeSettingsUIAvailable("RedesignInAppNotificationsSetting");
};
const toggle1 = SettingBuilders.createToggle(obj3);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InAppNotificationsSetting.tsx");

export default toggle;
export const RedesignInAppNotificationsSetting = toggle1;