// === Module 15327: toggle ===

// Module 15327 (toggle)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import MobileUserSettings from "MobileUserSettings" /* 7896 */;
import useFocusModeEnabled from "useFocusModeEnabled" /* 10199 */;
import createToggle from "createToggle" /* 11292 */;

const AnalyticEvents = ME.AnalyticEvents;
const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.rqEZdu);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: function useInAppNotificationsSettingValue() {
    const FocusMode = explicitContentFromProto.FocusMode;
    const setting = FocusMode.useSetting();
    const ShowInAppNotifications = explicitContentFromProto.ShowInAppNotifications;
    let setting1 = !setting;
    if (!setting) {
      setting1 = ShowInAppNotifications.useSetting();
    }
    return setting1;
  },
  onValueChange: function updateInAppNotificationSettings(notifications_in_app_enabled) {
    const ShowInAppNotifications = explicitContentFromProto.ShowInAppNotifications;
    ShowInAppNotifications.updateSetting(notifications_in_app_enabled);
    let obj = expandEventPropertiesDefault;
    obj = { notifications_in_app_enabled };
    obj.track(AnalyticEvents.LOCAL_SETTINGS_UPDATED, obj);
  },
  useDescription: function useInAppNotificationsDescription() {
    let stringResult;
    if (obj.useFocusModeEnabled()) {
      const intl = tmp(1233).intl;
      stringResult = intl.string(tmp(1233).t.cIRG0s);
    }
    return stringResult;
  },
  useIsDisabled: useFocusModeEnabled.useFocusModeEnabled
});
let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.rqEZdu);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: function useInAppNotificationsSettingValue() {
    const FocusMode = explicitContentFromProto.FocusMode;
    const setting = FocusMode.useSetting();
    const ShowInAppNotifications = explicitContentFromProto.ShowInAppNotifications;
    let setting1 = !setting;
    if (!setting) {
      setting1 = ShowInAppNotifications.useSetting();
    }
    return setting1;
  },
  onValueChange: function updateInAppNotificationSettings(notifications_in_app_enabled) {
    const ShowInAppNotifications = explicitContentFromProto.ShowInAppNotifications;
    ShowInAppNotifications.updateSetting(notifications_in_app_enabled);
    let obj = expandEventPropertiesDefault;
    obj = { notifications_in_app_enabled };
    obj.track(AnalyticEvents.LOCAL_SETTINGS_UPDATED, obj);
  },
  useDescription: function useInAppNotificationsDescription() {
    let stringResult;
    if (obj.useFocusModeEnabled()) {
      const intl = tmp(1233).intl;
      stringResult = intl.string(tmp(1233).t.cIRG0s);
    }
    return stringResult;
  },
  useIsDisabled: useFocusModeEnabled.useFocusModeEnabled
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/InAppNotificationsSetting.tsx");

export default toggle;