import { AnalyticEvents } from "ME";
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.rqEZdu);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: function useInAppNotificationsSettingValue() {
    const FocusMode = require(3866) /* explicitContentFromProto */.FocusMode;
    const setting = FocusMode.useSetting();
    const ShowInAppNotifications = require(3866) /* explicitContentFromProto */.ShowInAppNotifications;
    let setting1 = !setting;
    if (!setting) {
      setting1 = ShowInAppNotifications.useSetting();
    }
    return setting1;
  },
  onValueChange: function updateInAppNotificationSettings(notifications_in_app_enabled) {
    const ShowInAppNotifications = require(3866) /* explicitContentFromProto */.ShowInAppNotifications;
    ShowInAppNotifications.updateSetting(notifications_in_app_enabled);
    let obj = importDefault(698);
    obj = { notifications_in_app_enabled };
    obj.track(AnalyticEvents.LOCAL_SETTINGS_UPDATED, obj);
  },
  useDescription: function useInAppNotificationsDescription() {
    let stringResult;
    if (obj.useFocusModeEnabled()) {
      const intl = tmp(1236).intl;
      stringResult = intl.string(tmp(1236).t.cIRG0s);
    }
    return stringResult;
  },
  useIsDisabled: require("useFocusModeEnabled").useFocusModeEnabled
});
let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.rqEZdu);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: function useInAppNotificationsSettingValue() {
    const FocusMode = require(3866) /* explicitContentFromProto */.FocusMode;
    const setting = FocusMode.useSetting();
    const ShowInAppNotifications = require(3866) /* explicitContentFromProto */.ShowInAppNotifications;
    let setting1 = !setting;
    if (!setting) {
      setting1 = ShowInAppNotifications.useSetting();
    }
    return setting1;
  },
  onValueChange: function updateInAppNotificationSettings(notifications_in_app_enabled) {
    const ShowInAppNotifications = require(3866) /* explicitContentFromProto */.ShowInAppNotifications;
    ShowInAppNotifications.updateSetting(notifications_in_app_enabled);
    let obj = importDefault(698);
    obj = { notifications_in_app_enabled };
    obj.track(AnalyticEvents.LOCAL_SETTINGS_UPDATED, obj);
  },
  useDescription: function useInAppNotificationsDescription() {
    let stringResult;
    if (obj.useFocusModeEnabled()) {
      const intl = tmp(1236).intl;
      stringResult = intl.string(tmp(1236).t.cIRG0s);
    }
    return stringResult;
  },
  useIsDisabled: require("useFocusModeEnabled").useFocusModeEnabled
};
const result = require("explicitContentFromProto").fileFinishedImporting("modules/user_settings/defs/native/InAppNotificationsSetting.tsx");

export default toggle;