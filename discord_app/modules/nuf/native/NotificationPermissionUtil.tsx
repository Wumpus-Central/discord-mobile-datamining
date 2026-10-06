// === Module 12069: NotificationPermissionUtil ===

// Module 12069 (NotificationPermissionUtil)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5105 */;
import react_nativeDefault from "react-native" /* 7295 */;
import NotificationPermissionConstants from "NotificationPermissionConstants" /* 12068 */;
import RegionalTeenUtils from "RegionalTeenUtils" /* 12076 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12067 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c1, c2, c3, closure_3, closure_4;

let obj = function _requestPushNotificationPermission() {
  obj = _asyncToGenerator(async (arg0, action_location, arg2) => {
    let closure_0 = arg0;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let action_type;
      let obj6;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_4 = tmp4;
              closure_3 = undefined;
              c5 = 1;
              c6 = 1;
              const obj7 = { value: obj6.getNotificationAuthorizationStatus(), done: false };
              obj6 = react_nativeDefault;
              return obj7;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            closure_3 = value;
            if (closure_3 === closure_132_10.DENIED) {
              closure_132_1(closure_132_2[9])();
              const obj9 = { action_type: closure_132_8.TO_SETTINGS, action_location };
              const obj3 = closure_132_1(closure_132_2[10]);
              obj3.track(closure_132_9.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj9);
              closure_2();
            } else if (closure_3 === closure_132_10.AUTHORIZED) {
              let obj2 = closure_132_0(closure_132_2[11]);
              const result = obj2.updateNotificationAuthorizationStatus(closure_3);
              closure_2();
            } else {
              obj = closure_132_1(closure_132_2[12]);
              const permission = obj.requestPermission((permission_granted) => {
                obj = action_location(closure_2[10]);
                const obj2 = { action_type, action_location, permission_granted };
                obj.track(constants.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj2);
                closure_1_2();
              });
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp36) {
          c6 = 3;
          throw tmp36;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _enableProvisionalPushNotification() {
  obj = _asyncToGenerator(async () => {
    let obj2;
    if (c3 === 2) {
      c3 = 3;
      let str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c3 = 2;
        const tmp3 = c2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp3;
            let closure_0 = tmp3;
            c2 = 1;
            c3 = 1;
            const obj5 = { value: obj2.getNotificationAuthorizationStatus(), done: false };
            obj2 = react_nativeDefault;
            return obj5;
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
              const track = closure_1_1(closure_1_2[10]).track;
              const PERMISSIONS_ACKED = constants.PERMISSIONS_ACKED;
              closure_1_1(closure_1_2[10]);
              if (arg0) {
                str = "accepted";
              }
              track(PERMISSIONS_ACKED, { type: "provisional_notification", action: str });
              const tmpResult = closure_1_1(closure_1_2[8]);
              const notificationAuthorizationStatus = tmpResult.getNotificationAuthorizationStatus();
              notificationAuthorizationStatus.then((result) => {
                if (null != result) {
                  obj = closure_1_0(closure_1_2[11]);
                  result = obj.updateNotificationAuthorizationStatus(result);
                }
              });
            });
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp12) {
        c3 = 3;
        throw tmp12;
      }
    }
  });
  return obj(...arguments);
};
const NativeModules = react_native.NativeModules;
const EventActionType = NotificationPermissionConstants.EventActionType;
const AnalyticEvents = Constants.AnalyticEvents;
let closure_10 = NativePermissionConstants.NotificationAuthorizationStatus;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp4;
  let tmp5;
  obj = require("react");
  const cResult = obj.c(2);
  [first, _require] = react.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      function shouldShowReactivationPrompts() {
        return closure_0(...arguments);
      }
      closure_0 = _asyncToGenerator(async () => {
        let obj2;
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: null };
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
                const obj4 = { value, done: true };
                return obj4;
              } else {
                c1 = 1;
                c2 = 1;
                const obj5 = { value: obj2.getNotificationAuthorizationStatus(), done: false };
                obj2 = react_nativeDefault;
                return obj5;
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
                tmp3(true);
              }
              c2 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp11) {
            c2 = 3;
            throw tmp11;
          }
        }
      });
      shouldShowReactivationPrompts();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp4 = fn;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const effect = react.useEffect(tmp4, tmp5);
  return first;
}) : (() => {
  let require;
  let tmp2;
  [tmp2, require] = _slicedToArray(react.useState(false), 2);
  const tmp = _slicedToArray(react.useState(false), 2);
  const effect = react.useEffect(() => {
    function shouldShowReactivationPrompts() {
      return obj(...arguments);
    }
    obj = function _shouldShowReactivationPrompts2() {
      obj = _asyncToGenerator(async () => {
        let closure_0;
        let obj2;
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: null };
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
                const obj4 = { value, done: true };
                return obj4;
              } else {
                c1 = 1;
                c2 = 1;
                const obj5 = { value: obj2.getNotificationAuthorizationStatus(), done: false };
                obj2 = closure_2_1(closure_2_2[8]);
                return obj5;
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
                tmp3(true);
              }
              c2 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp11) {
            c2 = 3;
            throw tmp11;
          }
        }
      });
      return obj(...arguments);
    };
    !shouldShowReactivationPrompts();
  }, []);
  return tmp2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanSeePushNotificationNudge() {
  let authorizationStatus;
  let require;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp5;
  let tmp6;
  obj = react2;
  const cResult = obj.c(8);
  const obj2 = RegionalTeenUtils;
  const isTeenInStrictCountry = obj2.useIsTeenInStrictCountry();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PushNotificationPermissionStore];
    const fn = function u() {
      return authorizationStatus.authorizationStatus;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  [tmp10, require] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function h() {
      obj = react_nativeDefault;
      const notificationAuthorizationStatus = obj.getNotificationAuthorizationStatus();
      notificationAuthorizationStatus.then((result) => {
        if (null != result) {
          obj = require("PushNotificationActionCreators");
          result = obj.updateNotificationAuthorizationStatus(result);
        }
        closure_1_0(true);
      });
    };
    const items1 = [];
    cResult[2] = fn2;
    cResult[3] = items1;
    tmp12 = items1;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
  }
  const effect = react.useEffect(tmp11, tmp12);
  if (cResult[4] === stateFromStores) {
    if (cResult[5] === tmp10) {
      let tmp14;
      if (cResult[6] === isTeenInStrictCountry) {
        tmp14 = cResult[7];
      }
      return tmp14;
    }
  }
  let hasItem = tmp10 && !isTeenInStrictCountry && null != stateFromStores;
  if (hasItem) {
    const items2 = [, , ];
    ({ DENIED: arr3[0], PROVISIONAL: arr3[1], UNDETERMINED: arr3[2] } = closure_10);
    hasItem = items2.includes(stateFromStores);
  }
  cResult[4] = stateFromStores;
  cResult[5] = tmp10;
  cResult[6] = isTeenInStrictCountry;
  cResult[7] = hasItem;
  tmp14 = hasItem;
}) : (function useCanSeePushNotificationNudge() {
  let authorizationStatus;
  let hasItem;
  let require;
  let tmp4;
  obj = RegionalTeenUtils;
  const isTeenInStrictCountry = obj.useIsTeenInStrictCountry();
  const items = [PushNotificationPermissionStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => authorizationStatus.authorizationStatus);
  [tmp4, require] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const effect = react.useEffect(() => {
    obj = react_nativeDefault;
    const notificationAuthorizationStatus = obj.getNotificationAuthorizationStatus();
    notificationAuthorizationStatus.then((result) => {
      if (null != result) {
        obj = require("PushNotificationActionCreators");
        result = obj.updateNotificationAuthorizationStatus(result);
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
    const items1 = [, , ];
    ({ DENIED: arr2[0], PROVISIONAL: arr2[1], UNDETERMINED: arr2[2] } = closure_10);
    hasItem = items1.includes(stateFromStores);
  }
  return hasItem;
});
let closure_13 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldShowPushNotificationNudgeByPromptType(arg0) {
  let state;
  let tmp5;
  let tmp6;
  obj = react2;
  const cResult = obj.c(6);
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PushNotificationPermissionStore];
    const fn = function n() {
      return state.getState().eligiblePromptTypes;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === tmp4) {
      let tmp8;
      if (cResult[4] === arg0) {
        tmp8 = cResult[5];
      }
      return tmp8;
    }
  }
  const tmp9 = tmp4 && stateFromStores.has(arg0);
  cResult[2] = stateFromStores;
  cResult[3] = tmp4;
  cResult[4] = arg0;
  cResult[5] = tmp9;
  tmp8 = tmp9;
}) : (function useShouldShowPushNotificationNudgeByPromptType(arg0) {
  let state;
  let hasItem = closure_13();
  const items = [PushNotificationPermissionStore];
  obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => state.getState().eligiblePromptTypes);
  if (hasItem) {
    hasItem = stateFromStores.has(arg0);
  }
  return hasItem;
});
let result = size.fileFinishedImporting("modules/nuf/native/NotificationPermissionUtil.tsx");

export const requestPushNotificationPermission = function requestPushNotificationPermission() {
  return obj(...arguments);
};
export const useShowReactivationPrompt = tmp2;
export const enableProvisionalPushNotification = function enableProvisionalPushNotification() {
  return obj(...arguments);
};
export const useCanSeePushNotificationNudge = tmp3;
export const useShouldShowPushNotificationNudgeByPromptType = tmp4;