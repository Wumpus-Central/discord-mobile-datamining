// discord_app/modules/user_settings/defs/native/InAppNotificationsSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import expandEventPropertiesDefault from "../../../../utils/AnalyticsUtils.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import explicitContentFromProto from "../../UserSettings.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import useFocusModeEnabled from "../../../notifications/FocusModeUtils.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

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
  useIsDisabled: useFocusModeEnabled.useFocusModeEnabled,
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
  useIsDisabled: useFocusModeEnabled.useFocusModeEnabled,
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/InAppNotificationsSetting.tsx");

export default toggle;
