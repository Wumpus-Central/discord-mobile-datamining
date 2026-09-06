// discord_app/modules/nuf/native/NotificationPermissionUtil.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import PushNotificationActionCreators from "../../../actions/native/PushNotificationActionCreators.tsx";
import RegionalTeenUtils from "../../regional_feature_config/RegionalTeenUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import PushNotificationPermissionStore from "../../../stores/native/PushNotificationPermissionStore.tsx";

require = fn;
let closure_11 = async function _requestPushNotificationPermission(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_0 = action_type;
          closure_131_1 = action_location;
          closure_131_2 = dependencyMap;
          closure_131_3 = undefined;
          const NativePermissionManager = NativeModules.NativePermissionManager;
          c5 = 1;
          c6 = 1;
          let obj1 = { value: NativePermissionManager.getNotificationAuthorizationStatus(), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        let obj2 = { value, done: true };
        return obj2;
      } else {
        closure_131_3 = value;
        if (closure_131_3 === closure_132_10.DENIED) {
          closure_132_1(closure_132_2[8])();
          obj2 = closure_132_1(closure_132_2[9]);
          const obj3 = { action_type: closure_132_8.TO_SETTINGS, action_location: closure_131_1 };
          obj2.track(closure_132_9.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj3);
          closure_131_2();
          c6 = 3;
        } else if (closure_131_3 !== closure_132_10.AUTHORIZED) {
          obj = closure_132_1(closure_132_2[11]);
          const permission = obj.requestPermission((permission_granted) => {
            action_location(1242);
            const obj = { action_type, action_location, permission_granted };
            obj.track(constants.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj);
            dependencyMap();
          });
        }
        obj1 = closure_132_0(closure_132_2[10]);
        const result = obj1.updateNotificationAuthorizationStatus(closure_131_3);
        closure_131_2();
      }
    } catch (tmp36) {
      c6 = tmp;
      throw tmp36;
    }
  }
};
let closure_12 = async function _enableProvisionalPushNotification() {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp4;
          closure_0 = tmp4;
          let NativePermissionManager = NativeModules.NativePermissionManager;
          c2 = 1;
          c3 = 1;
          const obj1 = { value: NativePermissionManager.getNotificationAuthorizationStatus(), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        if (value === closure_129_10.UNDETERMINED) {
          const DCDProvisionalNotificationUtils = closure_129_6.DCDProvisionalNotificationUtils;
          let result = DCDProvisionalNotificationUtils.registerProvisionalNotification((arg0) => {
            let str = "denied";
            if (arg0) {
              str = "accepted";
            }
            closure_1_1(closure_1_2[9]).track(constants.PERMISSIONS_ACKED, {
              type: "provisional_notification",
              action: str,
            });
            const NativePermissionManager = closure_1_6.NativePermissionManager;
            const notificationAuthorizationStatus = NativePermissionManager.getNotificationAuthorizationStatus();
            notificationAuthorizationStatus.then((result) => {
              if (null != result) {
                result = closure_1_0(dependencyMap[10]).updateNotificationAuthorizationStatus(result);
                const obj = closure_1_0(dependencyMap[10]);
              }
            });
          });
        }
        c3 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp12) {
      c3 = tmp;
      throw tmp12;
    }
  }
};
const NativeModules = fn(17).NativeModules;
const EventActionType = fn(12410).EventActionType;
const AnalyticEvents = fn(1074).AnalyticEvents;
let closure_10 = fn(4770).NotificationAuthorizationStatus;
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf/native/NotificationPermissionUtil.tsx");

export const requestPushNotificationPermission = function requestPushNotificationPermission() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const useShowReactivationPrompt = function useShowReactivationPrompt() {
  [tmp2, require] = _slicedToArray(noop.useState(false), 2);
  const effect = noop.useEffect(() => {
    closure_0 = async function _shouldShowReactivationPrompts() {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const NativePermissionManager = NativeModules.NativePermissionManager;
              c1 = 1;
              c2 = 1;
              const obj1 = { value: NativePermissionManager.getNotificationAuthorizationStatus(), done: false };
              return obj1;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            if (value !== constants.AUTHORIZED) {
              tmp4(true);
            }
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp11) {
          c2 = tmp;
          throw tmp11;
        }
      }
    };
    !(function shouldShowReactivationPrompts() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  }, []);
  return tmp2;
};
export const enableProvisionalPushNotification = function enableProvisionalPushNotification() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const useCanSeePushNotificationNudge = function useCanSeePushNotificationNudge() {
  const isTeenInStrictCountry = RegionalTeenUtils.useIsTeenInStrictCountry();
  const items = [PushNotificationPermissionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => state.authorizationStatus);
  [tmp4, require] = _slicedToArray(noop.useState(false), 2);
  const effect = noop.useEffect(() => {
    const NativePermissionManager = NativeModules.NativePermissionManager;
    const notificationAuthorizationStatus = NativePermissionManager.getNotificationAuthorizationStatus();
    notificationAuthorizationStatus.then((result) => {
      if (null != result) {
        result = PushNotificationActionCreators.updateNotificationAuthorizationStatus(result);
      }
      closure_1_0(true);
    });
  }, []);
  if (hasItem) {
    hasItem = !isTeenInStrictCountry;
  }
  if (hasItem) {
    hasItem = null != stateFromStores;
  }
  if (hasItem) {
    const items1 = [, ,];
    ({ DENIED: arr2[0], PROVISIONAL: arr2[1], UNDETERMINED: arr2[2] } = closure_10);
    hasItem = items1.includes(stateFromStores);
  }
  return hasItem;
};
export const useShouldShowPushNotificationNudgeByPromptType = function useShouldShowPushNotificationNudgeByPromptType(
  CHANNEL_BANNER,
) {
  const isTeenInStrictCountry = RegionalTeenUtils.useIsTeenInStrictCountry();
  const items = [PushNotificationPermissionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => state.authorizationStatus);
  [tmp7, require] = _slicedToArray(noop.useState(false), 2);
  const effect = noop.useEffect(() => {
    const NativePermissionManager = NativeModules.NativePermissionManager;
    const notificationAuthorizationStatus = NativePermissionManager.getNotificationAuthorizationStatus();
    notificationAuthorizationStatus.then((result) => {
      if (null != result) {
        result = PushNotificationActionCreators.updateNotificationAuthorizationStatus(result);
      }
      closure_1_0(true);
    });
  }, []);
  if (hasItem) {
    hasItem = !isTeenInStrictCountry;
  }
  if (hasItem) {
    hasItem = null != stateFromStores;
  }
  if (hasItem) {
    const items1 = [, ,];
    ({ DENIED: arr2[0], PROVISIONAL: arr2[1], UNDETERMINED: arr2[2] } = closure_10);
    hasItem = items1.includes(stateFromStores);
  }
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  const items2 = [PushNotificationPermissionStore];
  const stateFromStores1 = initialize.useStateFromStores(items2, () => state.getState().eligiblePromptTypes);
  if (hasItem) {
    hasItem = stateFromStores1.has(CHANNEL_BANNER);
  }
  return hasItem;
};
