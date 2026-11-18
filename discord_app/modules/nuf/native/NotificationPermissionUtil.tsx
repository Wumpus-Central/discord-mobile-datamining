// === Module 13209: NotificationPermissionUtil ===

// Module 13209 (NotificationPermissionUtil)
import initialize from "initialize" /* 504 */;
import NativePermissionManagerModuleDefault from "NativePermissionManagerModule" /* 7713 */;
import PushNotificationActionCreators from "PushNotificationActionCreators" /* 13210 */;
import RegionalTeenUtils from "RegionalTeenUtils" /* 13217 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13207 */;

require = fn;
let closure_13 = async function _requestAndroidNotificationPermission() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj4 = { value, done: true };
      return obj4;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp5;
          let token2;
          closure_128_1 = undefined;
          token2 = token.getToken();
          c3 = 1;
          const _Number = Number;
          if (Number(Version.Version) >= 33) {
            c4 = 2;
            c5 = 1;
            const obj7 = { value: NativePermissionManagerModuleDefault.getNotificationAuthorizationStatus(), done: false };
            return obj7;
          } else {
            c3 = 0;
          }
        }
      } else if (1 === tmp8) {
        c3 = 0;
        closure_128_2 = closure_2;
        closure_129_1(closure_129_2[11]).captureException(closure_128_2);
        if (closure_129_8.getToken() === token2) {
          c5 = 3;
          const obj8 = { value: closure_129_1(closure_129_2[9]).requestNotificationAuthorization(), done: true };
          return obj8;
        } else {
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
        const obj2 = closure_129_1(closure_129_2[11]);
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        closure_128_1 = value;
        if (closure_129_8.getToken() === token2) {
          if (closure_128_1 !== closure_129_12.AUTHORIZED) {
            closure_129_1(closure_129_2[10]).track(closure_129_11.NUO_TRANSITION, { flow_type: "Mobile NUX Post Reg", from_step: null, to_step: "enable-notification" });
            const obj9 = closure_129_1(closure_129_2[10]);
          }
        }
      }
      c3 = 0;
      c5 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp30) {
      closure_2 = tmp30;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp30;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_14 = async function _requestPushNotificationPermission(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
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
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_0 = action_type;
          closure_131_1 = action_location;
          closure_131_2 = dependencyMap;
          closure_131_3 = undefined;
          c5 = 1;
          c6 = 1;
          const obj7 = { value: require("NativePermissionManagerModule").getNotificationAuthorizationStatus(), done: false };
          return obj7;
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            closure_131_3 = value;
            if (closure_131_3 === closure_132_12.DENIED) {
              closure_132_1(closure_132_2[12])();
              const obj10 = { action_type: closure_132_10.TO_SETTINGS, action_location: closure_131_1 };
              closure_132_1(closure_132_2[10]).track(closure_132_11.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj10);
              closure_131_2();
              const obj5 = closure_132_1(closure_132_2[10]);
            } else if (closure_131_3 === closure_132_12.AUTHORIZED) {
              const result = closure_132_0(closure_132_2[13]).updateNotificationAuthorizationStatus(closure_131_3);
              closure_131_2();
              const obj4 = closure_132_0(closure_132_2[13]);
            } else {
              c5 = 2;
              c6 = 1;
              const obj11 = {
                value: closure_132_1(closure_132_2[14]).requestPermission((permission_granted) => {
                              action_location(1256).track(constants.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, { action_type, action_location, permission_granted });
                              dependencyMap();
                            }),
                done: false
              };
              return obj11;
            }
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c6 = 3;
      }
    } catch (tmp36) {
      c6 = tmp;
      throw tmp36;
    }
  }
};
let closure_15 = async function _enableProvisionalPushNotification() {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_1 = tmp4;
          closure_0 = tmp4;
          c2 = 1;
          c3 = 1;
          const obj5 = { value: NativePermissionManagerModuleDefault.getNotificationAuthorizationStatus(), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        let obj = { value, done: true };
        return obj;
      } else {
        if (value === closure_129_12.UNDETERMINED) {
          const DCDProvisionalNotificationUtils = closure_129_6.DCDProvisionalNotificationUtils;
          let result = DCDProvisionalNotificationUtils.registerProvisionalNotification((arg0) => {
            let str = "denied";
            if (arg0) {
              str = "accepted";
            }
            closure_1_1(dependencyMap[10]).track(constants.PERMISSIONS_ACKED, { type: "provisional_notification", action: str });
            let obj = closure_1_1(dependencyMap[10]);
            const notificationAuthorizationStatus = closure_1_1(dependencyMap[9]).getNotificationAuthorizationStatus();
            notificationAuthorizationStatus.then((result) => {
              if (null != result) {
                result = closure_1_0(dependencyMap[13]).updateNotificationAuthorizationStatus(result);
                const obj = closure_1_0(dependencyMap[13]);
              }
            });
            const tmpResult = closure_1_1(dependencyMap[9]);
          });
        }
        c3 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp13) {
      c3 = tmp;
      throw tmp13;
    }
  }
};
get_ActivityIndicator = fn(17);
({ NativeModules: closure_6, Platform: metroImportDefault } = get_ActivityIndicator);
const EventActionType = fn(13208).EventActionType;
const AnalyticEvents = fn(1072).AnalyticEvents;
let closure_12 = fn(6404).NotificationAuthorizationStatus;
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf/native/NotificationPermissionUtil.tsx");

export function requestAndroidNotificationPermission() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function requestPushNotificationPermission() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function useShowReactivationPrompt() {
  [tmp2, require] = noop.useState(false);
  const effect = noop.useEffect(() => {
    closure_0 = async function _shouldShowReactivationPrompts() {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              c1 = 1;
              c2 = 1;
              const obj5 = { value: NativePermissionManagerModuleDefault.getNotificationAuthorizationStatus(), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (value !== constants.AUTHORIZED) {
              tmp4(true);
            }
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp12) {
          c2 = tmp;
          throw tmp12;
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
}
export function enableProvisionalPushNotification() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function useCanSeePushNotificationNudge() {
  const isTeenInStrictCountry = RegionalTeenUtils.useIsTeenInStrictCountry();
  items = [PushNotificationPermissionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => state.authorizationStatus);
  [tmp4, require] = noop.useState(false);
  const effect = noop.useEffect(() => {
    const notificationAuthorizationStatus = NativePermissionManagerModuleDefault.getNotificationAuthorizationStatus();
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
    const items1 = [, , ];
    ({ DENIED: arr2[0], PROVISIONAL: arr2[1], UNDETERMINED: arr2[2] } = closure_12);
    hasItem = items1.includes(stateFromStores);
  }
  return hasItem;
}
export function useShouldShowPushNotificationNudgeByPromptType(CHANNEL_BANNER) {
  const isTeenInStrictCountry = RegionalTeenUtils.useIsTeenInStrictCountry();
  items = [PushNotificationPermissionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => state.authorizationStatus);
  [tmp7, require] = noop.useState(false);
  const effect = noop.useEffect(() => {
    const notificationAuthorizationStatus = NativePermissionManagerModuleDefault.getNotificationAuthorizationStatus();
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
    const items1 = [, , ];
    ({ DENIED: arr2[0], PROVISIONAL: arr2[1], UNDETERMINED: arr2[2] } = closure_12);
    hasItem = items1.includes(stateFromStores);
  }
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  const items2 = [PushNotificationPermissionStore];
  const stateFromStores1 = initialize.useStateFromStores(items2, () => state.getState().eligiblePromptTypes);
  if (hasItem) {
    hasItem = stateFromStores1.has(CHANNEL_BANNER);
  }
  return hasItem;
}