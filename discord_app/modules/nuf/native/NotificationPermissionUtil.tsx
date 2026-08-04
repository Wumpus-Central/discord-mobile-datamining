// discord_app/modules/nuf/native/NotificationPermissionUtil.tsx
import _slicedToArray from "_slicedToArray";
import EventActionType from "EventActionType";
import noop from "noop";
import { NativeModules } from "get ActivityIndicator";
import set from "set";
import { EventActionType } from "EventActionType";
import { AnalyticEvents } from "ME";
import { NotificationAuthorizationStatus as closure_10 } from "NativePermissionStatus";

const require = arg1;
function _requestPushNotificationPermission() {
  const self = this;
  const tmp = callback2((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (obj === 2) {
        obj = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          obj = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              obj = 3;
              throw arg1;
            } else if (arg0 === 2) {
              obj = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let EventActionType = tmp5;
              let _slicedToArray = tmp2;
              _slicedToArray = undefined;
              const NativePermissionManager = obj.NativePermissionManager;
              c5 = 1;
              obj = 1;
              let obj1 = { value: null, done: false };
              obj1[0] = NativePermissionManager.getNotificationAuthorizationStatus();
              return obj1;
            }
          } else if (arg0 === 1) {
            obj = 3;
            throw arg1;
          } else if (arg0 === 2) {
            obj = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            _slicedToArray = arg1;
            if (_slicedToArray === constants3.DENIED) {
              callback2(10710)();
              obj2 = callback2(698);
              const obj3 = { action_type: null, action_location: null };
              obj3[0] = constants.TO_SETTINGS;
              obj3[1] = callback2;
              obj2.track(constants2.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj3);
              dependencyMap();
              obj = 3;
            } else if (_slicedToArray !== constants3.AUTHORIZED) {
              obj = callback2(11526);
              const permission = obj.requestPermission((permission_granted) => {
                let obj = callback(698);
                obj = { action_type: closure_0, action_location: callback, permission_granted };
                obj.track(outer1_9.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj);
                dependencyMap();
              });
            }
            obj1 = callback(11520);
            const result = obj1.updateNotificationAuthorizationStatus(_slicedToArray);
            dependencyMap();
          }
        } catch (tmp36) {
          obj = tmp;
          throw tmp36;
        }
      }
    })();
  });
  const _requestPushNotificationPermission = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _enableProvisionalPushNotification() {
  const self = this;
  const tmp = callback2(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
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
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp4;
            let closure_0 = tmp4;
            let NativePermissionManager = outer1_6.NativePermissionManager;
            c2 = 1;
            c3 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = NativePermissionManager.getNotificationAuthorizationStatus();
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          if (arg1 === constants.UNDETERMINED) {
            const DCDProvisionalNotificationUtils = obj.DCDProvisionalNotificationUtils;
            let result = DCDProvisionalNotificationUtils.registerProvisionalNotification((arg0) => {
              let obj = tmp4(table[9]);
              let str = "denied";
              if (arg0) {
                str = "accepted";
              }
              obj.track(constants.PERMISSIONS_ACKED, { type: "provisional_notification", action: str });
              const NativePermissionManager = obj.NativePermissionManager;
              const notificationAuthorizationStatus = NativePermissionManager.getNotificationAuthorizationStatus();
              notificationAuthorizationStatus.then((closure_0) => {
                if (null != closure_0) {
                  const result = callback(table[10]).updateNotificationAuthorizationStatus(closure_0);
                  const obj = callback(table[10]);
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
  });
  const _enableProvisionalPushNotification = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("noop").fileFinishedImporting("modules/nuf/native/NotificationPermissionUtil.tsx");

export const requestPushNotificationPermission = function requestPushNotificationPermission(ALLOW_TO_REQUEST, ALERT, callback) {
  const self = this;
  const apply = _requestPushNotificationPermission.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const useShowReactivationPrompt = function useShowReactivationPrompt() {
  let require;
  let tmp2;
  [tmp2, require] = callback(React.useState(false), 2);
  const effect = React.useEffect(() => {
    function _shouldShowReactivationPrompts() {
      const self = this;
      const tmp = outer2_4(function*() {
        if (c2 === 2) {
          c2 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp3 === 3) {
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
            c2 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c2 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c2 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_0 = tmp4;
                const NativePermissionManager = outer2_6.NativePermissionManager;
                c1 = 1;
                c2 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = NativePermissionManager.getNotificationAuthorizationStatus();
                return obj1;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              if (arg1 !== outer2_10.AUTHORIZED) {
                outer1_0(true);
              }
              c2 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp11) {
            c2 = tmp;
            throw tmp11;
          }
        }
      });
      const _shouldShowReactivationPrompts = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    !(function shouldShowReactivationPrompts() {
      const self = this;
      const apply = _shouldShowReactivationPrompts.apply;
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
  const apply = _enableProvisionalPushNotification.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const useCanSeePushNotificationNudge = function useCanSeePushNotificationNudge() {
  let require;
  let tmp4;
  const isTeenInStrictCountry = require(11527) /* set */.useIsTeenInStrictCountry();
  const obj = require(11527) /* set */;
  const items = [set];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => state.authorizationStatus);
  const obj2 = require(589) /* initialize */;
  [tmp4, require] = callback(React.useState(false), 2);
  const effect = React.useEffect(() => {
    const NativePermissionManager = outer1_6.NativePermissionManager;
    const notificationAuthorizationStatus = NativePermissionManager.getNotificationAuthorizationStatus();
    notificationAuthorizationStatus.then((closure_0) => {
      if (null != closure_0) {
        const result = outer1_0(outer1_2[10]).updateNotificationAuthorizationStatus(closure_0);
        const obj = outer1_0(outer1_2[10]);
      }
      callback(true);
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
};
export const useShouldShowPushNotificationNudgeByPromptType = function useShouldShowPushNotificationNudgeByPromptType(CHANNEL_BANNER) {
  let require;
  let tmp7;
  const isTeenInStrictCountry = require(11527) /* set */.useIsTeenInStrictCountry();
  let obj = require(11527) /* set */;
  const tmp = require;
  const items = [set];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => state.authorizationStatus);
  const obj2 = require(589) /* initialize */;
  const tmp4 = set;
  [tmp7, require] = callback(React.useState(false), 2);
  const effect = React.useEffect(() => {
    const NativePermissionManager = outer1_6.NativePermissionManager;
    const notificationAuthorizationStatus = NativePermissionManager.getNotificationAuthorizationStatus();
    notificationAuthorizationStatus.then((closure_0) => {
      if (null != closure_0) {
        const result = outer1_0(outer1_2[10]).updateNotificationAuthorizationStatus(closure_0);
        const obj = outer1_0(outer1_2[10]);
      }
      callback(true);
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
  const tmp6 = callback(React.useState(false), 2);
  const items2 = [tmp4];
  const stateFromStores1 = tmp(589).useStateFromStores(items2, () => state.getState().eligiblePromptTypes);
  if (hasItem) {
    hasItem = stateFromStores1.has(CHANNEL_BANNER);
  }
  return hasItem;
};