// === Module 13506: settings/NotifSettingsUtils ===

// Module 13506 (settings/NotifSettingsUtils)
import user_settings_UserSettingsUtils from "user_settings/UserSettingsUtils" /* 1233 */;
import notification_settings from "notification_settings" /* 13508 */;
import NotifSettingsProtoStore from "NotifSettingsProtoStore" /* 13507 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [NotifSettingsProtoStore];
    cResult[0] = items;
    first = items;
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
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6, tmp7);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [NotifSettingsProtoStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => NotifSettingsProtoStore.getSetting(closure_0), items1);
});
let closure_3 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const tmp = closure_3(arg0);
  let flag;
  if (tmp != null) {
    flag = tmp.toggle;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}) : ((arg0) => {
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
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const tmp = closure_3(arg0);
  let num;
  if (tmp != null) {
    num = tmp.radio;
  }
  if (num == null) {
    num = 0;
  }
  return num;
}) : ((arg0) => {
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
const result = size.fileFinishedImporting("modules/notifications/settings/NotifSettingsUtils.tsx");

export const b64ToDeclarativeSettingsProto = function b64ToDeclarativeSettingsProto(declarative_settings_proto) {
  const obj = user_settings_UserSettingsUtils;
  return obj.b64ToProto(notification_settings.DeclarativeSettings, declarative_settings_proto);
};
export const useNotifSettingValue = tmp2;
export const useNotifSettingToggleValue = tmp3;
export const useNotifSettingRadioValue = tmp4;