// discord_app/modules/user_settings/notifications/native/stores/AndroidNotificationSettingsStore.tsx
import isIterable from "isIterable";
import identity from "identity";
import { isIterable } from "../../../../../../_runtime/03914_isIterable.js";
import { batchUpdates } from "../../../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import { NativeModules } from "../../../../../lib/pushnotification/PushNotification.tsx";

const require = arg1;
function _initializeAndroidNotificationSettingsStore() {
  const self = this;
  const tmp = callback(function*() {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === isIterable) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let callback2 = tmp3;
            let callback = tmp7;
            callback = undefined;
            callback2 = undefined;
            let dependencyMap;
            isIterable = undefined;
            if (obj16.isAndroid()) {
              dependencyMap = 1;
              isIterable = 2;
              c4 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_1(10773).getLightsEnabled();
              return obj1;
            }
            obj16 = outer1_0(500);
          }
        } else {
          if (1 === tmp7) {
            dependencyMap = 0;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 0;
              c4 = 3;
              let obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              callback = arg1;
              let obj8 = callback2(10773);
              isIterable = 3;
              c4 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = obj8.getVibrationsEnabled();
              return obj3;
            }
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 0;
              c4 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              callback2 = arg1;
              let obj5 = callback2(10773);
              isIterable = 4;
              c4 = 1;
              obj5 = { value: null, done: false };
              obj5[0] = obj5.getSoundsEnabled();
              return obj5;
            }
          } else if (4 === tmp7) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 0;
              c4 = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = arg1;
              return obj6;
            } else {
              dependencyMap = arg1;
              obj2 = callback2(10773);
              isIterable = 5;
              c4 = 1;
              const obj7 = { value: null, done: false };
              obj7[0] = obj2.shouldAndroidNotifyEveryTime();
              return obj7;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            isIterable = arg1;
            obj = callback(705);
            obj.batchUpdates(() => {
              state.setState({ isLightsEnabled: closure_0, isVibrationsEnabled: closure_1, isSoundsEnabled: c2, isNotifyEveryTime: isIterable });
            });
            dependencyMap = 0;
          }
          dependencyMap = 0;
          c4 = 3;
          obj8 = { value: null, done: true };
          obj8[0] = arg1;
          return obj8;
        }
        c4 = 3;
      } catch (tmp27) {
        if (tmp4 === dependencyMap) {
          c4 = tmp2;
          throw tmp27;
        } else {
          isIterable = tmp;
        }
      }
    }
  });
  const _initializeAndroidNotificationSettingsStore = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_4 = identity.createWithEqualityFn(() => ({ isLightsEnabled: "_desired", isVibrationsEnabled: "call", isSoundsEnabled: "paths", isNotifyEveryTime: "call" }));
let result = require("set").fileFinishedImporting("modules/user_settings/notifications/native/stores/AndroidNotificationSettingsStore.tsx");

export const initializeAndroidNotificationSettingsStore = function initializeAndroidNotificationSettingsStore() {
  const self = this;
  const apply = _initializeAndroidNotificationSettingsStore.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const useAndroidNotificationLightsEnabled = function useAndroidNotificationLightsEnabled() {
  return callback2((isLightsEnabled) => isLightsEnabled.isLightsEnabled, isIterable.shallow);
};
export const setAndroidNotificationLightsEnabled = function setAndroidNotificationLightsEnabled(arg0) {
  const _require = arg0;
  _batchUpdates.batchUpdates(() => outer1_4.setState({ isLightsEnabled: closure_0 }));
  const obj = _batchUpdates;
  NativeModules.setLightsEnabled(arg0);
};
export const useAndroidNotificationVibrationsEnabled = function useAndroidNotificationVibrationsEnabled() {
  return callback2((isVibrationsEnabled) => isVibrationsEnabled.isVibrationsEnabled, isIterable.shallow);
};
export const setAndroidNotificationVibrationsEnabled = function setAndroidNotificationVibrationsEnabled(arg0) {
  const _require = arg0;
  _batchUpdates.batchUpdates(() => outer1_4.setState({ isVibrationsEnabled: closure_0 }));
  const obj = _batchUpdates;
  NativeModules.setVibrationsEnabled(arg0);
};
export const useAndroidNotificationSoundsEnabled = function useAndroidNotificationSoundsEnabled() {
  return callback2((isSoundsEnabled) => isSoundsEnabled.isSoundsEnabled, isIterable.shallow);
};
export const setAndroidNotificationSoundsEnabled = function setAndroidNotificationSoundsEnabled(arg0) {
  const _require = arg0;
  _batchUpdates.batchUpdates(() => outer1_4.setState({ isSoundsEnabled: closure_0 }));
  const obj = _batchUpdates;
  NativeModules.setSoundsEnabled(arg0);
};
export const useAndroidMessageNotificationsEnabled = function useAndroidMessageNotificationsEnabled() {
  return callback2((isNotifyEveryTime) => isNotifyEveryTime.isNotifyEveryTime, isIterable.shallow);
};
export const setAndroidMessageNotificationsEnabled = function setAndroidMessageNotificationsEnabled(arg0) {
  const _require = arg0;
  _batchUpdates.batchUpdates(() => outer1_4.setState({ isNotifyEveryTime: closure_0 }));
  const obj = _batchUpdates;
  const result = NativeModules.setAndroidNotifyEveryTime(arg0);
};