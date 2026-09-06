// === Module 10090: useFocusModeEnabled ===

// Module 10090 (useFocusModeEnabled)
import expandEventPropertiesDefault from "expandEventProperties" /* 1242 */;
import explicitContentFromProto from "explicitContentFromProto" /* 1935 */;
import setDefault from "set" /* 4904 */;
import closure_3 from "filterPlayingActivities" /* 5279 */;
import { NotificationSettingsUpdateType as closure_4 } from "AccountNotificationFlags" /* 4212 */;
import ME from "ME" /* 1074 */;

require = arg1;
({ AnalyticEvents: c5, StatusTypes: closure_6 } = ME);
const result = require("set").fileFinishedImporting("modules/notifications/FocusModeUtils.tsx");

export const useFocusModeEnabled = function useFocusModeEnabled() {
  const FocusMode = explicitContentFromProto.FocusMode;
  let setting = FocusMode.useSetting();
  const FocusModeExpiresAtSetting = explicitContentFromProto.FocusModeExpiresAtSetting;
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
  const FocusMode = explicitContentFromProto.FocusMode;
  let setting = FocusMode.getSetting();
  const FocusModeExpiresAtSetting = explicitContentFromProto.FocusModeExpiresAtSetting;
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
  const _require = quiet_mode_enabled;
  importDefault = arg1;
  const FocusMode = _require(1935).FocusMode;
  const setting = FocusMode.getSetting();
  const PreloadedUserSettingsActionCreators = _require(1940).PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("notifications", (arg0) => {
    const BoolValue = quiet_mode_enabled(closure_1_2[5]).BoolValue;
    arg0.quietMode = BoolValue.create({ value: quiet_mode_enabled });
    let str = "0";
    if (quiet_mode_enabled) {
      str = "0";
      if (null != closure_1) {
        const _Date = Date;
        const _HermesInternal = HermesInternal;
        str = "" + Date.now() + tmp;
      }
    }
    arg0.focusModeExpiresAtMs = str;
  }, _require(1940).UserSettingsDelay.INFREQUENT_USER_ACTION);
  let obj = expandEventPropertiesDefault;
  obj = { update_type: constants.ACCOUNT, quiet_mode_enabled, quiet_mode_enabled_old: setting };
  obj.track(constants2.NOTIFICATION_SETTINGS_UPDATED, obj);
  let tmp7 = status.getStatus() === constants3.DND && quiet_mode_enabled;
  if (tmp7) {
    tmp7 = null == arg1;
  }
  if (tmp7) {
    obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null };
    const intl = tmp(1114).intl;
    obj[0] = intl.string(tmp(1114).t["B+cbLS"]);
    const intl2 = tmp(1114).intl;
    obj[1] = intl2.string(tmp(1114).t.CYVgLI);
    const intl3 = tmp(1114).intl;
    obj[2] = intl3.string(tmp(1114).t.f3Pet9);
    const intl4 = tmp(1114).intl;
    obj[3] = intl4.string(tmp(1114).t.BddRzS);
    obj[4] = function onConfirm() {
      callback(table[9])({ nextStatus: constants.ONLINE });
    };
    setDefault.show(obj);
    const tmp5Result = setDefault;
  }
};