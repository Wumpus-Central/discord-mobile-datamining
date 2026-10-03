// discord_app/modules/user_settings/defs/native/InAppNotificationsSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import UserSettings from "../../UserSettings.tsx";
import _modDef2819 from "../../../notifications/NotificationSettings.messages.js";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import FocusModeUtils from "../../../notifications/FocusModeUtils.tsx";
import notifications_NotificationSettingsUtils from "../../../notifications/NotificationSettingsUtils.tsx";
import MobileNotifSettings from "../../notifications/native/codegen/MobileNotifSettings.tsx";
import "ReactCompilerGating";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders_mod from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const FocusMode = UserSettings.FocusMode;
      const setting = FocusMode.useSetting();
      const ShowInAppNotifications = UserSettings.ShowInAppNotifications;
      let setting1 = !setting;
      if (!setting) {
        setting1 = ShowInAppNotifications.useSetting();
      }
      return setting1;
    }
  : () => {
      const FocusMode = UserSettings.FocusMode;
      const setting = FocusMode.useSetting();
      const ShowInAppNotifications = UserSettings.ShowInAppNotifications;
      let setting1 = !setting;
      if (!setting) {
        setting1 = ShowInAppNotifications.useSetting();
      }
      return setting1;
    };
let ReactCompilerGating = ReactCompilerGating_mod;
let obj = {
  useValue: tmp2,
  onValueChange: function updateInAppNotificationSettings(notifications_in_app_enabled) {
    const ShowInAppNotifications = UserSettings.ShowInAppNotifications;
    ShowInAppNotifications.updateSetting(notifications_in_app_enabled);
    AnalyticsUtilsDefault.track(AnalyticEvents.LOCAL_SETTINGS_UPDATED, { notifications_in_app_enabled });
  },
  useIsDisabled: null,
};
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      const focusModeEnabled = FocusModeUtils.useFocusModeEnabled();
      if (cResult[0] !== focusModeEnabled) {
        let stringResult;
        if (focusModeEnabled) {
          const intl = util.intl;
          stringResult = intl.string(util.t.cIRG0s);
        }
        cResult[0] = focusModeEnabled;
        cResult[1] = stringResult;
        let tmp5 = stringResult;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : () => {
      let stringResult;
      if (obj.useFocusModeEnabled()) {
        const intl = util.intl;
        stringResult = intl.string(util.t.cIRG0s);
      }
      return stringResult;
    };
obj.useIsDisabled = FocusModeUtils.useFocusModeEnabled;
let SettingBuilders = SettingBuilders_mod;
let obj2 = {};
const merged = Object.assign(obj);
obj2.useTitle = function useTitle() {
  const intl = util.intl;
  return intl.string(util.t.rqEZdu);
};
obj2.useDescription = tmp3;
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
  return intl.string(_modDef2819.sH5mu9);
};
obj3.useDescription = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let cIRG0s = dependencyMap;
      const cResult = c.c(2);
      const focusModeEnabled = FocusModeUtils.useFocusModeEnabled();
      if (cResult[0] !== focusModeEnabled) {
        const intl = util.intl;
        const string = intl.string;
        if (focusModeEnabled) {
          cIRG0s = util.t.cIRG0s;
          let stringResult = string(cIRG0s);
        } else {
          stringResult = string(_modDef2819["T/zMdV"]);
        }
        cResult[0] = focusModeEnabled;
        cResult[1] = stringResult;
      } else {
        return cResult[1];
      }
    }
  : () => {
      const focusModeEnabled = FocusModeUtils.useFocusModeEnabled();
      const intl = util.intl;
      const string = intl.string;
      if (focusModeEnabled) {
        let stringResult = string(util.t.cIRG0s);
      } else {
        stringResult = string(_modDef2819["T/zMdV"]);
      }
      return stringResult;
    };
obj3.parent = MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN;
obj3.usePredicate = function usePredicate() {
  return notifications_NotificationSettingsUtils.useIsDeclarativeSettingsUIAvailable(
    "RedesignInAppNotificationsSetting",
  );
};
const toggle1 = SettingBuilders.createToggle(obj3);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InAppNotificationsSetting.tsx");

export default toggle;
export const RedesignInAppNotificationsSetting = toggle1;
