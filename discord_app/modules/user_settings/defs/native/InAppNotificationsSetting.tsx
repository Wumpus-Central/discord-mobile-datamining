// discord_app/modules/user_settings/defs/native/InAppNotificationsSetting.tsx
import react from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import UserSettings from "../../UserSettings.tsx";
import _modDef2847 from "../../../notifications/NotificationSettings.messages.js";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import FocusModeUtils from "../../../notifications/FocusModeUtils.tsx";
import notifications_NotificationSettingsUtils from "../../../notifications/NotificationSettingsUtils.tsx";
import MobileNotifSettings from "../../notifications/native/codegen/MobileNotifSettings.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders_mod from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const AnalyticEvents = Constants.AnalyticEvents;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const FocusMode = UserSettings.FocusMode;
      const setting = FocusMode.useSetting();
      const ShowInAppNotifications = UserSettings.ShowInAppNotifications;
      const tmp2 = !setting && ShowInAppNotifications.useSetting();
      return tmp2;
    }
  : () => {
      const FocusMode = UserSettings.FocusMode;
      const setting = FocusMode.useSetting();
      const ShowInAppNotifications = UserSettings.ShowInAppNotifications;
      const tmp2 = !setting && ShowInAppNotifications.useSetting();
      return tmp2;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
      const obj2 = FocusModeUtils;
      const focusModeEnabled = obj2.useFocusModeEnabled();
      if (cResult[0] !== focusModeEnabled) {
        let stringResult;
        if (focusModeEnabled) {
          const intl = intl2.intl;
          stringResult = intl.string(intl2.t.cIRG0s);
        }
        cResult[0] = focusModeEnabled;
        cResult[1] = stringResult;
        tmp5 = stringResult;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : () => {
      let stringResult;
      const obj = FocusModeUtils;
      if (obj.useFocusModeEnabled()) {
        const intl = intl2.intl;
        stringResult = intl.string(intl2.t.cIRG0s);
      }
      return stringResult;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let obj = {
  useValue: tmp2,
  onValueChange: function updateInAppNotificationSettings(notifications_in_app_enabled) {
    const ShowInAppNotifications = UserSettings.ShowInAppNotifications;
    ShowInAppNotifications.updateSetting(notifications_in_app_enabled);
    const obj = AnalyticsUtilsDefault;
    const obj2 = { notifications_in_app_enabled };
    obj.track(AnalyticEvents.LOCAL_SETTINGS_UPDATED, obj2);
  },
  useIsDisabled: FocusModeUtils.useFocusModeEnabled,
};
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
      const obj2 = FocusModeUtils;
      const focusModeEnabled = obj2.useFocusModeEnabled();
      if (cResult[0] !== focusModeEnabled) {
        let stringResult;
        const intl = intl2.intl;
        const string = intl.string;
        if (focusModeEnabled) {
          stringResult = string(intl2.t.cIRG0s);
        } else {
          stringResult = string(_modDef2847["T/zMdV"]);
        }
        cResult[0] = focusModeEnabled;
        cResult[1] = stringResult;
        tmp5 = stringResult;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : () => {
      let stringResult;
      const obj = FocusModeUtils;
      const focusModeEnabled = obj.useFocusModeEnabled();
      const intl = intl2.intl;
      const string = intl.string;
      if (focusModeEnabled) {
        stringResult = string(intl2.t.cIRG0s);
      } else {
        stringResult = string(_modDef2847["T/zMdV"]);
      }
      return stringResult;
    };
let SettingBuilders = SettingBuilders_mod;
let obj2 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.rqEZdu);
  },
  useDescription: tmp3,
  parent: MobileUserSettings.NOTIFICATIONS,
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return !obj.useIsDeclarativeSettingsUIAvailable("InAppNotificationsSetting");
  },
};
const createToggle = SettingBuilders.createToggle;
const merged = Object.assign(obj);
const toggle = createToggle(obj2);
SettingBuilders = SettingBuilders_mod;
const createToggle2 = SettingBuilders.createToggle;
const obj3 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2847.sH5mu9);
  },
  useDescription: tmp4,
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useIsDeclarativeSettingsUIAvailable("RedesignInAppNotificationsSetting");
  },
};
const merged1 = Object.assign(obj);
const toggle2 = createToggle2(obj3);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InAppNotificationsSetting.tsx");

export default toggle;
export const RedesignInAppNotificationsSetting = toggle2;
