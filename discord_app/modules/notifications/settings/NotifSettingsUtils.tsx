// === Module 15527: settings/NotifSettingsUtils ===

// Module 15527 (settings/NotifSettingsUtils)
import user_settings_UserSettingsUtils from "user_settings/UserSettingsUtils" /* 1234 */;
import notification_settings from "notification_settings" /* 15529 */;
import NotifSettingsProtoStore from "NotifSettingsProtoStore" /* 15528 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/NotifSettingsUtils.tsx");

export function b64ToDeclarativeSettingsProto(declarative_settings_proto) {
  return user_settings_UserSettingsUtils.b64ToProto(notification_settings.DeclarativeSettings, declarative_settings_proto);
}
export function useNotifSettingValue(arg0) {
  _require = arg0;
  const items = [NotifSettingsProtoStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => NotifSettingsProtoStore.getSetting(closure_0), items1);
}
export function useNotifSettingToggleValue(CALLS) {
  _require = CALLS;
  const items = [NotifSettingsProtoStore];
  const items1 = [CALLS];
  const stateFromStores = require("initialize").useStateFromStores(items, () => NotifSettingsProtoStore.getSetting(closure_0), items1);
  let flag;
  if (stateFromStores != null) {
    flag = stateFromStores.toggle;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}
export function useNotifSettingRadioValue(arg0) {
  _require = arg0;
  const items = [NotifSettingsProtoStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => NotifSettingsProtoStore.getSetting(closure_0), items1);
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.radio;
  }
  if (num == null) {
    num = 0;
  }
  return num;
}