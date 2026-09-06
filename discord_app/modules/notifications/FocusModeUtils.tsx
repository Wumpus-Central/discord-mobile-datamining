// === Module 10090: FocusModeUtils ===

// Module 10090 (FocusModeUtils)
import wrappers from "wrappers" /* 1218 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import UserSettings from "UserSettings" /* 1935 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5279 */;

require = fn;
const constants = fn(4212).NotificationSettingsUpdateType;
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, StatusTypes: metroRequire } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/FocusModeUtils.tsx");

export const useFocusModeEnabled = function useFocusModeEnabled() {
  const FocusMode = UserSettings.FocusMode;
  let setting = FocusMode.useSetting();
  const FocusModeExpiresAtSetting = UserSettings.FocusModeExpiresAtSetting;
  const setting1 = FocusModeExpiresAtSetting.useSetting();
  if (setting) {
    let tmp3 = "0" === setting1;
    if (!tmp3) {
      const _Date = Date;
      const _Number = Number;
      const date = new Date(Number(setting1));
      const _Date2 = Date;
      const time = date.getTime();
      const date1 = new Date();
      tmp3 = time - date1.getTime() > 0;
    }
    setting = tmp3;
  }
  return setting;
};
export const getFocusModeEnabled = function getFocusModeEnabled() {
  const FocusMode = UserSettings.FocusMode;
  let setting = FocusMode.getSetting();
  const FocusModeExpiresAtSetting = UserSettings.FocusModeExpiresAtSetting;
  const setting1 = FocusModeExpiresAtSetting.getSetting();
  if (setting) {
    setting = null != setting1;
  }
  if (setting) {
    const _Date = Date;
    const _Number = Number;
    const date = new Date(Number(setting1));
    const _Date2 = Date;
    const time = date.getTime();
    const date1 = new Date();
    setting = time - date1.getTime() > 0;
  }
  return setting;
};
export const setFocusMode = function setFocusMode(quiet_mode_enabled, arg1) {
  _require = quiet_mode_enabled;
  importDefault = arg1;
  const FocusMode = require("UserSettings").FocusMode;
  const setting = FocusMode.getSetting();
  const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("notifications", async (arg0) => {
    const BoolValue = wrappers.BoolValue;
    arg0.quietMode = BoolValue.create({ value });
    let str = "0";
    if (value) {
      str = "0";
      if (null != closure_1) {
        const _Date = Date;
        const _HermesInternal = HermesInternal;
        str = "" + Date.now() + tmp;
      }
    }
    arg0.focusModeExpiresAtMs = str;
  }, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
  let obj = { update_type: constants.ACCOUNT, quiet_mode_enabled, quiet_mode_enabled_old: setting };
  obj.track(constants2.NOTIFICATION_SETTINGS_UPDATED, obj);
  let tmp7 = SelfPresenceStore.getStatus() === constants3.DND && quiet_mode_enabled;
  if (tmp7) {
    tmp7 = null == arg1;
  }
  if (tmp7) {
    obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null };
    const intl = tmp(1114).intl;
    obj.title = intl.string(tmp(1114).t["B+cbLS"]);
    const intl2 = tmp(1114).intl;
    obj.body = intl2.string(tmp(1114).t.CYVgLI);
    const intl3 = tmp(1114).intl;
    obj.cancelText = intl3.string(tmp(1114).t.f3Pet9);
    const intl4 = tmp(1114).intl;
    obj.confirmText = intl4.string(tmp(1114).t.BddRzS);
    obj.onConfirm = function onConfirm() {
      closure_1(dependencyMap[9])({ nextStatus: constants.ONLINE });
    };
    AlertActionCreatorsDefault.show(obj);
    const tmp5Result = AlertActionCreatorsDefault;
  }
};