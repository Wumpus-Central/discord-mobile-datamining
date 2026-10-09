// === Module 13897: settings/NotifSettingsUtils ===

// Module 13897 (settings/NotifSettingsUtils)
import user_settings_UserSettingsUtils from "user_settings/UserSettingsUtils" /* 1246 */;
import notification_settings from "notification_settings" /* 13899 */;
import NotifSettingsProtoStore from "NotifSettingsProtoStore" /* 13898 */;

require = fn;
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useNotifSettingValue(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [NotifSettingsProtoStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return NotifSettingsProtoStore.getSetting(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : (function useNotifSettingValue(arg0) {
  _require = arg0;
  const items = [NotifSettingsProtoStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => NotifSettingsProtoStore.getSetting(closure_0), items1);
});
let closure_3 = tmp2;
fn(558);
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useNotifSettingToggleValue(arg0) {
  const tmp = closure_3(arg0);
  let flag;
  if (tmp != null) {
    flag = tmp.toggle;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}) : (function useNotifSettingToggleValue(arg0) {
  const tmp = closure_3(arg0);
  let flag;
  if (tmp != null) {
    flag = tmp.toggle;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/NotifSettingsUtils.tsx");

export const b64ToDeclarativeSettingsProto = function b64ToDeclarativeSettingsProto(declarative_settings_proto) {
  return user_settings_UserSettingsUtils.b64ToProto(notification_settings.DeclarativeSettings, declarative_settings_proto);
};
export const useNotifSettingValue = tmp2;
export const useNotifSettingToggleValue = tmp3;
export const useNotifSettingRadioValue = ReactCompilerGating.isReactCompilerEnabled() ? (function useNotifSettingRadioValue(arg0) {
  const tmp = closure_3(arg0);
  let num;
  if (tmp != null) {
    num = tmp.radio;
  }
  if (num == null) {
    num = 0;
  }
  return num;
}) : (function useNotifSettingRadioValue(arg0) {
  const tmp = closure_3(arg0);
  let num;
  if (tmp != null) {
    num = tmp.radio;
  }
  if (num == null) {
    num = 0;
  }
  return num;
});