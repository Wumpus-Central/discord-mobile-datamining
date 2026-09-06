// === Module 13679: settings/NotifSettingsUtils ===

// Module 13679 (settings/NotifSettingsUtils)
import user_settings_UserSettingsUtils from "user_settings/UserSettingsUtils" /* 1223 */;
import notification_settings from "notification_settings" /* 13681 */;
import NotifSettingsProtoStore from "NotifSettingsProtoStore" /* 13680 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/NotifSettingsUtils.tsx");

export const b64ToDeclarativeSettingsProto = function b64ToDeclarativeSettingsProto(declarative_settings_proto) {
  return user_settings_UserSettingsUtils.b64ToProto(notification_settings.DeclarativeSettings, declarative_settings_proto);
};
export const useNotifSettingValue = function useNotifSettingValue(arg0) {
  _require = arg0;
  const items = [NotifSettingsProtoStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => NotifSettingsProtoStore.getSetting(closure_0), items1);
};
export const useNotifSettingToggleValue = function useNotifSettingToggleValue(GAMING_DEFAULT) {
  _require = GAMING_DEFAULT;
  const items = [NotifSettingsProtoStore];
  const items1 = [GAMING_DEFAULT];
  const stateFromStores = require("initialize").useStateFromStores(items, () => NotifSettingsProtoStore.getSetting(closure_0), items1);
  let flag;
  if (stateFromStores != null) {
    flag = stateFromStores.toggle;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
};
export const useNotifSettingRadioValue = function useNotifSettingRadioValue(arg0) {
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
};