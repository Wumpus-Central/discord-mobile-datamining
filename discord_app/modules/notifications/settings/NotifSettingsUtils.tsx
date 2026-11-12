// === Module 16041: settings/NotifSettingsUtils ===

// Module 16041 (settings/NotifSettingsUtils)
import user_settings_UserSettingsUtils from "user_settings/UserSettingsUtils" /* 1233 */;
import notification_settings from "notification_settings" /* 16043 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import NotifSettingsProtoStore from "NotifSettingsProtoStore" /* 16042 */;

const require = globalThis.__r;

require = fn;
let c5 = "no-radio-selection";
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/NotifSettingsUtils.tsx");

export const NO_RADIO_SELECTION = "no-radio-selection";
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
        value = undefined;
        if (iter != null) {
          value = iter.value;
        }
        if (typeof value === "boolean") {
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
        value = undefined;
        if (iter != null) {
          value = iter.value;
        }
        if (typeof value === "boolean") {
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
export function getNotifSettingRadioValue(arg0, arg1) {
  if (arg1) {
    if (NotifSettingsProtoStore.hasValidEffectiveSettings) {
      const setting = NotifSettingsProtoStore.getSetting(arg0);
      if (null != setting) {
        return setting.radio;
      } else {
        const iter = NotifSettingsProtoStore.getEffectiveSetting(arg0);
        value = undefined;
        if (iter != null) {
          value = iter.value;
        }
        let value2;
        if (typeof value === "number") {
          value2 = iter.value;
        }
        return value2;
      }
    }
  } else {
    const setting1 = NotifSettingsProtoStore.getSetting(arg0);
    let num;
    if (setting1 != null) {
      num = setting1.radio;
    }
    if (num == null) {
      num = 0;
    }
    return num;
  }
}
export function useNotifSettingRadioValue(REACTIONS_CHOICE) {
  _require = REACTIONS_CHOICE;
  isDeclarativeNotificationSettingsRedesignEnabled = require("DeclarativeNotificationSettingsRedesignExperiment").useIsDeclarativeNotificationSettingsRedesignEnabled("useNotifSettingRadioValue");
  const obj = require("DeclarativeNotificationSettingsRedesignExperiment");
  items = [NotifSettingsProtoStore, AuthenticationStore, UserSettingsProtoStore];
  const items1 = [REACTIONS_CHOICE, isDeclarativeNotificationSettingsRedesignEnabled];
  return require("initialize").useStateFromStores(items, () => {
    if (isDeclarativeNotificationSettingsRedesignEnabled) {
      if (NotifSettingsProtoStore.hasValidEffectiveSettings) {
        const setting = NotifSettingsProtoStore.getSetting(closure_0);
        if (null != setting) {
          let num = setting.radio;
        } else {
          const iter = NotifSettingsProtoStore.getEffectiveSetting(closure_0);
          value = undefined;
          if (iter != null) {
            value = iter.value;
          }
          let value2;
          if (typeof value === "number") {
            value2 = iter.value;
          }
          num = value2;
        }
      }
    } else {
      const setting1 = NotifSettingsProtoStore.getSetting(closure_0);
      num = undefined;
      if (setting1 != null) {
        num = setting1.radio;
      }
      if (num == null) {
        num = 0;
      }
    }
    if (num == null) {
      num = c5;
    }
    return num;
  }, items1);
}