// === Module 15756: AndroidNotificationSettingsStore ===

// Module 15756 (AndroidNotificationSettingsStore)
import _mod4379 from "module_4379" /* 4379 */;
import PushNotificationDefault from "PushNotification" /* 9557 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = globalThis.__r;

require = fn;
let closure_5 = async function _initializeAndroidNotificationSettingsStore() {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
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
          const obj4 = { value, done: true };
          return obj4;
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
            const obj5 = { value: PushNotificationDefault.getLightsEnabled(), done: false };
            return obj5;
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
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_128_0 = value;
            c3 = 3;
            c4 = 1;
            const obj8 = { value: closure_129_1(closure_129_2[3]).getVibrationsEnabled(), done: false };
            return obj8;
          }
        } else if (3 === tmp7) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            c4 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            closure_128_1 = value;
            c3 = 4;
            c4 = 1;
            const obj11 = { value: closure_129_1(closure_129_2[3]).getSoundsEnabled(), done: false };
            return obj11;
          }
        } else if (4 === tmp7) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            c4 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            closure_128_2 = value;
            c3 = 5;
            c4 = 1;
            const obj14 = { value: closure_129_1(closure_129_2[3]).shouldAndroidNotifyEveryTime(), done: false };
            return obj14;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_128_3 = value;
          closure_129_0(closure_129_2[4]).batchUpdates(() => {
            state.setState({ isLightsEnabled, isVibrationsEnabled, isSoundsEnabled, isNotifyEveryTime });
          });
          c2 = 0;
          const obj = closure_129_0(closure_129_2[4]);
        }
        c2 = 0;
        c4 = 3;
        const obj15 = { value, done: true };
        return obj15;
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
const identity = fn(1243);
let closure_4 = identity.createWithEqualityFn(() => ({ isLightsEnabled: "call", isVibrationsEnabled: "delete", isSoundsEnabled: "i", isNotifyEveryTime: "Array" }));
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
  return closure_4((isLightsEnabled) => isLightsEnabled.isLightsEnabled, _mod4379.shallow);
};
export const setAndroidNotificationLightsEnabled = function setAndroidNotificationLightsEnabled(isLightsEnabled) {
  _require = isLightsEnabled;
  require("ReactBatchUpdates").batchUpdates(() => state.setState({ isLightsEnabled }));
  const obj = require("ReactBatchUpdates");
  PushNotificationDefault.setLightsEnabled(isLightsEnabled);
};
export const useAndroidNotificationVibrationsEnabled = function useAndroidNotificationVibrationsEnabled() {
  return closure_4((isVibrationsEnabled) => isVibrationsEnabled.isVibrationsEnabled, _mod4379.shallow);
};
export const setAndroidNotificationVibrationsEnabled = function setAndroidNotificationVibrationsEnabled(isVibrationsEnabled) {
  _require = isVibrationsEnabled;
  require("ReactBatchUpdates").batchUpdates(() => state.setState({ isVibrationsEnabled }));
  const obj = require("ReactBatchUpdates");
  PushNotificationDefault.setVibrationsEnabled(isVibrationsEnabled);
};
export const useAndroidNotificationSoundsEnabled = function useAndroidNotificationSoundsEnabled() {
  return closure_4((isSoundsEnabled) => isSoundsEnabled.isSoundsEnabled, _mod4379.shallow);
};
export const setAndroidNotificationSoundsEnabled = function setAndroidNotificationSoundsEnabled(isSoundsEnabled) {
  _require = isSoundsEnabled;
  require("ReactBatchUpdates").batchUpdates(() => state.setState({ isSoundsEnabled }));
  const obj = require("ReactBatchUpdates");
  PushNotificationDefault.setSoundsEnabled(isSoundsEnabled);
};
export const useAndroidMessageNotificationsEnabled = function useAndroidMessageNotificationsEnabled() {
  return closure_4((isNotifyEveryTime) => isNotifyEveryTime.isNotifyEveryTime, _mod4379.shallow);
};
export const setAndroidMessageNotificationsEnabled = function setAndroidMessageNotificationsEnabled(isNotifyEveryTime) {
  _require = isNotifyEveryTime;
  require("ReactBatchUpdates").batchUpdates(() => state.setState({ isNotifyEveryTime }));
  const obj = require("ReactBatchUpdates");
  const result = PushNotificationDefault.setAndroidNotifyEveryTime(isNotifyEveryTime);
};