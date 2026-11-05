// === Module 15813: settings/NotifSettingsUtils ===

// Module 15813 (settings/NotifSettingsUtils)
import user_settings_UserSettingsUtils from "user_settings/UserSettingsUtils" /* 1233 */;
import notification_settings from "notification_settings" /* 15815 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import NotifSettingsProtoStore from "NotifSettingsProtoStore" /* 15814 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/NotifSettingsUtils.tsx");

export function b64ToDeclarativeSettingsProto(declarative_settings_proto) {
  return user_settings_UserSettingsUtils.b64ToProto(notification_settings.DeclarativeSettings, declarative_settings_proto);
}
export function useNotifSettingValue(arg0) {
  _require = arg0;
  items = [NotifSettingsProtoStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => NotifSettingsProtoStore.getSetting(closure_0), items1);
}
export function getNotifSettingToggleValue(arg0, result) {
  if (result) {
    if (NotifSettingsProtoStore.hasValidEffectiveSettings) {
      const optimisticSetting = NotifSettingsProtoStore.getOptimisticSetting(arg0);
      if (null != optimisticSetting) {
        return optimisticSetting.toggle;
      } else {
        const iter = NotifSettingsProtoStore.getEffectiveSetting(arg0);
        if (null != iter) {
          return iter.value;
        }
      }
    }
  }
  const setting = NotifSettingsProtoStore.getSetting(arg0);
  let flag;
  if (setting != null) {
    flag = setting.toggle;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}
export function useNotifSettingToggleValue(CALLS) {
  _require = CALLS;
  isDeclarativeNotificationSettingsRedesignEnabled = require("DeclarativeNotificationSettingsRedesignExperiment").useIsDeclarativeNotificationSettingsRedesignEnabled("useNotifSettingToggleValue");
  const obj = require("DeclarativeNotificationSettingsRedesignExperiment");
  items = [NotifSettingsProtoStore, AuthenticationStore, UserSettingsProtoStore];
  const items1 = [CALLS, isDeclarativeNotificationSettingsRedesignEnabled];
  return require("initialize").useStateFromStores(items, () => {
    if (!isDeclarativeNotificationSettingsRedesignEnabled) {
      const setting = NotifSettingsProtoStore.getSetting(closure_0);
      let flag2;
      if (setting != null) {
        flag2 = setting.toggle;
      }
      if (flag2 == null) {
        flag2 = true;
      }
      let flag = flag2;
    } else if (NotifSettingsProtoStore.hasValidEffectiveSettings) {
      const optimisticSetting = NotifSettingsProtoStore.getOptimisticSetting(closure_0);
      if (null != optimisticSetting) {
        flag = optimisticSetting.toggle;
      } else {
        const iter = NotifSettingsProtoStore.getEffectiveSetting(closure_0);
        if (null != iter) {
          flag = iter.value;
        }
      }
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }, items1);
}
export function useNotifSettingRadioValue(arg0) {
  _require = arg0;
  items = [NotifSettingsProtoStore];
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