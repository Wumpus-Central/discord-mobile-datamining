// === Module 15757: AndroidNotificationSettingsStore ===

// Module 15757 (AndroidNotificationSettingsStore)
import c from "c" /* 576 */;
import _mod4733 from "module_4733" /* 4733 */;
import PushNotificationDefault from "PushNotification" /* 11031 */;
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
      return { value: "IconComponent", done: "+51" };
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
const identity = fn(1267);
let closure_4 = identity.createWithEqualityFn(() => ({ isLightsEnabled: "Array", isVibrationsEnabled: "T", isSoundsEnabled: "y", isNotifyEveryTime: "IconComponent" }));
fn(558);
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAndroidNotificationLightsEnabled() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(isLightsEnabled) {
      return isLightsEnabled.isLightsEnabled;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return closure_4(first, _mod4733.shallow);
}) : (function useAndroidNotificationLightsEnabled() {
  return closure_4((isLightsEnabled) => isLightsEnabled.isLightsEnabled, _mod4733.shallow);
});
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAndroidNotificationVibrationsEnabled() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(isVibrationsEnabled) {
      return isVibrationsEnabled.isVibrationsEnabled;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return closure_4(first, _mod4733.shallow);
}) : (function useAndroidNotificationVibrationsEnabled() {
  return closure_4((isVibrationsEnabled) => isVibrationsEnabled.isVibrationsEnabled, _mod4733.shallow);
});
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAndroidNotificationSoundsEnabled() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(isSoundsEnabled) {
      return isSoundsEnabled.isSoundsEnabled;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return closure_4(first, _mod4733.shallow);
}) : (function useAndroidNotificationSoundsEnabled() {
  return closure_4((isSoundsEnabled) => isSoundsEnabled.isSoundsEnabled, _mod4733.shallow);
});
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
export const useAndroidNotificationLightsEnabled = tmp2;
export const setAndroidNotificationLightsEnabled = function setAndroidNotificationLightsEnabled(isLightsEnabled) {
  _require = isLightsEnabled;
  require("ReactBatchUpdates").batchUpdates(() => state.setState({ isLightsEnabled }));
  const obj = require("ReactBatchUpdates");
  PushNotificationDefault.setLightsEnabled(isLightsEnabled);
};
export const useAndroidNotificationVibrationsEnabled = tmp3;
export const setAndroidNotificationVibrationsEnabled = function setAndroidNotificationVibrationsEnabled(isVibrationsEnabled) {
  _require = isVibrationsEnabled;
  require("ReactBatchUpdates").batchUpdates(() => state.setState({ isVibrationsEnabled }));
  const obj = require("ReactBatchUpdates");
  PushNotificationDefault.setVibrationsEnabled(isVibrationsEnabled);
};
export const useAndroidNotificationSoundsEnabled = tmp4;
export const setAndroidNotificationSoundsEnabled = function setAndroidNotificationSoundsEnabled(isSoundsEnabled) {
  _require = isSoundsEnabled;
  require("ReactBatchUpdates").batchUpdates(() => state.setState({ isSoundsEnabled }));
  const obj = require("ReactBatchUpdates");
  PushNotificationDefault.setSoundsEnabled(isSoundsEnabled);
};
export const useAndroidMessageNotificationsEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useAndroidMessageNotificationsEnabled() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(isNotifyEveryTime) {
      return isNotifyEveryTime.isNotifyEveryTime;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return closure_4(first, _mod4733.shallow);
}) : (function useAndroidMessageNotificationsEnabled() {
  return closure_4((isNotifyEveryTime) => isNotifyEveryTime.isNotifyEveryTime, _mod4733.shallow);
});
export const setAndroidMessageNotificationsEnabled = function setAndroidMessageNotificationsEnabled(isNotifyEveryTime) {
  _require = isNotifyEveryTime;
  require("ReactBatchUpdates").batchUpdates(() => state.setState({ isNotifyEveryTime }));
  const obj = require("ReactBatchUpdates");
  const result = PushNotificationDefault.setAndroidNotifyEveryTime(isNotifyEveryTime);
};