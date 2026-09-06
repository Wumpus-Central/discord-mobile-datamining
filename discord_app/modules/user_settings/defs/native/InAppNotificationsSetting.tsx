// discord_app/modules/user_settings/defs/native/InAppNotificationsSetting.tsx
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import UserSettings from "../../UserSettings.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import FocusModeUtils from "../../../notifications/FocusModeUtils.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
  useIsDisabled: FocusModeUtils.useFocusModeEnabled,
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InAppNotificationsSetting.tsx");

export default toggle;
