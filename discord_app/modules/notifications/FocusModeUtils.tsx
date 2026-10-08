// === Module 12584: FocusModeUtils ===

// Module 12584 (FocusModeUtils)
import c from "c" /* 576 */;
import wrappers from "wrappers" /* 1240 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import UserSettings from "UserSettings" /* 2040 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5755 */;

const require = globalThis.__r;

const AlertActionCreatorsDefault = tmp5(5297);
require = fn;
const constants = fn(4720).NotificationSettingsUpdateType;
const Constants = fn(1085);
({ AnalyticEvents: hasOwnProperty, StatusTypes: metroRequire } = Constants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/FocusModeUtils.tsx");

export const useFocusModeEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useFocusModeEnabled() {
  const cResult = c.c(3);
  const FocusMode = UserSettings.FocusMode;
  const setting = FocusMode.useSetting();
  const FocusModeExpiresAtSetting = UserSettings.FocusModeExpiresAtSetting;
  const setting1 = FocusModeExpiresAtSetting.useSetting();
  if (cResult[0] === setting) {
    if (cResult[1] === setting1) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  let tmp5 = setting;
  if (setting) {
    let tmp6 = "0" === setting1;
    if (!tmp6) {
      const _Date = Date;
      const _Number = Number;
      const date = new Date(Number(setting1));
      const _Date2 = Date;
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
}) : (function useFocusModeEnabled() {
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
});
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
  AnalyticsUtilsDefault.track(constants2.NOTIFICATION_SETTINGS_UPDATED, { update_type: constants.ACCOUNT, quiet_mode_enabled, quiet_mode_enabled_old: setting });
  let tmp7 = SelfPresenceStore.getStatus() === constants3.DND && quiet_mode_enabled;
  if (tmp7) {
    tmp7 = null == arg1;
  }
  if (tmp7) {
    const obj3 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null };
    const intl = tmp(1126).intl;
    obj3.title = intl.string(tmp(1126).t["B+cbLS"]);
    const intl2 = tmp(1126).intl;
    obj3.body = intl2.string(tmp(1126).t.CYVgLI);
    const intl3 = tmp(1126).intl;
    obj3.cancelText = intl3.string(tmp(1126).t.f3Pet9);
    const intl4 = tmp(1126).intl;
    obj3.confirmText = intl4.string(tmp(1126).t.BddRzS);
    obj3.onConfirm = function onConfirm() {
      closure_1(dependencyMap[11])({ nextStatus: constants.ONLINE });
    };
    AlertActionCreatorsDefault.show(obj3);
    const tmp5Result = AlertActionCreatorsDefault;
  }
  const obj2 = { update_type: constants.ACCOUNT, quiet_mode_enabled, quiet_mode_enabled_old: setting };
};