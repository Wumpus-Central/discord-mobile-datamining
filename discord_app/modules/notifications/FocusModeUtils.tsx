// === Module 12473: FocusModeUtils ===

// Module 12473 (FocusModeUtils)
import react from "react" /* 576 */;
import wrappers from "wrappers" /* 1228 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import UserSettings from "UserSettings" /* 2028 */;
import NotificationConstants from "NotificationConstants" /* 4522 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5707 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5438 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let hasOwnProperty;
let metroRequire;
const constants = NotificationConstants.NotificationSettingsUpdateType;
({ AnalyticEvents: hasOwnProperty, StatusTypes: metroRequire } = Constants);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function() {
  const obj = react;
  const cResult = obj.c(3);
  const FocusMode = UserSettings.FocusMode;
  const setting = FocusMode.useSetting();
  const FocusModeExpiresAtSetting = UserSettings.FocusModeExpiresAtSetting;
  const setting1 = FocusModeExpiresAtSetting.useSetting();
  if (cResult[0] === setting) {
    let tmp4;
    if (cResult[1] === setting1) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  let tmp5 = setting;
  if (tmp5) {
    let tmp6 = "0" === setting1;
    if (!tmp6) {
      const _Date = Date;
      const _Number = Number;
      const self = this;
      const self2 = this;
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      const date = new Date(Number(setting1));
      const time = date.getTime();
      const date1 = new Date();
      tmp6 = time - date1.getTime() > 0;
    }
    tmp5 = tmp6;
  }
  cResult[0] = setting;
  cResult[1] = setting1;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : (function() {
  const FocusMode = UserSettings.FocusMode;
  let setting = FocusMode.useSetting();
  const FocusModeExpiresAtSetting = UserSettings.FocusModeExpiresAtSetting;
  const setting1 = FocusModeExpiresAtSetting.useSetting();
  if (setting) {
    let tmp3 = "0" === setting1;
    if (!tmp3) {
      const _Date = Date;
      const _Number = Number;
      const self = this;
      const self2 = this;
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      const date = new Date(Number(setting1));
      const time = date.getTime();
      const date1 = new Date();
      tmp3 = time - date1.getTime() > 0;
    }
    setting = tmp3;
  }
  return setting;
});
const result = size.fileFinishedImporting("modules/notifications/FocusModeUtils.tsx");

export const useFocusModeEnabled = tmp3;
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
    const self = this;
    const self2 = this;
    const _Date2 = Date;
    const self3 = this;
    const self4 = this;
    const date = new Date(Number(setting1));
    const time = date.getTime();
    const date1 = new Date();
    setting = time - date1.getTime() > 0;
  }
  return setting;
};
export const setFocusMode = function setFocusMode(quiet_mode_enabled, arg1) {
  let closure_1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let value;
  _require = quiet_mode_enabled;
  importDefault = arg1;
  const tmp = _require;
  const FocusMode = require("UserSettings").FocusMode;
  const setting = FocusMode.getSetting();
  const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("notifications", async (arg0) => {
    const BoolValue = wrappers.BoolValue;
    const obj = { value };
    arg0.quietMode = BoolValue.create(obj);
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
  let obj = AnalyticsUtilsDefault;
  const obj2 = { update_type: constants.ACCOUNT, quiet_mode_enabled, quiet_mode_enabled_old: setting };
  obj.track(constants2.NOTIFICATION_SETTINGS_UPDATED, obj2);
  let tmp7 = SelfPresenceStore.getStatus() === constants3.DND && quiet_mode_enabled;
  if (tmp7) {
    tmp7 = null == arg1;
  }
  if (tmp7) {
    const obj3 = {
      title: intl.string(tmp(1126).t["B+cbLS"]),
      body: intl2.string(tmp(1126).t.CYVgLI),
      cancelText: intl3.string(tmp(1126).t.f3Pet9),
      confirmText: intl4.string(tmp(1126).t.BddRzS),
      onConfirm() {
          const obj = { nextStatus: constants.ONLINE };
          closure_1(dependencyMap[11])(obj);
        }
    };
    const show = tmp5(5707).show;
    AlertActionCreatorsDefault;
    intl = tmp(1126).intl;
    intl2 = tmp(1126).intl;
    intl3 = tmp(1126).intl;
    intl4 = tmp(1126).intl;
    show(obj3);
  }
};