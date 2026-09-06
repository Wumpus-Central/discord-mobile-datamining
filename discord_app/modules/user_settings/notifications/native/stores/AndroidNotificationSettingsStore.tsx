// === Module 15480: AndroidNotificationSettingsStore ===

// Module 15480 (AndroidNotificationSettingsStore)
import _mod4184 from "module_4184" /* 4184 */;
import PushNotificationDefault from "PushNotification" /* 9687 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_5 = async function _initializeAndroidNotificationSettingsStore(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const isVibrationsEnabled = tmp3;
          const isLightsEnabled = tmp7;
          closure_128_0 = undefined;
          closure_128_1 = undefined;
          closure_128_2 = undefined;
          closure_128_3 = undefined;
          if (obj16.isAndroid()) {
            c2 = 1;
            c3 = 2;
            c4 = 1;
            const obj1 = { value: PushNotificationDefault.getLightsEnabled(), done: false };
            return obj1;
          }
          obj16 = require("PlatformUtils");
        }
      } else {
        if (1 === tmp7) {
          c2 = 0;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            c4 = 3;
            let obj2 = { value, done: true };
            return obj2;
          } else {
            closure_128_0 = value;
            let obj8 = closure_129_1(closure_129_2[3]);
            c3 = 3;
            c4 = 1;
            const obj3 = { value: obj8.getVibrationsEnabled(), done: false };
            return obj3;
          }
        } else if (3 === tmp7) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_128_1 = value;
            let obj5 = closure_129_1(closure_129_2[3]);
            c3 = 4;
            c4 = 1;
            obj5 = { value: null, done: false };
            obj5.value = obj5.getSoundsEnabled();
            return obj5;
          }
        } else if (4 === tmp7) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_128_2 = value;
            obj2 = closure_129_1(closure_129_2[3]);
            c3 = 5;
            c4 = 1;
            const obj7 = { value: obj2.shouldAndroidNotifyEveryTime(), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_128_3 = value;
          obj = closure_129_0(closure_129_2[4]);
          obj.batchUpdates(() => {
            state.setState({ isLightsEnabled, isVibrationsEnabled, isSoundsEnabled, isNotifyEveryTime });
          });
          c2 = 0;
        }
        c2 = 0;
        c4 = 3;
        obj8 = { value, done: true };
        return obj8;
      }
      c4 = 3;
    } catch (tmp27) {
      if (tmp4 === c2) {
        c4 = tmp2;
        throw tmp27;
      } else {
        c3 = tmp;
      }
    }
  }
};
const identity = fn(1244);
let closure_4 = identity.createWithEqualityFn(() => ({ isLightsEnabled: "Array", isVibrationsEnabled: "flexDirection", isSoundsEnabled: "y", isNotifyEveryTime: "HermesInternal" }));
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/notifications/native/stores/AndroidNotificationSettingsStore.tsx");

export const initializeAndroidNotificationSettingsStore = function initializeAndroidNotificationSettingsStore() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const useAndroidNotificationLightsEnabled = function useAndroidNotificationLightsEnabled() {
  return closure_4((isLightsEnabled) => isLightsEnabled.isLightsEnabled, _mod4184.shallow);
};
export const setAndroidNotificationLightsEnabled = function setAndroidNotificationLightsEnabled(isLightsEnabled) {
  _require = isLightsEnabled;
  require("ReactBatchUpdates").batchUpdates(() => state.setState({ isLightsEnabled }));
  const obj = require("ReactBatchUpdates");
  PushNotificationDefault.setLightsEnabled(isLightsEnabled);
};
export const useAndroidNotificationVibrationsEnabled = function useAndroidNotificationVibrationsEnabled() {
  return closure_4((isVibrationsEnabled) => isVibrationsEnabled.isVibrationsEnabled, _mod4184.shallow);
};
export const setAndroidNotificationVibrationsEnabled = function setAndroidNotificationVibrationsEnabled(isVibrationsEnabled) {
  _require = isVibrationsEnabled;
  require("ReactBatchUpdates").batchUpdates(() => state.setState({ isVibrationsEnabled }));
  const obj = require("ReactBatchUpdates");
  PushNotificationDefault.setVibrationsEnabled(isVibrationsEnabled);
};
export const useAndroidNotificationSoundsEnabled = function useAndroidNotificationSoundsEnabled() {
  return closure_4((isSoundsEnabled) => isSoundsEnabled.isSoundsEnabled, _mod4184.shallow);
};
export const setAndroidNotificationSoundsEnabled = function setAndroidNotificationSoundsEnabled(isSoundsEnabled) {
  _require = isSoundsEnabled;
  require("ReactBatchUpdates").batchUpdates(() => state.setState({ isSoundsEnabled }));
  const obj = require("ReactBatchUpdates");
  PushNotificationDefault.setSoundsEnabled(isSoundsEnabled);
};
export const useAndroidMessageNotificationsEnabled = function useAndroidMessageNotificationsEnabled() {
  return closure_4((isNotifyEveryTime) => isNotifyEveryTime.isNotifyEveryTime, _mod4184.shallow);
};
export const setAndroidMessageNotificationsEnabled = function setAndroidMessageNotificationsEnabled(isNotifyEveryTime) {
  _require = isNotifyEveryTime;
  require("ReactBatchUpdates").batchUpdates(() => state.setState({ isNotifyEveryTime }));
  const obj = require("ReactBatchUpdates");
  const result = PushNotificationDefault.setAndroidNotifyEveryTime(isNotifyEveryTime);
};