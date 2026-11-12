// === Module 18496: EffectiveNotifSettingsActionCreators ===

// Module 18496 (EffectiveNotifSettingsActionCreators)
import BackoffDefault from "Backoff" /* 559 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import DeclarativeNotificationSettingsRedesignExperiment from "DeclarativeNotificationSettingsRedesignExperiment" /* 16056 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import NotifSettingsProtoStore from "NotifSettingsProtoStore" /* 16042 */;

require = fn;
function scheduleRetry() {
  if (closure_8.fails < 5) {
    closure_8.fail(() => {
      closure_1_8.cancel();
      fetchEffectiveNotifSettings();
    });
  }
}
function fetchEffectiveNotifSettings() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_12 = async function _fetchEffectiveNotifSettings() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_1 = tmp4;
          closure_0 = tmp8;
          closure_128_0 = undefined;
          closure_128_1 = undefined;
          let body;
          closure_128_3 = undefined;
          if (obj14.isDeclarativeNotificationSettingsRedesignEnabled("fetchEffectiveNotifSettings")) {
            id = id.getId();
            closure_128_0 = id;
            if (null != id) {
              if (!NotifSettingsProtoStore.isApplyingEdit) {
                if (!React5.pending) {
                  if (React5.fails < 5) {
                    sum = sum + 1;
                    closure_128_1 = sum;
                    const obj6 = { type: "EFFECTIVE_NOTIFICATION_SETTINGS_FETCH_START", requestId: sum };
                    DispatcherDefault.dispatch(obj6);
                    c3 = 2;
                    const HTTP = HTTPUtils.HTTP;
                    const obj8 = { url: null, rejectWithError: true };
                    const _HermesInternal = HermesInternal;
                    obj8.url = "" + constants.ACCOUNT_NOTIFICATION_SETTINGS + "/effective";
                    c4 = 3;
                    c5 = 1;
                    const obj9 = { value: HTTP.get(obj8), done: false };
                    return obj9;
                  }
                }
              }
            }
          }
          c5 = 3;
          obj14 = DeclarativeNotificationSettingsRedesignExperiment;
        }
      } else if (1 !== tmp8) {
        if (2 === tmp8) {
          c3 = 1;
          if (closure_129_6.ownsEffectiveRequest(closure_128_1)) {
            const obj10 = { type: "EFFECTIVE_NOTIFICATION_SETTINGS_FETCH_FAILURE", requestId: closure_128_1 };
            closure_129_1(closure_129_2[6]).dispatch(obj10);
            closure_129_10();
            const obj5 = closure_129_1(closure_129_2[6]);
          } else {
            c3 = 0;
            if (closure_129_3 === closure_128_1) {
              closure_129_3 = undefined;
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          if (closure_129_3 === closure_128_1) {
            closure_129_3 = undefined;
          }
          c5 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          body = value.body;
          if (closure_129_6.ownsEffectiveRequest(closure_128_1)) {
            if (closure_129_5.getId() === closure_128_0) {
              if (obj13.isDeclarativeNotificationSettingsRedesignEnabled("effectiveNotifSettingsResponse")) {
                closure_128_3 = closure_129_0(closure_129_2[8]).parseEffectiveNotifSettings(body);
                if (null != closure_128_3) {
                  if (closure_128_3.account_id === closure_128_0) {
                    const obj12 = { type: "EFFECTIVE_NOTIFICATION_SETTINGS_FETCH_SUCCESS", requestId: closure_128_1, snapshot: closure_128_3 };
                    closure_129_1(closure_129_2[6]).dispatch(obj12);
                    if (closure_129_6.hasValidEffectiveSettings) {
                      closure_129_8.succeed();
                    } else {
                      closure_129_10();
                    }
                    c3 = 1;
                    const obj2 = closure_129_1(closure_129_2[6]);
                  }
                }
                const _Error = Error;
                const error = new Error("Invalid effective notification settings response");
                throw error;
              }
              obj13 = closure_129_0(closure_129_2[5]);
            }
            c3 = 0;
            if (closure_129_3 === closure_128_1) {
              closure_129_3 = undefined;
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            c3 = 0;
            if (closure_129_3 === closure_128_1) {
              closure_129_3 = undefined;
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        }
        c3 = 0;
        if (closure_129_3 === closure_128_1) {
          closure_129_3 = undefined;
        }
      }
      c3 = 0;
      if (closure_129_3 === closure_128_1) {
        closure_129_3 = undefined;
      }
      throw closure_2;
    } catch (tmp88) {
      closure_2 = tmp88;
      if (tmp5 === c3) {
        c5 = tmp3;
        throw tmp88;
      } else if (tmp2 === tmp90) {
        c4 = tmp2;
      } else {
        c4 = tmp;
      }
    }
  }
};
const Endpoints = fn(1072).Endpoints;
let closure_8 = new BackoffDefault(1000, 60000);
let c9 = 0;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/EffectiveNotifSettingsActionCreators.tsx");

export function cancelEffectiveNotifSettingsRetry() {
  closure_8.succeed();
}
export function retryEffectiveNotifSettings() {
  closure_8.succeed();
  return fetchEffectiveNotifSettings();
}
export { fetchEffectiveNotifSettings };